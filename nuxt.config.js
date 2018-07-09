module.exports = {
  head: {
    title: 'Kriptomobile - Official Page',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'twitter:image', content: 'https://kriptomobile.herokuapp.com/KRIP.png'},
      {property:"og:image",content: 'https://pbs.twimg.com/profile_images/1003341251062747137/hffXd3dA_normal.jpg'}

    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'kriptomobile.ico',
      }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  css: [
    '~/assets/styles.sass'
  ],
  plugins: ['~/plugins/components.js', '~/plugins/twitter.js'],
  loading: {color: 'hsl(228, 26%, 27%)'},
  build: {
    vendor: ['axios'],
    extend(config, {isDev, isClient}) {
      const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader');
      vueLoader.options.cssModules = {
        localIdentName: '[name]__[local]__[hash]'
      };

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-cssnext': {
          browsers: [
            'last 3 versions',
            'iOS >= 8',
            'Safari >= 8',
            'ie >= 10'
          ],
          grid: true
        }
      }
    }
  },
  modules: ['nuxt-sass-resources-loader'],
  sassResources: [
    '@/assets/sass/utilities/_all.sass'
  ]
};
