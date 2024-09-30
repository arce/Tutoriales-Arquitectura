<!-- pages/authors_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Authors Information</h3>
     <p>This section presents information about authors</p>
   <ul>
     <li v-for="author in authors" :key="author._id">
       <NuxtLink :to="`/authors/`+author._id">{{ author.name }}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
<script setup>
	const { data: authors } = await useFetch(`http://cms-una.unaux.com/:bookstore/api/content/items/authors?fields={"name":true}`)
</script>