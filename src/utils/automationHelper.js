export const getUser = async () => {
    const response = await fetch(`../api/v1/users/me`);
    const data = await response.json();
    return data;
}

export const getCsrfToken = async () => {
    const response = await fetch('../api/v1/csrf-token');
    return response.headers.get('qlik-csrf-token')
}

export const getSheetId = async (app, buttonId) => {
    const button = await app.getObject(buttonId);
    const parent = await button.getParent();
    return parent.id;

}

export const getSpaceId = async (appId) => {
    const response = await fetch(`../api/v1/apps/${appId}`);
    const data = await response.json();
    return 'spaceId' in data.attributes && data.attributes.spaceId.length > 1 ? data.attributes.spaceId : 'personal';
}

export const getAutomation = async (automationId) => {
    if (automationId.length > 2) {
        const response = await fetch(`../api/v1/automations/${automationId}`);
        return response.json();
    }
    return null;
}

export const checkIfTriggeredById = async (automationId) => {
    if (automationId.length > 2) {
        const automation = await getAutomation(automationId);
        const startBlock = automation.workspace.blocks.find(block => block.type === 'StartBlock');
        const inputs = startBlock.inputs.find(input => input.id === 'run_mode');
        return inputs.value === 'triggered';
    }
    return false;
}


export const checkIfTriggered = async (automation) => {
    const startBlock = automation.workspace.blocks.find(block => block.type === 'StartBlock');
    const inputs = startBlock.inputs.find(input => input.id === 'run_mode');
    return inputs.value === 'triggered';
}

export const getAutomationFromItem = async (itemId) => {
    const response = await fetch(`../api/v1/items/${itemId}`);
    const data = await response.json();
    return getAutomation(data.resourceId)
}

export const applyMigration = async (app, automation, index, buttonId) => {
    if (automation.id.length > 1) {
        const thisObject = await app.getObject(buttonId);
        const patchParams = {
            qSoftPatch: false,
            qPatches: [
                {
                    qPath: `/actions/${index}/automationId`,
                    qOp: 'add',
                    qValue: JSON.stringify(automation.id)
                },
                {
                    qPath: `/actions/${index}/automationExecutionToken`,
                    qOp: 'add',
                    qValue: JSON.stringify("")
                },
                {
                    qPath: `/actions/${index}/automationTriggered`,
                    qOp: 'add',
                    qValue: JSON.stringify(false)
                },
                {
                    qPath: `/actions/${index}/automation`,
                    qOp: 'remove'
                }
            ]
        }
        await thisObject.applyPatches(patchParams);
    }
}

export const applyAutomationExecutionToken = async (app, automation, index, buttonId) => {

    if (automation.id.length > 1) {
        const { executionToken } = automation;
        const thisObject = await app.getObject(buttonId);
        const patchParams = {
            qSoftPatch: false,
            qPatches: [{
                qPath: `/actions/${index}/automationExecutionToken`,
                qOp: 'add',
                qValue: JSON.stringify(executionToken)
            }]
        }
        await thisObject.applyPatches(patchParams);
    }
}

export const removeAutomationExecutionToken = async (app, index, buttonId) => {
    const thisObject = await app.getObject(buttonId);
    const patchParams = {
        qSoftPatch: false,
        qPatches: [{
            qPath: `/actions/${index}/automationExecutionToken`,
            qOp: 'add',
            qValue: JSON.stringify('')
        }]
    }
    await thisObject.applyPatches(patchParams);
}

export const setTriggered = async (app, index, buttonId, triggered) => {
    const thisObject = await app.getObject(buttonId);
    const patchParams = {
        qSoftPatch: false,
        qPatches: [{
            qPath: `/actions/${index}/automationShowTriggered`,
            qOp: 'add',
            qValue: JSON.stringify(triggered)
        }]
    }
    await thisObject.applyPatches(patchParams);
}

export const inputBlock = { "blocks": [{ "id": "EB6A372B-3312-4E90-8E8F-88F2A889B4CF", "type": "FormBlock", "disabled": false, "name": "inputs", "displayName": "Inputs", "comment": "Inputs received from button", "childId": null, "inputs": [], "settings": [{ "id": "persist_data", "value": "no", "type": "select", "structure": {} }], "collapsed": [{ "name": "loop", "isCollapsed": false }], "x": 291.0010678361308, "y": 40.99957876441722, "form": [{ "id": "inputs-input-0", "label": "app", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 0 }, { "id": "inputs-input-1", "label": "bookmark", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 1 }, { "id": "inputs-input-2", "label": "sheet", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 2 }, { "id": "inputs-input-3", "label": "user", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 3 }, { "id": "inputs-input-4", "label": "space", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 4 }, { "id": "inputs-input-5", "label": "tenant", "helpText": null, "type": "input", "values": null, "isRequired": false, "options": {}, "order": 5 }, { "id": "inputs-input-6", "label": "time", "helpText": null, "type": "input", "values": null, "isRequired": true, "options": {}, "order": 6 }], "persistData": "no" }], "variables": [] }
