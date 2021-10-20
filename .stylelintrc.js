module.exports = {
    // Positioning, Box Model, Typography, Visual, Animation, Misc
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
        'comment-empty-line-before': 'always',
        'declaration-empty-line-before': null,
        'function-name-case': 'lower',
        'no-descending-specificity': null,
        'no-invalid-double-slash-comments': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },
    ignoreFiles: ['node_modules/**/*', 'build/**/*'],
};
