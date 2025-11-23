// конвертер из километров в мили (пользователь вводит километры, программа выводит мили).
// 1 км = 0,621371 миль.

<template>

<div>
<h3>Конвертер из километров в мили</h3>
  <div class="converter">
    <div>
      <p>Введите значение в километрах:</p>
      <input v-model.number="distanceInKm" class="userImput" type="number">
    </div>
    <div>
      <p>Результат в милях:</p>
      <p class="result">{{ mileage }}</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let distanceInKm = ref(0) as any
let mileage = ref(0) as any

const KILOMETERS_IN_ONE_MILE = 1.609344

// distanceInKm = 2


mileage = distanceInKm / KILOMETERS_IN_ONE_MILE




</script>

<style scoped>
.converter {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  align-items: baseline;
  border: 2px solid darkgreen;
  margin-bottom: 500px;
}

.converter div:last-child {
  border-left: 2px solid darkgreen;
  padding-left: 20px;
}

h3 {
  margin-top: 100px;
}

.result {
  padding: 5px;
  border: 1px solid black;
}

.userImput {
  padding: 6px;
}
</style>
