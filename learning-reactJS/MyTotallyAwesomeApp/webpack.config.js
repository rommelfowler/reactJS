var webpack = require("webpack");
var path = require("path");

// Absolute variables that define the folders inside the App
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

// this is an Object
var config = {
  // properties
  entry: DEV + "/index.jsx",
  output: {
      path:OUTPUT,
      filename:"myCode.js" // this creates myCode.js file inside output folder.
      // *See Babel references for more information
  },
  module:{
    loaders:[{
      include:DEV,
      loader:"babel-loader",

      query: {
        presets:['es2015','react']
      }
    }]
  }
};
module.exports = config;
