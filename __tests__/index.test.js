import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('oppo')).toEqual('oppo');
  expect(reverse('')).toEqual('');
});