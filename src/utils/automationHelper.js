export const getUser = async () => {
    try {
        const response = await fetch(`../api/v1/users/me`);
        const data = await response.json();
        return data;
    }
    catch {
        return null;
    }
}

export const getSheetId = async (app, buttonId) => {
    try {
        const button = await app.getObject(buttonId);
        const parent = await button.getParent();
        return parent.id;
    }
    catch {
        return null;
    }
}

export const getSpaceId = async (appId) => {
    try {
        const response = await fetch(`../api/v1/apps/${appId}`);
        const data = await response.json();
        return 'spaceId' in data.attributes && data.attributes.spaceId.length > 1 ? data.attributes.spaceId : 'personal';
    }
    catch {
        return null;
    }
}

export const getAutomation = async (automationId) => {
    if (automationId.length > 2) {
        try {
            const response = await fetch(`../api/v1/automations/${automationId}`);
            return await response.json();
        }
        catch {
            return null;
        }
    }
    return null;
}

export const checkIfTriggeredById = async (automationId) => {
    try {
        if (automationId.length > 2) {
            const automation = await getAutomation(automationId);
            const startBlock = automation.workspace.blocks.find(block => block.type === 'StartBlock');
            const inputs = startBlock.inputs.find(input => input.id === 'run_mode');
            return inputs.value === 'triggered';
        }
        return false;
    }
    catch {
        return false;
    }
}


export const checkIfTriggered = async (automation) => {
    try {
        const startBlock = automation.workspace.blocks.find(block => block.type === 'StartBlock');
        const inputs = startBlock.inputs.find(input => input.id === 'run_mode');
        return inputs.value === 'triggered';
    }
    catch {
        return false;
    }
}

export const getAutomationFromItem = async (itemId) => {
    try {
        const response = await fetch(`../api/v1/items/${itemId}`);
        const data = await response.json();
        return await getAutomation(data.resourceId)
    }
    catch {
        return null;
    }
}

export const applyMigration = async (app, automation, index, buttonId) => {
    try {
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
    catch {
        // continue
    }
}

export const applyAutomationExecutionToken = async (app, automation, index, buttonId) => {
    try {
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
        // continue
    }
    catch {
        // continue
    }
}

export const removeAutomationExecutionToken = async (app, index, buttonId) => {
    try {
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
    catch {
        // continue
    }
}

export const setTriggered = async (app, index, buttonId, triggered) => {
    try {
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
    catch {
        // continue
    }
}

