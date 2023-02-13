// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.s?css$/,
  use: [
    // {
    //   loader: MiniCssExtractPlugin.loader,
    //   options: {
    //     sourceMap: true,
    //   },
    // },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};
