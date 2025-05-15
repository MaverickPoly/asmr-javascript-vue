<script setup>

import {useNotes} from "@/store/notes.js";

const notes = useNotes();

</script>

<template>
  <div class="container">
    <h1>My Notes!</h1>

    <!-- Search Bar -->

    <div class="list">
      <div v-for="(note, index) in notes.notes" :key="index" class="note">
        <button class="delete" @click="notes.deleteNote(index)">D</button>
        <h3 class="title">{{ note.title }}</h3>
        <p class="content">{{ note.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  h1 {
    background: linear-gradient(to right, #222, #999, #222);
    align-self: start;
    color: transparent;
    background-clip: text;
    margin-bottom: 30px;
    font-size: 40px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
  }

  .note {
    width: 240px;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
      font-size: 25px;
    }

    .delete {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 30px;
      height: 30px;
      padding: 5px;
      background: red;
      color: white;
      font-size: 16px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

</style>