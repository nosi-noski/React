const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index",
  mode: isProduction ? "production" : "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // allowedHosts: ['localhost'],
    disableHostCheck: true,
    port: 5002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: {
      index: "index.html", // open index page for any missing route
    },
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".less"],
    alias: {
      public: path.resolve(__dirname, "public/"),
    },
  },
  module: {
    rules: [
      {
        // https://github.com/webpack/webpack/issues/11467#issuecomment-691702706
        // https://github.com/vercel/next.js/pull/17095
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        // TODO: почему бандл-лоадер (чуть больше контекста)
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader?name=assets/image/[name]-[hash].[ext]",
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader:
            "url-loader?limit=30000&name=assets/fonts/[name]-[hash].[ext]",
        },
      },
      {
        test: /\.scss|\.css$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "/", // fix at build Error: Automatic publicPath is not supported in this browser
                },
              }
            : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: /\.module\.\w+$/i,
                localIdentName: isProduction
                  ? "[hash:base64]"
                  : "[local]---[path][name]",
              },
              sourceMap: !isProduction,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "newsModule",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: "/",
    }),

    isProduction
      ? new MiniCssExtractPlugin({
          filename: "assets/css/[name].css",
        })
      : false,
  ].filter(Boolean),
};
