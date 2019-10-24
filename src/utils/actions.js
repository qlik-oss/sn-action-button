export function getValueList(values) {
  return values
    .split(';')
    .map(value => (isNaN(value) ? { qText: value } : { qIsNumeric: true, qNumber: Number(value) }));
}

const actions = [
  {
    value: 'applyBookmark',
    label: 'Apply a bookmark',
    group: 'bookmark',
    getActionCall: ({ app, bookmark }) => async () => {
      bookmark && (await app.applyBookmark(bookmark));
    },
    requiredInput: ['bookmark'],
  },
  {
    value: 'clearAll',
    label: 'Clear all selections',
    group: 'selection',
    getActionCall: ({ app, softLock }) => async () => {
      await app.clearAll(softLock);
    },
    requiredInput: ['softLock'],
  },
  {
    value: 'clearAllButThis',
    label: 'Clear selections in other fields',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.clearAllButThis(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'forward',
    label: 'Move forwards (in your selections)',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.forward();
    },
    requiredInput: [],
  },
  {
    value: 'back',
    label: 'Move backwards (in your selections)',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.back();
    },
    requiredInput: [],
  },
  {
    value: 'clearField',
    label: 'Clear selections in field',
    group: 'selection',
    getActionCall: ({ app, qStateName, field }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.clear();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'lockAll',
    label: 'Lock all selections',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.lockAll();
    },
    requiredInput: [],
  },
  {
    value: 'lockField',
    label: 'Lock a specific field',
    group: 'selection',
    getActionCall: ({ app, qStateName, field }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.lock();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'unlockAll',
    label: 'Unlock all selections',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.unlockAll();
    },
    requiredInput: [],
  },
  {
    value: 'unlockField',
    label: 'Unlock a specific field',
    group: 'selection',
    getActionCall: ({ app, qStateName, field }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.unlock();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'selectAll',
    label: 'Select all values in a field',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.selectAll(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectValues',
    label: 'Select value(s) in a field',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, value, softLock }) => async () => {
      if (field && value) {
        const fieldObj = await app.getField(field, qStateName);
        const valueList = getValueList(value);
        await fieldObj.selectValues(valueList, false, softLock);
      }
    },
    requiredInput: ['field', 'value', 'softLock'],
  },
  {
    value: 'selectAlternative',
    label: 'Select alternatives',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.selectAlternative(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectExcluded',
    label: 'Select excluded',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.selectExcluded(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectPossible',
    label: 'Select possible values in a field',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.selectPossible(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'toggleSelect',
    label: 'Toggle field selection',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, value, softLock }) => async () => {
      if (field && value) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.toggleSelect(value, softLock);
      }
    },
    requiredInput: ['field', 'value', 'softLock'],
  },
  {
    value: 'setVariable',
    label: 'Set variable value',
    group: 'variables',
    getActionCall: ({ app, variable, value }) => async () => {
      if (variable && value) {
        try {
          const variableObj = await app.getVariableByName(variable);
          await variableObj.setStringValue(value);
        } catch (e) {
          // no-op
        }
      }
    },
    requiredInput: ['variable', 'value'],
  },
];

export function checkShowAction(data, field) {
  const act = actions.find(action => data.actionType === action.value);
  return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
}

export default actions;
