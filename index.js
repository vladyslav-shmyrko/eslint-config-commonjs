'use strict';

const rules = [
  './rules/best-practices',
  './rules/ecmascript-6',
  './rules/nodejs-and-commonjs',
  './rules/parser-options',
  './rules/stylistic-issues',
  './rules/variables',
].map(require.resolve);

module.exports = {
  extends: ['eslint:recommended', ...rules],
};
