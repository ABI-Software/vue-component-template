import pluginVue from 'eslint-plugin-vue'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  // add more generic rulesets here,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      // override/add rules settings here,
      'vue/no-unused-vars': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      '@stylistic/js/semi': 'warn',
    }
  }
]
