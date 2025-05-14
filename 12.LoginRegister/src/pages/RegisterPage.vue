<script setup>

import {ref} from "vue";
import {useUsers} from "@/store/users.js";
import {useRouter} from "vue-router";

const formData = ref({username: "", email: "", password: "", confirmPassword: ""});
const usersStore = useUsers();
const router = useRouter();

const handleSubmit = () => {
  if (!formData.value.username || !formData.value.email || !formData.value.password || !formData.value.confirmPassword) {
    alert("All fields are required!");
    return;
  }

  if (formData.value.password !== formData.value.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const {error, message} = usersStore.register({
    username: formData.value.username,
    email: formData.value.email,
    password: formData.value.password,
  })

  if (error) {
    alert(message);
  } else {
    alert(message);
    router.push("/login");
  }
}

</script>

<template>
  <div class="formContainer">
    <form @submit.prevent="handleSubmit">
      <h2>Create account.</h2>

      <input v-model="formData.username" placeholder="Username..." type="text">
      <input v-model="formData.email" placeholder="Email..." type="email">
      <input v-model="formData.password" placeholder="Password..." type="password">
      <input v-model="formData.confirmPassword" placeholder="Confirm Password..." type="password">

      <button class="btn" type="submit">Register</button>

      <router-link class="link" to="/login">Login</router-link>
    </form>
  </div>
</template>
