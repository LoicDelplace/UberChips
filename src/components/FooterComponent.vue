<template>
  <footer>
    <div class="contactUsContainer">
      <p class="footerHover">Nous contacter</p>
      <p>+ 33 7 35383773</p>
      <p>contact@uberchips.fr</p>
    </div>
    <div class="copyrightContainer">
      <div class="logoContainer">
        <img src="/images//Chips.png" alt="Logo Uberchips" class="logoImg" />
        <div class="logoTitleContainer">
          <span class="logoTitle">Uber</span>
          <span class="logoTitle">Chips</span>
        </div>
      </div>
      <p class="footerHover">© 2023 Uberchips</p>
    </div>
    <div class="newsLettersContainer">
      <p class="newsLettersTitle footerHover">Recevoir les informations de nos nouveaux produits</p>
      <div class="newsLettersInputContainer">
        <input type="text" placeholder="Votre adresse mail" />
        <button>S'inscrire</button>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">

.footerHover {
  &:hover {
    color: #05386b;
  }
}

.contactUsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
}

.copyrightContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6em;
    height: 100%;
    // background-color: red;
    color: #05386b;
    font-size: 1.5rem;
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
}

.newsLettersContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  width: 20%;
  height: 100%;
  .newsLettersTitle {
    margin-bottom: 1em;
  }
}

.newsLettersInputContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  input {
    width: 20em;
    height: 2em;
    border-radius: 0.5em;
    border: none;
    margin-right: 1em;
    padding: 1em;
  }
  button {
    width: 6em;
    height: 2em;
    border-radius: 0.5em;
    border: none;
    background-color: #05386b;
    color: #edf5e1;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5em;
    &:hover {
      cursor: pointer;
      background-color: #379683;
    }
  }
}

</style>
