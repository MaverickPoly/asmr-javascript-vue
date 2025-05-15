<script setup>

import {useNotes} from "@/store/notes.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

const notes = useNotes();
const formData = ref({title: "", content: ""});
const router = useRouter()

const handleSubmit = () => {
  const {title, content} = formData.value;
  if (!title || !content) {
    alert("Some fields are missing!");
    return;
  }

  notes.createNote(title, content);
  router.push("/");
}
</script>

<template>
  <div class="formContainer">
    <form @submit.prevent="handleSubmit">
      <h2>Create Note.</h2>

      <input v-model="formData.title" placeholder="Title..." type="text">
      <input v-model="formData.content" placeholder="Content..." type="text">

      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>