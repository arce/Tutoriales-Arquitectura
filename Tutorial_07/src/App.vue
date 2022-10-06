\<!-- src/App.vue -->
<template>
  <div id="app" class="container">
    <div class="row" style="margin-top: 5%">
      <router-link class="button button-primary" 
       style="margin-right: 10px;" to="/book">Books
      </router-link> 
      <router-link class="button button-primary" 
       style="margin-right: 10px;" to="/author">Authors
      </router-link>
      <router-link class="button button-primary" 
       to="/publisher">Publishers
      </router-link>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
}
</script>