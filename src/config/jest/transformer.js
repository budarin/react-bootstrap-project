const babelConfig = require('../babelLoaderConfig.json');

babelConfig.presets = [
    [
        'env',
        {
            loose: true,
            modules: 'commonjs',
            useBuiltIns: true,
            targets: {
                browsers: [
                    'Chrome >= 63',
                    'Firefox >= 58',
                    'Safari >= 11',
                    'iOS >= 10.3',
                    'Edge >= 41',
                ],
            },
        },
    ],
    'react',
    'flow',
];

module.exports = require('babel-jest').createTransformer(babelConfig);
