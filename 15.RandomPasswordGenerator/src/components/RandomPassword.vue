<script setup>

import {ref} from "vue";

const options = ref({uppercase: false, punctuation: false, digits: false, length: 8});
const password = ref(null);

const generatePassword = () => {
  let strings = 'abcdefghijklmnopqrstuvwxyz';
  if (options.value.uppercase) {
    strings += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (options.value.punctuation) {
    strings += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  if (options.value.digits) {
    strings += '0123456789';
  }

  let pw = "";
  for (let i = 0; i < options.value.length; i++) {
    pw += strings[Math.floor(Math.random() * strings.length)];
  }

  password.value = pw;
}

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(password.value);
  alert("Copied to clipboard!");
}

</script>

<template>
  <div class="container">
    <div class="card">
      <h1 class="title">Random Password Generator</h1>

      <div class="options">
        <div>
          <input id="uppercase" v-model="options.uppercase" type="checkbox">
          <label for="uppercase">
            Uppercase
          </label>
        </div>
        <div>
          <input id="punctuation" v-model="options.punctuation" type="checkbox">
          <label for="punctuation">
            Punctuation
          </label>
        </div>
        <div>
          <input id="digits" v-model="options.digits" type="checkbox">
          <label for="digits">
            Digits
          </label>
        </div>
        <div>
          <input id="digits" v-model="options.length" min="8" type="number">
          <label for="digits">
            Length
          </label>
        </div>
      </div>

      <!--  Bottom  -->
      <button class="generate" @click="generatePassword">Generate</button>

      <div v-if="password" class="password">
        <span>{{ password }}</span>
        <button class="copy" @click="copyToClipboard">Copy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.card {
  display: flex;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  margin: 0 10px;
  flex-direction: column;
  text-align: center;
  padding: 22px;
  border-radius: 10px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  background: white;
  border: 1px solid #ddd;
}

.title {
  font-size: 36px;
  margin-bottom: 50px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  scale: 150%;
  margin-bottom: 60px;
}


.generate {
  padding: 8px;
  background: #e79300;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px;
}

.password {
  display: flex;
  gap: 20px;

  span {
    flex: 1;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  .copy {
    font-size: 17px;
    padding: 6px 18px;
    cursor: pointer;
  }
}
</style>
