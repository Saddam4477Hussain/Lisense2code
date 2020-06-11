<template>
  <div id="app">
    <div class="flex-section">
      <headerMain></headerMain>
      <router-view></router-view>
    </div>
  

  </div>
</template>

<script>

import HeaderMain from "@/components/HeaderMain.vue";

export default {
  
  components: {
    HeaderMain,
   
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
}
</style>