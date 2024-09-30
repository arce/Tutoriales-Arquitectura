<!-- pages/publishers_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Publishers Information</h3>
     <p>This section presents information about publishers</p>
   <ul>
     <li v-for="publisher in publishers" :key="publisher._id">
       <NuxtLink :to="`/publishers/`+publisher._id">{{ publisher.name }}</NuxtLink>
      </li>
   </ul>
   <FooterView />
 </div>
</template>
<script setup>
	const { data: publishers } = await useFetch(`http://cms-una.unaux.com/:bookstore/api/content/items/publishers?fields={"name":true}`)
</script>