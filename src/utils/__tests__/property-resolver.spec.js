import propertyResolver from '../property-resolver';

describe('getValue', () => {
  let data;
  beforeEach(() => {
    data = { style: { background: { url: 'url' } } };
  });
  it('should return value if reference exists', () => {
    const result = propertyResolver.getValue(data, 'style.background.url');
    expect(result).to.equal('url');
  });
  it("should return default value if reference doesn't exist", () => {
    const result = propertyResolver.getValue(data, 'style.background.urlb', 'default');
    expect(result).to.equal('default');
  });
  it("should return default value if data doesn't exist", () => {
    const result = propertyResolver.getValue(undefined, 'style.background.url', 'default');
    expect(result).to.equal('default');
  });
});
