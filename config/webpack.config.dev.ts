import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const sourceIndex = path.resolve(__dirname, '../src/lib/slides-presenter.ts');

const config: Configuration = {
  mode: 'development',
  entry: [sourceIndex],
  resolve: {
    alias: {
      path: 'path-browserify',
    },
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true,
                },
              },
            ],
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
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
};

export default config;
