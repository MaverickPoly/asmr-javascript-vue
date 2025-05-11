<script setup>

import {ref} from "vue";

const input = ref("");

const addChar = (char) => {
  input.value += char;
}

const calculate = () => {
  try{
    input.value = eval(input.value).toString();
  } catch (e) {
    input.value = "Error!";
  }
}

const clear = () => {
  input.value = "";
}

const deleteLast = () => {
  input.value = input.value.slice(0, -1);
}

</script>


<template>
<div class="app">

  <div class="container">
    <input v-model="input" type="text" readonly/>

    <div class="buttons">
      <button @click="addChar('7')">7</button>
      <button @click="addChar('8')">8</button>
      <button @click="addChar('9')">9</button>
      <button @click="addChar('+')">+</button>

      <button @click="addChar('4')">4</button>
      <button @click="addChar('5')">5</button>
      <button @click="addChar('6')">6</button>
      <button @click="addChar('-')">-</button>

      <button @click="addChar('1')">1</button>
      <button @click="addChar('2')">2</button>
      <button @click="addChar('3')">3</button>
      <button @click="addChar('*')">*</button>

      <button @click="addChar('0')">0</button>
      <button @click="addChar('.')">.</button>
      <button @click="calculate">=</button>
      <button @click="addChar('/')">/</button>
    </div>

    <button @click="clear" class="clear">Clear</button>
  </div>
</div>

</template>

<style scoped>
.app {
  display: flex;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
}
.container {
  width: 400px;
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 26px 18px;
  border-radius: 6px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
}

input {
  padding: 16px;
  border-radius: 7px;
  outline: none;
  font-size: 24px;
  border: 1px solid #bbb;
  margin-bottom: 30px;
  text-align: right;
}
input:focus {
  border-color: #888;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 12px;
}
button {
  font-size: 26px;
  cursor: pointer;
}
button:not(.clear) {
  aspect-ratio: 1 / 1;
}

button.clear {
  font-size: 17px;
  aspect-ratio: 10 / 1;
}
</style>
