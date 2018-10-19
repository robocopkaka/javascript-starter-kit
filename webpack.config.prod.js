import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    // Use CommonsChunkPlugin to create a separate bundle
    // of cendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inify: {
        removeComments: true,
        collapseWhiteSpace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
    }),
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
