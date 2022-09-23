<style>
  h1 {
   padding-top: 20px;
  }
</style>
<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        articles
      }
    }
  }
</script>

<template>
  <div class="container">
   <div class="row">
    <h1>Blog Posts</h1>
	<NuxtLink to="/search">Search page</NuxtLink>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
   </div>
  </div>
</template>