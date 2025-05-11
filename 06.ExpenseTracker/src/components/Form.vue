<script setup>
import {inject, ref} from "vue";

const {addItem} = inject("composable");
const formData = ref({title: "", type: "expense", amount: 0});

const handleAdd = () => {
  if (formData.value.title === "") {
    return alert("Title is missing!");
  }

  addItem(formData.value.title, formData.value.type, formData.value.amount);
  formData.value = {title: "", type: "expense", amount: 0};
}

</script>

<template>
  <div class="form">
    <input v-model="formData.title" class="title" type="text">
    <div class="bottom">
      <select v-model="formData.type">
        <option selected value="expense">Expense</option>
        <option value="earning">Earning</option>
      </select>

      <input v-model="formData.amount" class="amount" min="1" type="number"/>

      <button class="btn" @click="handleAdd">Add</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  background: #f6f6f6;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 4px;
  gap: 12px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);
}

input, select {
  padding: 10px;
  font-size: 17px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
}

input:focus, select:focus {
  border-color: #999;
}

.title {
}


.bottom {
  display: flex;
  gap: 13px;
}

select {
  flex: 3;
}

.amount {
  flex: 4;
}

.btn {
  flex: 1;
  cursor: pointer;
  background: white;
  border: 1px solid #00c902;
  border-radius: 30px;
  font-size: 16px;
  transition: background 0.5s ease-in-out;
}

.btn:hover {
  color: white;
  background: #00a202;
}

</style>