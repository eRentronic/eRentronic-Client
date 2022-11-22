const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    open: true,
    historyApiFallback: true,
    port: 8080,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
