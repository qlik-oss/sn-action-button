const DEFAULT_AUTOMATION_MSG = 'Automation finished';

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

export const checkIfTriggered = async (automation) => automation.runMode === 'triggered';

export const getAutomationFromItem = async (itemId) => {
  const response = await fetch(`../api/v1/items/${itemId}`);
  const data = await response.json();
  return getAutomation(data.resourceId);
};

const getAutomationRun = async (automationId, runId) => fetch(`../api/v1/automations/${automationId}/runs/${runId}`).then(res => res.json());

const checkMessage = (data) => {
    if (Array.isArray(data)) {
        return { message: data.join(' ').length > 0 ? data.join(' ') : DEFAULT_AUTOMATION_MSG }
    }
    if(Object.keys(data).includes('message')) {
        return data
    }
    return { message: DEFAULT_AUTOMATION_MSG }
}

const parseOutput = (data) => {
    if (typeof data !== 'undefined') {
        try {
            const message = JSON.parse(data);
            return checkMessage(message);
        }
        catch {
            if (typeof data === 'object') {
                return checkMessage(data)
            }
            return { message: data }
        }
    }
    return { message: DEFAULT_AUTOMATION_MSG }
}

// eslint-disable-next-line no-promise-executor-return
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const automationRunPolling = async (automationId, runId) => {
    const runningStatuses = ['queued', 'running', 'not started', 'starting']
    // Max sleep time ~10 minutes
    const sleepTimes = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 15, 15, 15, 15, 15, 15, 30, 30, 30, 30, 60, 60, 60, 60, 60, 60]
    let finalRun
    for (let i = 0; i < sleepTimes.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        const automationRun = await getAutomationRun(automationId, runId);
        const { status } = automationRun;
        if (!runningStatuses.includes(status)) {
            finalRun = automationRun
            break;
        }
        else {
            // eslint-disable-next-line no-await-in-loop
            await sleep(sleepTimes[i] * 1000)
        }
    }
    let msg
    switch (finalRun.status) {
        case 'finished': {
            if (finalRun.title?.length > 0) {
                msg = parseOutput(finalRun.title)
                msg.ok = true
            }
            else {
                msg = { message: DEFAULT_AUTOMATION_MSG, ok: true };
            }
            break;
        }
        case 'failed': {
            if (finalRun.title?.length > 0) {
                msg = parseOutput(finalRun.title)
                msg.ok = false
            }
            else {
                msg = { message: 'Automation failed', ok: true };
            }
            break;
        }
        case 'finished with warnings': {
            if (finalRun.title?.length > 0) {
                msg = parseOutput(finalRun.title)
                msg.ok = false
            }
            else {
                msg = { message: 'Automation finished with warnings', ok: true };
            }
            break;
        }
        case 'must stop':
        case 'stopped': {
            if (finalRun.title?.length > 0) {
                msg = parseOutput(finalRun.title)
                msg.ok = false
            }
            else {
                msg = { message: 'Automation stopped', ok: true };
            }
            break;
        }
        default: {
            if (finalRun.title?.length > 0) {
                msg = parseOutput(finalRun.title)
                msg.ok = true
            }
            else {
                msg = { message: DEFAULT_AUTOMATION_MSG, ok: true };
            }
        }
    }
    return msg;
}



export const getAutomationMsg = async (automationId, triggered, response) => {
    let message
    switch (response.status) {
        case 200:
        case 201: {
            const data = await response.json();
            const { status, guid, id } = data;
            const queued = status === 'queued'
            const runId = (typeof id === 'undefined') ? guid : id;
            if (!triggered || queued) {
                message = automationRunPolling(automationId, runId);
            }
            else {
                message = parseOutput(data)
                message.ok = true
            }
            break;
        }
        case 400: {
            message = { message: 'Bad request', ok: false }
            break;
        }
        case 401:
        case 403: {
            message = { message: 'You are not authorized to run this automation', ok: false }
            break;
        }
        case 404: {
            message = { message: 'Automation not found', ok: false }
            break;
        }
        case 500:
        case 503: {
            message = { message: 'Automation error', ok: false }
            break;
        }
        default: {
            message = { message: 'There was an unknown error', ok: false };
        }
    }
    return message
}

const applyStyles = (element, styles) => {
    Object.keys(styles).forEach((key) => {
        element.style[key] = styles[key]
    })
}

export const createSnackbar = (message, duration, newTab) => {
    const randomId = (Math.random() + 1).toString(36).substring(7)
    const snackbarId = `sn-action-button-snackbar-${randomId}`;
    const snackContainer = document.createElement('div');
    snackContainer.setAttribute('id', snackbarId)
    const snackContainerStyles = {
        'width': '400px',
        'height': '35px',
        'background-color': '#FFFFFF',
        'position': 'fixed',
        'left': 'calc(50% - 200px)',
        'right': 'auto',
        'bottom': '24px',
        'box-shadow': '0px 1px 2px 0px rgb(0 0 0 / 15%)',
        'padding': '6px 16px',
        'border-radius': '3px',
        'z-index': 1000,
    }
    applyStyles(snackContainer, snackContainerStyles)
    const contentContainer = document.createElement('div')
    const contentStyles = {
        'display': 'flex',
        'justify-content': 'space-between',
        'height': '100%',
        'align-items': 'center'
    }
    applyStyles(contentContainer, contentStyles)
    const status = document.createElement('span')
    const iconStyles = {
        'textDecoration': 'none',
        'fontSize': 'inherit',
    }
    applyStyles(status, iconStyles)
    const statusIcon = message.ok ? 'tick' : 'warning'
    status.setAttribute('class', `lui-icon lui-icon--${statusIcon}`);
    const msg = document.createElement('span')
    const msgStyles = {
        'overflow': 'hidden',
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis',
    }
    applyStyles(msg, msgStyles)
    msg.innerText = message.message
    let link
    if (message.url) {
        link = document.createElement('a')
        const linkStyles = {
            'margin-left': '6px'
        }
        applyStyles(link, linkStyles)
        link.href = message.url
        if(newTab) {
            link.target = '_blank';
        }
        link.innerText = message.urlText || 'Open';
        msg.appendChild(link)
    }
    const close = document.createElement('span')
    iconStyles.cursor = 'pointer'
    applyStyles(close, iconStyles)
    close.setAttribute('class', `lui-icon lui-icon--remove`);
    close.addEventListener('click', () => {
        document.querySelector(`#${snackbarId}`).remove()
    })
    contentContainer.appendChild(status)
    contentContainer.appendChild(msg)
    contentContainer.appendChild(close)
    snackContainer.appendChild(contentContainer)
    const body = document.querySelector('body')
    body.appendChild(snackContainer)
    setTimeout(() => {
        const el = document.querySelector(`#${snackbarId}`)
        if (typeof (el) !== 'undefined' && el != null) {
            el.remove()
        }
    }, duration * 1000);
}

export const inputBlock = { "blocks": [{ "id": "EB6A372B-3312-4E90-8E8F-88F2A889B4CF", "type": "FormBlock", "disabled": false, "name": "inputs", "displayName": "Inputs", "comment": "Inputs received from button", "childId": null, "inputs": [], "settings": [{ "id": "persist_data", "value": "no", "type": "select", "structure": {} }], "collapsed": [{ "name": "loop", "isCollapsed": false }], "x": 291.0010678361308, "y": 40.99957876441722, "form": [{ "id": "inputs-input-0", "label": "app", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 0 }, { "id": "inputs-input-1", "label": "bookmark", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 1 }, { "id": "inputs-input-2", "label": "sheet", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 2 }, { "id": "inputs-input-3", "label": "user", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 3 }, { "id": "inputs-input-4", "label": "space", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 4 }, { "id": "inputs-input-5", "label": "tenant", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 5 }, { "id": "inputs-input-6", "label": "time", "helpText": null, "type": "input", "values": null, "isRequired": true, "options": {}, "order": 6 }], "persistData": "no" }], "variables": [] }
