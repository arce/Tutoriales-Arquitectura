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
     </div>
     <div class="two columns"></div>
    </ContentDoc>
   </div>
   <FooterView />
 </div>
</template>