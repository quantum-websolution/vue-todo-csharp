import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
  app: {
    head: {
      title: 'todolist',
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: '' },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow, noarchive',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env?.NUXT_BASE_URL,
      apiUrl: process.env?.NUXT_API_URL,
    },
  },

  imports: {
    dirs: ['@/types/**'],
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  build: {
    transpile: ['vuetify'],
  },

  plugins: ['~/plugins/vuetify.ts'],

  css: [],

  typescript: {
    shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
    strict: true, // 型チェックを厳格化
    typeCheck: false, // nuxt devまたはnuxt build時に型チェックを実行
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
  },

  compatibilityDate: '2024-10-04',
})
