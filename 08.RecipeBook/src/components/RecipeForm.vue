<script setup>

import {inject, ref} from "vue";

const formData = ref({title: "", description: "", imageUrl: ""});
const {addRecipe} = inject("recipes");

const handleSubmit = () => {
  addRecipe(formData.value);

  formData.value = {title: "", description: "", imageUrl: ""};
}

</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="row">
      <input v-model="formData.title" placeholder="Title" required type="text">
      <input v-model="formData.imageUrl" placeholder="Image Url" required type="url">
    </div>
    <div class="row">
      <textarea v-model="formData.description" placeholder="Description" required></textarea>

      <button class="btn" type="submit">Create</button>
    </div>
  </form>
</template>

<style scoped>
.form {
  background: #f4f4f4;
  margin-bottom: 20px;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.row {
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
}

input, textarea {
  padding: 7px;
  border-radius: 5px;
  border: 1px solid #bbb;
  outline: none;
  font-size: 16px;
}

input[type="text"] {
  flex: 2;
}

input[type="url"] {
  flex: 3;
}

textarea {
  resize: none;
  height: 40px;
  flex: 1;
}

.btn {
  padding: 10px 28px;
  border: 1px solid deepskyblue;
  color: slateblue;
  background: transparent;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background: deepskyblue;
  color: white;
}
</style>