<template>
  <div id="app">
    <div class="flex-section">
      <!--<header-main></header-main>-->
      <router-view></router-view>
    </div>
  

  </div>
</template>

<script>

// import headerMain from "./components/HeaderMain.vue";

export default {
  
  components: {
    // headerMain,
   
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