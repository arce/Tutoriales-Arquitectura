<script>
import { mapState } from 'vuex'

export default {
  async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
    await dispatch('getBook', params)
    await dispatch('getReadMore', {
          slug: params.slug,
          tags: Object.keys(store.state.books.data)
   })
   await dispatch('getPrevNext', params)
  },
  computed: {
    ...mapState({
      book: (state) => state.book.data,
      readMore: (state) => state.readMore.data,
      prevNext: (state) => state.prevNext.data,
    })
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
	 <PrevNext :prev="prevNext.prev" :next="prevNext.next" />
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>