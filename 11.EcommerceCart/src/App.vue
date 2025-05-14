<script setup>
import Navbar from "@/component/Navbar.vue";
</script>

<template>
  <div class="app">
    <Navbar/>
    <router-view></router-view>  <!-- Here page components will go -->
  </div>
</template>

<style>
* {
  padding: 0;
  outline: none;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

button {
  cursor: pointer;
}
</style>
