// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    cache: false,
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    module: {
        rules: [
            {
                test: /\.tsm$/,
                use: [
                    {
                        loader: path.resolve(__dirname, 'loaders/custom-loader.js'), // Кастомный загрузчик
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/, // Для обычных .ts файлов
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './public/index.html'), // шаблон
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9090,
    },
};
