const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'buy-crypto': './src/buy-crypto.js',
    'buy-smart-contract': './src/buy-smart-contract.js',
    'buy-nft': './src/buy-nft.js',
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
