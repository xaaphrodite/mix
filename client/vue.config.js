module.exports = {
  devServer: {
    proxy: "http://localhost:8000/",
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
