const browserList = require('../browserList');

const config = {
    babelrc: false,
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                debug: true,
                targets: {
                    browsers: browserList,
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-react-jsx-self',
        '@babel/plugin-transform-react-jsx-source',
        ['babel-plugin-lodash', { id: ['lodash', 'recompose'] }],
    ],
};

module.exports = require('babel-jest').createTransformer(config);
