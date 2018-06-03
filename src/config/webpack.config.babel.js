import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import babelConfig from './babelLoaderConfig.json';

const wpConfig = () => {
    return {
        cache: true,
        target: 'web',
        mode: 'development',
        devtool: 'inline-cheap-module-source-map',
        entry: ['react-hot-loader/patch', './src/index.js'],
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
                                sourceMap: false,
                                localIdentName: '[name].[local]_[hash:7]',
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
            modules: ['node_modules', path.resolve('./src')],
        },
        output: {
            publicPath: '/',
            filename: 'bundle.js',
            path: path.resolve('./dist'),
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CopyWebpackPlugin([{ from: './src/index.html' }]),
        ],
        devServer: {
            hot: true,
            port: 443,
            https: {
                ca: fs.readFileSync('certs/cacert.crt'),
                key: fs.readFileSync('certs/server.key'),
                cert: fs.readFileSync('certs/server.crt'),
            },
            contentBase: path.resolve('./dist'),
        },
    };
};

export default wpConfig;
