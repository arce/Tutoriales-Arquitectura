<!-- pages/authors/[...slug].vue -->
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
       Nationality: {{doc.nationality}}; Born: {{doc.birth_year}};
       Fields: {{doc.fields}}
       <pre></pre>
       <h5>Biography</h5>
       <ContentRenderer :value="doc" />
			 <h5>Books</h5>
			  <ul>
		   <ContentQuery path="/books" :where="{ authorId: doc.id }" v-slot="{ data }">
		         <li v-for="book in data" :key="book._path">
		           <NuxtLink :to="book._path">{{ book.title }}</NuxtLink>
		         </li>
		   </ContentQuery>
			 </ul>
			</div>
     </ContentDoc>
   </div>
   <FooterView />
 </div>
</template>