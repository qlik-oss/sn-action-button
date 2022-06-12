export default async function getAutomationData() {
  const automations = await fetch('../api/v1/automations?limit=100&filter=runMode eq "triggered"')
    .then((response) => response.json());
  // console.log(automations);
  const promises = automations.data.map(async blend => {
    const autoInfo = await fetch(`../api/v1/automations/${blend.id}`)
      .then((response) => response.json());
    return autoInfo;
  });
  const automationDetails = await Promise.all(promises);
  const moreDetes = automationDetails.map(async item => {
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
  });
  const autoDefInfo = await Promise.all(moreDetes);
  return autoDefInfo;
}
