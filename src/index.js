import {
  useElement,
  useStaleLayout,
  useEffect,
  useMemo,
  useApp,
  useConstraints,
  useTheme,
  useImperativeHandle,
} from '@nebula.js/stardust';

import properties from './object-properties';
import data from './data';
import ext from './ext';

import { renderButton } from './components/action-button';
import {
  applyAutomationExecutionToken,
  removeAutomationExecutionToken,
  checkIfTriggered,
  getAutomation,
  applyMigration,
  getAutomationFromItem,
  setTriggered
} from './utils/automationHelper';

export default function supernova(env) {
  const {
    sense,
    translator,
    flags: { isEnabled },
    anything,
  } = env;
  const isFeatureBlacklisted = anything.sense?.isFeatureBlacklisted;
  const isUnsupportedFeature = anything.sense?.isUnsupportedFeature;
  const shouldHide = { isEnabled, isFeatureBlacklisted, isUnsupportedFeature };
  const multiUserAutomation = isEnabled?.('SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER')
  const senseNavigation = sense?.navigation;
  properties.style.label = sense ? translator.get('Object.ActionButton') : 'Button';

  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const theme = useTheme();

      useMemo(() => {
        const button = document.createElement('button');
        button.appendChild(document.createElement('text'));
        element.appendChild(button);
      }, []);

      const layout = useStaleLayout();
      const app = useApp();
      const constraints = useConstraints();

      const cleanup = renderButton({ element, layout, constraints, theme, app, senseNavigation, multiUserAutomation });

      useEffect(
        () => () => {
          cleanup();
        },
        [element]
      );

      const automationActions = () => layout.actions.filter(action => action.actionType === 'executeAutomation');

      useEffect(() => {
        if (constraints.active) {
          layout.actions.forEach(async (action, index) => {
            if (action.actionType === 'executeAutomation' && 'automationId' in action) {
              try {
                const automation = await getAutomation(action.automationId);
                const triggered = await checkIfTriggered(automation);
                await setTriggered(app, index, layout.qInfo.qId, triggered);
              }
              catch {
                // continue
              }
            }
          });
        }
      }, [JSON.stringify(automationActions().map((action) => action.automationId))]);

      useEffect(() => {
        if (constraints.active) {
          layout.actions.forEach(async (action, index) => {
            if (action.actionType === 'executeAutomation' && 'automationId' in action) {
              try {
                if (action.automationTriggered) {
                  const automation = await getAutomation(action.automationId);
                  applyAutomationExecutionToken(app, automation, index, layout.qInfo.qId);
                }
                else {
                  removeAutomationExecutionToken(app, index, layout.qInfo.qId);
                }
              }
              catch {
                // continue
              }
            }
          });
        }
      }, [JSON.stringify(automationActions().map((action) => action.automationTriggered))]);

      useEffect(() => {
        if (constraints.active) {
          layout.actions.forEach(async (action, index) => {
            if (action.actionType === 'executeAutomation') {
              try {
                if ('automation' in action) {
                  const automation = await getAutomationFromItem(action.automation);
                  await applyMigration(app, automation, index, layout.qInfo.qId);
                }
              }
              catch {
                // continue
              }
            }
          });
        }
      }, [JSON.stringify(automationActions().map(a => a.automation)), constraints.active]);

      useImperativeHandle(
        () => ({
          focus() {
            element.firstElementChild.onclick();
          },
        }),
        [element]
      );
    },
    ext: ext({ translator, shouldHide, senseNavigation }),
  };
}
