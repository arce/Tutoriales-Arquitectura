<!-- pages/authors/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="`http://cms-una.unaux.com/:bookstore/storage/uploads${author.image.path}`">
     </div>
     <div class="six columns">
       <h4>{{author.name}}</h4>
       Nationality: {{author.nationality}}; Born: {{author.birth_year}};
       Fields: {{author.fields}}
       <p></p>
       <h5>Biography</h5>
			 <span v-html="author.biography"></span>
			 <p></p>
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
	const { data: author, refresh: rAuthor } = await useFetch(`http://cms-una.unaux.com/:bookstore/api/content/item/authors/${route.params.slug}`)
	rAuthor()
	const { data: books, refresh: rBook } = await useFetch(`http://cms-una.unaux.com/:bookstore/api/content/items/books?filter={"authorId._id":"${route.params.slug}"}&fields={"title":true}`)
	rBook()
</script>
