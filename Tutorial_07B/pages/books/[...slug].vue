<!-- pages/books/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${book.image.path}`">
     </div>
     <div class="six columns">
       <h4>{{book.title}}</h4>
       by <NuxtLink :to="`/authors/`+book.authorId._id">{{book.author}}</NuxtLink>
       Edition: {{book.edition}}; Copyright: {{book.copyright}};
       Language: {{book.language}}; Pages: {{book.pages}}
       published by <NuxtLink :to="`/publishers/`+book.publisherId._id">
       {{book.publisher}}</NuxtLink>
			 <p></p>
       <h5>Description</h5>
			 <span v-html="book.description"></span>
     </div>
     <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
<script setup>
	const route = useRoute()
	const { data: book, refresh } = await useFetch(`https://cms-una.000webhostapp.com/api/content/item/books/${route.params.slug}`)
	refresh()
</script>
