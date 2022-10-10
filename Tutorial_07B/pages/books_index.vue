<!-- pages/books_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Books Information</h3>
   <p>This section presents information about books</p>
   <ul>
     <li v-for="book in books" :key="book._id">
       <NuxtLink :to="`/books/`+book._id">{{ book.title }}</NuxtLink>
     </li>
   </ul>
  <FooterView />
 </div>
</template>
<script setup>
	const { data: books } = await useFetch(`https://cms-una.000webhostapp.com/api/content/items/books?fields={"title":true}`)
</script>