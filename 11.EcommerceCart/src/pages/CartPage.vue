<script setup>

import {useCartStore} from "@/stores/cart.js";

const cart = useCartStore();
</script>

<template>
  <div class="container">
    <h1>Shopping Cart</h1>

    <div class="cart">
      <!--
        image - title       - amount, actions: add remove, total
                price       -
      -->
      <div v-for="(product) in cart.cart" :key="product.index" class="product">
        <div class="start">
          <img :alt="product.title" :src="product.imageUrl">
          <div class="drop">
            <h3 class="title">{{ product.title }}</h3>
            <span class="price">${{ product.price }}</span>
          </div>
        </div>

        <div class="end">
          <span class="amount">Amount: {{ product.amount }}</span>
          <button class="remove" @click="cart.removeFromCart(product)">-</button>
          <button class="add" @click="cart.addToCart(product)">+</button>

          <span class="total-price">
            ${{ product.price * product.amount }}
          </span>
        </div>
      </div>

      <div class="total-row">
        <h4>Total:</h4>

        <span>${{ cart.totalPrice }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 60px auto;
  flex-direction: column;

  h1 {
    font-size: 44px;
    font-weight: 700;
  }
}

.cart {
  margin-top: 18px;
  display: flex;
  background: #fefefe;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  flex-direction: column;
  gap: 8px;
}

.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px;
  background: #f7f7f7;
  border-radius: 6px;

  .start {
    display: flex;
    align-items: center;
    gap: 18px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 4px;
      object-fit: cover;
    }

    .drop {
      h3 {
        font-size: 26px;
      }

      span {
        font-size: 18px;
        font-weight: 600;
        color: #444;
      }
    }
  }

  .end {
    display: flex;
    gap: 10px;
    align-items: center;

    button {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #bbb;
      background: white;
      font-size: 24px;
    }

    button:hover {
      background: #f9f9f9;
    }

    .amount {
      font-size: 20px;
      margin-right: 10px;
    }

    .total-price {
      font-size: 24px;
      margin-left: 10px;
      color: darkgreen;
    }
  }
}

.total-row {
  display: flex;
  margin-top: 18px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;

  h4 {
    font-size: 24px;
  }

  span {
    font-size: 28px;
    color: midnightblue;
    font-weight: 600;
  }
}
</style>
