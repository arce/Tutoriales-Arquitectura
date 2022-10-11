<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
      </div>
      <div class="six columns">
        <h4>{{book.name}}</h4>
	     by {{book.author}}
	     User Rating: {{book.userRating}}; Year: {{book.year}};
	     Price: {{book.price}}; Genere: {{book.genre}}
	    </div>
	    <div class="two columns"></div>
    </div>
    <FooterView />
  </div>
</template>
<script setup>
	const route = useRoute()
  const books = await queryContent('bestsellers').only('items').findOne()
	const book = books.items.find(book => book.num == route.params.slug)
</script>