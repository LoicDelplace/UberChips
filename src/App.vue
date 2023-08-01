<template>
  <Header />
  <RouterView />
  <Footer />
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
  font-family: 'poetsenoneregular', sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  background-color: #edf5e1;
  width: 100vw;
  min-height: 100vh;
  position:relative;
  padding-bottom:2em;
}

body::after {
  content: '';
  display: block;
  height: 10em; /* Footer's height*/
}

footer {
  margin-top: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #8ee4af;
  color: #edf5e1;
  font-size: 1.5em;
  height: 8em;
}

.requiredStar {
  color: red;
}
</style>
