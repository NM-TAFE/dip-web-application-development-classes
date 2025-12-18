const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Match any .css file
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Turns CSS into CommonJS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,

    headers: {
      "Content-Security-Policy":
        "default-src 'self'; style-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-eval'; connect-src 'self' http://localhost:3000 https://api.nasa.gov; img-src 'self' https://apod.nasa.gov https://i.imgur.com; video-src 'self' https://apod.nasa.gov;",
    },

    historyApiFallback: true,
  },
};
