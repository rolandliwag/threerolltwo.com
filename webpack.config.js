const pathModule = require('path');
const webpack = require('webpack');
const buildPath = pathModule.resolve(__dirname, 'build');

module.exports = [{
    name: 'client',
    entry: './src/client/index.js',
    output: {
        path: pathModule.resolve(buildPath, 'client'),
        filename: 'bundle.js',
        publicPath: '__static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /3rdparty/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}, {
    name: 'server',
    entry: './src/server/index.js',
    target: 'node',
    output: {
        path: pathModule.resolve(buildPath, 'server'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: [require('webpack-node-externals')()],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}];
