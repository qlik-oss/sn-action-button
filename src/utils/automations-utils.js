export default async function getAutomationData() {
  const automations = await fetch('../api/v1/items?resourceType=automation&limit=100')
    .then((response) => response.json());
  const promises = automations.data.map(async blend => {
    const autoInfo = await fetch(`../api/v1/automations/${blend.resourceId}`)
      .then((response) => response.json());
    return autoInfo;
  });
  const automationDetails = await Promise.all(promises);
  const triggeredAutomations = automationDetails.filter((automationDetail) => automationDetail.run_mode === 'triggered');
  const promises2 = triggeredAutomations.map(async item => {
    const autoPath = `../api/v1/automations/${item.guid}/actions/execute?X-Execution-Token=${item.execution_token}`;
    const autoDef = {
      value: JSON.stringify({
        executePath: autoPath,
        resourceId: item.guid,
        inputBlocks: item.inputs
      }),
      label: item.name
    };
    return autoDef;
  });
  const autoInfos = await Promise.all(promises2);
  return autoInfos;
}
