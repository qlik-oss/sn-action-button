import {
  getUser,
  getSheetId,
  getSpaceId,
  getAutomationFromItem,
  getCsrfToken,
  createSnackbar,
  getAutomationMsg,
} from './automation-helper';

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
  return valuesArray.map((value) =>
    Number.isNaN(+value) ? { qText: value } : { qIsNumeric: true, qNumber: Number(value) }
  );
};

const actions = [
  {
    value: 'applyBookmark',
    translation: 'Object.ActionButton.ApplyBookmark',
    group: 'bookmark',
    hide: ({ isUnsupportedFeature }) => isUnsupportedFeature?.('bookmarks'),
    getActionCall:
      ({ app, bookmark }) =>
      async () => {
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
    getActionCall:
      ({ app }) =>
      async () => {
        await app.back();
      },
    requiredInput: [],
  },
  {
    value: 'forward',
    translation: 'Object.ActionButton.MoveForward',
    group: 'selection',
    getActionCall:
      ({ app }) =>
      async () => {
        await app.forward();
      },
    requiredInput: [],
  },
  {
    value: 'clearAll',
    translation: 'Object.ActionButton.ClearAll',
    group: 'selection',
    getActionCall:
      ({ app, softLock }) =>
      async () => {
        await app.clearAll(softLock);
      },
    requiredInput: ['softLock'],
  },
  {
    value: 'clearAllButThis',
    translation: 'Object.ActionButton.ClearAllButThis',
    group: 'selection',
    getActionCall:
      ({ app, qStateName, field, softLock }) =>
      async () => {
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
    getActionCall:
      ({ app, qStateName, field }) =>
      async () => {
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
    getActionCall:
      ({ app, qStateName, field, softLock }) =>
      async () => {
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
    getActionCall:
      ({ app, qStateName, field, value, softLock }) =>
      async () => {
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
    getActionCall:
      ({ app, qStateName, field, value, softLock }) =>
      async () => {
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
    getActionCall:
      ({ app, qStateName, field, softLock }) =>
      async () => {
        if (field) {
          const fieldObj = await app.getField(field, qStateName);
          await fieldObj.selectAlternative(softLock);
        }
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectExcluded',
    translation: 'Object.ActionButton.SelectExcluded',
    group: 'selection',
    getActionCall:
      ({ app, qStateName, field, softLock }) =>
      async () => {
        if (field) {
          const fieldObj = await app.getField(field, qStateName);
          await fieldObj.selectExcluded(softLock);
        }
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'selectPossible',
    translation: 'Object.ActionButton.SelectPossibleValues',
    group: 'selection',
    getActionCall:
      ({ app, qStateName, field, softLock }) =>
      async () => {
        if (field) {
          const fieldObj = await app.getField(field, qStateName);
          await fieldObj.selectPossible(softLock);
        }
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: ['field', 'softLock'],
  },
  {
    value: 'toggleSelect',
    translation: 'Object.ActionButton.ToggleFieldSelection',
    group: 'selection',
    getActionCall:
      ({ app, qStateName, field, value, softLock }) =>
      async () => {
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
    getActionCall:
      ({ app }) =>
      async () => {
        await app.lockAll();
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: [],
  },
  {
    value: 'lockField',
    translation: 'Object.ActionButton.LockField',
    group: 'selection',
    getActionCall:
      ({ app, qStateName, field }) =>
      async () => {
        if (field) {
          const fieldObj = await app.getField(field, qStateName);
          await fieldObj.lock();
        }
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: ['field'],
  },
  {
    value: 'unlockAll',
    translation: 'Object.ActionButton.UnlockAllSelections',
    group: 'selection',
    getActionCall:
      ({ app }) =>
      async () => {
        await app.unlockAll();
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: [],
  },
  {
    value: 'unlockField',
    translation: 'Object.ActionButton.UnlockAField',
    group: 'selection',
    getActionCall:
      ({ app, qStateName, field }) =>
      async () => {
        if (field) {
          const fieldObj = await app.getField(field, qStateName);
          await fieldObj.unlock();
        }
      },
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('advancedSelectionOptions'),
    requiredInput: ['field'],
  },
  {
    value: 'setVariable',
    translation: 'Object.ActionButton.SetVariable',
    group: 'variables',
    getActionCall:
      ({ app, variable, value }) =>
      async () => {
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
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('reloadData'),
    getActionCall:
      ({ app, partial }) =>
      async () => {
        const e = await app.doReload(0, !!partial, false);
        if (e) {
          await app.doSave();
        }
      },
    requiredInput: ['partial'],
  },
  {
    /** *************************************
     * Execute Automation contacts internal urls to obtain automation
     * information and execute the automation selected in the property panel in
     * edit mode.
     *
     * ARGS
     * app - Reference to current app inherited from index.js
     * automation - the item id of the automation to contact the items api. Only needed if SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER is not enabled
     * automationId - the automation id of the automation. Needed if SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER is enabled
     * automationTriggered - If true, triggers the automation using the automations webhook URL, otherwise it will trigger the automation using the automations run API
     * automationExecutionToken - token which is needed if triggering the automation using the automations webhook URL
     * automationPostData - If true, creates a temporary bookmark and posts the resulting temporary bookmark id to the automation
     * buttonId - the id of the button itself. Used to get the sheet id which the button is on to post the sheet id as an to the automation
     * multiUserAutomation - Determines if SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER is enabled or not
     */

    translation: 'Object.ActionButton.ExecuteAutomation',
    value: 'executeAutomation',
    getActionCall:
      ({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        showNotification,
        notificationDuration,
        buttonId,
        openLinkInNewTab,
        multiUserAutomation,
      }) =>
      async () => {
        if (multiUserAutomation) {
          let automationUrl;
          if (automation !== undefined && automationId.length < 1) {
            const a = await getAutomationFromItem(automation);
            automationUrl = `../api/v1/automations/${a.id}/runs`;
          } else if (automationId !== undefined && automationTriggered) {
            automationUrl = `../api/v1/automations/${automationId}/actions/execute?X-Execution-Token=${automationExecutionToken}`;
          } else if (automationId !== undefined && !automationTriggered) {
            automationUrl = `../api/v1/automations/${automationId}/runs`;
          } else {
            return;
          }
          let bookmark;
          if (automationPostData) {
            const bookmarkProps = {
              qOptions: {
                qIncludeVariables: true,
                qIncludeAllPatches: true,
              },
            };
            bookmark = await app.createTemporaryBookmark(bookmarkProps);
          }
          const user = await getUser();
          const inputs = {
            app: app.id,
            bookmark: automationPostData ? bookmark : '',
            sheet: await getSheetId(app, buttonId),
            user: user.subject,
            space: await getSpaceId(app.id),
            tenant: user.tenantId,
            time: new Date(),
          };
          const automationData = {
            id: automationId,
            inputs,
            context: 'qsbutton',
          };
          const headers = {
            'Content-Type': 'application/json',
            'qlik-csrf-token': await getCsrfToken(),
          };
          if (automationTriggered) {
            headers['X-Execution-Token'] = automationExecutionToken;
          }
          const postOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(automationTriggered ? inputs : automationData),
          };
          const response = await fetch(automationUrl, postOptions);
          const msg = await getAutomationMsg(automationId, automationTriggered, response);
          if (showNotification) {
            createSnackbar(msg, notificationDuration, openLinkInNewTab);
          }
        } else if (automation !== undefined) {
          try {
            automation = encodeURIComponent(automation);
            const itemInfo = await fetch(`../api/v1/items/${automation}`).then((response) => response.json());
            const autoInfo = await fetch(`../api/v1/automations/${itemInfo.resourceId}`).then((response) =>
              response.json()
            );
            let executePath = `../api/v1/automations/${autoInfo.id}/actions/execute?X-Execution-Token=${autoInfo.executionToken}`;
            if (automationPostData) {
              const inputBlocks = await fetch(`../api/v1/automations/${itemInfo.resourceId}/blocks`)
                .then((response) => response.json())
                .then((blocks) => {
                  let items = [];
                  for (let i = 0; i < blocks.blocks.length; i++) {
                    if (blocks.blocks[i].type === 'FormBlock') {
                      items = blocks.blocks[i].form;
                      break;
                    }
                  }
                  return items;
                });
              if (inputBlocks.length > 0) {
                const newDate = new Date();
                const bmkProp = {
                  qProp: {
                    qInfo: {
                      qId: `automation_${app.id}_${automation}_${newDate.getTime()}`,
                      qType: 'bookmark',
                    },
                    qMetaDef: {
                      title: `Generated automation bookmark on ${newDate.toISOString()}`,
                      description:
                        'Generated to provide target automation with bookmark to get current selection state',
                      _createdBy: 'sn-action-button',
                      _createdFor: 'automation',
                      _createdOn: `${newDate.toISOString()}`,
                      _id: `automation_${encodeURIComponent(app.id)}_${automation}_${newDate.getTime()}`,
                    },
                  },
                };
                const bmk = await app
                  .createBookmark(bmkProp)
                  .then((bookmark) => bookmark.getLayout())
                  .then((layout) => layout.qInfo.qId);
                await app.saveObjects();
                executePath = `${executePath}&${inputBlocks[0].label.toLowerCase()}=${encodeURIComponent(
                  app.id
                )}&${inputBlocks[1].label.toLowerCase()}=${bmk}`;
              }
            }
            // execute the automation
            await fetch(executePath).then((response) => response.json());
          } catch (e) {
            // no-op
          }
        }
      },
    requiredInput: ['automation'],
    hide: ({ isEnabled }) => !isEnabled?.('ACTION_BUTTON_AUTOMATIONS'),
  },
  {
    value: 'refreshDynamicViews',
    translation: 'Object.ActionButton.RefreshDynamicViews',
    group: 'dynamicViews',
    getActionCall:
      ({ senseNavigation }) =>
      async () => {
        if (typeof senseNavigation.refreshDynamicViews === 'function') {
          await senseNavigation.refreshDynamicViews();
        }
      },
    requiredInput: [],
  },
];

export const getActionsList = (shouldHide) => actions.filter((a) => !a.hide?.(shouldHide));

export function checkShowAction(data, field) {
  const act = actions.find((action) => data.actionType === action.value);
  return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
}

export default actions;
