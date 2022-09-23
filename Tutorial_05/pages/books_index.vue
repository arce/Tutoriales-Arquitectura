<script>
  export default {
    async asyncData({ $content, params }) {
      const books = await $content('books').fetch()
      return {
        books
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Books Information</h3>
     <p>This section presents information about books</p>
   <ul>
     <li v-for="book of books" :key="book.slug">
       <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">{{book.title}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>