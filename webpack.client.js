/*
 * @Descripttion: 
 * @Author: wangxinyue
 * @Date: 2020-03-06 19:50:31
 */
const path = require('path')
module.exports = {
    mode: 'development',
    //客户端输出
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', ['@babel/preset-env']]
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}