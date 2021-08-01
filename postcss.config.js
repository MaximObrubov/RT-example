const path = require('path')

module.exports = {
  plugins: [
    require('postcss-import')({
      root: path.resolve(path.join(__dirname, '../src')),
      path: ['src/common/css', '../node_modules']
    }),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
