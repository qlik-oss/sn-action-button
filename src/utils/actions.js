const actions = [
  {
    value: 'applyBookmark',
    label: 'Apply a bookmark',
    group: 'bookmark',
    promise: ({ engineApp, bookmark }) => async () => {
      await engineApp.applyBookmark(bookmark);
    },
    requiredInput: ['bookmark'],
  },
  {
    value: 'clearAll',
    label: 'Clear all selections',
    group: 'selection',
    promise: ({ engineApp }) => async () => {
      await engineApp.clearAll();
    },
    requiredInput: [],
  },
  {
    value: 'clearOther',
    label: 'Clear selections in other fields',
    group: 'selection',
    promise: ({ engineApp, field, softLock }) => async () => {
      const fld = await engineApp.getField(field);
      await fld.clearAllButThis(softLock);
    },
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'forward',
    label: 'Move forwards (in your selections)',
    group: 'selection',
    promise: ({ engineApp }) => async () => {
      await engineApp.forward();
    },
    requiredInput: [],
  },
  {
    value: 'back',
    label: 'Move backwards (in your selections)',
    group: 'selection',
    promise: ({ engineApp }) => async () => {
      await engineApp.back();
    },
    requiredInput: [],
  },
  {
    value: 'clearField',
    label: 'Clear selections in field',
    group: 'selection',
    promise: ({ engineApp, field }) => async () => {
      const fld = await engineApp.getField(field);
      await fld.clear();
    },
    requiredInput: ['field'],
  },
  {
    value: 'lockAll',
    label: 'Lock all selections',
    group: 'selection',
    promise: ({ engineApp }) => async () => {
      await engineApp.lockAll();
    },
    requiredInput: [],
  },
  {
    value: 'lockField',
    label: 'Lock a specific field',
    group: 'selection',
    promise: ({ engineApp, field }) => async () => {
      const fld = await engineApp.getField(field);
      await fld.lock();
    },
    requiredInput: ['field'],
  },
  {
    value: 'unlockAll',
    label: 'Unlock all selections',
    group: 'selection',
  },
  {
    value: 'unlockField',
    label: 'Unlock a specific field',
    group: 'selection',
  },
  {
    value: 'unlockAllAndClearAll',
    label: 'Unlock all and clear all',
    group: 'selection',
  },
  {
    value: 'selectField',
    label: 'Select a value in a field',
    group: 'selection',
  },
  {
    value: 'selectAll',
    label: 'Select all values in a field',
    group: 'selection',
  },
  {
    value: 'selectValues',
    label: 'Select multiple values in a field',
    group: 'selection',
  },
  {
    value: 'selectAlternative',
    label: 'Select alternatives',
    group: 'selection',
  },
  {
    value: 'selectAndLockField',
    label: 'Select a value and lock field',
    group: 'selection',
  },
  {
    value: 'selectExcluded',
    label: 'Select excluded',
    group: 'selection',
  },
  {
    value: 'selectPossible',
    label: 'Select possible values in a field',
    group: 'selection',
  },
  {
    value: 'setVariable',
    label: 'Set variable value',
    group: 'variables',
  },
  {
    value: 'toggleSelect',
    label: 'Toggle field selection',
    group: 'selection',
  },
];

export default actions;
