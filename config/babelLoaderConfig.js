const browserList = require('./browserList');

module.exports = {
    babelrc: false,
    cacheDirectory: '.tmp',
    presets: [
        [
            'env',
            {
                loose: true,
                debug: true,
                targets: {
                    browsers: browserList,
                },
            },
        ],
        'react',
        'typescript',
    ],
    plugins: [
        'syntax-dynamic-import',
        'transform-class-properties',
        'transform-object-rest-spread',
        'syntax-trailing-function-commas',
        ['lodash', { id: ['lodash', 'recompose'] }],
    ],
    env: {
        production: {
            plugins: ['transform-react-inline-elements', 'transform-react-constant-elements'],
            ignore: ['__snapshots__', '__tests__', 'node_modules'],
        },
        development: {
            plugins: ['transform-react-jsx-self', 'transform-react-jsx-source'],
            ignore: ['__snapshots__', '__tests__', 'node_modules'],
        },
    },
};
