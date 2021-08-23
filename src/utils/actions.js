export const getValueList = async (app, values, isDate) => {
  let valuesArray = values.split(';');
  if (isDate) {
    let dateExpression = '';
    valuesArray.forEach((date) => {
      dateExpression += `Num('${date}')&';'&`;
    });
    const convertedDates = await app.evaluate(dateExpression.slice(0, -5));
    valuesArray = convertedDates.split(';');
  }
  return valuesArray.map((value) => (Number.isNaN(+value) ? { qText: value } : { qIsNumeric: true, qNumber: Number(value) }));
};

const actions = [
  {
    value: 'applyBookmark',
    translation: 'Object.ActionButton.ApplyBookmark',
    group: 'bookmark',
    getActionCall: ({ app, bookmark }) => async () => {
      const bookMarks = await app.getBookmarkList();
      const findBm = bookMarks.find((bm) => bm.qData.title === bookmark);
      bookmark && (await app.applyBookmark((findBm && findBm.qInfo && findBm.qInfo.qId) || bookmark));
    },
    requiredInput: ['bookmark'],
  },
  {
    value: 'back',
    translation: 'Object.ActionButton.MoveBackward',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.back();
    },
    requiredInput: [],
  },
  {
    value: 'forward',
    translation: 'Object.ActionButton.MoveForward',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.forward();
    },
    requiredInput: [],
  },
  {
    value: 'clearAll',
    translation: 'Object.ActionButton.ClearAll',
    group: 'selection',
    getActionCall: ({ app, softLock }) => async () => {
      await app.clearAll(softLock);
    },
    requiredInput: ['softLock'],
  },
  {
    value: 'clearAllButThis',
    translation: 'Object.ActionButton.ClearAllButThis',
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
    value: 'clearField',
    translation: 'Object.ActionButton.ClearSelectionInField',
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
    value: 'selectAll',
    translation: 'Object.ActionButton.SelectAllInField',
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
    translation: 'Object.ActionButton.SelectValuesInField',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, value, softLock }) => async () => {
      if (field && value) {
        const fieldObj = await app.getField(field, qStateName);
        const fieldInfo = await app.getFieldDescription(field);
        const valueList = await getValueList(app, value, fieldInfo.qTags.includes('$date'));
        await fieldObj.selectValues(valueList, false, softLock);
      }
    },
    requiredInput: ['field', 'value', 'softLock'],
  },
  {
    value: 'selectMatchingValues',
    translation: 'Object.ActionButton.SelectMatchingValues',
    group: 'selection',
    getActionCall: ({ app, qStateName, field, value, softLock }) => async () => {
      if (field && value) {
        const fieldObj = await app.getField(field, qStateName);
        await fieldObj.select(value, false, softLock);
      }
    },
    requiredInput: ['field', 'value', 'softLock'],
  },
  {
    value: 'selectAlternative',
    translation: 'Object.ActionButton.SelectAlternatives',
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
    translation: 'Object.ActionButton.SelectExcluded',
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
    translation: 'Object.ActionButton.SelectPossibleValues',
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
    translation: 'Object.ActionButton.ToggleFieldSelection',
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
    value: 'lockAll',
    translation: 'Object.ActionButton.LockAllSelections',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.lockAll();
    },
    requiredInput: [],
  },
  {
    value: 'lockField',
    translation: 'Object.ActionButton.LockField',
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
    translation: 'Object.ActionButton.UnlockAllSelections',
    group: 'selection',
    getActionCall: ({ app }) => async () => {
      await app.unlockAll();
    },
    requiredInput: [],
  },
  {
    value: 'unlockField',
    translation: 'Object.ActionButton.UnlockAField',
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
    value: 'setVariable',
    translation: 'Object.ActionButton.SetVariable',
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
  {
    value: 'doReload',
    translation: 'Object.ActionButton.DoReload',
    group: 'reload',
    getActionCall: ({ app, partial }) => async () => {
      const e = await app.doReload(0, !!partial, false);
      if (e) {
        await app.doSave();
      }
    },
    requiredInput: ['partial'],
  },
  {
    label: 'Contact REST endpoint',
    // translation: 'Object.ActionButton.CallRestEndpoint',
    value: 'callRestUrl',
    group: 'REST',
    getActionCall: ({ restUrl, restMethod, restBody }) => async () => {
      if (restUrl === undefined) {
        // do nothing
      }
      console.log(`${restUrl} : ${restMethod} : ${restBody}`);
      return fetch(restUrl, {
        method: restMethod
      })
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          return response.status;
        })
        .catch((e) => e);
    },
    requiredInput: ['restUrl']
  },
  {
    label: 'Execute Automation',
    value: 'executeAutomation',
    getActionCall: ({ layout, app, automation }) => async () => {
      console.log(automation);
      console.log(layout);
      console.log(app.getLayout());
      if (automation !== undefined) {
        try {
          const itemInfo = await fetch(`../api/v1/items/${automation}`)
            .then(response => response.json());
          console.log(itemInfo);
          const autoInfo = await fetch(`../api/v1/automations/${itemInfo.resourceId}`)
            .then(response => response.json());
          console.log(autoInfo);
          const autoExecute = await fetch(`../api/v1/automations/${autoInfo.guid}/actions/execute?X-Execution-Token=${autoInfo.execution_token}`)
            .then(response => response.json());
          console.log(autoExecute);
          // let status = autoExecute.status.toUpperCase();

          // while(status !== 'FINISHED')
          // {
          //   status = await fetch(`../api/v1/automations/${autoInfo.guid}/runs/${autoExecute.guid}`)
          //   .then(response => response.json())
          //   .then(autoStatus => autoStatus.status.toUpperCase());
          //   layout.style.label = status;

          //   console.log(status);
          //   await sleep(3000);
          // }
        } catch (e) {
          // no-op
        }
      }
    },
    requiredInput: ['automation']
  },
  {
    label: 'Current Selections',
    value: 'currentSelections',
    group: 'automation',
    getActionCall: async ({ app, automation }) => {
      const newDate = new Date().toISOString();
      const bmkProp = {
        qProp: {
          qInfo: {
            qId: `automation_${app.id}_${automation.value}_${newDate}`,
            qType: 'bookmark'
          },
          qMetaDef: {
            title: 'automation bookmark',
            description: 'Generated to provide target automation with bookmark to get current selection state',
            createdBy: 'sn-action-button',
            createdFor: 'automation',
            id: `automation_${app.id}_${automation.value}_${newDate}`
          }
        }
      };
      const bmk = await (app.createBookmark(bmkProp));
      console.log(bmk.getLayout());
    },
    requiredInput: ['automation']
  }
];

export function checkShowAction(data, field) {
  const act = actions.find((action) => data.actionType === action.value);
  return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
}

export default actions;

// private functions

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
