module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dojin-otome-data-editor/'
    : '/',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },

  transpileDependencies: [
    'quasar',
  ],
}
