const webpack = require('webpack');
const cssImport = require('postcss-import');
const size = require('postcss-size');
const svgo = require('postcss-svgo');
const assets = require('postcss-assets');
const cssNext = require('postcss-cssnext');

module.exports = () => [
  cssImport({ addDependencyTo: webpack }),
  size,
  svgo,
  assets({ basePath: 'src/' }),
  cssNext,
];
