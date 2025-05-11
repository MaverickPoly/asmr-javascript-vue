<script setup>

import {ref} from "vue";

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const res = await fetch("https://json-placeholder-olive.vercel.app/posts");
    posts.value = await res.json();
  } catch (error) {
    console.error("Error fetching posts!");
  }
}
</script>

<template>
  <div class="container">
    <div class="top">
      <h2>Fetch Posts</h2>
      <button class="btn" @click="fetchPosts">Fetch</button>
    </div>

    <div class="data">
      <div v-for="(post, index) in posts" class="post" :key="index">
        <div class="ids">
          <span>Id: {{ post.id }}</span>
          <span>UserId: {{ post.userId }}</span>
        </div>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 30px auto;
  font-family: "Droid Sans", "Sitka Text", sans-serif;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  margin-bottom: 20px;

  h2 {
    font-size: 40px;
  }

  .btn {
    border: none;
    cursor: pointer;
    background: linear-gradient(to right, #bfbfff, #ffffba);
    padding: 8px 20px;
    border-radius: 10px;
    transition: box-shadow 0.2s;
    font-size: 18px;
  }

  .btn:hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }
}

.data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.post {
border: 1px solid #aaa;
  border-radius: 6px;
  padding: 10px;
}
.ids {
  display: flex;
  justify-content: space-between;
}
</style>