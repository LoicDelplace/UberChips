<template>
  <Header />
  <RouterView />
  <Footer/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'poetsenoneregular',sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  background-color: #edf5e1;
  width: 100vw;
  height: 100vh;
}

</style>
