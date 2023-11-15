'use strict';

module.exports = Object.freeze({
  env: Object.freeze({
    node: true,
  }),
  rules: Object.freeze({
    'handle-callback-err': ['error', '^err'],
  }),
});
