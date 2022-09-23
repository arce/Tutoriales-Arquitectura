export default {
	target: 'static',
    modules: ['@nuxt/content'],
    components: true,
    head: {
      titleTemplate: '%s - Books Site',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'css/normalize.css'},
        { rel: 'stylesheet', href: 'css/skeleton.css'},
        { rel: 'icon', type:"image/png", href: 'images/favicon.png'}
      ]
    }
}