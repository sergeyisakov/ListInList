const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rimraf = require('rimraf');
const isProduction = process.env.NODE_ENV === 'production';

const babelSettings = JSON.stringify({
  presets: ['react', 'es2015', 'stage-0'],
  plugins: ['transform-runtime'],
});

module.exports = {
  context: path.resolve('src'),
  entry: ['babel-polyfill', './main.js'],

  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: `[name].bundle${(isProduction) ? '.[chunkhash]' : ''}.js`,
  },

  devtool: (isProduction) ? null : 'eval',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `react-hot!babel?${babelSettings}`,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'file?name=[path][name].[hash:6].[ext]&limit=4096',
      },
      {
        test: /\.(pdf|zip)$/,
        loader: 'file?name=[path][name].[hash:6].[ext]',
      },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    modulesTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  plugins: [
    {
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path);
      }
    },

    new HtmlWebpackPlugin({
      template: './index.html',
    }),

    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true,
      disable: !isProduction,
    }),
  ],
};

if (isProduction) {
  module.exports.plugins.push(
    new webpack.NoErrorsPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        drop_debugger: true,
        unsafe: true,
        evaluate: true,
        unused: true,
      },
      output: {
        comments: false
      },
    })
  );
}
