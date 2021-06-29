module.exports = {
  devServer: {
    // proxy: "http://localhost:8000",
    clientLogLevel: "silent",
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
