const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  entry: './src/Quill.vue',
  output: {
    filename: 'vue-quill-minimum.min.js',
    library: 'VueQuillMinimum',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // Note: quill 2 source code makes use of modern JS and must go through babel.
        // x(?!y) is Negative Lookahead Assertion regex operator.
        exclude: /node_modules\/(?!quill)/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  stats: {
    entrypoints: false
  },
  performance: {
    hints: false
  }
}
