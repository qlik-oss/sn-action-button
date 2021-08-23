// import Util from './util';

// const inIframe = () => {
//   try {
//     return window.self !== window.top;
//   } catch (error) {
//     return true;
//   }
// };

const automationDataTypes = [
  {
    translation: 'Object.ActionButton.NoNavigation',
    value: 'none',
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
    requiredInput: ['currentSelections']
  }
];

export const checkShowAutomationDataType = (data, field) => {
  const dat = automationDataTypes.find((dataType) => data.dataType.action === dataType.value);
  return dat && dat.requiredInput && dat.requiredInput.indexOf(field) !== -1;
};

export default automationDataTypes;
