<!-- pages/publishers_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Publishers Information</h3>
     <p>This section presents information about publishers</p>
   <ul>
     <ContentList path="/publishers" v-slot="{ list }">
        <li v-for="publisher in list" :key="publisher._path">
         <NuxtLink :to="publisher._path">{{ publisher.title }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>
