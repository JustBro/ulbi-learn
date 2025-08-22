// webpack работает в среде node.js, поэтому нам доступен стандартный модуль path
// с помощью которого мы можем работать с путями к файлам
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { MODE } from "./config/build/constants";
import { BuildEnv } from "config/build/types";

export default ({ mode, port }: BuildEnv) => {
  const isDev = mode === MODE.DEV;

  return buildWebpackConfig({
    mode: mode || MODE.DEV,
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      tsConfigPath: path.resolve(__dirname, "tsconfig.json"),
    },
    isDev,
    port: port || 3000,
  });
};
