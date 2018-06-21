const browserList = require('../browserList');

const config = {
    babelrc: false,
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                debug: true,
                modules: 'commonjs',
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
        ['babel-plugin-lodash', { id: ['lodash', 'recompose'] }],
        '@babel/plugin-transform-react-jsx-self',
        '@babel/plugin-transform-react-jsx-source',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
    ],
};

module.exports = require('babel-jest').createTransformer(config);
