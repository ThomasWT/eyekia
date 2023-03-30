module.exports = {
  preset: 'ts-jest',
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testTimeout: 30000,
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/.jest/setEnvVars.cjs'],
  testMatch: [
    "<rootDir>/tests/**/*.spec.(js|jsx|ts|tsx|mjs)",
    "<rootDir>/tests/**/*.test.(js|jsx|ts|tsx|mjs)",
  ],
  moduleFileExtensions: ['js', 'mjs', 'cjs'],
};