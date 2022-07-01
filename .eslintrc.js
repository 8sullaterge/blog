module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', 'prettier', '@typescript-eslint'],
    rules: {
        'vue/no-v-html': 'off'
    }
}
