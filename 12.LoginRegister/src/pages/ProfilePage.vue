<script setup>
import {useUsers} from "@/store/users.js";
import {useRouter} from "vue-router";

const usersStore = useUsers();
const router = useRouter();

const handleLogout = () => {
  usersStore.logout();
  router.push("/login");
}

</script>

<template>

  <div class="container">
    <h3>Username: {{ usersStore.currentUser.username }}</h3>
    <h3>Email: {{ usersStore.currentUser.email }}</h3>
    <h3>Password: {{ usersStore.currentUser.password }}</h3>
    <h3>Created at: {{ usersStore.currentUser.createdAt }}</h3>
    <button class="btn-logout" @click="handleLogout">Logout</button>
  </div>

</template>

<style scoped>
.container {
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h3 {
    font-weight: 500;
  }

  .btn-logout {
    padding: 8px 28px;
    background: red;
    cursor: pointer;
    border-radius: 8px;
    color: white;
    font-size: 17px;
  }

  .btn-logout:hover {
    background: #b90000;
  }
}

</style>