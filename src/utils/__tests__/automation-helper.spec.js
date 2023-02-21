import {
  parseOutput,
  getAutomationUrl,
  getInputBlocks,
  getPostOptions,
} from '../automation-helper';

describe('automation helper', () => {
  const appId = 'fakeAppId';
  const app = { id: appId };
  const csrfToken = 'fakeCsrfToken';
  const spaceId = 'fakeSpaceId';
  const sheetId = 'fakeSheetId';
  const subject = 'fakeSubject';
  const tenantId = 'fakeTenantId';
  const automationId = 'fakeAutomationId';
  const automationExecutionToken = 'fakeExecutionToken';
  const automationData = {
    id: automationId,
    inputs: {
      app: app.id,
      sheet: sheetId,
      user: subject,
      space: spaceId,
      tenant: tenantId,
      time: new Date(),
    },
    context: 'qsbutton',
  };
  let automationTriggered;
  let bookmark;
  let translator;
  let status;
  let title;
  let responseStatus;
  describe('all automation helper', () => {
    beforeEach(() => {
      translator = {
        get: (key) => key,
      };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => ({
            attributes: { spaceId },
            subject,
            tenantId,
            guid: automationId,
            status,
            title,
          }),
          status: responseStatus,
          headers: { get: () => csrfToken },
        })
      );
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('empty string should return automation finished message', () => {
      const data = '';
      const result = parseOutput(data, translator);
      expect(result.message).toEqual('Automation finished');
    });
    it('string should return string', () => {
      const data = 'Hello World';
      const result = parseOutput(data, translator);
      expect(result.message).toEqual('Hello World');
    });
    it('array should return combined string', () => {
      const data = ['Hello', 'World'];
      const result = parseOutput(data, translator);
      expect(result.message).toEqual('Hello World');
    });
    it('object with message key should return message as is', () => {
      const data = { message: 'Woooooo' };
      const result = parseOutput(JSON.stringify(data), translator);
      expect(result).toEqual(data);
    });
    it('triggered automation should return triggered url', () => {
      automationTriggered = true;
      const result = getAutomationUrl(automationId, automationTriggered, automationExecutionToken);
      expect(result).toEqual(
        `../api/v1/automations/${automationId}/actions/execute?X-Execution-Token=${automationExecutionToken}`
      );
    });
    it('not triggered automation should return run url', () => {
      automationTriggered = false;
      const result = getAutomationUrl(automationId, automationTriggered, automationExecutionToken);
      expect(result).toEqual(`../api/v1/automations/${automationId}/runs`);
    });
    it('without bookmark should only return one block', () => {
      const result = getInputBlocks(bookmark);
      expect(result.blocks.length).toEqual(1);
    });
    it('with bookmark should only return two blocks', () => {
      bookmark = 'Temp\\Bookmark';
      const result = getInputBlocks(bookmark);
      expect(result.blocks.length).toEqual(2);
    });
    it('triggered should return header with execution token and only inputs in the body', async () => {
      automationTriggered = true;
      const headers = {
        'Content-Type': 'application/json',
        'qlik-csrf-token': csrfToken,
        'X-Execution-Token': automationExecutionToken,
      };
      const postOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(automationData.inputs),
      };
      const result = await getPostOptions(automationTriggered, automationExecutionToken, automationData);
      expect(result).toEqual(postOptions);
    });
    it('non triggered automation should return header without execution be equal to automation data', async () => {
      automationTriggered = false;
      const headers = {
        'Content-Type': 'application/json',
        'qlik-csrf-token': csrfToken,
      };
      const postOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(automationData),
      };
      const result = await getPostOptions(automationTriggered, automationExecutionToken, automationData);
      expect(result).toEqual(postOptions);
    });
  });
});
