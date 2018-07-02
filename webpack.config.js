var path = require('path');

module.exports = {
  entry: {
    ToggleVW: "./app/assets/scripts/ToggleVW.js",
    SmoothScroll: "./app/assets/scripts/SmoothScroll",
    Skills: "./app/assets/scripts/Skills"
    // ex. Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
