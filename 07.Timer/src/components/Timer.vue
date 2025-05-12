<script setup>

import {ref} from "vue";

const inputSeconds = ref(0);
const intervalId = ref(null);
const currentSeconds = ref(null);

const formStartTimer = () => {
  if (inputSeconds.value <= 0) {
    alert("Invalid input!");
    inputSeconds.value = 0;
  } else {
    currentSeconds.value = inputSeconds.value;
    inputSeconds.value = 0;
    intervalId.value = setInterval(updateTimer, 1000);
  }
}

const updateTimer = () => {
  if (currentSeconds.value <= 0) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  } else {
    currentSeconds.value--;
  }
}

const startTimer = () => {
  if (intervalId.value === null) {
    intervalId.value = setInterval(updateTimer, 1000);
  }
}

const stopTimer = () => {
  clearInterval(intervalId.value);
  intervalId.value = null;
}

const resetTimer = () => {
  stopTimer();
  currentSeconds.value = 0;
}

const getFormattedTime = () => {
  const pad = (number) => {
    return number.toString().padStart(2, "0");
  }
  const hours = Math.floor(currentSeconds.value / 3600);
  const minutes = Math.floor((currentSeconds.value % 3600) / 60);
  const seconds = currentSeconds.value % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


</script>

<template>
  <div class="container">
    <div class="input-form">
      <input v-model="inputSeconds" type="number"/>
      <button class="btn formStart" @click="formStartTimer">Start</button>
    </div>

    <div v-if="currentSeconds" class="currentSeconds">
      <h2 class="timer">{{ getFormattedTime() }}</h2>

      <div class="actions">
        <button :disabled="intervalId !== null" class="btn start" @click="startTimer">Start</button>
        <button :disabled="intervalId === null" class="btn stop" @click="stopTimer">Stop</button>
        <button class="btn reset" @click="resetTimer">Reset</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 500px;
  border: 1px solid indianred;
  background: #fff7f7;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(205, 92, 92, 0.4);
}

.input-form {
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  border-radius: 14px;
  border: 1px solid indianred;
  outline: none;
  padding: 8px;
  font-size: 17px;
}

input:focus {
  border: 2px solid darkred;
}

.btn {
  padding: 8px 26px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-size: 17px;
  color: white;
}

.btn.formStart {
  background: #e76767;
}

.btn.formStart:hover {
  background: #b65151;
}

.currentSeconds {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.timer {
  font-size: 40px;
  font-family: sans-serif;
}

.actions {
  display: flex;
  gap: 10px;
}

.start {
  background: #00a135;
}

.start:hover {
  background: #008817;
}

.stop {
  background: #ff1500;
}

.stop:hover {
  background: #d71100;
}

.reset {
  background: #9600ff;
}

.reset:hover {
  background: #6900b4;
}
</style>
