<!-- pages/books/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <ContentDoc v-slot="{doc}">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+doc.image">
     </div>
     <div class="six columns">
       <h4>{{doc.title}}</h4>
       by <NuxtLink :to="'/authors/'+doc.authorId">{{doc.author}}</NuxtLink>
       Edition: {{doc.edition}}; Copyright: {{doc.copyright}};
       Language: {{doc.language}}; Pages: {{doc.pages}}
       published by <NuxtLink :to="'/publishers/'+doc.publisherId">
       {{doc.publisher}}</NuxtLink>
        <pre></pre>
       <h5>Description</h5>
        <ContentRenderer :value="doc" />
				<button class="
              snipcart-add-item
              mt-4
              bg-white
              border border-gray-200
              d
              hover:shadow-lg
              text-gray-700
              font-semibold
              py-2
              px-4
              rounded
              shadow"
					:data-item-id="doc.id"
					:data-item-price="doc.price"
					:data-item-description="doc.description"
					:data-item-image="'/images/'+doc.image"
					:data-item-name="doc.title"
					>Buy Me!</button>
     </div>
     <div class="two columns"></div>
    </ContentDoc>
   </div>
   <FooterView />
 </div>
</template>
<script>
	export default {
		mounted () {
		    document.addEventListener('snipcart.ready', function () {
		      this.addItemEvent = window.Snipcart.events.on('item.added', (cartItem) => {
		        // console.log(cartItem)
		      })
		    })
		  }
	}
</script>