import webpack from "webpack"
// HTMLWebpackPlugin - это плагин, который будет использоваться для работы с html файлами
import HTMLWebpackPlugin from 'html-webpack-plugin';

const buildPlugins = (html: string): webpack.WebpackPluginInstance[] => {
    const plugins = [
        // HTMLWebpackPlugin - это плагин, который будет создавать файл index.html в директории build
        // template - это путь к файлу, который будет использоваться как шаблон для создания файла index.html
        // в этом файле будет подключен наш бандл js (файл в который собирается наш код, сейчас это main.[hash].js)
        new HTMLWebpackPlugin({
            template: html
        }),
        // ProgressPlugin - это плагин, который будет отображать прогресс сборки в консоли
        new webpack.ProgressPlugin()
    ]

    return plugins
}

export { buildPlugins };