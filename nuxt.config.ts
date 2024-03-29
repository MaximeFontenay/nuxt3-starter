// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
      enabled: true,
  },
  app: {
      head : {
          title: 'Maxime Fontenay - Front-End Developer & Creative Developer',
          htmlAttrs: {lang: 'fr'},
          meta: [
              {name: 'charset', charset: 'utf-8'},
              {name: 'name', content: 'viewport'},
              {name: 'language', content: 'FR'},
              {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
              {name: 'description', content: 'New'},
              {name: 'url', content: 'https://maximefontenay.fr'},
              {name: 'robots', content: 'index,follow'},
              {name: 'author', content: 'Maxime Fontenay'},
              {name: 'designer', content: 'Maxime Fontenay'},
              {name: 'owner', content: 'Maxime Fontenay'},
          ]
      },
  },
  css: [
      '@/assets/_variables.scss',
      '@/assets/_base.scss',
  ],

  components: {
      // global: true,
      dirs: ['~/components']
  },
  typescript: {
      strict: true
  },
  modules: [],
})