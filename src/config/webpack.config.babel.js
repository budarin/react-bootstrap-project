import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import babelConfig from './babelLoaderConfig.json';

const wpConfig = () => {
    return {
        mode: 'development',
        target: 'web',
        cache: true,
        devtool: 'inline-cheap-module-source-map',
        entry: [
            'react-hot-loader/patch',
            './src/babelHelpers.js',
            './src/index.js',
        ],
        devServer: {
            contentBase: path.resolve('./dist'),
            hot: true,
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
                            name: 'img/[name].[hash:7].[ext]',
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
                                modules: true,
                                localIdentName: '[name].[local]_[hash:7]',
                                sourceMap: false,
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
        plugins: [
            new CopyWebpackPlugin([{ from: './src/index.html' }]),
            new webpack.HotModuleReplacementPlugin(),
        ],
    };
};

export default wpConfig;
