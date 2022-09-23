<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()
      return {
        article,
        prev,
        next
      }
   },
   methods: {
           formatDate(date) {
             const options = { year: 'numeric', month: 'long', day: 'numeric' }
             return new Date(date).toLocaleDateString('en', options)
           }
        }
  }
</script>

<template>
 <div class="container">
  <article class="row">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />
    <author :author="article.author" />
    <prev-next :prev="prev" :next="next" />
  </article>
</div>
</template>