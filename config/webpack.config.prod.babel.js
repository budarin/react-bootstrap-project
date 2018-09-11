import path from 'path';
import webpack from 'webpack';
import OptimizeJsPlugin from 'optimize-js-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';

import babelConfig from './babelLoaderConfig';

const wpConfig = () => {
    return {
        cache: false,
        target: 'web',
        devtool: 'none',
        mode: 'production',
        entry: ['./src/index.tsx'],
        output: {
            path: path.resolve('./dist'),
            publicPath: '/',
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    include: path.resolve('./src'),
                    exclude: path.resolve('node_modules'),
                    use: {
                        loader: 'babel-loader',
                        options: babelConfig,
                    },
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
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: false,
                                importLoaders: 1,
                                localIdentName: '[hash:base64:8]',
                                sourceMap: false,
                                // cssnano options
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
            extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
            modules: ['node_modules', path.resolve('./src')],
        },
        optimization: {
            occurrenceOrder: true,
            minimizer: [new MinifyPlugin(), new OptimizeJsPlugin({ sourceMap: false })],
        },
        plugins: [
            new CopyWebpackPlugin([{ from: './src/index.html' }]),
            new webpack.DefinePlugin({
                'process.env.__DEV__': false,
                'process.env.__BROWSER__': true,
            }),
            new webpack.SourceMapDevToolPlugin({
                columns: false,
                filename: 'bundle.js.map',
            }),
            new webpack.WatchIgnorePlugin([/css\.d\.ts$/]), // due to slow building ignore changes
        ],
    };
};

export default wpConfig;
