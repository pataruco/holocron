import inquirer from 'inquirer';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from '../config/webpack.config.dev';
import inquirerFuzzyPath from 'inquirer-fuzzy-path';
import getTitleName from './lib/get-title-name';
import HtmlWebpackPlugin from 'html-webpack-plugin';

inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

// Exclude readme files
const excludePath = (nodePath: string) => nodePath.includes('readme.md');

// TODO:
// Work from slides folder instead of public/slides
// Refactor index
// Refactor fuzzy finder to get only slides

const start = async () => {
  // Get Source
  const prompt = await inquirer.prompt([
    {
      excludePath,
      itemType: 'file',
      message: 'Select a slide:',
      name: 'source',
      rootPath: './slides',
      type: 'fuzzypath',
    },
  ]);

  const { source } = prompt;
  // Set HTML title as filename
  const title = getTitleName(source);
  const plugins = webpackConfig.plugins?.concat(
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title,
    }),
  );

  // Running webpack server
  const config: webpack.Configuration = {
    ...webpackConfig,
    plugins,
  };
  const compiler = webpack(config);
  // @ts-ignore
  const server = new webpackDevServer(compiler, {
    headers: {
      'X-SLIDES_PATH': source,
    },
    open: true,
    port: 3000,
  });
  // port 0 enable to pick a random number
  server.listen(0);
};

if (!module.parent) {
  start().then();
}
