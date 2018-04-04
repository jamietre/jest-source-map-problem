/* eslint flowtype/require-valid-file-annotation: 0 */

var ignoreModule = '<rootDir>/src/util/empty-module.js';
module.exports = {
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  'testRegex': '.*\\.test\\.jsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  'moduleNameMapper': {
    '\.s?css$': ignoreModule,
  },
};

