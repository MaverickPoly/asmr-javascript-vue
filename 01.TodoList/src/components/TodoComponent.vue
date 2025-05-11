<script setup>

import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
<div class="container">
  <TodoForm />
  <TodoList />
</div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  background: #450079;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid #7f00dc;
  border-radius: 7px;
  padding: 20px;
}
</style>