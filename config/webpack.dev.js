const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");

module.exports = {
  mode: "development",
  entry: "./app/index.jsx",

  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(ROOT_DIR, "build"),
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "app/index.html", inject: false }),
    new CopyWebpackPlugin([
      {
        from: "app/assets",
        to: "assets",
      },
      { from: "app/public/", to: "./" },
    ]),
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(ROOT_DIR, "app")],
        loader: "babel-loader",

        options: {
          plugins: ["syntax-dynamic-import"],

          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        include: [path.resolve(ROOT_DIR, "app")],
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".json"],
    alias: {
      Assets: path.resolve(ROOT_DIR, "app/assets"),
      Components: path.resolve(ROOT_DIR, "app/components"),
      Containers: path.resolve(ROOT_DIR, "app/containers"),
      Pages: path.resolve(ROOT_DIR, "app/pages"),
      Public: path.resolve(ROOT_DIR, "app/public"),
      Services: path.resolve(ROOT_DIR, "app/services"),
      Store: path.resolve(ROOT_DIR, "app/store"),
      Styles: path.resolve(ROOT_DIR, "app/styles"),
      Utils: path.resolve(ROOT_DIR, "app/utils"),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
  devtool: "source-map",
  devServer: {
    contentBase: [path.join(ROOT_DIR, "build"), path.join(ROOT_DIR, "assets")],
    publicPath: "/",
    disableHostCheck: true,
    historyApiFallback: true,
    open: true,
    port: process.env.PORT || 3000,
  },
};
