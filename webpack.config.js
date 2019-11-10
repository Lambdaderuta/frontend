const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(s*)css$/,
        loader: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
              publicPath: '../',
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  entry: './index.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/img', to: 'img' },
    ]),
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      lib: path.resolve(__dirname, 'src/lib'),
      img: path.resolve(__dirname, 'src/img'),
      public: path.resolve(__dirname, 'public'),
      src: path.resolve(__dirname, 'src'),
    },
  },
};
