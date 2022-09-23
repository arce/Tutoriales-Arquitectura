<script>
  export default {
    async asyncData({ $content, params }) {
      const author = await $content('authors', params.slug).fetch()
      const books = await $content('books').where({ authorId: params.slug }).fetch()
      return { author, books }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+author.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{author.name}}</h4>
	   Nationality: {{author.nationality}}; Born: {{author.birth_year}}</br>
	   Fields: {{author.fields}}</br></br>
	   <b>Biography</b></br>
	    <nuxt-content :document="author" />
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