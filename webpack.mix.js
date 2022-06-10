let mix = require('laravel-mix')
let path = require('path')

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/asset.js', 'js')
  .vue({ version: 3 })
  .alias({
    '@': path.join(__dirname, '../../vendor/laravel/nova/resources/js'),
  })
  .nova('formfeed/overrides')
