import webpack from "webpack";
import path from "path";
import CracoLessPlugin from "craco-less";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import logCracoConfigPlugin from "./craco-plugin-log-craco-config"; // print craco config log
import * as CracoEnvPlugin from "craco-plugin-env";
import customESLintConfig from "./.eslintrc";

module.exports = {
  eslint: {
    enable: true,
    mode: "file",
    configure: (eslintConfig, { env, paths }) => {
      return customESLintConfig;
    },
  },

  webpack: {
    alias: {
      "@@": path.resolve(__dirname, "."),
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@feats": path.resolve(__dirname, "src/features"),
    },

    configure: (webpackConfig, { env, paths }) => {
      const wasmExtensionRegExp = /\.wasm$/;
      webpackConfig.resolve.extensions.push(".wasm");

      webpackConfig.experiments = {
        asyncWebAssembly: true,
        lazyCompilation: false,
        syncWebAssembly: true,
        topLevelAwait: true,
      };
      webpackConfig.resolve.fallback = {
        // fs: require.resolve("fs"),
        fs: false,
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        assert: require.resolve("assert/"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        url: require.resolve("url/"),
        os: require.resolve("os-browserify/browser"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
      };
      webpackConfig.module.rules.forEach((rule) => {
        console.log("rules -----------------------", rule);
        (rule.oneOf || []).forEach((oneOf) => {
          //******************* This is the most important sentence  begin ********************
          if (oneOf.type === "asset/resource") {
            oneOf.exclude.push(wasmExtensionRegExp);
          }
        });
      });

      // Set up multi-entry
      if (typeof webpackConfig.entry === "string") {
        webpackConfig.entry = {
          main: webpackConfig.entry,
        };
        webpackConfig.output.filename = (pathData) => {
          return [""].includes(pathData.chunk.name)
            ? "[name].js"
            : "static/js/[name].[contenthash:8].chunk.js";
        };
      }

      webpackConfig.optimization.splitChunks = {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]src[\\/]/,
            priority: 10,
            chunks: "all",
          },
        },
      };

      webpackConfig.optimization = {
        minimize: false,
        chunkIds: "named",
        mangleExports: false,
        minimizer: [],
      };

      return webpackConfig;
    },
    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ["console"],
      }),

      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),

      new webpack.DefinePlugin({
        "process.browser": "true",
      }),

      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
      historyApiFallback: true,
      host: "127.0.0.1",
      port: 3000,
      stats: "errors-only",
      overlay: true,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: logCracoConfigPlugin,
      options: {
        preText: "will log the craco config:",
      },
    },

    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
};
