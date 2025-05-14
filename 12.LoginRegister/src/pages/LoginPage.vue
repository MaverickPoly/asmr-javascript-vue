<script setup>

import {useUsers} from "@/store/users.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

const usersStore = useUsers();
const formData = ref({username: "", password: ""});
const router = useRouter();

const handleSubmit = () => {
  if (!formData.value.username || !formData.value.password) {
    alert("All fields are required!");
    return;
  }

  const {error, message} = usersStore.login({username: formData.value.username, password: formData.value.password});

  if (error) {
    alert(message);
  } else {
    router.push("/");
  }
}

</script>

<template>
  <div class="formContainer">
    <form @submit.prevent="handleSubmit">
      <h2>Login Now.</h2>

      <input v-model="formData.username" placeholder="Username..." type="text">
      <input v-model="formData.password" placeholder="Password..." type="password">

      <button class="btn" type="submit">Login</button>

      <router-link class="link" to="/register">Register</router-link>
    </form>
  </div>
</template>
