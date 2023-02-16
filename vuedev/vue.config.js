const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  // loaderOptions: {
  //   scss: {
  //     prependData: '@import "~@/assets/main.scss";'
  //   }
  // }
})
