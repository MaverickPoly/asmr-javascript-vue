<script setup>

import {inject, ref} from "vue";

const input = ref("");
const {addTodo} = inject("todosComposable");

const handleAddTodo = () => {
  if (input.value.toString().trim() !== "") {
    addTodo(input.value);
    input.value = "";
  }
}
</script>

<template>
<div class="form">
  <input v-model="input" type="text" placeholder="Todo title..."/>
  <button class="btn" @click="handleAddTodo">Add</button>
</div>
</template>

<style scoped>
.form {
  width: 100%;
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  outline: none;
  border: 1px solid #9300ff;
  border-radius: 6px;
  background: #f6e9ff;
  font-size: 22px;
}

.btn {
  padding: 4px 30px;
  font-size: 18px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #9300ff;
  border-radius: 8px;
  color: #f3e5ff;
}
.btn:hover {
  background: #9300ff;
  transition: background 0.4s ease;
}
</style>