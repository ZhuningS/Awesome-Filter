// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'spaced-comment': 1,
    'quotes': 0,
    'indent': 0,
    'arrow-parens': 0,
    'no-new': 0,
    'semi': 0,
    'eqeqeq': 0, //使用严格等于
    'no-var': 0,
    'no-tabs': 0,
    'no-undef': 0,
    'no-plusplus': 0,
    'func-names': 0,
    'no-alert': 0,
    'no-console': 0,
    'comma-dangle': 0,
    'padded-blocks': 0,
    'handle-callback-err': 0,
    'no-unused-vars': 0,
    'errow-spacing': 0,
    'no-space-func': 0,
    'space-in-parens': 0,
    'no-multi-spaces': 0,
    'no-trailing-spaces': 0,
    'no-useless-escape': 0,
    'no-mixed-operators': 0,
    'import/no-unresolved': 0,
    'prefer-default-export': 0,
    'no-unused-expressions': 0,
    // allow paren-less arrow functions
    'no-mixed-spaces-and-tabs': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'space-before-function-paren': 0, // 函数定义时括号前面要不要有空格
    'object-property-newline': 0, // 对象属性换行
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0

  }
};
