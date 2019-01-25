const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer      = require('autoprefixer');

const config =  {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/reactDropperElement.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    colors: true,
    progress: true,
    inline: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc',
          failOnError: false,
          failOnWarning: false,
          emitWarning: true
        },
        postcss: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ]
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template 
      inject: 'body' // Inject all scripts into the body 
    }),
    new CopyWebpackPlugin([ { from: './app/assets', to: 'assets' } ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
        {
            test: /\.js?$/,
            exclude: [/node_modules/],
            loaders: ['babel-loader?retainLines=true']
        },
        {
          test: /\.scss|sass$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
            test: /\.(ico|jpg|jpeg|png|gif)$/i,
            exclude: [/node_modules/],
            loaders: ['file-loader']
        }
    ]
},
resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
        'react-dropper-element': path.resolve(__dirname, './src/reactDropperElement.js')
    }
}
}
module.exports = config;
