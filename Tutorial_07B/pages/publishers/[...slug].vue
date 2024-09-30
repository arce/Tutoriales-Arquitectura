<!-- pages/publishers/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="`http://cms-una.unaux.com/:bookstore/storage/uploads${publisher.image.path}`">
     </div>
     <div class="six columns">
       <h4>{{publisher.name}}</h4>
       Country: {{publisher.country}}; Founded: {{publisher.founded}}; 
       Genere: {{publisher.genere}}
       <pre></pre>
       <h5>History</h5>
       <span v-html="publisher.description"></span>
       <pre></pre>
       <h5>Books</h5>
       <ul>
         <li v-for="book in books" :key="book._id">
           <NuxtLink :to="`/books/`+book._id">{{ book.title }}</NuxtLink>
         </li>
      </ul>
     </div>
   </div>
   <FooterView />
 </div>
</template>
<script setup>
	const route = useRoute()
	const { data: publisher, refresh: rPublisher } = await useFetch(`http://cms-una.unaux.com/:bookstore/api/content/item/publishers/${route.params.slug}`)
	rPublisher()
	const { data: books, refresh: rBook } = await useFetch(`http://cms-una.unaux.com/:bookstore/api/content/items/books?filter={"publisherId._id":"${route.params.slug}"}&fields={"title":true}`)
	rBook()
</script>
