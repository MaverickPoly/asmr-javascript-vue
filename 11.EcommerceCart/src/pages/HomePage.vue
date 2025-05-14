<script setup>
import {useCartStore} from "@/stores/cart.js";

const cart = useCartStore();
</script>

<template>
  <div class="container">

    <h1>Products:</h1>

    <!-- Search Box -->

    <div class="list">
      <!--  Cards List  -->
      <div v-for="(product) in cart.products " :key="product.index" class="card">
        <div class="img-container">
          <img :alt="product.title" :src="product.imageUrl"/>
        </div>

        <button class="add-btn" @click="cart.addToCart(product)">🗑️</button>

        <div class="content">
          <h3 class="title">{{ product.title }}</h3>
          <span class="price">${{ product.price }}</span>
          <p class="description">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container {
  max-width: 1000px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 24px;
}


.card {
  width: 100%;
  overflow: hidden;
  background: #f6f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;

  .img-container {
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    transition: scale 0.2s ease;
  }

  .add-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 6px;
    border-radius: 6px;
    background: white;
    font-size: 21px;
    border: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  .add-btn:hover {
    background: #f1f1f1;
  }

  .content {
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;

    .title {
      font-size: 24px;
      margin-top: 8px;
    }

    .price {
      font-size: 18px;
      margin: 10px 0;
      padding: 4px 16px;
      background: cornflowerblue;
      color: white;
      border-radius: 30px;
    }

    .description {
      color: #333;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
}

.card:hover {
  img {
    scale: 1.05;
  }
}

@media (max-width: 900px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .list {
    grid-template-columns: repeat(1, 1fr);
    padding: 4px 14px;
  }
}
</style>