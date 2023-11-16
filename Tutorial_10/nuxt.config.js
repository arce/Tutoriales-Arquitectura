import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: ['@nuxt/content','@nuxtjs/snipcart'],
	  snipcart: {publicApiKey: 'Njc0MjUwYWEtODU5YS00MDM4LWJkMjEtNmIyMzU1MWE1NmQwNjM4MzU3NjExMDAzMTQwMjYy'},
    app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: 'css/normalize.css'},
        { rel: 'stylesheet', href: 'css/skeleton.css'},
        { rel: 'icon', type:"image/png", href: 'images/favicon.png'}
      ]
    }
	}
})