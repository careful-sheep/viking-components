const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:unicorn/recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.ts', '.js', '.json']
            }
        }
    },
    rules: {
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never'
            }
        ],
        'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
        'import/prefer-default-export': OFF,
        'import/no-unresolved': OFF,
        'import/no-dynamic-require': OFF,

        'unicorn/better-regex': ERROR,
        'unicorn/prevent-abbreviations': OFF,
        'unicorn/filename-case': [
            ERROR,
            {
                cases: {
                    // 中划线
                    kebabCase: true,

                    // 小驼峰
                    camelCase: true,

                    // 下划线
                    snakeCase: false,

                    // 大驼峰
                    pascalCase: true
                }
            }
        ],
        'unicorn/no-array-instanceof': WARN,
        'unicorn/no-for-loop': WARN,
        'unicorn/prefer-add-event-listener': ERROR,
        'unicorn/prefer-query-selector': ERROR,
        'unicorn/no-null': OFF,
        'unicorn/no-array-reduce': OFF,
        'unicorn/prefer-module': OFF,
        'unicorn/consistent-function-scoping': OFF,

        '@typescript-eslint/no-useless-constructor': ERROR,
        '@typescript-eslint/no-empty-function': WARN,
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-use-before-define': ERROR,
        '@typescript-eslint/no-unused-vars': WARN,
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': OFF,
        'no-shadow': OFF,

        'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
        'react/jsx-indent-props': [ERROR, 4],
        'react/jsx-indent': [ERROR, 4],
        'react/jsx-one-expression-per-line': OFF,
        'react/destructuring-assignment': OFF,
        'react/state-in-constructor': OFF,
        'react/jsx-props-no-spreading': OFF,
        'react/prop-types': OFF,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/no-unescaped-entities': OFF,
        'react/default-props-match-prop-types': OFF,
        'react/button-has-type': OFF,
        'react/require-default-props': OFF,

        'jsx-a11y/click-events-have-key-events': OFF,
        'jsx-a11y/no-noninteractive-element-interactions': OFF,
        'jsx-a11y/no-static-element-interactions': OFF,

        'lines-between-class-members': [ERROR, 'always'],
        'lines-around-comment': [
            ERROR,
            {
                beforeBlockComment: true,
                allowBlockStart: true,
                allowClassStart: true,
                allowArrayStart: true,
                allowObjectStart: true
            }
        ],

        // indent: [ERROR, 2, { SwitchCase: 1 }],
        'linebreak-style': [ERROR, 'unix'],
        quotes: [ERROR, 'single'],
        semi: [ERROR, 'always'],
        'no-unused-expressions': WARN,
        'no-plusplus': OFF,
        'no-console': OFF,
        'class-methods-use-this': ERROR,
        'jsx-quotes': [ERROR, 'prefer-double'],
        'global-require': OFF,
        'no-use-before-define': OFF,
        'no-restricted-syntax': OFF,
        'no-continue': OFF,
        'no-multiple-empty-lines': ERROR,
        'prettier/prettier': [ERROR, { trailingComma: 'none' }]
    }
};
