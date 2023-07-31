<template>
  <main>
    <div class="leftSide">
      <div class="logoContainerAccount">
        <img src="@/assets/images/Chips.png" alt="Logo Uberchips" class="logoImgAccount" />
        <div class="logoTitleContainerAccount">
          <span class="logoTitleAccount">Uber</span>
          <span class="logoTitleAccount">Chips</span>
        </div>
      </div>
    </div>
    <div class="rightSide" v-if="!isConnected">
      <div class="authContainer">
        <div class="topContainer">
          <h1>Connexion</h1>
        </div>
        <div class="content">
          <form class="authForm">
            <div class="mailContainer">
              <label for="email">Votre email <span class="requiredStar">*</span> :</label>
              <input type="email" id="email" placeholder="Votre email..." required />
            </div>
            <div class="passwordContainer">
              <label for="password">Mot de passe <span class="requiredStar">*</span> : </label>
              <input type="password" id="password" placeholder="Mot de passe..." required />
            </div>
            <p class="forgotPassword">
              <router-link to="resetPassword">Mot de passe oublié ?</router-link>
            </p>
            <div class="rememberMe">
              <input type="radio" name="rememberMe" id="rememberMe" />
              <p>Se souvenir de moi</p>
            </div>
            <input type="button" value="Se connecter" />
          </form>
        </div>
      </div>
      <div class="registerLinkContainer">
        <p>Vous n'avez pas de compte ?</p>
        <router-link to="register">Créer un compte</router-link>
      </div>
    </div>
    <!-- !isConnected -->
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isConnected = ref(false);
const router = useRouter();

onBeforeMount(() => {
  if (isConnected.value) {
    router.push({ name: 'home' });
  }
}); 

</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf5e1;

  .rightSide {
    width: 100%;
    height: 100%;
    float: right;
  }

  .leftSide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    // background-color: purple;

    .logoContainerAccount {
      display: flex;
      align-items: center;
      // background-color: red;
      color: #05386b;
      font-size: 2rem;
      .logoImgAccount {
        width: 10em;
        height: 10em;
      }
      .logoTitleContainerAccount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2em;
        margin-left: -0.3em;
      }
    }
  }
}

.authContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  margin: 0 1em;
  border-radius: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  .topContainer {
    border: none;
    border-radius: 1em 1em 0 0;
    margin: 0;
    width: 100%;
    text-align: center;
    background-color: #5cdb95;
    h1 {
      color: #05386b;
      font-size: 2em;
      padding: 0.7em;
    }
  }
  .content {
    border: none;
    border-radius: 0 0 1em 1em;
    margin: 0;
    width: 100%;
    text-align: center;
    background-color: #f5f5f5;
    color: #05386b;
    padding: 2em;
    .authForm {
      .mailContainer,
      .passwordContainer {
        width: 18em;
        font-size: 1.8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label {
          width: 8em;
          text-align: right;
        }
        input[type='email'],
        input[type='password'] {
          font-size: 0.5em;
          width: 15em;
          height: 2.5em;
          border-radius: 1em;
          border: 1px solid #5cdb95;
          background-color: #b4b4b4;
          padding-left: 1em;
          text-align: left;
        }
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      .rememberMe {
        display: flex;
        align-items: center;
        justify-content: center;
        input[type='radio'] {
          margin-right: 0.5em;
        }
      }
      .forgotPassword {
        color: #05386b;
        cursor: pointer;
        a {
          color: #b4b4b4;
          text-decoration: underline;
          font-size: 0.8em;
        }
      }
      input[type='button'] {
        width: 10em;
        height: 2em;
        border-radius: 1em;
        border: none;
        background-color: #5cdb95;
        color: #05386b;
        font-size: 1.2em;
        text-transform: uppercase;
        font-weight: 800;
        text-align: center;
        cursor: pointer;
      }

      .requiredStar {
        color: rgb(211, 0, 0);
      }
    }
  }
}

.registerLinkContainer {
  font-family: 'Poppins', sans-serif;
  width: 50rem;
  margin: 2em 1em;
  background-color: #5cdb95;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  color: #05386b;
  a {
    font-weight: bold;
    color: #05386b;
    text-decoration: UNDERLINE;
    text-transform: uppercase;
  }
}
</style>
