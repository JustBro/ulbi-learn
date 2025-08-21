import webpack from "webpack";
import { BuildOptions } from "./types";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlagins";
import { buildResolvers } from "./buildResolvers";

const buildWebpackConfig = ({
  mode,
  paths,
//   isDev,
}: BuildOptions): webpack.Configuration => {
  const { entry, build, html, tsConfigPath } = paths;

  return {
    // mode - это режим, в котором будет работать webpack
    // development - в этом режиме в билде будет отладочная информация
    // production - в этом режиме в билде не будет отладочной информации
    mode,
    // __dirname - это абсолютный путь к текущей директории в которой находится файл webpack.config.js
    // src - это директория, в которой находится наш код
    // index.ts - это файл, который мы будем использовать как точку входа в наш проект
    entry,
    // output - это директория, в которую будет сохранен результат сборки
    // filename - это имя файла, которое будет содержать результат сборки
    // path - это абсолютный путь к директории, в которую будет сохранен результат сборки
    output: {
      // [name] - это имя файла, которое будет содержать результат сборки
      // [contenthash] - это хэш, который будет содержать результат сборки, он нужен чтобы избежать кэширования браузером, когда мы обновляем код файла, а название файла остается прежним
      filename: "[name].[contenthash].js",
      // path - это абсолютный путь к директории, в которую будет сохранен результат сборки
      path: build,
      // clean - это флаг, который будет удалять в директории build все лишние файлы, которые были созданы при прошлой сборке, допустим с другими хэшами
      clean: true,
    },
    plugins: buildPlugins(html),
    // module - это конфигурация лоадеров, которая будет использоваться для обработки файлов
    // которые выходят за рамки js, например png, jpg, gif, svg, css, scss, ts и т.д.
    module: {
      // rules - это массив правил, которые будут использоваться для обработки файлов
      rules: buildLoaders(tsConfigPath),
    },
    // resolve - это конфигурация, которая будет использоваться для разрешения расширений файлов
    // при импорте файлов, webpack будет искать файлы с этими расширениями и нам не нужно указывать расширения вручную
    resolve: buildResolvers(),
  };
};

export { buildWebpackConfig };
