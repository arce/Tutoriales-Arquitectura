<!-- pages/books_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Books Information</h3>
   <p>This section presents information about books</p>
   <ul>
     <ContentList path="/books" v-slot="{ list }">
        <li v-for="book in list" :key="book._path">
         <NuxtLink :to="book._path">{{ book.title }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
  <FooterView />
 </div>
</template>