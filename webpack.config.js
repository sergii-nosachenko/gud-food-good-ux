const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VERSION = 1;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `bundle.v${VERSION}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 2020,
          },
          compress: {
            ecma: 2020,
            // warnings: false,
            comparisons: false,
            inline: 2,
            // drop_console: true,
            // drop_debugger: true,
            // pure_funcs: ['console.info', 'console.debug', 'console.warn'],
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 2020,
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
};
