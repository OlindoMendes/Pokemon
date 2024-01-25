export const root = true;
export const env = {
  browser: true,
  node: true,
  jest: {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': 'vue-jest',
    },
  },
};
export const plugins = ['vue', 'prettier'];
export const extends = [
  'airbnb-base',
  'plugin:vue/vue3-recommended',
  'plugin:prettier/recommended',
  '@vue/prettier',
  'prettier',
];
export const rules = {
  'vue/script-setup-uses-vars': 'error',
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

  // Disable the following rule, because it's not relevant for the tool chain and test envoirment.
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['tailwind.config.js', 'vite.config.js'],
    },
  ],

  'vue/component-tags-order': [
    'error',
    {
      order: ['template', 'script', 'style'],
    },
  ],

  // Enforce v-bind directive usage in long form.
  'vue/v-bind-style': ['error', 'longform'],

  // Enforce v-on directive usage in long form.
  'vue/v-on-style': ['error', 'longform'],

  // Don't require a default value for the props.
  'vue/require-default-prop': 'off',

  'vue/multi-word-component-names': 'off',
};
export const overrides = [];
export const globals = {
  defineProps: 'readonly',
  defineEmits: 'readonly',
  defineExpose: 'readonly',
  withDefaults: 'readonly',
};
export const parser = 'vue-eslint-parser';
export const parserOptions = {
  sourceType: 'module',
  ecmaVersion: 2020, // allow the parsing of modern ecmascript
};
