const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",

  devServer: {
    port: 9002,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        barchart: "barchart@http://localhost:9000/remoteEntry.js",
        linechart: "linechart@http://localhost:9001/remoteEntry.js",
      },
    }),
  ],
};
