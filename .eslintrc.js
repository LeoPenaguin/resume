module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': 'error',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/*.{test,spec}.{j,t}s?(x)',
                '**/tests/**/*.{test,spec}.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
