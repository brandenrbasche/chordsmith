const webpack = require('webpack');
const path = require('path');

module.exports = {
    // entry: ['/client/index.js'],
    entry: path.join(__dirname, './client/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            Client: path.resolve(__dirname, '/client/')
        }
    },
    mode: process.env.NODE_ENV,
    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        proxy: [{
            '/api': {
                target: 'http://localhost:3000',
            }
        }],
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            }
        ]
    }
}