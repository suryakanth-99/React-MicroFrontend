const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: {
      historyApiFallback: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(jpg|png|gif)$/, // Matches JPG, PNG, and GIF files
        use: "file-loader", // Use the file-loader for these files
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         import: false,
      //         modules: true,
      //       },
      //     },
      //   ],
      //   include: /\.module\.css$/,
      // },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      //   exclude: /\.module\.css$/,
      // },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
