module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    'extends': [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/react',
        'ts-guard/optimum-next',
        'ts-guard/editor',
        'ts-guard/jsdoc',
    ],
    plugins: ['react-hooks'],
    'settings': {
        'import/resolver': {
            'node': {
                'paths': ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.astro'],
                'typescript': {}
            },
        },
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'builtin',
                    'internal',
                    ['parent'],
                    ['sibling', 'index'],
                    'object',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['external'],
            },
        ],
    },
    'overrides': [
        {
            'files': ['**/*.mjs'],
            'parserOptions': {
                'sourceType': 'module',
                'ecmaVersion': 2020
            }
        },
        {
            'files': ['**/*.ts', '**/*.tsx'],
            'plugins': [
                '@typescript-eslint',
                'react',
                'import',
                'unused-imports',
                'tailwindcss',
            ],
            'extends': [
                'ts-guard/react',
                'ts-guard/ext',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ],
            'parserOptions': {
                'project': './tsconfig.json'
            },
            'rules': {
                'arrow-body-style': 0,
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        'js': 'never',
                        'jsx': 'never',
                        'ts': 'never',
                        'tsx': 'never',
                        '': 'never'
                    }
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        'selector': 'variable',
                        'format': ['camelCase', 'PascalCase', 'UPPER_CASE']
                    }
                ],
                'react/destructuring-assignment': 'off',
                'react/require-default-props': 'off',
                'react/jsx-props-no-spreading': 'off',
                '@typescript-eslint/comma-dangle': 'off',
                '@typescript-eslint/consistent-type-imports': 'error',
                'import/prefer-default-export': 'off',
                'tailwindcss/classnames-order': [
                    'warn',
                    {
                        'officialSorting': true
                    }
                ],
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' } ],
                'import/no-unresolved': [
                    'error',
                    {
                        'ignore': ['@/*']
                    }
                ],
            }
        },
        {
            'files': ['**/*.astro'],
            'plugins': [
                '@typescript-eslint',
                'react',
                'unused-imports',
                'tailwindcss',
                'import'
            ],
            'extends': ['plugin:tailwindcss/recommended'],
            'parser': 'astro-eslint-parser',
            'parserOptions': {
                'parser': '@typescript-eslint/parser',
                'project': './tsconfig.json',
                'extraFileExtensions': ['.astro']
            },
            'rules': {
                'arrow-body-style': 0,
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        'js': 'never',
                        'jsx': 'never',
                        'ts': 'never',
                        'tsx': 'never',
                        '': 'never'
                    }
                ],
                'import/no-unresolved': [
                    'error',
                    {
                        'ignore': ['@/*']
                    }
                ],
                'react/jsx-filename-extension': [1, { 'extensions': ['.astro'] } ],
                'react/destructuring-assignment': 'off',
                'react/require-default-props': 'off',
                'react/jsx-props-no-spreading': 'off',
                '@typescript-eslint/comma-dangle': 'off',
                '@typescript-eslint/consistent-type-imports': 'error',
                'import/prefer-default-export': 'off',
                'tailwindcss/classnames-order': [
                    'warn',
                    {
                        'officialSorting': true
                    }
                ],
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' } ],
            },
            'globals': {
                'Astro': 'readonly'
            },
        }
    ]
};
