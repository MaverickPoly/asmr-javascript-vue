<script setup>


import {useTodo} from "@/composables/useTodo.js";
import {provide} from "vue";
import TodoComponent from "@/components/TodoComponent.vue";

const todosComposable = useTodo();

provide("todosComposable", todosComposable);
</script>

<template>
  <TodoComponent />
</template>

<style>
body {
  background: #222;
}
</style>
