const HtmlWebpackPlugin = require("html-webpack-plugin");
const { container } = require("webpack");
const { ModuleFederationPlugin } = container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3000, historyApiFallback: true },
  output: { publicPath: "auto", clean: true },
  resolve: { extensions: [".js", ".jsx"] },
  module: {
     rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        characters: "characters@http://localhost:3001/remoteEntry.js",
        detail: "detail@http://localhost:3002/remoteEntry.js"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        "react-router-dom": { singleton: true, requiredVersion: "^6.17.0" }
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};
