const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'buy-crypto': './src/buy-crypto.ts',
    'buy-smart-contract': './src/buy-smart-contract.ts',
    'buy-nft': './src/buy-nft.ts',
    'react-module': './src/react-module.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
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
