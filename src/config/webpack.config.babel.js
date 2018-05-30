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
