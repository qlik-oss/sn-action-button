import getAllAutomations from '../list-automations';

describe('getAllAutomations', () => {
  const url = '../api/v1/items?resourceType=automation';
  const items = [
    {
      name: 'fakeAutomation',
      id: '610d46826f11461b3a1e2730',
    }
  ];
  const automationName = 'fakeAutomationName';
  const automationId = 'automationItemId';

  it('should return an array if automations exist', () => {
    const result = getAllAutomations(url, items);
    expect(result).to.have.length(1);
    expect(result[0].name).to.equal(automationName);
    expect(result[0].id).to.equal(automationId);
  });
  it("should return an empty array if data doesn't exist", () => {
    const result = getAllAutomations(url, items);
    expect(result).to.have.length(0);
  });
});
