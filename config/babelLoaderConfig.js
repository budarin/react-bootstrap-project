/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const browserList = require('./browserList');

module.exports = {
    babelrc: false,
    cacheDirectory: '.tmp',
    presets: [
        [
            '@babel/plugin-env',
            {
                debug: true,
                loose: true,
                modules: false,
                useBuiltIns: false,
                shippedProposals: true,
                targets: {
                    browsers: browserList,
                },
            },
        ],
        '@babel/plugin-react',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        [
            '@babel/plugin-proposal-object-rest-spread',
            {
                useBuiltIns: true,
            },
        ],
        [
            '@babel/plugin-lodash',
            {
                id: ['lodash', 'recompose'],
            },
        ],
    ],
    env: {
        production: {
            plugins: [
                '@babel/plugin-transform-react-inline-elements',
                '@babel/plugin-transform-react-constant-elements',
            ],
            ignore: ['__snapshots__', '__tests__', 'node_modules'],
        },
        development: {
            plugins: ['@babel/plugin-transform-react-jsx-self', '@babel/plugin-transform-react-jsx-source'],
            ignore: ['__snapshots__', '__tests__', 'node_modules'],
        },
    },
};
