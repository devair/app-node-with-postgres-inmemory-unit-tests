export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json'],
    rootDir: 'src',
    testRegex: '.*\\.test\\.ts$',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    }
  };
  