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
  });
  describe('createSnackbar', () => {
    it('should create snackbar without url', () => {
      const message = { message: 'text message' };
      const result = createSnackbar(message, false, false).innerHTML;
      const expected = `<div class="sn-action-button-snackbar" style="display: flex; justify-content: space-between; height: 100%; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" height="16px" fill="currentColor" aria-hidden="true" role="img" data-testid="status-indicator__valid">
      <defs>
        <path id="tick_svg__tick-a" d="m6 10 7-7 2 2-7 7-2 2-5-5 2-2 3 3Z"></path>
      </defs>
      <use xlink:href="#tick_svg__tick-a" fill-rule="evenodd"></use>
    </svg>
    <span class="sn-action-button-snackbar-text" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">text message</span>
    <span style="cursor: pointer;">
      <svg class="sn-action-button-snackbar-close" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.34535242,8 L13.3273238,11.9819714 C13.6988326,12.3534802 13.6988326,12.955815 13.3273238,13.3273238 C12.955815,13.6988326 12.3534802,13.6988326 11.9819714,13.3273238 L8,9.34535242 L4.01802863,13.3273238 C3.64651982,13.6988326 3.04418502,13.6988326 2.67267621,13.3273238 C2.3011674,12.955815 2.3011674,12.3534802 2.67267621,11.9819714 L6.65464758,8 L2.67267621,4.01802863 C2.3011674,3.64651982 2.3011674,3.04418502 2.67267621,2.67267621 C3.04418502,2.3011674 3.64651982,2.3011674 4.01802863,2.67267621 L8,6.65464758 L11.9819714,2.67267621 C12.3534802,2.3011674 12.955815,2.3011674 13.3273238,2.67267621 C13.6988326,3.04418502 13.6988326,3.64651982 13.3273238,4.01802863 L9.34535242,8 Z">
        </path>
      </svg>
    </span>
  </div>`;
      expect(prettier.format(result.trim(), { parser: 'html' })).toEqual(
        prettier.format(expected.trim(), { parser: 'html' })
      );
    });

    it('should create snackbar with url', () => {
      const message = { message: 'text message', url: 'www.qlik.com' };
      const result = createSnackbar(message, false, false).innerHTML;
      const expected = `<div class="sn-action-button-snackbar" style="display: flex; justify-content: space-between; height: 100%; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" height="16px" fill="currentColor" aria-hidden="true" role="img" data-testid="status-indicator__valid">
      <defs>
        <path id="tick_svg__tick-a" d="m6 10 7-7 2 2-7 7-2 2-5-5 2-2 3 3Z"></path>
      </defs>
      <use xlink:href="#tick_svg__tick-a" fill-rule="evenodd"></use>
    </svg>
    <span class="sn-action-button-snackbar-text" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">text message<a href="http://www.qlik.com" style="margin-left: 6px;" target="_blank">Open</a></span>
    <span style="cursor: pointer;">
      <svg class="sn-action-button-snackbar-close" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.34535242,8 L13.3273238,11.9819714 C13.6988326,12.3534802 13.6988326,12.955815 13.3273238,13.3273238 C12.955815,13.6988326 12.3534802,13.6988326 11.9819714,13.3273238 L8,9.34535242 L4.01802863,13.3273238 C3.64651982,13.6988326 3.04418502,13.6988326 2.67267621,13.3273238 C2.3011674,12.955815 2.3011674,12.3534802 2.67267621,11.9819714 L6.65464758,8 L2.67267621,4.01802863 C2.3011674,3.64651982 2.3011674,3.04418502 2.67267621,2.67267621 C3.04418502,2.3011674 3.64651982,2.3011674 4.01802863,2.67267621 L8,6.65464758 L11.9819714,2.67267621 C12.3534802,2.3011674 12.955815,2.3011674 13.3273238,2.67267621 C13.6988326,3.04418502 13.6988326,3.64651982 13.3273238,4.01802863 L9.34535242,8 Z">
        </path>
      </svg>
    </span>
  </div>`;
      expect(prettier.format(result.trim(), { parser: 'html' })).toEqual(
        prettier.format(expected.trim(), { parser: 'html' })
      );
    });

    it('should create snackbar with url in using same window', () => {
      const message = { message: 'text message', url: 'www.qlik.com' };
      const result = createSnackbar(message, true).innerHTML;
      const expected = `<div class="sn-action-button-snackbar" style="display: flex; justify-content: space-between; height: 100%; align-items: center;">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" height="16px" fill="currentColor" aria-hidden="true" role="img" data-testid="status-indicator__valid">
      <defs>
        <path id="tick_svg__tick-a" d="m6 10 7-7 2 2-7 7-2 2-5-5 2-2 3 3Z"></path>
      </defs>
      <use xlink:href="#tick_svg__tick-a" fill-rule="evenodd"></use>
    </svg>
    <span class="sn-action-button-snackbar-text" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">text message<a href="http://www.qlik.com" style="margin-left: 6px;" target="_self">Open</a></span>
    <span style="cursor: pointer;">
      <svg class="sn-action-button-snackbar-close" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.34535242,8 L13.3273238,11.9819714 C13.6988326,12.3534802 13.6988326,12.955815 13.3273238,13.3273238 C12.955815,13.6988326 12.3534802,13.6988326 11.9819714,13.3273238 L8,9.34535242 L4.01802863,13.3273238 C3.64651982,13.6988326 3.04418502,13.6988326 2.67267621,13.3273238 C2.3011674,12.955815 2.3011674,12.3534802 2.67267621,11.9819714 L6.65464758,8 L2.67267621,4.01802863 C2.3011674,3.64651982 2.3011674,3.04418502 2.67267621,2.67267621 C3.04418502,2.3011674 3.64651982,2.3011674 4.01802863,2.67267621 L8,6.65464758 L11.9819714,2.67267621 C12.3534802,2.3011674 12.955815,2.3011674 13.3273238,2.67267621 C13.6988326,3.04418502 13.6988326,3.64651982 13.3273238,4.01802863 L9.34535242,8 Z">
        </path>
      </svg>
    </span>
  </div>`;
      expect(prettier.format(result.trim(), { parser: 'html' })).toEqual(
        prettier.format(expected.trim(), { parser: 'html' })
      );
    });
  });
});
