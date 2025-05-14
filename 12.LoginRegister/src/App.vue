<script setup>
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}

.formContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 90vh;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background: #f7f7f7;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  gap: 8px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 32px;
    margin-bottom: 22px;
  }

  input {
    outline: none;
    font-size: 17px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
  }

  input:focus {
    border: 1px solid #aaa;
  }

  .btn {
    padding: 8px;
    border-radius: 6px;
    background: #7f00dc;
    cursor: pointer;
    color: white;
    font-size: 17px;
    margin-top: 22px;
  }

  .btn:hover {
    background: #6700b2;
  }

  .link {
    margin-top: 12px;
    font-size: 18px;
    color: deepskyblue;
    text-decoration: none;
    align-self: center;
  }

  .link:hover {
    color: #008ebe;
  }
}


</style>
