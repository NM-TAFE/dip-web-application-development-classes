### 1. **Set Up the Project Directory**

First, create a new directory for your project and navigate into it:

```laragon-terminal
mkdir my-react-app
cd my-react-app
```

### 2. **Initialize a New npm Project**

Initialize a new npm project with:

```laragon-terminal
npm init -y
```

This will create a `package.json` file with default settings.

### 3. **Install React and ReactDOM**

Install React and ReactDOM as dependencies:

```laragon-terminal
npm install react@latest react-dom@latest
```

### 4. **Set Up a Build Tool**

You need a build tool to compile JSX and bundle your JavaScript. You can use Webpack and Babel for this purpose.

#### **Install Webpack and Babel**

Install Webpack and Babel along with their required plugins:

```laragon-terminal
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
```

#### **Create Webpack Configuration**

Create a file named `webpack.config.js` in the root of your project with the following content:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
  },
};
```

#### **Create Babel Configuration**

Create a file named `.babelrc` in the root of your project with the following content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 5. **Set Up Project Structure**

Create the necessary directories and files:

```laragon-terminal
mkdir src public
touch src/index.js public/index.html
```

#### **Edit `public/index.html`**

Add basic HTML content to `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

#### **Edit `src/index.js`**

Add basic React code to `src/index.js`:

```javascript
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello, React!</h1>;

ReactDOM.render(<App />, document.getElementById("root"));
```

### 6. **Add npm Scripts**

Update your `package.json` to include the following scripts:

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
```

### 7. **Run Your Project**

Start the development server with:

```laragon-terminal
npm start
```

Your React app should be available at `http://localhost:3000`.

### Summary

Using Create React App is typically recommended for beginners because it handles much of the setup and configuration automatically.
