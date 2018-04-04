/* eslint flowtype/require-valid-file-annotation: 0 */

var ignoreModule = '<rootDir>/tests/empty-module.js';
module.exports = {
  'globals': {
    'ts-jest': {
      'tsConfigFile': 'tsconfig.json',
      'disableSourceMapSupport': false,
      'useBabelrc': true,
      'skipBabel': false,
    },
  },
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  //'setupTestFrameworkScriptFile': path.resolve(__dirname, './jest-test-common-setup.js'),
  'testRegex': '.*\\.test\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  // 'resolver': 'jest-shift-resolver',
   'moduleNameMapper': {
     '\.s?css$': ignoreModule,
   },
};

