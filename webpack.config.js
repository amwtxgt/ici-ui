var path = require('path');
var webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//单独打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    'ici-ui.min': './src/index.js',
    'demo': './src/demo.js'
  },
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/',
    filename: '[name].js'

  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [isDev?'style-loader':{
          loader: MiniCssExtractPlugin.loader,
        }, "css-loader",'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [isDev?'style-loader':{
          loader: MiniCssExtractPlugin.loader,
        }, "css-loader",'postcss-loader', "less-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {},
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (!isDev) {
  module.exports.devtool = '#source-map'
  module.exports.mode = 'production'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else{
  module.exports.mode = 'development'
}
