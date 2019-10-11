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
    getActionCall: ({ engineApp, bookmark }) => async () => {
      bookmark && (await engineApp.applyBookmark(bookmark));
    },
    requiredInput: ['bookmark'],
  },
  {
    value: 'clearAll',
    label: 'Clear all selections',
    group: 'selection',
    getActionCall: ({ engineApp, softLock }) => async () => {
      await engineApp.clearAll(softLock);
    },
    requiredInput: ['softLock'],
  },
  {
    value: 'clearAllButThis',
    label: 'Clear selections in other fields',
    group: 'selection',
    getActionCall: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.clearAllButThis(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'forward',
    label: 'Move forwards (in your selections)',
    group: 'selection',
    getActionCall: ({ engineApp }) => async () => {
      await engineApp.forward();
    },
    requiredInput: [],
  },
  {
    value: 'back',
    label: 'Move backwards (in your selections)',
    group: 'selection',
    getActionCall: ({ engineApp }) => async () => {
      await engineApp.back();
    },
    requiredInput: [],
  },
  {
    value: 'clearField',
    label: 'Clear selections in field',
    group: 'selection',
    getActionCall: ({ engineApp, field }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.clear();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'lockAll',
    label: 'Lock all selections',
    group: 'selection',
    getActionCall: ({ engineApp }) => async () => {
      await engineApp.lockAll();
    },
    requiredInput: [],
  },
  {
    value: 'lockField',
    label: 'Lock a specific field',
    group: 'selection',
    getActionCall: ({ engineApp, field }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.lock();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'unlockAll',
    label: 'Unlock all selections',
    group: 'selection',
    getActionCall: ({ engineApp }) => async () => {
      await engineApp.unlockAll();
    },
    requiredInput: [],
  },
  {
    value: 'unlockField',
    label: 'Unlock a specific field',
    group: 'selection',
    getActionCall: ({ engineApp, field }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.unlock();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'selectAll',
    label: 'Select all values in a field',
    group: 'selection',
    getActionCall: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectAll(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectValues',
    label: 'Select value(s) in a field',
    group: 'selection',
    getActionCall: ({ engineApp, field, value, softLock }) => async () => {
      if (field && value) {
        const fieldObj = await engineApp.getField(field);
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
    getActionCall: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectAlternative(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectExcluded',
    label: 'Select excluded',
    group: 'selection',
    getActionCall: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectExcluded(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectPossible',
    label: 'Select possible values in a field',
    group: 'selection',
    getActionCall: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectPossible(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'toggleSelect',
    label: 'Toggle field selection',
    group: 'selection',
    getActionCall: ({ engineApp, field, value, softLock }) => async () => {
      if (field && value) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.toggleSelect(value, softLock);
      }
    },
    requiredInput: ['field', 'value', 'softLock'],
  },
  // {
  //   value: 'setVariable',
  //   label: 'Set variable value',
  //   group: 'variables',
  // },
];

export default actions;
