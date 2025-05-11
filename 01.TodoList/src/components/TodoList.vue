<script setup>

import {inject} from "vue";

const {todos, toggleComplete, deleteTodo} = inject("todosComposable");

</script>

<template>
  <div class="outline">

    <div v-for="(todo, index) in todos" :key="index" class="tile">
      <h3 :class="['title', todo.completed ? 'green' : '']">{{ todo.title }}</h3>

      <div class="actions">
        <button class="btn-update" @click="toggleComplete(index)">{{ todo.completed ? "❌" : "✅" }}</button>
        <button @click="deleteTodo(index)" class="btn-delete">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outline {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 26px;
  width: 100%;
  gap: 10px;
}

  .tile {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: #5b009f;
    padding: 0 10px;
    border-radius: 10px;

    .title {
      font-size: 20px;
      font-family: sans-serif;
      color: #ff6f6f;
    }
    .title.green {
      color: #33ff33;
    }

    .actions {
      display: flex;
      gap: 10px;
      align-items: center;

      .btn-update {
        padding: 5px;
        border-radius: 4px;
        background: #7f00dc;
        cursor: pointer;
        border: none;
        font-size: 18px;
      }
      .btn-delete {
        padding: 8px 16px;
        background: red;
        color: white;
        cursor: pointer;
        border: none;
        font-size: 16px;
        border-radius: 6px;
      }
      .btn-delete:hover {
        background: #c00000;
      }
    }
  }

</style>