'use strict';

module.exports = Object.freeze({
  rules: Object.freeze({
    'no-shadow-restricted-names': ['error'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
  }),
});
