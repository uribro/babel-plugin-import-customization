const Module = require('./lib').default;
const RequireComponent = require('./lib').RequireComponent;

test('it should customize and import original file into customization', () => {
  const module = new Module();

  expect(module.print()).toBe('core code and cust code');
});


test('it should customize and import original file into customization with require', () => {
  const module = new RequireComponent();

  expect(module.print()).toBe('require core code and require cust code');
});








