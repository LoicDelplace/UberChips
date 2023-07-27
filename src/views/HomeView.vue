<script setup>
import { ref } from 'vue'
import Review from '@/components/ReviewComponent.vue'
import Info from '@/components/InfoComponent.vue'

const reviews = ref([
{
    idReview: 1,
    nickname: 'Gérard Depardieu',
    content: 'Je n’avais plus de chips avec mon pinard, merci UberChips !',
    rating: 5
  },
  {
    idReview: 2,
    nickname: 'Pierre Palmade',
    content:
      'Je voulais prendre le volant mais je n’avais plus assez d’alcool. Uberchips, va écraser le marché.',
    rating: 2
  }
])
</script>

<template>
  <main>
    <h1>Uberchips</h1>
    <h2>Toujours la patate.</h2>
    <span id="homeSubTitle">On vous la livre chez vous.</span>

    <Review :reviews="reviews" />
    <Info />
  </main>
</template>

<style scoped lang="scss">
main {
  text-transform: uppercase;
  color: #05386b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 5em;
  }
  h2 {
    font-size: 4em;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  #homeSubTitle {
    font-size: 3em;
    width: 50%;
    text-align: center;
    margin-bottom: 0.4em;
  }
}
</style>
