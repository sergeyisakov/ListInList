const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/main.js',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  devtool: (isProduction) ? null : 'eval',

  devServer: {
    inline: true,
    contentBase: './src',
    port: 9000
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-runtime']
        }
      }
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

  plugins: []
};

if (isProduction) {
  module.exports.plugins.push(
    new webpack.NoErrorsPlugin()
  );

  module.exports.plugins.push(
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
      }
    })
  );
}
