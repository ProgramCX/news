<template>
  <NewsCore/>
</template>

<script>
import NewsCore from './components/NewsCore.vue'

export default {
  name: 'App',
  components: {
    NewsCore,
  }
}
</script>

<style>

body{
  background-image: url(assets/NaranjoBulnes_ZH-CN0696600867_1920x1080.jpg);
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  
}
</style>
