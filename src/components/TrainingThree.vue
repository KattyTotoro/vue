<template>

<div class="task">
  <h2>Уровень 2: Реактивность и Жизненный цикл</h2>
  <h3>Задача 3: "Поиск с debounce"</h3>
  <p>
Цель: Понимание watch и computed, а также концепции "отложенного" выполнения.
   <br>
Условие:
У вас есть поле поиска и список элементов (например, городов).

При вводе текста в поле поиска, список должен фильтроваться.

Фильтрация не должна происходить на каждое нажатие клавиши. Нужно реализовать задержку (debounce) в 500 мс. То есть запрос на фильтрацию должен срабатывать только тогда, когда пользователь перестал печатать на 500 мс.

Подсказка: Используйте watch для отслеживания поля ввода и setTimeout/clearTimeout.
   <br>

Вопрос на понимание:

В чем разница между watch и computed? В какой ситуации вы бы использовали computed для этой задачи, а в какой watch?

Почему важно очищать таймаут (clearTimeout) в функции-наблюдателе?
</p>
</div>

<div>
<input class="training" type="search" v-model="search" placeholder="find">
</div>
<p>Задержка</p>
<p><input type="range" min="150" max="10000" v-model="timeoutMs"> {{ timeoutMs }} мс</p>
<ul class="cities-list">
  <li v-for="el of filtredCities" :key="el">{{ el }}</li>
</ul>

</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
const search = ref('')
const cities = ["Екатеринбург", "Москва", "Санкт-Петербург", "Сочи"]
const filtredCities = ref([...cities])
const timeoutMs = ref(500)
function contains(query:string) {
  return cities.filter((title) =>
    title.toLowerCase().includes(query.toLowerCase())
  )
}
// Вариант 1. Для поиска по известному списку значений через computed
// const filtredCities = computed(()=>{
//   return contains(search.value)
// })

// Вариант 2. Для поиска по известному списку значений через watch
// watch(search, async (newVal)=>{
//   filtredCities.value = contains(newVal)
// })

// Вариант 3. Для поиска по екизвестному списку значений с задержкой
const server = {
  search(query:string) {
    return new Promise((resolve) => {
      // console.log('server')
      setTimeout(
        () =>
          resolve({
            list: query ? contains(query) : cities,
          }),
        150
      )
    })
  },
}

let lastCall:number
let lastCallTimer:NodeJS.Timeout

watch(search, async (newVal)=>{
  // console.log('input')
  let previousCall = lastCall
  lastCall = Date.now()
  if (previousCall && lastCall - previousCall <= timeoutMs.value) {
    clearTimeout(lastCallTimer)
  }
  lastCallTimer = setTimeout(async() => {
    const responce:any = await server.search(newVal)
    filtredCities.value = responce.list
  }, timeoutMs.value)
})
</script>

<style>
.task {
  text-align: justify;
  margin-top: 20px;
}

.training {
  background-color: rgb(106, 106, 233);
  padding: 20px 50px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 600;
  margin: 20px;
}

ul {
  list-style: none;
}

.cities-list {
  text-align: left;
  margin-left: 20px;
  color: rgb(28, 28, 80);
  font-size: 22px;
  height: 140px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>