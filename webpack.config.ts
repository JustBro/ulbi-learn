// webpack работает в среде node.js, поэтому нам доступен стандартный модуль path
// с помощью которого мы можем работать с путями к файлам
import path from 'path';
// webpack - это модуль, который будет использоваться для работы с webpack
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { MODE, IS_DEV } from './config/build/constants';

const config: webpack.Configuration = buildWebpackConfig({
  mode: MODE.DEV,
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    tsConfigPath: path.resolve(__dirname, "tsconfig.json"),
  },
  isDev: IS_DEV,
});

export default config;