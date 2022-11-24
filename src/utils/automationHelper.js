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

