<script setup>
import {useRecipes} from "@/components/useRecipes.js";
import {provide} from "vue";
import RecipeComponent from "@/components/RecipeComponent.vue";

const recipesHook = useRecipes();

provide("recipes", recipesHook);
</script>

<template>
  <RecipeComponent/>
</template>

<style>
* {
  font-family: sans-serif;
}

button {
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 17px;
}
</style>
