<template>
  <main>
    <div class="containerRegisterForm">
      <div class="topContainerRegisterForm">
        <h1>Register</h1>
      </div>
      <div class="divRegisterForm">
        <form id="registerForm">
          <!-- Input : prénom, nom,date de naissance, email, mot de passe, adresse (n°,rue,code postal, ville), radioButton "CGU" -->
          <div class="sameRowInputs">
            <div class="inputFirstname">
              <label for="firstname">Prénom <span class="requiredStar">*</span> :</label>
              <input type="text" id="firstname" placeholder="Votre prénom..." required />
            </div>
            <div class="inputLastname">
              <label for="lastname">Nom <span class="requiredStar">*</span> :</label>
              <input type="text" id="lastname" placeholder="Votre nom..." required />
            </div>
          </div>
          <div class="inputBirthDate">
            <label for="birthdate">Date de naissance <span class="requiredStar">*</span> :</label>
            <input type="date" id="birthdate" placeholder="Votre date de naissance..." required />
          </div>
          <div class="inputEmail">
            <label for="email">Email <span class="requiredStar">*</span> :</label>
            <input type="email" id="email" placeholder="Votre email..." required />
          </div>
          <div class="inputPassword">
            <label for="password">Mot de passe <span class="requiredStar">*</span> :</label>
            <input type="password" id="password" placeholder="Votre mot de passe..." required />
          </div>
          <div class="inputsAdress">
            <label for="address">Adresse <span class="requiredStar">*</span> :</label>
            <div class="sameRowInputs">
              <div class="inputStreetNumber">
                <label for="streetNumber">N° <span class="requiredStar">*</span> :</label>
                <input type="number" id="streetNumber" placeholder="Votre numéro..." required />
              </div>
              <div class="inputStreet">
                <label for="street">Rue <span class="requiredStar">*</span> :</label>
                <input type="text" id="street" placeholder="Votre rue..." required />
              </div>
            </div>
            <div class="sameRowInputs">
              <div class="inputPostalCode">
                <label for="postalCode">Code postal <span class="requiredStar">*</span> :</label>
                <input type="number" id="postalCode" placeholder="Votre code postal..." required />
              </div>
              <div class="inputCity">
                <label for="city">Ville <span class="requiredStar">*</span> :</label>
                <input type="text" id="city" placeholder="Votre ville..." required />
              </div>
            </div>
          </div>
          <div class="inputCGU">
            <input type="radio" id="CGU" required />
            <label for="CGU"
              >J'accepte les <a href="#">CGU</a> <span class="requiredStar">*</span> :</label
            >
          </div>
          <input type="button" value="S'inscrire" />
        </form>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
.containerRegisterForm {
  margin: 1em auto;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edf5e1;
  .topContainerRegisterForm {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5cdb95;
    border-radius: 10px 10px 0 0;
    h1 {
      font-size: 2em;
      font-weight: bold;
    }
  }
  .divRegisterForm {
    display:flex;
    flex-direction: colunm;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    form {
        display:flex;
        flex-direction: column;
        text-align:left;
        // background-color: blue;
        .inputsAdress {
            display:grid;
            flex-direction: column;
            width: 100%;
            height: 100%;
            // background-color: green;
        }
        .sameRowInputs {
            display:grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            height: 100%;
            // background-color: red;
            input {
                width: 10em;
                height: 2em;
            }
        }
    }
  }
}
</style>
