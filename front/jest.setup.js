import '@testing-library/jest-native/extend-expect';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
global.setImmediate = global.setImmediate || ((fn, ...args) => global.setTimeout(fn, 0));
const originalConsoleError = console.error;
global.clearImmediate = global.clearImmediate || ((id) => global.clearTimeout(id));

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((message, ...args) => {
    if (typeof message === 'string' && message.includes('act(...)')) {
      return;
    }
    originalConsoleError(message, ...args);
  });
});