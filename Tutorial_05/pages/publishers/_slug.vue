<script>
  export default {
    async asyncData({ $content, params }) {
      const publisher = await $content('publishers', params.slug).fetch()
      const books = await $content('books').where({ publisherId: params.slug }).fetch()
      return { publisher, books }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+publisher.image">
     </div>
     <div class="six columns">
       <h4>{{publisher.name}}</h4>
	   Country: {{publisher.country}}; Founded: {{publisher.founded}}</br>
	   Genere: {{publisher.genere}}</br></br>
	   <b>History</b></br>
	    <nuxt-content :document="publisher" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Books</h5>
	   <ul>
	     <li v-for="book of books" :key="book.slug">
	       <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">{{book.title}}</NuxtLink>
	     </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>