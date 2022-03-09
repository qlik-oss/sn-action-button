describe('getAutomationData', () => {
  const blendName = 'someFakeBlendName';
  const resourceId = 'someFakeResourceId';
  const guid = 'someFakeGuid';
  const runMode = 'triggered';
  const executionToken = 'someFakeExecutionToken';
  let automations;

  const automation = {
    guid,
    name: blendName,
    run_mode: runMode,
    execution_token: executionToken
  };

  beforeEach(() => {
    automations = { data: [
      {
        guid: 'someFakeGuid',
        resourceId: 'someFakeResourceId',
        name: 'someFakeName'
      },
      {
        guid: 'someFakeGuid',
        resourceId: 'someFakeResourceId',
        name: 'someFakeName'
      }
    ] };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should return an array list of automations', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => automations }));

    const MyFetch = await global.fetch('../api/v1/items?resourceType=automation&limit=100');
    expect(global.fetch).toHaveBeenCalled;
    expect(global.fetch).toHaveBeenCalledWith('../api/v1/items?resourceType=automation&limit=100');
    expect(MyFetch.json().data.length).toBeGreaterThan(0);
    expect(MyFetch.json().data).toEqual(expect.any(Array));
  });

  it('Should call the array function to map automation information', async () => {
    expect(automations.data).toEqual(expect.any(Array));
    global.fetch = jest.fn(() => Promise.resolve({ json: () => automation }));
    expect(automations.data.length).toBeGreaterThan(0);
    const myFetch = await global.fetch(`..api/v1/automations/${resourceId}`);
    expect(global.fetch).toHaveBeenCalled;
    expect(global.fetch).toHaveBeenCalledWith(`..api/v1/automations/${resourceId}`);
    expect(myFetch.json().run_mode).toEqual(runMode);
  });
});
