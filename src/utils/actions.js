// TODO: put in seperate file for testing. Create util fil for other functions as well?
function getValueList(values) {
  return values
    .split(';')
    .map(value => (Number.isNaN(value) ? { qText: value } : { qIsNumeric: true, qNumber: Number(value) }));
}

const actions = [
  {
    value: 'applyBookmark',
    label: 'Apply a bookmark',
    group: 'bookmark',
    call: ({ engineApp, bookmark }) => async () => {
      bookmark && (await engineApp.applyBookmark(bookmark));
    },
    requiredInput: ['bookmark'],
  },
  {
    value: 'clearAll',
    label: 'Clear all selections',
    group: 'selection',
    call: ({ engineApp }) => async () => {
      await engineApp.clearAll();
    },
    requiredInput: [],
  },
  {
    value: 'clearOther',
    label: 'Clear selections in other fields',
    group: 'selection',
    call: ({ engineApp, field, softLock }) => async () => {
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
    call: ({ engineApp }) => async () => {
      await engineApp.forward();
    },
    requiredInput: [],
  },
  {
    value: 'back',
    label: 'Move backwards (in your selections)',
    group: 'selection',
    call: ({ engineApp }) => async () => {
      await engineApp.back();
    },
    requiredInput: [],
  },
  {
    value: 'clearField',
    label: 'Clear selections in field',
    group: 'selection',
    call: ({ engineApp, field }) => async () => {
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
    call: ({ engineApp }) => async () => {
      await engineApp.lockAll();
    },
    requiredInput: [],
  },
  {
    value: 'lockField',
    label: 'Lock a specific field',
    group: 'selection',
    call: ({ engineApp, field }) => async () => {
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
    call: ({ engineApp }) => async () => {
      await engineApp.unlockAll();
    },
    requiredInput: [],
  },
  {
    value: 'unlockField',
    label: 'Unlock a specific field',
    group: 'selection',
    call: ({ engineApp, field }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.unlock();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'unlockAllAndClearAll',
    label: 'Unlock all and clear all',
    group: 'selection',
    call: ({ engineApp }) => async () => {
      await engineApp.unlockAll();
      await engineApp.clearAll();
    },
    requiredInput: [],
  },
  {
    value: 'selectField',
    label: 'Select a value in a field',
    group: 'selection',
    call: ({ engineApp, field, value }) => async () => {
      if (field && value) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.select(value);
      }
    },
    requiredInput: ['field', 'value'],
  },
  {
    value: 'selectAll',
    label: 'Select all values in a field',
    group: 'selection',
    call: ({ engineApp, field }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectAll();
      }
    },
    requiredInput: ['field'],
  },
  {
    value: 'selectValues',
    label: 'Select multiple values in a field',
    group: 'selection',
    call: ({ engineApp, field, value }) => async () => {
      if (field && value) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectValues(getValueList(value));
      }
    },
    requiredInput: ['field', 'value'],
  },
  {
    value: 'selectAlternative',
    label: 'Select alternatives',
    group: 'selection',
    call: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectAlternative(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectAndLockField',
    label: 'Select a value and lock field',
    group: 'selection',
    call: ({ engineApp, field, value }) => async () => {
      if (field && value) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.select(value);
        await fieldObj.lock();
      }
    },
    requiredInput: ['field', 'value'],
  },
  {
    value: 'selectExcluded',
    label: 'Select excluded',
    group: 'selection',
    call: ({ engineApp, field, softLock }) => async () => {
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
    call: ({ engineApp, field, softLock }) => async () => {
      if (field) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.selectPossible(softLock);
      }
    },
    requiredInput: ['field', 'softLock'],
  },
  // {
  //   value: 'setVariable',
  //   label: 'Set variable value',
  //   group: 'variables',
  // },
  {
    value: 'toggleSelect',
    label: 'Toggle field selection',
    group: 'selection',
    call: ({ engineApp, field, value }) => async () => {
      if (field && value) {
        const fieldObj = await engineApp.getField(field);
        await fieldObj.toggleSelect(value);
      }
    },
    requiredInput: ['field', 'value'],
  },
];

export default actions;
