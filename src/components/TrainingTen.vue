<template>
  <h1>Задача 10</h1>

  <div>
    <p>
      Создайте компонент загрузки данных: Используйте ref для isLoading (булево), data
      (массив), error (строка) Реализуйте функцию fetchData, которая имитирует асинхронный
      запрос Показывайте состояние загрузки, ошибки или данные Добавьте кнопку "Обновить"
      для повторного запроса
    </p>
  </div>

<div v-if="isLoading">
  Loading...
</div>
<div v-else>
  <div v-if="data">
    {{ data }}
  </div>
  <div v-else>
    {{ error }}
  </div>
</div>

<button class="training" @click="fetchData">Обновить</button>

</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(false);
const error = ref("");
const data = ref();

const sleep = (sec = 2) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.round(Math.random())), sec * 1000);
  });
};

const fetchData = async()=>{
  isLoading.value = true
  const result = await sleep(2)
  isLoading.value = false
  if (result) {
    data.value = [1, 2, 3, 4]
  } else {
    data.value = null
    error.value = 'Что-то пошло не так. Попробуйте позже'
  }
};
fetchData()
</script>

<style>

</style>
