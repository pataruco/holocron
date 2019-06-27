import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';

const sourceIndex = path.resolve(__dirname, '../src/index.ts');

const config: webpack.Configuration = {
  mode: 'development',
  entry: [sourceIndex],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },

      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  // @ts-ignore
  devServer: {
    open: true,
    port: 3000,
  },
  node: {
    fs: 'empty',
  },
};

export default config;
