<script setup>

import {ref} from "vue";

const carouselContent = [
  {
    "question": "What is Altair Tech?",
    "answer": "Altair tech is going to be the largest IT company in whole world in the future. Now it is a company that consists of only one member (me) that constantly advances it!"
  },
  {
    "question": "What products will Altair Offer us?",
    "answer": "Altair will offer various services and products in various area, ranging from IT Products and software to Merch and Electronics!"
  },
  {
    "question": "Who is the founder of it?",
    "answer": "Founder is very powerful and hidden person that does not want to reveal himself! Secret..."
  }
]

const currentCarousel = ref(null);

const openCarousel = (index) => {
  if (currentCarousel.value === index) {
    currentCarousel.value = null;
  } else {
    currentCarousel.value = index;
  }
}
</script>

<template>
  <div class="container">
    <div class="list">
      <div v-for="(carousel, index) in carouselContent" :key="index" class="carousel">
        <div class="head" @click="openCarousel(index)">
          <h3>{{ carousel.question }}</h3>
          <span class="arrow">{{ currentCarousel === index ? "↓" : "→" }} </span>
        </div>
        <div v-show="currentCarousel === index" class="body">
          <p>{{ carousel.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

.list {
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  margin: 10px;
}

.list > *:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  background: #f9f9f9;

  h3 {
    font-size: 22px;
  }
}

.body {
  padding: 6px;
  background: white;

  p {
    color: #292929;
    font-size: 16px;
  }
}


</style>
