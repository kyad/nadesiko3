const path = require('path')
const IgnorePlugin = require('webpack').IgnorePlugin

const srcPath = path.join(__dirname, 'src')
const releasePath = path.join(__dirname, 'release')
const editorPath = path.join(__dirname, 'editor')

process.noDeprecation = true

module.exports = {
  entry: {
    wnako3: [path.join(srcPath, 'wnako3.js')], // plugin_system+plugin_browser含む
    plugin_turtle: [path.join(srcPath, 'plugin_turtle.js')],
    editor: [path.join(editorPath, 'edit_main.jsx')],
    version: [path.join(editorPath, 'version_main.jsx')]
  },

  output: {
    path: releasePath,
    filename: '[name].js'
  },

  // devtool: 'cheap-module-eval-source-map',

  plugins: [
    // moment.jsのロケールファイルをビルド対象から除外
    // ロケールファイルを使用したい場合は、
    // ソースコード内で『require('moment/locale/hoge')』のように記述すれば、そのロケールファイルのみビルド対象に含まれる
    new IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],

  module: {
    rules: [
      // .jsx file
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [editorPath, srcPath],
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      // .js file
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        include: [srcPath],
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        loaders: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },

  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.js', '.jsx']
  }
}
