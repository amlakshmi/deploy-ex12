const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../client/dist"), // Output to dist/
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "production", // change to development if needed
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
