<template>
  <div id="app">
    <header class="header">
      <router-link to="/"> Todo List </router-link> 
      <router-link to="/about"> About </router-link> 
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .header {
    margin-bottom: 60px;
    
    a {
      margin: 0 5px;
    }
  }
}
</style>
