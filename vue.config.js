module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  lintOnSave: false,
  pwa: {
    iconPaths: {
      favicon32: 'title.jpg',
      favicon16: 'title.jpg',
      appleTouchIcon: 'title.jpg',
      maskIcon: 'title.jpg',
      msTileImage: 'title.jpg'
    }
  }
}
