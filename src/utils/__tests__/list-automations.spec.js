import listAutomations from '../list-automations';

describe('getAllAutomations', () => {
  const url = '../api/v1/items?resourceType=automation';
  let items;
  const automationName = 'fakeAutomationName';
  const automationId = 'automationItemId';
  beforeEach(() => {
    items = [];
  });
  it('should return an array if automations exist', () => {
    const result = listAutomations.getAllAutomations(url);
    expect(result).to.have.length(1);
    expect(result[0].name).to.equal(automationName);
    expect(result[0].id).to.equal(automationId);
  });
  it("should return an empty array if data doesn't exist", () => {
    const result = listAutomations.getAllAutomations(url, items);
    expect(result).to.have.length(0);
  });
});
