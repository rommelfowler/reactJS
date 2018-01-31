// when webpack is loaded it looks for this method.
module.exports = {
  entry: './src/client.js', //starting file for client side app
  output: {
    path: "./public",
    filename: 'index.js'
  }
}; // configure webpack, not es6 standard.
