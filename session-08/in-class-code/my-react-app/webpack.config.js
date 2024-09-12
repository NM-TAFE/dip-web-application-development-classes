const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Define the entry point for your application
  entry: "./src/index.js",

  // Specify the output directory and filename
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the /dist folder before each build
  },

  // Define how different modules are handled (loaders)
  module: {
    rules: [
      {
        test: /\.js$/, // Handle JavaScript files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: "babel-loader", // Use Babel to transpile ES6+ to ES5
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"], // First, turn CSS into JavaScript (css-loader), then inject it into the DOM (style-loader)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
        type: "asset/resource", // Asset modules for static files
      },
    ],
  },

  // Plugins for additional functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use your own HTML template
      filename: "index.html",
    }),
  ],

  // Webpack Dev Server for local development
  devServer: {
    static: "./dist",
    port: 9000, // Server will be hosted at http://localhost:9000
    open: true, // Opens the browser after server has started
  },

  // Enable source maps for easier debugging in development mode
  devtool: "inline-source-map",

  // Define the mode (development or production)
  mode: "development", // Switch to 'production' for production builds
};
