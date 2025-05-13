<script setup>

import {inject} from "vue";

const {movies} = inject("movieContext");

</script>

<template>
  <div class="list-container">
    <div v-if="movies === null" class="empty">Nothing to show yet...</div>

    <div v-else class="list">
      <div v-for="(movie, index) in movies" :key="index" class="card">
        <img :alt="movie.title" :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`"/>

        <div class="card-content">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.overview }}</p>
          <span>Rating: {{ movie.vote_average }}</span>
          <span>Release Date: {{ movie.release_date }}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.list-container {
  margin-top: 30px;
}

.empty {
  text-align: center;
  font-size: 32px;
  color: #00a202;
  font-weight: 600;
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h3 {
  font-size: 24px;
  margin-bottom: 6px;
}

p {
  font-size: 14px;
  color: #333;
}

span {
  font-size: 18px;
}
</style>