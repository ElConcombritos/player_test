<template>
  <div id="app">
    <!--<hello-world :msg="indice"></hello-world>-->
    <Element :Element="pouet"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Element from "./components/Element";


export default {
  name: 'App',
  components: {
    Element,
    HelloWorld
  },
  data: function () {
    return {

    }
  },
  mounted: function () {
    this.$store.commit('initBoucle')
  },
  computed: {
    pouet () {
      return this.$store.state.currentElement;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
