describe('getAutomationData', () => {
  const runMode = 'triggered';
  let automations;
  let automationDetail;
  let automationDetails;
  let autoInfos;

  beforeEach(() => {
    automations = {
      data: [
        {
          id: 1,
          name: 'foo',
          runMode
        },
        {
          id: 2,
          name: 'bar',
          runMode
        }
      ]
    };
    automationDetail = {
      id: 1,
      name: 'foo',
      runMode,
      executionToken: 'abc',
      workspace: {
        blocks: [{
          name: 'inputs',
          type: 'FormBlock',
          form: [
            {
              id: 'inputs-input-0',
              type: 'input',
              label: 'app-id'
            },
            {
              id: 'inputs-input-1',
              type: 'input',
              label: 'bookmarkid'
            }
          ],
        }
        ]
      }
    };
    automationDetails = [{
      id: 1,
      name: 'foo',
      runMode,
      executionToken: 'abc',
      workspace: {
        blocks: [{
          name: 'inputs',
          type: 'FormBlock',
          form: [
            {
              id: 'inputs-input-0',
              type: 'input',
              label: 'app-id'
            },
            {
              id: 'inputs-input-1',
              type: 'input',
              label: 'bookmarkid'
            }
          ],
        }
        ]
      }
    },
    {
      id: 2,
      name: 'bar',
      runMode,
      executionToken: '123',
      workspace: {
        blocks: [{
          name: 'inputs',
          type: 'FormBlock',
          form: [
            {
              id: 'inputs-input-0',
              type: 'input',
              label: 'app-id'
            },
            {
              id: 'inputs-input-1',
              type: 'input',
              label: 'bookmarkid'
            }
          ],
        }
        ]
      }
    }];
    autoInfos = [
      {
        value: JSON.stringify({
          executePath: '../api/v1/automations/foo/actions/execute?X-Execution-Token=abc',
          id: 1,
          inputBlocks: [
            {
              id: 'inputs-input-0',
              type: 'input',
              label: 'app-id'
            },
            {
              id: 'inputs-input-1',
              type: 'input',
              label: 'bookmarkid'
            }
          ],
        }),
        label: 'foo'
      },
      {
        value: JSON.stringify({
          executePath: '../api/v1/automations/bar/actions/execute?X-Execution-Token=123',
          id: 2,
          inputBlocks: [
            {
              id: 'inputs-input-0',
              type: 'input',
              label: 'app-id'
            },
            {
              id: 'inputs-input-1',
              type: 'input',
              label: 'bookmarkid'
            }
          ],
        }),
        label: 'bar'
      }
    ];
  });

  afterEach(() => {
    // jest.resetAllMocks();
  });

  it('Should return an array list of automations', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => ({ automations }) }));

    const MyFetch = await global.fetch('../api/v1/automations?limit=100&filter=runMode eq "triggered"');
    expect(global.fetch).toHaveBeenCalled;
    expect(global.fetch).toHaveBeenCalledWith('../api/v1/automations?limit=100&filter=runMode eq "triggered"');
    expect(MyFetch.json().automations.data.length).toBeGreaterThan(0);
    expect(MyFetch.json().automations.data).toEqual(expect.any(Array));
  });

  it('Should map the automations data to a new array containing fetch responses of each automation detail', async (done) => {
    expect(automations.data).toEqual(expect.any(Array));
    expect(automations.data.length).toBeGreaterThan(0);
    const detes = automationDetails;
    // we pass the index to this function
    const promises = async (index) => {
      const autoId = detes[index].id;
      const urlPath = ['..api/v1/automations/1', '..api/v1/automations/2'];
      global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ automationDetail: detes[index] }) }));
      const autoInfo = await global.fetch(urlPath[index]);
      // expect(global.fetch).toBe(urlPath[index]);
      // expect(global.fetch).toHaveBeenCalled;
      expect(autoInfo.json().automationDetail.id).toEqual(autoId);
      return autoInfo;
    };

    const responses = await Promise.all([
      promises(0),
      promises(1),
    ]);

    expect(responses).toEqual(automationDetails);

    done();
  });

  it('Should take the resulting automation details and create an array with the trigger url to call plus the input blocks', async () => {
    expect(automationDetails).toEqual(expect.any(Array));
    expect(automationDetails.length).toBeGreaterThan(0);
    const promises = async (item) => {
      const autoPath = `../api/v1/automations/${item.id}/actions/execute?X-Execution-Token=${item.executionToken}`;
      const autoDef = {
        value: JSON.stringify({
          executePath: autoPath,
          id: item.id,
          inputBlocks: item.workspace.blocks.find(block => block.type === 'FormBlock').form || []
        }),
        label: item.name
      };
      return autoDef;
    };

    const responses = Promise.all([
      promises(automationDetail)
    ]);

    expect(responses).toEqual(autoInfos);
  });
});
