const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
module.exports = {
    entry : "./src/index.js",
    output : {
        filename : 'main.[contenthash].js',
        path : path.resolve(__dirname,'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}