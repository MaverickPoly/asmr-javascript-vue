<template>
  <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/cart">Cart</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 600px;
  width: 100%;
  background: #f9f9f9;
}

.link {
  font-size: 18px;
  text-decoration: none;
  color: #222;
}

.link:hover {
  text-decoration: underline;
}
</style>