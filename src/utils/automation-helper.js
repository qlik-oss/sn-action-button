import { inIframe } from './url-utils';
import { getCurrentProtocol, removeProtocolHttp, encodeUrl } from './url-encoder';

const TRANSITION_TIME = 400;
const POLL_INTERVAL = 2000;
const MAX_POLLS = 300;

const getUser = async () => {
  const response = await fetch(`../api/v1/users/me`);
  const data = await response.json();
  return data;
};

const getCsrfToken = async () => {
  const response = await fetch('../api/v1/csrf-token');
  return response.headers.get('qlik-csrf-token');
};

const getSpaceId = async (appId) => {
  const response = await fetch(`../api/v1/apps/${appId}`);
  const data = await response.json();
  return data?.attributes?.spaceId || 'personal';
};

export const getAutomation = async (automationId) => {
  if (automationId.length > 2) {
    const response = await fetch(`../api/v1/automations/${automationId}`);
    return response.json();
  }
  return null;
};

export const getAutomationRun = async (automationId, runId) => {
  const response = await fetch(`../api/v1/automations/${automationId}/runs/${runId}`);
  return response.json();
};

const getTranslation = (translator, key, defaultValue) => {
  const translation = translator.get(key);
  if (translation === key) {
    return defaultValue;
  }
  return translation;
};

const getDefaultMessage = (translator) =>
  getTranslation(translator, 'Object.ActionButton.Automation.DefaultAutomationMsg', 'Automation finished');

export const parseOutput = (data, translator) => {
  const defaultMessage = { message: getDefaultMessage(translator) };
  if (typeof data !== 'undefined') {
    if (typeof data === 'object') {
      if (Array.isArray(data)) {
        return data?.length > 0 ? { message: data.join(' ') } : defaultMessage;
      }
      if (Object.keys(data).includes('message')) {
        return data;
      }
      return defaultMessage;
    }
    try {
      const message = JSON.parse(data);
      if (Object.keys(message).includes('message')) {
        return message;
      }
      return defaultMessage;
    } catch {
      if (data === '') {
        return defaultMessage;
      }
      if (typeof data === 'string' || typeof data === 'number') {
        return { message: data };
      }
      return defaultMessage;
    }
  }
  return defaultMessage;
};

export const automationRunPolling = async (automationId, runId, translator, polTimes, resolve) => {
  if (polTimes > MAX_POLLS) {
    return { ok: false, message: getTranslation(translator, 'geo.findLocation.error.timeout', 'Timeout') };
  }
  const automationRun = await getAutomationRun(automationId, runId);
  switch (automationRun.status) {
    case 'queued':
    case 'running':
    case 'not started':
    case 'starting':
      return setTimeout(
        () => automationRunPolling(automationId, runId, translator, polTimes + 1, resolve),
        POLL_INTERVAL
      );
    case 'finished': {
      if (automationRun.title?.length > 0) {
        return resolve({ ...parseOutput(automationRun.title, translator), ok: true });
      }
      return resolve({
        message: getDefaultMessage(translator),
        ok: true,
      });
    }
    case 'failed': {
      if (automationRun.title?.length > 0) {
        return resolve({ ...parseOutput(automationRun.title, translator), ok: false });
      }
      return resolve({
        message: getTranslation(translator, 'Object.ActionButton.Automation.AutomationError', 'Automation error'),
        ok: false,
      });
    }
    case 'finished with warnings': {
      if (automationRun.title?.length > 0) {
        return resolve({ ...parseOutput(automationRun.title, translator), ok: false });
      }
      return resolve({
        message: getDefaultMessage(translator),
        ok: true,
      });
    }
    case 'must stop':
    case 'stopped': {
      if (automationRun.title?.length > 0) {
        return resolve({ ...parseOutput(automationRun.title, translator), ok: false });
      }
      return resolve({
        message: getTranslation(translator, 'Object.ActionButton.Automation.DefaultAutomationMsg', 'Unknown error'),
        ok: false,
      });
    }
    default: {
      if (automationRun.title?.length > 0) {
        return resolve({ ...parseOutput(automationRun.title, translator), ok: true });
      }
      return resolve({
        message: getDefaultMessage(translator),
        ok: true,
      });
    }
  }
};

export const pollAutomationAndGetMsg = async (automationId, triggered, response, translator) => {
  let message;
  switch (response.status) {
    case 200:
    case 201: {
      const data = await response.json();
      const { status, guid, id } = data;
      const queued = status === 'queued';
      const runId = typeof id === 'undefined' ? guid : id;
      if (!triggered || queued) {
        const prom = new Promise((resolve) => {
          automationRunPolling(automationId, runId, translator, 0, resolve);
        });
        message = await prom;
      } else {
        message = parseOutput(data, translator);
        message.ok = true;
      }
      break;
    }
    case 400: {
      message = {
        message: getTranslation(translator, 'Object.ActionButton.Automation.BadRequest', 'Bad request'),
        ok: false,
      };
      break;
    }
    case 401:
    case 403: {
      message = {
        message: getTranslation(
          translator,
          'Object.ActionButton.Automation.NotAuthorized',
          'You are not authorized to run this automation'
        ),
        ok: false,
      };
      break;
    }
    case 404: {
      message = {
        message: getTranslation(
          translator,
          'Object.ActionButton.Automation.AutomationNotFound',
          'Automation not found'
        ),
        ok: false,
      };
      break;
    }
    case 500:
    case 503: {
      message = {
        message: getTranslation(translator, 'Object.ActionButton.Automation.AutomationError', 'Automation error'),
        ok: false,
      };
      break;
    }
    default: {
      message = {
        message: getTranslation(translator, 'Object.ActionButton.Automation.UnkownError', 'Unknown error'),
        ok: false,
      };
    }
  }
  return message;
};

const applyStyles = (element, styles) => {
  if (element !== undefined && element !== null) {
    Object.keys(styles).forEach((key) => {
      element.style[key] = styles[key];
    });
  }
};

const removeSnackbar = (element) => {
  applyStyles(element, { opacity: 0 });
  setTimeout(() => {
    element.remove();
  }, 1000);
};

const getTarget = (sameWindow) => {
  if (sameWindow) {
    return inIframe() ? '_parent' : '_self';
  }
  return '_blank';
};

const getUrl = (url) => {
  const protocol = getCurrentProtocol(url);
  const urlRemovedProtocol = removeProtocolHttp(url);
  return `${protocol}${encodeUrl(urlRemovedProtocol)}`;
};

export const createSnackbar = (msg, automationOpenLinkSameWindow, error) => {
  const { message, url, urlText } = msg;
  const snackContainer = document.createElement('div');
  const randomId = (Math.random() + 1).toString(36).substring(7);
  const snackbarId = `sn-action-button-snackbar-${randomId}`;
  snackContainer.setAttribute('id', snackbarId);
  const existingSnackbars = document.querySelectorAll('.sn-action-button-snackbar');
  const bottom = 24 + (existingSnackbars?.length || 0) * 5;
  const snackContainerStyles = {
    width: '400px',
    height: '35px',
    'background-color': '#FFFFFF',
    position: 'fixed',
    left: 'calc(50% - 200px)',
    right: 'auto',
    bottom: `${bottom}px`,
    'box-shadow': '0px 1px 2px 0px rgb(0 0 0 / 15%)',
    padding: '6px 16px',
    'border-radius': '3px',
    'z-index': 1000,
    opacity: 0,
    transition: `visibility 0ms, opacity ${TRANSITION_TIME}ms linear`,
  };
  applyStyles(snackContainer, snackContainerStyles);
  const snackbar = `<div class="sn-action-button-snackbar" style="display: flex; justify-content: space-between; height: 100%; align-items: center;">
  ${
    error
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16px" fill="currentColor" aria-hidden="true" role="img">
        <path d="M6.919.439A1.5 1.5 0 0 1 8.925.336l.114.103 6.48 6.48a1.5 1.5 0 0 1 .102 2.006l-.102.114-6.48 6.48a1.5 1.5 0 0 1-2.006.102l-.114-.102-6.48-6.48a1.5 1.5 0 0 1-.103-2.006l.103-.114 6.48-6.48Zm1.56 10.54h-1c-.267 0-.455.158-.493.404l-.007.096v1c0 .266.158.454.404.492l.096.008h1c.266 0 .454-.158.492-.404l.008-.096v-1c0-.267-.158-.455-.404-.493l-.096-.007Zm0-8h-1c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5Z"></path>
      </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" height="16px" fill="currentColor" aria-hidden="true" role="img" data-testid="status-indicator__valid">
        <defs>
          <path id="tick_svg__tick-a" d="m6 10 7-7 2 2-7 7-2 2-5-5 2-2 3 3Z"></path>
        </defs>
        <use xlink:href="#tick_svg__tick-a" fill-rule="evenodd"></use>
      </svg>`
  }  
    <span class="sn-action-button-snackbar-text" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${message}${
    url
      ? `<a href="${getUrl(url)}" style="margin-left: 6px;" target="${getTarget(automationOpenLinkSameWindow)}">${
          urlText || 'Open'
        }</a>`
      : ''
  }</span>
    <span style="cursor: pointer;">
      <svg class="sn-action-button-snackbar-close" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.34535242,8 L13.3273238,11.9819714 C13.6988326,12.3534802 13.6988326,12.955815 13.3273238,13.3273238 C12.955815,13.6988326 12.3534802,13.6988326 11.9819714,13.3273238 L8,9.34535242 L4.01802863,13.3273238 C3.64651982,13.6988326 3.04418502,13.6988326 2.67267621,13.3273238 C2.3011674,12.955815 2.3011674,12.3534802 2.67267621,11.9819714 L6.65464758,8 L2.67267621,4.01802863 C2.3011674,3.64651982 2.3011674,3.04418502 2.67267621,2.67267621 C3.04418502,2.3011674 3.64651982,2.3011674 4.01802863,2.67267621 L8,6.65464758 L11.9819714,2.67267621 C12.3534802,2.3011674 12.955815,2.3011674 13.3273238,2.67267621 C13.6988326,3.04418502 13.6988326,3.64651982 13.3273238,4.01802863 L9.34535242,8 Z">
        </path>
      </svg>
      </span>
    </div>`;
  snackContainer.innerHTML = snackbar;
  return snackContainer;
};

export const showSnackbar = async (message, duration, automationOpenLinkSameWindow) => {
  const snackContainer = createSnackbar(message, automationOpenLinkSameWindow, !message.ok);
  snackContainer.focus();
  const close = snackContainer.querySelector('.sn-action-button-snackbar-close');
  close.addEventListener('click', () => {
    removeSnackbar(snackContainer);
  });
  const body = document.querySelector('body');
  body.appendChild(snackContainer);
  applyStyles(snackContainer, { opacity: 1 });
  setTimeout(() => {
    removeSnackbar(snackContainer);
  }, Math.max(duration * 1000 - TRANSITION_TIME, 1));
};

// Automation run logic prior to IM_1855_AUTOMATIONS_MULTI_USER
export const oldAutomationRun = async (automation, automationPostData, app) => {
  try {
    automation = encodeURIComponent(automation);
    const itemInfo = await fetch(`../api/v1/items/${automation}`).then((response) => response.json());
    const autoInfo = await fetch(`../api/v1/automations/${itemInfo.resourceId}`).then((response) => response.json());
    let executePath = `../api/v1/automations/${autoInfo.id}/actions/execute?X-Execution-Token=${autoInfo.executionToken}`;
    if (automationPostData) {
      const inputBlocks = await fetch(`../api/v1/automations/${itemInfo.resourceId}/blocks`)
        .then((response) => response.json())
        .then((blocks) => {
          let items = [];
          for (let i = 0; i < blocks.blocks.length; i++) {
            if (blocks.blocks[i].type === 'FormBlock') {
              items = blocks.blocks[i].form;
              break;
            }
          }
          return items;
        });
      if (inputBlocks.length > 0) {
        const newDate = new Date();
        const bmkProp = {
          qProp: {
            qInfo: {
              qId: `automation_${app.id}_${automation}_${newDate.getTime()}`,
              qType: 'bookmark',
            },
            qMetaDef: {
              title: `Generated automation bookmark on ${newDate.toISOString()}`,
              description: 'Generated to provide target automation with bookmark to get current selection state',
              _createdBy: 'sn-action-button',
              _createdFor: 'automation',
              _createdOn: `${newDate.toISOString()}`,
              _id: `automation_${encodeURIComponent(app.id)}_${automation}_${newDate.getTime()}`,
            },
          },
        };
        const bmk = await app
          .createBookmark(bmkProp)
          .then((bookmark) => bookmark.getLayout())
          .then((layout) => layout.qInfo.qId);
        await app.saveObjects();
        executePath = `${executePath}&${inputBlocks[0].label.toLowerCase()}=${encodeURIComponent(
          app.id
        )}&${inputBlocks[1].label.toLowerCase()}=${bmk}`;
      }
    }
    // execute the automation
    await fetch(executePath).then((response) => response.json());
  } catch (e) {
    // no-op
  }
};

export const getAutomationUrl = (automationId, automationTriggered, automationExecutionToken) => {
  if (automationTriggered) {
    return `../api/v1/automations/${automationId}/actions/execute?X-Execution-Token=${automationExecutionToken}`;
  }
  return `../api/v1/automations/${automationId}/runs`;
};

export const getTemporaryBookmark = async (app) => {
  const bookmarkProps = {
    qOptions: {
      qIncludeVariables: true,
      qIncludeAllPatches: true,
    },
  };
  return app.createTemporaryBookmark(bookmarkProps);
};

export const getAutomationData = async ({ app, automationId, bookmark, senseNavigation }) => {
  const user = await getUser();
  const inputs = {
    app: app.id,
    bookmark,
    sheet: senseNavigation?.getCurrentSheetId(),
    user: user.subject,
    space: await getSpaceId(app.id),
    tenant: user.tenantId,
    time: new Date(),
  };
  return {
    id: automationId,
    inputs,
    context: 'qsbutton',
  };
};

export const getPostOptions = async (automationTriggered, automationExecutionToken, automationData) => {
  const headers = {
    'Content-Type': 'application/json',
    'qlik-csrf-token': await getCsrfToken(),
  };
  if (automationTriggered) {
    headers['X-Execution-Token'] = automationExecutionToken;
  }
  return {
    method: 'POST',
    headers,
    body: JSON.stringify(automationTriggered ? automationData.inputs : automationData),
  };
};

export const getInputBlocks = (bookmark) => {
  const inputBlocks = {
    blocks: [
      {
        id: 'EB6A372B-3312-4E90-8E8F-88F2A889B4CF',
        type: 'FormBlock',
        disabled: false,
        name: 'inputs',
        displayName: 'Inputs',
        comment: 'Inputs received from button',
        childId: bookmark ? '1D55D049-33EB-41CD-9EEC-3CACE5898C86' : null,
        inputs: [],
        settings: [{ id: 'persist_data', value: 'no', type: 'select', structure: {} }],
        collapsed: [{ name: 'loop', isCollapsed: false }],
        x: 291.0010678361308,
        y: 40.99957876441722,
        form: [
          {
            id: 'inputs-input-0',
            label: 'app',
            helpText: 'null',
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 0,
          },
          {
            id: 'inputs-input-1',
            label: 'bookmark',
            helpText: null,
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 1,
          },
          {
            id: 'inputs-input-2',
            label: 'sheet',
            helpText: null,
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 2,
          },
          {
            id: 'inputs-input-3',
            label: 'user',
            helpText: null,
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 3,
          },
          {
            id: 'inputs-input-4',
            label: 'space',
            helpText: null,
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 4,
          },
          {
            id: 'inputs-input-5',
            label: 'tenant',
            helpText: null,
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 5,
          },
          {
            id: 'inputs-input-6',
            label: 'time',
            helpText: null,
            type: 'input',
            values: null,
            isRequired: false,
            options: {},
            order: 6,
          },
        ],
        persistData: 'no',
      },
    ],
    variables: [],
  };

  if (bookmark) {
    inputBlocks.blocks.push({
      id: '1D55D049-33EB-41CD-9EEC-3CACE5898C86',
      type: 'SnippetBlock',
      disabled: false,
      name: 'applyBookmark',
      displayName: 'Qlik Cloud Services - Apply Bookmark',
      comment: 'Apply bookmark from button. To get selections or variables use the "Get Expression Value" block',
      childId: null,
      inputs: [
        { id: 'd41ae430-073a-11ec-bdef-bb104839c843', value: '{$.inputs.app}', type: 'string', structure: [] },
        { id: 'fab02320-9270-11ed-a391-739edffdb33c', value: '{$.inputs.bookmark}', type: 'string', structure: [] },
        {
          id: 'f478e320-9270-11ed-b551-d73ebe8e14ad',
          value: 'Yes',
          type: 'select',
          displayValue: 'Yes',
          structure: [],
        },
      ],
      settings: [{ id: 'blendr_on_error', value: 'stop', type: 'select', structure: [] }],
      collapsed: [{ name: 'loop', isCollapsed: false }],
      x: 142,
      y: 296,
      datasourcetype_guid: '61a87510-c7a3-11ea-95da-0fb0c241e75c',
      snippet_guid: 'd41632d0-073a-11ec-a6ac-d34723268fbc',
    });
  }
  return inputBlocks;
};
