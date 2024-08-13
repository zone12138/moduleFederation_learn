const { defineConfig } = require("@vue/cli-service");

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3031,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    },
  },
  chainWebpack: (config) => {
    config.plugin("module-federation-plugin").use(ModuleFederationPlugin, [
      {
        name: "sub1",
        remotes: {
          base: "base@http://localhost:3030/remoteEntry.js",
        },
        shared: ["vue"],
      },
    ]);
  },
});
