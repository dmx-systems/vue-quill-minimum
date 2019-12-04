const { VueLoaderPlugin } = require('vue-loader')

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
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  stats: {
    entrypoints: false,
  },
  performance: {
    hints: false
  }
}
