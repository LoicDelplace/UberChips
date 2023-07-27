<template>
  <div class="container">
    <div class="bubbleInfoContainer">
      <div v-for="bubble in bubbles" :key="bubble.idBubble" class="bubbles">
        <div class="iconBubble">
            <img :src="bubble.icon"/>
        </div>
        <p class="contentBubble">{{ bubble.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bubbles = ref([
  {
    idBubble: 1,
    icon: './src/assets/images/user.png',
    content: "Connecte-toi pour un paiement plus rapide ! (Puis, on vend tes données aussi..)"
  },
  {
    idBubble: 2,
    icon: './src/assets/images/delivery.png',
    content: "Livraison gratuite et express à partir de 100€ d’achats Pas de retours possible, on est pas l’Abbé Pierre nous."
  },
  {
    idBubble: 3,
    icon: './src/assets/images/payment.png',
    content: "On accepte tout le monde ici ! Paye avec ce que tu veux (on aime l’argent)"
  },
  {
    idBubble: 4,
    icon: './src/assets/images/customer.png',
    content: "Un SAV éclaté mais on fait bien semblant, t'inquiète"
  }
])
</script>

<style scoped lang="scss">
.container {
  //   background-color: red;
  width: 100vw;
  height: 12.5em;
  margin-bottom: 3em;
}

.bubbleInfoContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  //   background-color: blue;
}
.bubbles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;

  .iconBubble{
    width: 8em;
    height: 8em;
    margin-bottom: 1em;
    background-color: #8ee4af;
    border-radius: 50%;
    padding: 1em;
    img{
        width: 100%;
        height: 100%;
    }
  }

  .contentBubble {
    width: 100%;
    height: 100%;
    font-size: 1em;
    text-align: center;
  }
}
</style>
