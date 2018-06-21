import path from 'path';
import OptimizeJsPlugin from 'optimize-js-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';

import babelConfig from './babelLoaderConfig';

babelConfig.plugins.push('external-helpers');

const wpConfig = () => {
    return {
        cache: false,
        target: 'web',
        devtool: 'none',
        mode: 'production',
        entry: ['./src/babelHelpers.js', './src/index.js'],
        output: {
            path: path.resolve('./dist'),
            publicPath: '/',
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    use: {
                        loader: 'babel-loader',
                        options: babelConfig,
                    },
                    exclude: path.resolve('node_modules'),
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    include: path.resolve('./src'),
                    exclude: path.resolve('node_modules'),
                    use: {
                        loader: 'image-size-loader',
                        options: {
                            digest: 'hex',
                            hash: 'sha512',
                            name: 'img/[name].[hash].[ext]',
                            context: path.resolve(__dirname, 'src'),
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader/useable',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[hash:base64:8]',
                                sourceMap: false,
                                minimize: {
                                    // safe: true,
                                    zindex: false,
                                    discardComments: { removeAll: true },
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            modules: ['node_modules', path.resolve('./src')],
        },
        optimization: {
            occurrenceOrder: true,
            minimizer: [new MinifyPlugin(), new OptimizeJsPlugin({ sourceMap: false })],
        },
        plugins: [new CopyWebpackPlugin([{ from: './src/index.html' }])],
    };
};

export default wpConfig;
