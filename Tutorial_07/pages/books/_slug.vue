<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/arce/bookstore/types'
      let book = await $axios.$get(cmsUrl+'/book/'+params.slug)
      book = util.cmsToObj(book)
      let author = await $axios.$get(cmsUrl+'/authors/'+book.authorid)
      author = util.cmsToObj(author)
      let publisher = await $axios.$get(cmsUrl+'/publishers/'+book.publisherid)
      publisher = util.cmsToObj(publisher)
      return { cmsUrl, book, author, publisher }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="book.bookimage">
     </div>
     <div class="six columns">
       <h4>{{book.title}}</h4>
	   by <NuxtLink :to="cmsUrl+'/authors/'+book.authorid">{{author.name}}</NuxtLink></br>
	   Edition: {{book.edition}}; Copyright: {{book.copyright}}; 
	   Language: {{book.language}}; Pages: {{book.pages}}</br>
	   published by <NuxtLink :to="cmsUrl+'/publishers/'+book.publisherid">{{publisher.name}}</NuxtLink></br></br>
	   <b>Description</b></br>
	   <span v-html="book.content"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>