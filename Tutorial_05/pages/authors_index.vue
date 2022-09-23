<script>
  export default {
    async asyncData({ $content, params }) {
      const authors = await $content('authors').fetch()
      return {
        authors
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Authors Information</h3>
     <p>This section presents information about authors</p>
   <ul>
     <li v-for="author of authors" :key="author.slug">
       <NuxtLink :to="{ name: 'authors-slug', params: { slug: author.slug } }">{{author.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>