const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const _ = require('lodash');

module.exports = {
    entry: {
        js: './src/reactDropperElement.js',
        vendor: _.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.index.js'
        }),
        new webpack.DefinePlugin({
            '__DEV__': false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                loaders: ['babel-loader?retainLines=true']
            }
        ]
    },
    resolve: {
        alias: {
            'react-dropper-element': path.resolve(__dirname, 'dist/index.js')
        }
    }
};
