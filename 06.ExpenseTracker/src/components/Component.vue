<script setup>

import Form from "@/components/Form.vue";
import List from "@/components/List.vue";
import {useExpense} from "@/components/useExpense.js";
import {provide} from "vue";

const expensesComposable = useExpense();
provide("composable", expensesComposable);

</script>

<template>
  <div class="container">

    <div class="header">
      <h4 class="title">Expense Tracker App</h4>
      <h5>Total Earnings:</h5>
      <h4 class="amount">{{ expensesComposable.total }}</h4>
    </div>

    <Form/>
    <List/>
  </div>
</template>

<style scoped>
.container {
  width: 800px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  align-items: center;
  gap: 0;
  margin-bottom: 26px;

  * {
    margin: 0;
  }

  .title {
    font-size: 36px;
    color: darkorange;
    margin-bottom: 14px;

  }

  h5 {
    font-size: 28px;
  }

  .amount {
    font-size: 30px;
  }

}
</style>