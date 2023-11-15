'use strict';

module.exports = Object.freeze({
  env: Object.freeze({
    es6: true,
  }),
  rules: Object.freeze({
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
  }),
});
