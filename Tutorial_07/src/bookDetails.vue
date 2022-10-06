<!-- bookDetails.vue -->
<template>
  <div class="row">
   <div class="eleven column" style="margin-top: 5%">
    <h2>{{title}}</h2>
     <form>
     <div class="row">
      <div class="six columns">
       <label for="titleInput">Title</label>
       <input class="u-full-width" type="text"
         v-model="book.title">
      </div>
      <div class="six columns">
       <label for="editionInput">Edition</label>
       <input class="u-full-width" type="text"
          v-model="book.edition">
      </div>
      <div class="six columns">
       <label for="copyrightInput">Copyright</label>
       <input class="u-full-width" type="text"
          v-model="book.copyright">
      </div>
     </div>
     <div class="row">
      <div class="six columns">
       <label for="emailInput">Author</label>
       <input class="u-full-width" type="email"
          v-model="book.authorid">
      </div>
      <div class="six columns">
       <label for="phoneInput">Publisher</label>
       <input class="u-full-width" type="tel"
         v-model="book.publisherid">
      </div>
      <router-link class="button button-primary" 
        to="/book">Back</router-link>
      <a v-if='edit' class="button button-primary" style="float: right"
         v-on:click="updateBook()">Update</a>
      <a v-if='create' class="button button-primary" style="float: right"
         v-on:click="createBook()">Create</a>
     </div>
    </form>
   </div>
  </div>
</template>

<script>
	
import { useRoute } from 'vue-router'
	
export default {
  props: ['create','edit','show'],
  data: function() {
    return {
      title: "Book Data",
      book: {'title':'','edition':'','copyright':'','language':'','pages':'','author':"",'publisher':''},
    }
  },
  created () {
   const route = useRoute();  
   this.findBook(route.params.id);
  },
  methods: {
	  cmsToObj(item) {
	    item.fields.forEach(field => {
	       item[field.slug] = field.value
	    })
			item['id'] = item.slug
			delete item.fields
		  return item
	  },
    findBook: function(id) {
      fetch('https://api.typewriter.cloud/arce/bookstore/types/book/'+id,
        { headers: {'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((result) => {
          this.book = this.cmsToObj(result);
        })
    },
    updateBook: function() {
      this.prof['_method'] = 'PUT';
      const route = useRoute(); 
      var id = route.params.id;
      fetch('https://api.typewriter.cloud/arce/bookstore/types/book/'+id,
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.book)})
        .then((data) => {
          router.push('/book');
        }
      )
    },
    createBook: function() {
      fetch('https://api.typewriter.cloud/arce/bookstore/types/book',
        { headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify(this.book)})
        .then((data) => {
           router.push('/book');
        }
      )
    }
  }
}
</script>