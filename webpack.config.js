var path = require("path");

module.exports = {
    entry: "./index",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
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
            }
        ]
    }
}