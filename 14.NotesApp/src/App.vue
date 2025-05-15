<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>

  <div class="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
}

button {
  cursor: pointer;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

form {
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  padding: 22px;
  border-radius: 12px;
  background: white;
  max-width: 600px;
  width: 100%;
  gap: 14px;
  text-align: center;

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  input {
    padding: 10px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 17px;
  }

  input:focus {
    border-color: #aaa;
  }

  .btn {
    padding: 10px;
    background: #50C878;
    border-radius: 6px;
    color: white;
    font-size: 18px;
    margin-top: 20px;
  }

  .btn:hover {
    background: #43ab66;
  }
}
</style>
