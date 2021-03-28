const env = process.env.NODE_ENV || 'development'

export default {
  ssr: false,
  target: 'static',
  components: true,
  modern: env !== 'development',
  env: {
    currentEnv: env
  },
  head: {
    title: 'locomotive-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
  },
  css: [ '~/assets/stylesheets/main.scss' ],
  plugins: [ { src: '~/plugins/env.js' } ],
  buildModules: [],
  modules: [],
  build: {
    cache: env !== 'development',
    babel: {
      plugins: [ '@babel/plugin-proposal-optional-chaining' ]
    },
    transpile: []
  }
}
