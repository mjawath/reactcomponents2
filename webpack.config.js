var webpack = require('webpack');
var path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

const pkg = require('./package.json');

let libraryName = pkg.name;

if (env === 'build') {
    // plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
  } else {
    outputFile = libraryName + '.js';
  }

var config = {
    entry: SRC_DIR + '/app/index.js',
    devtool: 'source-map',
    output: {
        path: DIST_DIR + '/',
        publicPath: '/',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
};

module.exports = config;