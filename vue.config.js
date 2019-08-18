module.exports = {
  lintOnSave: false,
  publicPath: "./",
  outputDir: "./dist",

  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("file-loader")
      .loader("file-loader")
      .end();
  }
};
