const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const distDir = `${__dirname}/dist`;

  this.devServer = {
    contentBase: `${__dirname}/src`,
    port: 715,
    historyApiFallback: true,
  };

  this.entry = {
    'dist': path.resolve(__dirname, `./${isProd ? 'src/index.ts' : 'test/index.tsx'}`),
  };

  this.module = {
    rules: [{
      test: /\.(?:t|j)sx?$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        compilerOptions: {
          module: 'ES2015',
          target: 'ES5'
        },
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader?url=false"]
    },]
  };

  if (!isProd) {
    this.devtool = 'source-map';

    this.plugins = [
      new HtmlWebpackPlugin({
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true
        },
        filename: `${isProd ? `${distDir}/` : ''}index.html`,
        template: 'test/index.html'
      }),
    ];
  }

  this.output = {
    filename: 'build/dist/index.min.js',
    path: __dirname,
    publicPath: '/',
  };

  this.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  };

  return this;
};