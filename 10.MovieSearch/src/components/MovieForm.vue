<script setup>

import {inject, ref} from "vue";

const {fetchMovies} = inject('movieContext');
const query = ref("");

const handleSubmit = async () => {
  await fetchMovies(query.value);
}

</script>

<template>
  <div class="form-container">
    <h3>Search a movie.</h3>
    <div class="row">
      <input v-model="query" placeholder="Movie..." type="text"/>
      <button class="btn" @click="handleSubmit">Search</button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fafafa;
  padding: 20px;
}

h3 {
  font-size: 36px;
  text-align: center;
}

.row {
  display: flex;
  align-items: center;
  gap: 14px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 17px;
  border-radius: 5px;
  background: white;
  border: 1px solid #d4d4d4;
}

input:focus {
  border-color: #a4a4a4;
}

button {
  padding: 8px 24px;
  border: none;
  background: red;
  color: white;
  font-size: 17px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: #c40000;
}
</style>