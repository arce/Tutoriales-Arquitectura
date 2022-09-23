<script>
  export default {
    async asyncData({ $content, params }) {
      const publishers = await $content('publishers').fetch()
      return {
        publishers
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Publishers Information</h3>
     <p>This section presents information about publishers</p>
   <ul>
     <li v-for="publisher of publishers" :key="publisher.slug">
       <NuxtLink :to="{ name: 'publishers-slug', params: { slug: publisher.slug } }">{{publisher.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>