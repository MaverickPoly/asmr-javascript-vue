<script setup>

</script>

<template>
  <div class="links">
    <router-link class="link" to="/">V</router-link>
    <router-link class="link" to="/create">C</router-link>
  </div>
</template>

<style scoped>
.links {
  position: fixed;
  top: 4px;
  left: 4px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link {
  font-size: 22px;
  width: 35px;
  height: 35px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-decoration: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.link:hover {
  background: #f6f6f6;
}
</style>