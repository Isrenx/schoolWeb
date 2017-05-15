const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
module.exports = {
    entry: {
        app:APP_PATH+'/js/index.js',
    },
    output: {
        path: BUILD_PATH,
        publicPath: "./",
        filename: 'bundle.js'
    },
    plugins: [
        // new CleanPlugin('build'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
            sourceMap: true,
            except: ['$super', '$', 'exports', 'require'] //排除关键字
        }),
        new webpack.optimize.OccurenceOrderPlugin(),

    ],
    module: {
        loaders: [
        
             {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [ 'es2015']
                },
            }]
    }
}

