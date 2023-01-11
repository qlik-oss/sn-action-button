export const getUser = async () => {
  const response = await fetch(`../api/v1/users/me`);
  const data = await response.json();
  return data;
};

export const getCsrfToken = async () => {
  const response = await fetch('../api/v1/csrf-token');
  return response.headers.get('qlik-csrf-token');
};

export const getSheetId = async (app, buttonId) => {
  const button = await app.getObject(buttonId);
  const parent = await button.getParent();
  return parent.id;
};

export const getSpaceId = async (appId) => {
  const response = await fetch(`../api/v1/apps/${appId}`);
  const data = await response.json();
  return data?.attributes?.spaceId || 'personal';
};

export const getAutomation = async (automationId) => {
  if (automationId.length > 2) {
    const response = await fetch(`../api/v1/automations/${automationId}`);
    return response.json();
  }
  return null;
};

export const checkIfTriggered = async (automation) => automation.runMode === 'triggered';

export const getAutomationFromItem = async (itemId) => {
  const response = await fetch(`../api/v1/items/${itemId}`);
  const data = await response.json();
  return getAutomation(data.resourceId);
};
