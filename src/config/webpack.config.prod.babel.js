import path from 'path';
import OptimizeJsPlugin from 'optimize-js-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import babelConfig from './babelLoaderConfig.json';

const wpConfig = () => {
    return {
        mode: 'production',
        target: 'web',
        cache: false,
        entry: ['./src/babelHelpers.js', './src/index.js'],
        devtool: 'none',
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
