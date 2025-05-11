<script setup>
// API Ninjas Quotes. See:
// https://www.api-ninjas.com/api/quotes
// API KEY: somethinghere
// URL: https://api.api-ninjas.com/v1/quotes

import {onMounted, ref} from "vue";

const URL = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = "";

const quote = ref({});
const loading = ref(false);

const generateRandomQuote = async () => {
  loading.value = true;
  try {
    const res = await fetch(URL, {
      headers: {
        "X-API-Key": API_KEY,
      }
    });
    quote.value = (await res.json())[0];
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await generateRandomQuote();
});

</script>

<template>
  <div class="container">
    <h2 class="title">Random Quote Fetcher</h2>

    <div v-if="!loading" class="quote">
      <p>{{ quote.quote }}</p>
      <span>{{ quote.author }}</span>
    </div>
    <div v-else class="loading-spinner">
    </div>

    <button class="btn" @click="generateRandomQuote">Generate</button>
  </div>
</template>

<style scoped>
.loading-spinner {
  width: 60px;
  height: 60px;
  background: transparent;
  border: 7px solid #f7f7f7;
  border-bottom: 7px solid deepskyblue;
  animation: spin 0.4s infinite linear;
  border-radius: 50%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)

  }
}

* {
  font-family: sans-serif;
}

.container {
  width: 500px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f6f6;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 4px 5px 6px rgba(255, 0, 0, 0.2);
}

.title {
  margin-bottom: 40px;
  font-size: 28px;
}

.quote {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: sans-serif;
    font-size: 17px;
    text-align: center;
    line-height: 140%;
  }

  span {
    color: #555;
    font-size: 22px;
  }
}

.btn {
  margin-top: 40px;
  font-size: 17px;
  padding: 10px 26px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background: chocolate;
  color: white;
}

.btn:hover {
  background: #be5e1c;
}

</style>