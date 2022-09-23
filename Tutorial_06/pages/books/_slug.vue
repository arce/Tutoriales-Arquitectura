<script>
  export default {
    async asyncData({ $content, params }) {
      const book = await $content('bestsellers', params.slug).fetch()
      return { book }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
     </div>
     <div class="six columns">
       <h4>{{book.name}}</h4>
	   by {{book.author}}</br>
	   User Rating: {{book.userRating}}; Year: {{book.year}};</br>
	   Price: {{book.price}}; Genere: {{book.genre}}
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>