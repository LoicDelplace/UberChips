<template>
  <header>
    <div class="logoContainer">
      <img src="/images//Chips.png" alt="Logo Uberchips" class="logoImg" />
      <div class="logoTitleContainer">
        <span class="logoTitle">Uber</span>
        <span class="logoTitle">Chips</span>
      </div>
    </div>
    <nav>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <RouterLink :to="{name: 'products'}">Nos Produits</RouterLink>
      <RouterLink :to="{name: 'not-found'}" id="paoloNav"
        ><span id="newItem">Nouveauté</span>Paolo Nu
        <span id="subTitle">(bien croquant)</span></RouterLink
      >
      <RouterLink :to="{name: 'login'}">Mon compte</RouterLink>
      <RouterLink :to="{name: 'cart'}"><img src="/images//cart.svg" id="cartSvg" /></RouterLink>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #8ee4af;
  height: 6em;
  width: 100%;
  text-transform: uppercase;
}

.logoContainer {
  display: flex;
  align-items: center;
  float: left;
  width: 15em;
  height: 100%;
  // background-color: red;
  color: #05386b;
  font-size: 2rem;
  .logoImg {
    width: 4em;
    height: 4em;
  }
  .logoTitleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: -0.3em;
  }
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 4em;
  width: 100%;
  a {
    color: #05386b;
    text-decoration: none;
    margin-left: 1rem;
    font-size: 1.5rem;
    &:hover {
      color: #379683;
      scale: 1.1;
    }
  }
}

#paoloNav {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  #subTitle {
    font-size: 0.4rem;
  }
  #newItem {
    font-size: 0.8rem;
    color: #379683;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.2rem;
    translate: -2rem -1rem;
    border-radius: 0.4rem;
    rotate: 340deg;
  }
}

#cartSvg {
  width: 2em;
  height: 2em;
  color: #05386b;
}
</style>
