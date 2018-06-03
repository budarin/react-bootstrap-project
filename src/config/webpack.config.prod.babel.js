import path from 'path';
import OptimizeJsPlugin from 'optimize-js-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import babelConfig from './babelLoaderConfig.json';

babelConfig.plugins.push('external-helpers');

const wpConfig = () => {
    return {
        cache: false,
        target: 'web',
        devtool: 'none',
        mode: 'production',
        entry: ['./src/babelHelpers.js', './src/index.js'],
        optimization: {
            minimizer: [
                new MinifyPlugin(),
                new OptimizeJsPlugin({ sourceMap: false }),
            ],
            occurrenceOrder: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
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
                            options: {
                                hmr: true,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                // This breaks HMR (CSS Modules change name because their hash changes)
                                modules: true,
                                // importLoaders: 1,
                                localIdentName: '[hash:base64:8]',
                                // This breaks background-image and other relative paths
                                // Monitor this: https://github.com/webpack/style-loader/pull/124
                                // sourceMap: DEV,
                                url: false,
                                import: false,
                                sourceMap: false,
                                // CSSNano Options
                                minimize: {
                                    // safe: true,
                                    calc: false,
                                    zindex: false,
                                    colormin: false,
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
            extensions: ['*', '.js', '.jsx'],
        },
        output: {
            path: path.resolve('./dist'),
            publicPath: '/',
            filename: 'bundle.js',
        },
        plugins: [new CopyWebpackPlugin([{ from: './src/index.html' }])],
    };
};

export default wpConfig;
