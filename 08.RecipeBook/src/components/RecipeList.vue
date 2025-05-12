<script setup>

import {inject} from "vue";

const {recipes, deleteRecipe} = inject("recipes");

</script>

<template>
  <div class="container">
    <h2 class="title">Recipes</h2>

    <div class="list">
      <div v-for="(recipe, index) in recipes" :key="index" class="card">
        <button class="del" @click="deleteRecipe(index)">🗑️</button>
        <img :alt="recipe.title" :src="recipe.imageUrl"/>
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin-top: 20px;
  gap: 12px;
  flex-direction: column;
}

.title {
  font-size: 28px;
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.card {
  width: 100%;
  background: #f3f3f3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  .del {
    position: absolute;
    padding: 7px;
    border-radius: 8px;
    background: #fbfbfb;
    font-size: 18px;
    top: 6px;
    right: 6px;
  }

  .del:hover {
    background: #efefef;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    padding: 4px;
    margin: 20px 0 0;
    font-size: 24px;
  }

  p {
    padding: 10px;
    margin: 0;
    font-size: 16px;
    color: #222;
  }
}

</style>
