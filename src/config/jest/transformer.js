/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const babelConfig = require('../babelLoaderConfig.json');

// env preset should produce commonjs for jest
babelConfig.presets[0][1].modules = 'commonjs';

module.exports = require('babel-jest').createTransformer(babelConfig);
