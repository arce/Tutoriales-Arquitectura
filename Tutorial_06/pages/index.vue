<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Amazon Top 50 Bestselling Books 2009 - 2019</h3>
     <p>Dataset on Amazon's Top 50 bestselling books from 2009 to 2019. Contains 550 books, data has been categorized into fiction and non-fiction using Goodreads</p>
   <ul>
     <li v-for="book in books" :key="book.num">
       <NuxtLink :to="`/books/${book.num}`">{{book.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
<script setup>
  const data = await queryContent('bestsellers').only('items').findOne()
	const books = data.items
	console.log(books)
</script>