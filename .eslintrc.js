/**
 * @format
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'flowtype'],
  // 忽略根目录下的配置文件
  ignorePatterns: ['.*.js'],
  settings: {
    flowtype: {
      // 只在 @flow 标注的文件内进行检查
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [2, 'only-multiline'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/interface-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],
    'flowtype/no-mixed': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 1,
    'flowtype/object-type-delimiter': 0,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-readonly-react-props': 0,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        annotateUndefined: 'never',
      },
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,

    // 生产环境禁用 debugger：错误
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
  },
};
