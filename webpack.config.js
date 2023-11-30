const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'buy-crypto': './src/buy-crypto.js',
    'buy-smart-contract': './src/buy-smart-contract.js',
    'buy-nft': './src/buy-nft.js',
    'ts/buy-crypto': './src/ts/buy-crypto.ts',
    'ts/buy-smart-contract': './src/ts/buy-smart-contract.ts',
    'ts/buy-nft': './src/ts/buy-nft.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new CopyPlugin({
      patterns: [
        { from: 'static' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: './dist',
    },
    client: {
      overlay: false,
    },
    port: 8765,
  },
};
