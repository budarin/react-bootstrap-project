const browserList = require('../browserList');

const config = {
    babelrc: false,
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
        'typescript',
        'react',
    ],
    plugins: [
        'syntax-dynamic-import',
        'transform-react-jsx-self',
        'transform-react-jsx-source',
        'transform-class-properties',
        'transform-object-rest-spread',
        'syntax-trailing-function-commas',
        ['lodash', { id: ['lodash', 'recompose'] }],
    ],
};

module.exports = require('babel-jest').createTransformer(config);
