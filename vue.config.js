module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        ws: true,
        changeOrigin: true,
        cookieDomainRewrite: "localhost:8080",
      },
    },
  },
};
