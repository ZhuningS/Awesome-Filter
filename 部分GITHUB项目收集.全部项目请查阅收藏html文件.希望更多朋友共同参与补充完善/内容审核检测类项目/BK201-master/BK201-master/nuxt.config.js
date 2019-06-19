const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const path = require('path')
const qiniu = require('./deploy/qiniu')
const resolve = dir => path.join(__dirname, '', dir)

module.exports = {
  mode: 'spa',
  env: {
    API_URL: isDev ? 'http://localhost:3099/' : 'https://api.calibur.tv/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'calibur - 审核后台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    bodyAttrs: {
      id: 'calibur-tv'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://static.calibur.tv/favicon.ico'
      }
    ]
  },

  /**
   * Global middleware
   */
  router: {
    middleware: ['auth', 'route-change'],
    extendRoutes(routes) {
      for (const route of routes) {
        route.props = /:/.test(route.path)
        route.meta = {
          title: route.path.replace('/', ''),
          icon: route.path.replace('/', '')
        }
        if (route.children) {
          for (const item of route.children) {
            item.meta = {
              title: item.name,
              icon: item.name
            }
            item.props = /:/.test(item.path)
          }
        }
      }
      routes.push({
        name: 'error-fallback',
        path: '*',
        component: resolve('pages/error/404.vue')
      })
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409eff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.scss',
    '~/vendor/styles/index.scss',
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global-components',
    '~/plugins/prototype',
    '~/plugins/axios',
    '~/plugins/utils'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    sass: ['~/assets/css/variables.scss', '~/assets/css/mixins.scss']
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome', 'lodash', 'vue-moment'],
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|vendor)/,
          enforce: 'pre'
        })
      }
    },
    extractCSS: true,
    plugins: (() => {
      const result = [
        new webpack.ProvidePlugin({
          _: 'lodash'
        }),
        new webpack.ContextReplacementPlugin(
          /moment[\\\/]locale$/,
          /^\.\/(zh-cn)$/
        )
      ]
      return isDev
        ? result.concat([])
        : result.concat([
            new CompressionPlugin({
              test: /\.(js|css|html)$/
            }),
            new BrotliPlugin({
              test: /\.(js|css|html)$/
            })
          ])
    })(),
    publicPath: isDev ? '/_nuxt/' : `${qiniu.host}${qiniu.key_prefix}`,
    babel: {}
  }
}
