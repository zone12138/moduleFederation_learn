const { defineConfig } = require("@vue/cli-service");

const { ModuleFederationPlugin } = require("webpack").container;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "auto",
  devServer: {
    port: 3030,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    },
  },
  chainWebpack: (config) => {
    config
      .plugin("module-federation-plugin")
      .use(ModuleFederationPlugin, [
        {
          name: "base",
          filename: "remoteEntry.js",
          exposes: {
            "./ButtonTemplate": "./src/components/ButtonTemplate.vue",
            "./utils": "./src/utils/index.js",
          },
          shared: {
            vue: {
              singleton: true,
            },
          },
        },
      ])
      .end()
      .optimization.delete("splitChunks");
  },
});
