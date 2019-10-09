import themeResolver from '../theme-resolver';

describe('theme-resolver', () => {
  const palette = ['color1', 'color2', 'color3'];
  it('should resolve color for theme', () => {
    const color = themeResolver.resolveColor('color2', palette);
    expect(color).to.equal('color2');
  });
  it('should take index color from palette', () => {
    const color = themeResolver.resolveColor({ index: 2, color: 'some' }, palette);
    expect(color).to.equal('color3');
  });
  it('should resolve color from input.color', () => {
    const color = themeResolver.resolveColor({ color: 'myColor' }, palette);
    expect(color).to.equal('myColor');
  });
  it('should return none as default', () => {
    const color = themeResolver.resolveColor();
    expect(color).to.equal('none');
  });
});
