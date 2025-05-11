<script setup>

import {useCounter} from "@/components/useCounter.js";

const counter = useCounter();

</script>

<template>
<div class="counter">
  <button class="decrement" @click="counter.decrement()">-</button>
  <h3 class="text">{{counter.count.value}}</h3>
  <button class="increment" @click="counter.increment()">+</button>
</div>
</template>

<style scoped>
.counter {
  display: grid;
  align-items: start;
  gap: 0;
  grid-template-columns: repeat(3, 1fr);
  height: 40px;
  border: 1px solid #888;
  overflow: hidden;
  border-radius: 5px;
}
button {
  width: 40px;
  height: 40px;
  border: none;
  background: #eee;
  font-size: 22px;
  cursor: pointer;
}
button:hover {
  background: #e9e9e9;
}
.decrement {
  border-right: 1px solid #aaa;
}
.increment {
  border-left: 1px solid #aaa;
}
.text {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 0%;
}
</style>
