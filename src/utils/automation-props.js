import { getAutomation, getInputBlocks } from "./automation-helper";

const getAutomationProps = (multiUserAutomation, getAutomations) => ({
  // adds automation to actions and adds a dropdown property panel
  // item to select the automation for the button to trigger

  // Boolean property to instruct the automation action to create a
  // bookmark and send it to the selected automation in the
  // property panel.
  automation: {
    type: "string",
    component: "expression-with-dropdown",
    translation: "Object.ActionButton.Automation",
    ref: "automation",
    dropdownOnly: true,
    options: async () => {
      const automationsResponse = await fetch("../api/v1/items?resourceType=automation&limit=100");
      const automations = await automationsResponse.json();
      return automations.data.map((a) => ({
        value: a.id,
        label: a.name,
      }));
    },
    show: () => !multiUserAutomation,
  },
  automationId: {
    type: "string",
    component: "expression-with-dropdown",
    translation: "Object.ActionButton.Automation",
    ref: "automationId",
    dropdownOnly: false,
    options: async () => getAutomations(),
    show: () => multiUserAutomation,
    change: async (data) => {
      const a = await getAutomation(data.automationId);
      if (data.automationTriggered) {
        data.automationExecutionToken = a.executionToken;
      } else {
        data.automationExecutionToken = "";
      }
    },
  },
  automationLink: {
    translation: "Object.ActionButton.Automation.Link",
    component: "link",
    url: (data) => `/automations/editor/${data.automationId}`,
    show: (data) => data.automationId && data.automationId.length > 1 && multiUserAutomation,
  },
  // Boolean property to instruct the automation action to create a
  // bookmark and send it to the selected automation in the
  // property panel.
  automationPostData: {
    type: "boolean",
    ref: "automationPostData",
    translation: "Object.ActionButton.Automation.SendSelections",
    defaultValue: false,
  },
  includeSelectionsText: {
    translation: `Object.ActionButton.Automation.SendSelectionsHelp`,
    component: "text",
    show: () => multiUserAutomation,
  },
  automationTriggered: {
    type: "boolean",
    ref: "automationTriggered",
    translation: "Object.ActionButton.Automation.RunModeTriggered",
    show: () => multiUserAutomation,
    defaultValue: false,
    change: async (data) => {
      const a = await getAutomation(data.automationId);
      if (data.automationTriggered) {
        data.automationExecutionToken = a.executionToken;
      } else {
        data.automationExecutionToken = "";
      }
    },
  },
  automationTriggeredText: {
    translation: `Object.ActionButton.Automation.RunModeTriggeredHelp`,
    component: "text",
    show: () => multiUserAutomation,
  },
  automationShowNotification: {
    ref: "automationShowNotification",
    type: "boolean",
    translation: "Object.ActionButton.Automation.ShowNotification",
    component: "switch",
    options: [
      {
        value: true,
        translation: "properties.on",
      },
      {
        value: false,
        translation: "properties.off",
      },
    ],
    defaultValue: false,
    show: () => multiUserAutomation,
  },
  automationNotificationDuration: {
    type: "number",
    ref: "automationNotificationDuration",
    translation: "Object.ActionButton.Automation.NotificationDuration",
    defaultValue: 4,
    expression: "optional",
    show: (data) => data.automationShowNotification && multiUserAutomation,
  },
  automationNotificationDurationHelp: {
    translation: `Object.ActionButton.Automation.NotificationDurationHelp`,
    component: "text",
    show: (data) => data.automationShowNotification && multiUserAutomation,
  },
  automationOpenLinkSameWindow: {
    ref: "automationOpenLinkSameWindow",
    type: "boolean",
    translation: "Object.ActionButton.Automation.OpenLinkInSameWindow",
    component: "switch",
    options: [
      {
        value: true,
        translation: "properties.on",
      },
      {
        value: false,
        translation: "properties.off",
      },
    ],
    defaultValue: false,
    show: (data) => data.automationShowNotification && multiUserAutomation,
  },
  copyBlock: {
    component: "button",
    translation: "Object.ActionButton.Automation.CopyInputBlock",
    action(data) {
      navigator.clipboard.writeText(JSON.stringify(getInputBlocks(data.automationPostData)));
    },
    show: () => multiUserAutomation,
  },
});

export default getAutomationProps;
