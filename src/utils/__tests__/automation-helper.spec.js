import prettier from 'prettier';
import {
  parseOutput,
  getAutomationUrl,
  getInputBlocks,
  getPostOptions,
  createSnackbar,
  automationRunPolling,
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
  const runId = 'fakeRunId';
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
    it('should return after status changed to finsihed', async () => {
      jest.useFakeTimers({ advanceTimers: true });
      const queued = { status: 'queued' };
      const finished = { status: 'finished', title: 'Automation done running!' };
      global.fetch = jest
        .fn()
        .mockResolvedValueOnce({ json: () => Promise.resolve(queued) })
        .mockResolvedValueOnce({ json: () => Promise.resolve(finished) });
      const prom = new Promise((resolve) => {
        automationRunPolling(automationId, runId, translator, 0, resolve);
      });
      jest.runAllTicks();
      jest.runAllTimers();
      const result = await prom;
      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(result).toEqual({ ok: true, message: 'Automation done running!' });
    });
    it('should return an error when status changed to failed', async () => {
      jest.useFakeTimers({ advanceTimers: true });
      const queued = { status: 'queued' };
      const failed = { status: 'failed', title: null };
      global.fetch = jest
        .fn()
        .mockResolvedValueOnce({ json: () => Promise.resolve(queued) })
        .mockResolvedValueOnce({ json: () => Promise.resolve(failed) });
      const prom = new Promise((resolve) => {
        automationRunPolling(automationId, runId, translator, 0, resolve);
      });
      jest.runAllTicks();
      jest.runAllTimers();
      const result = await prom;
      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(result).toEqual({ ok: false, message: 'Automation error' });
    });
  });
  describe('createSnackbar', () => {
    it('should create snackbar without url', () => {
      const message = { message: 'text message' };
      const result = createSnackbar(message, false, false).innerHTML;
      expect(prettier.format(result.trim(), { parser: 'html' })).toMatchSnapshot();
    });
    it('should create snackbar with url', () => {
      const message = { message: 'text message', url: 'www.qlik.com' };
      const result = createSnackbar(message, false, false).innerHTML;
      expect(prettier.format(result.trim(), { parser: 'html' })).toMatchSnapshot();
    });

    it('should create snackbar with url in using same window', () => {
      const message = { message: 'text message', url: 'www.qlik.com' };
      const result = createSnackbar(message, true).innerHTML;
      expect(prettier.format(result.trim(), { parser: 'html' })).toMatchSnapshot();
    });
    it('should create snackbar with error icon', () => {
      const message = { message: 'text message' };
      const result = createSnackbar(message, false, true).innerHTML;
      expect(prettier.format(result.trim(), { parser: 'html' })).toMatchSnapshot();
    });
  });
});
