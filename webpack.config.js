var path = require("path");
var webpack = require('webpack')
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: ["react", "react-dom", "react-markdown", "isomorphic-fetch", "react-redux", "react", "redux-thunk", "classnames"],
        main: "./index"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
    ],
    module: {
        loaders: [ 
            {
                //test: A condition that must be met
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                loader: "style!css?module&localIdentName=[local]-[hash:base64:5]&-url"
            }
        ]
    }
}
