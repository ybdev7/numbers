import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  // roots: [
  //   "<rootDir>/src"
  // ],
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  // setupFilesAfterEnv: ['./tests/bootstrap.ts']

  //this match will ensure that only .ts files are run by jest, excluding the .js files created in dist folder
  testMatch: [
    "**/test/**/**/*.+(ts|tsx)",
    "**/?(*.)+(spec|test).+(ts|tsx)"
  ],
};
export default config;