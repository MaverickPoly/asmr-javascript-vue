<script setup>
import RecipeForm from "@/components/RecipeForm.vue";
import RecipeList from "@/components/RecipeList.vue";
</script>

<template>
  <div class="container">
    <RecipeForm/>
    <RecipeList/>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: auto;
}
</style>