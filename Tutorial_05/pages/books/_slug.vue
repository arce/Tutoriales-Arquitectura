<script>
  export default {
    async asyncData({ $content, params }) {
      const book = await $content('books', params.slug).fetch()
      const author = await $content('authors').where({ id: book.authorId }).only(['name']).fetch()
      const publisher = await $content('publishers').where({ id: book.publisherId }).only(['name']).fetch()
      return { book, author, publisher }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+book.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{book.title}}</h4>
	   by <NuxtLink :to="'/authors/'+book.authorId">{{author[0].name}}</NuxtLink></br>
	   Edition: {{book.edition}}; Copyright: {{book.copyright}}; 
	   Language: {{book.language}}; Pages: {{book.pages}}</br>
	   published by <NuxtLink :to="'/publishers/'+book.publisherId">{{publisher[0].name}}</NuxtLink></br></br>
	   <b>Description</b></br>
	    <nuxt-content :document="book" />
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>