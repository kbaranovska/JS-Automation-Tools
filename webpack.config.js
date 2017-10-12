  var path = require("path");

  module.exports = {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "build"),
      publicPath: "/build/",
      filename: "bundle.js"
    },

    module: {
      rules: [
        { 
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },]
    }
};