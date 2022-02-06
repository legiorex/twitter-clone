module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'airbnb',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    globals: {
        React: 'readonly',
    },
    settings: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    rules: {
        'import/extensions': [0],
        'import/no-unresolved': [0],
        'arrow-body-style': [0],
        'react/prop-types': [0],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
        ],
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'never' },
        ],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-unused-vars': ['warn'],
    },
}
