export const getUser = async () => {
  const response = await fetch(`../api/v1/users/me`);
  const data = await response.json();
  return data;
};

export const getCsrfToken = async () => {
  const response = await fetch('../api/v1/csrf-token');
  return response.headers.get('qlik-csrf-token');
};

export const getSheetId = async (app, buttonId) => {
  const button = await app.getObject(buttonId);
  const parent = await button.getParent();
  return parent.id;
};

export const getSpaceId = async (appId) => {
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

const getAutomationRun = async (automationId, runId) =>
  fetch(`../api/v1/automations/${automationId}/runs/${runId}`).then((res) => res.json());

const checkMessage = (data, translator) => {
  const defaultMessage = translator.get('Object.ActionButton.Automation.DefaultAutomationMsg');
  if (Array.isArray(data)) {
    return { message: data.join(' ').length > 0 ? data.join(' ') : defaultMessage };
  }
  if (Object.keys(data).includes('message')) {
    return data;
  }
  return { message: defaultMessage };
};

const parseOutput = (data, translator) => {
  if (typeof data !== 'undefined') {
    try {
      const message = JSON.parse(data);
      return checkMessage(message, translator);
    } catch {
      if (typeof data === 'object') {
        return checkMessage(data, translator);
      }
      return { message: data };
    }
  }
  return { message: translator.get('Object.ActionButton.Automation.DefaultAutomationMsg') };
};

// eslint-disable-next-line no-promise-executor-return
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const automationRunPolling = async (automationId, runId, translator) => {
  const runningStatuses = ['queued', 'running', 'not started', 'starting'];
  // Max sleep time ~10 minutes
  const sleepTimes = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 15, 15, 15, 15, 15, 15,
    30, 30, 30, 30, 60, 60, 60, 60, 60, 60,
  ];
  let finalRun;
  for (let i = 0; i < sleepTimes.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const automationRun = await getAutomationRun(automationId, runId);
    const { status } = automationRun;
    if (!runningStatuses.includes(status)) {
      finalRun = automationRun;
      break;
    } else {
      // eslint-disable-next-line no-await-in-loop
      await sleep(sleepTimes[i] * 1000);
    }
  }
  let msg;
  switch (finalRun.status) {
    case 'finished': {
      if (finalRun.title?.length > 0) {
        msg = parseOutput(finalRun.title, translator);
        msg.ok = true;
      } else {
        msg = { message: translator.get('Object.ActionButton.Automation.DefaultAutomationMsg'), ok: true };
      }
      break;
    }
    case 'failed': {
      if (finalRun.title?.length > 0) {
        msg = parseOutput(finalRun.title, translator);
        msg.ok = false;
      } else {
        msg = { message: translator.get('Object.ActionButton.Automation.AutomationError'), ok: true };
      }
      break;
    }
    case 'finished with warnings': {
      if (finalRun.title?.length > 0) {
        msg = parseOutput(finalRun.title, translator);
        msg.ok = false;
      } else {
        msg = { message: translator.get('Object.ActionButton.Automation.DefaultAutomationMsg'), ok: true };
      }
      break;
    }
    case 'must stop':
    case 'stopped': {
      if (finalRun.title?.length > 0) {
        msg = parseOutput(finalRun.title, translator);
        msg.ok = false;
      } else {
        msg = { message: translator.get('Object.ActionButton.Automation.UnkownError'), ok: true };
      }
      break;
    }
    default: {
      if (finalRun.title?.length > 0) {
        msg = parseOutput(finalRun.title, translator);
        msg.ok = true;
      } else {
        msg = { message: translator.get('Object.ActionButton.Automation.DefaultAutomationMsg'), ok: true };
      }
    }
  }
  return msg;
};

export const getAutomationMsg = async (automationId, triggered, response, translator) => {
  let message;
  switch (response.status) {
    case 200:
    case 201: {
      const data = await response.json();
      const { status, guid, id } = data;
      const queued = status === 'queued';
      const runId = typeof id === 'undefined' ? guid : id;
      if (!triggered || queued) {
        message = automationRunPolling(automationId, runId, translator);
      } else {
        message = parseOutput(data, translator);
        message.ok = true;
      }
      break;
    }
    case 400: {
      message = { message: translator.get('Object.ActionButton.Automation.BadRequest'), ok: false };
      break;
    }
    case 401:
    case 403: {
      message = { message: translator.get('Object.ActionButton.Automation.NotAuthorized'), ok: false };
      break;
    }
    case 404: {
      message = { message: translator.get('Object.ActionButton.Automation.AutomationNotFound'), ok: false };
      break;
    }
    case 500:
    case 503: {
      message = { message: translator.get('Object.ActionButton.Automation.AutomationError'), ok: false };
      break;
    }
    default: {
      message = { message: translator.get('Object.ActionButton.Automation.UnkownError'), ok: false };
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

const getSnackbar = (snackbarId) => document.querySelector(`#${snackbarId}`);

const removeSnackbar = (element) => {
  applyStyles(element, { opacity: 0 });
  setTimeout(() => {
    element.remove();
  }, 1000);
};

export const createSnackbar = async (message, duration, newTab) => {
  const randomId = (Math.random() + 1).toString(36).substring(7);
  const snackbarId = `sn-action-button-snackbar-${randomId}`;
  const snackContainer = document.createElement('div');
  snackContainer.setAttribute('id', snackbarId);
  const transitionMs = 400;
  const snackContainerStyles = {
    width: '400px',
    height: '35px',
    'background-color': '#FFFFFF',
    position: 'fixed',
    left: 'calc(50% - 200px)',
    right: 'auto',
    bottom: '24px',
    'box-shadow': '0px 1px 2px 0px rgb(0 0 0 / 15%)',
    padding: '6px 16px',
    'border-radius': '3px',
    'z-index': 1000,
    opacity: 0,
    transition: `visibility 0ms, opacity ${transitionMs}ms linear`,
  };
  applyStyles(snackContainer, snackContainerStyles);
  const contentContainer = document.createElement('div');
  const contentStyles = {
    display: 'flex',
    'justify-content': 'space-between',
    height: '100%',
    'align-items': 'center',
  };
  applyStyles(contentContainer, contentStyles);
  const status = document.createElement('span');
  const iconStyles = {
    textDecoration: 'none',
    fontSize: 'inherit',
  };
  applyStyles(status, iconStyles);
  const statusIcon = message.ok ? 'tick' : 'warning';
  status.setAttribute('class', `lui-icon lui-icon--${statusIcon}`);
  const msg = document.createElement('span');
  const msgStyles = {
    overflow: 'hidden',
    'white-space': 'nowrap',
    'text-overflow': 'ellipsis',
  };
  applyStyles(msg, msgStyles);
  msg.innerText = message.message;
  let link;
  if (message.url) {
    link = document.createElement('a');
    const linkStyles = {
      'margin-left': '6px',
    };
    applyStyles(link, linkStyles);
    link.href = message.url;
    if (newTab) {
      link.target = '_blank';
    }
    link.innerText = message.urlText || 'Open';
    msg.appendChild(link);
  }
  const close = document.createElement('span');
  iconStyles.cursor = 'pointer';
  applyStyles(close, iconStyles);
  close.setAttribute('class', `lui-icon lui-icon--remove`);
  close.addEventListener('click', () => {
    const el = getSnackbar(snackbarId);
    removeSnackbar(el);
  });
  contentContainer.appendChild(status);
  contentContainer.appendChild(msg);
  contentContainer.appendChild(close);
  snackContainer.appendChild(contentContainer);
  const body = document.querySelector('body');
  body.appendChild(snackContainer);
  const el = getSnackbar(snackbarId);
  applyStyles(el, { opacity: 1 });
  await sleep(Math.max(duration * 1000 - transitionMs, 1));
  removeSnackbar(el);
};

export const inputBlock = {
  blocks: [
    {
      id: 'EB6A372B-3312-4E90-8E8F-88F2A889B4CF',
      type: 'FormBlock',
      disabled: false,
      name: 'inputs',
      displayName: 'Inputs',
      comment: 'Inputs received from button',
      childId: null,
      inputs: [],
      settings: [{ id: 'persist_data', value: 'no', type: 'select', structure: {} }],
      collapsed: [{ name: 'loop', isCollapsed: false }],
      x: 291.0010678361308,
      y: 40.99957876441722,
      form: [
        {
          id: 'inputs-input-0',
          label: 'app',
          helpText: null,
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
