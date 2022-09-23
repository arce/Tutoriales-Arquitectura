<!-- pages/index.vue -->
<template>
  <main>
    <TheHeader/>
    <h1>Home Page</h1>
    <ul><li>
      <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
      </NuxtLink>
    </li><li>
      <a href="https://nuxtjs.org">External Link to another page</a>
    </li></ul>
   <TheFooter/>
  </main>
</template>