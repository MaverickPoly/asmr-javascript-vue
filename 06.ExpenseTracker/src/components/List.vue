<script setup>

import {inject} from "vue";

const {earnings, expenses, deleteItem} = inject("composable");

</script>

<template>
  <div class="cont">
    <div class="earnings card">
      <h3>Earnings: ⬆️</h3>

      <div class="list">
        <div v-for="(item) in earnings" :key="item.id" class="box">
          <span>{{ item.title }}</span>
          <span>{{ item.amount }}</span>

          <button class="btn" @click="deleteItem(item.id)">Delete</button>
        </div>
      </div>
    </div>

    <div class="expenses card">
      <h3>Expenses: ⬇️</h3>

      <div class="list">
        <div v-for="(item) in expenses" :key="item.id" class="box">
          <div>
            <span>{{ item.title }}</span>
            <span>{{ item.amount }}</span>
          </div>

          <button class="btn" @click="deleteItem(item.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.cont {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
  padding: 20px;
}

.card {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 14px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f7fa;
  padding: 10px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.box:hover {
  background: #e9eff5;
}

.box span {
  font-size: 16px;
  color: #222;
  padding: 0 5px;
}

.btn {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #d9363e;
}
</style>
