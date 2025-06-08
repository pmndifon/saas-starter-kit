/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    // A preset that is used as a base for Jest's configuration
    preset: 'ts-jest',
  
    // The test environment that will be used for testing
    testEnvironment: 'jest-environment-jsdom',
  
    // A map from regular expressions to module names or to arrays of module names
    // that allow to stub out resources with a single module
    moduleNameMapper: {
      // if you are using CSS modules
      '\\.css$': 'identity-obj-proxy',
      // Handle path aliases
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  
    // The setup files to run before each test file in the suite
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };