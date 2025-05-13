<script setup>
import {useMovies} from "@/components/useMovies.js";
import {provide} from "vue";
import MovieForm from "@/components/MovieForm.vue";
import MovieList from "@/components/MovieList.vue";

const movieContext = useMovies();
provide("movieContext", movieContext);
</script>

<template>
  <div class="container">
    <MovieForm/>
    <MovieList/>
  </div>
</template>

<style scoped>
.container {
  max-width: 1300px;
  width: 100%;
  margin: 30px auto;
}
</style>