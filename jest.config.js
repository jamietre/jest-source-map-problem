/* eslint flowtype/require-valid-file-annotation: 0 */

var ignoreModule = '<rootDir>/src/utils/empty-module.js';
module.exports = {
  'globals': {
    'ts-jest': {
      'tsConfigFile': 'tsconfig.json',
      'disableSourceMapSupport': false,
      'useBabelrc': false,
      'skipBabel': false,
    }
  },
  'transform': {
    '^.+\\.jsx?$': "babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testRegex': '.*\\.test\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ]
};

