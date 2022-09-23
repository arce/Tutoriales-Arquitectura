<!-- pages/authors_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Authors Information</h3>
     <p>This section presents information about authors</p>
   <ul>
     <ContentList path="/authors" v-slot="{ list }">
        <li v-for="author in list" :key="author._path">
         <NuxtLink :to="author._path">{{ author.title }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>
