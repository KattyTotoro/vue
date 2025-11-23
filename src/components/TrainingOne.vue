<template>

  <h1>Задачи</h1>

  <div class="task">
    <h2>Уровень 1: Базовое понимание (Синтаксис, Привязка данных, События)</h2>
    <h3>Задача 1: "Счетчик с ограничением"</h3>
<p>
Цель: Проверить знание реактивных данных (ref), обработки событий (@click) и условной отрисовки (v-if/v-disabled).
<br>
Условие:
Создайте компонент счетчика, который:
<br>
Начинается с 0.

Имеет кнопку "+", которая увеличивает счетчик на 1.

Имеет кнопку "-", которая уменьшает счетчик на 1.

Кнопка "-" должна быть заблокирована (атрибут disabled), когда счетчик равен 0.

Текущее значение счетчика отображается на странице.<br>

Вопрос на понимание:

Почему мы используем ref для переменной count, а не просто обычную переменную?

Как бы вы реализовали блокировку кнопки? Через v-if или v-disabled? В чем разница в данном контексте?
    </p>
  </div>
  <div>
<button class="training" @click="number--" :disabled="number==0"> - </button>

{{number}}

<button class="training" @click="number++"> + </button>
  </div>

<br>
<br>
<br>
  <div class="task">
  <h3>Задача 2: "Список дел (To-Do List)"</h3>
<p>
Цель: Работа со списками (v-for), обработка ввода из формы и модификация массива.<br>

Условие:
Создайте простой список дел:<br>

Поле ввода (input) и кнопка "Добавить".

При нажатии на кнопку (или на Enter) текст из поля ввода добавляется в список.

Каждый элемент списка отображается как < li > и имеет кнопку "Удалить", которая удаляет этот элемент из списка.

Если список пуст, отображается параграф "Список дел пуст".<br>

Вопрос на понимание:

Почему важно назначать уникальный :key для каждого элемента в v-for?

Почему мы не можем напрямую изменять параметр элемента в цикле v-for (например, item.text = 'новый текст')? Что нужно сделать вместо этого?
  </p>  
  </div>

  <div>
<form @submit.prevent="addtodo">
  <input class="training" type="text" v-model="text">
  <button class="training">Добавить</button>
</form>
  <p v-if="!todo.length">Список пуст</p>
  <ul v-else>
    <li v-for="el, i of todo" :key="el+i">
      <!-- {{ el }}  -->
      <input class="training" type="text" v-model="el.text"></input>
      <button class="training" @click="todo.splice(i, 1)">Удалить</button>
    </li>
  </ul>
  <!-- {{ todo }} -->
  </div>


<br>
<br>
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
<input class="training" type="search">
</div>

<ul class="cities-list">
  <li v-for="el, i of cities" :key="el+i">{{ el }}</li>
</ul>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const number = ref(0)
const todo = ref([] as any[])
const cities = ref(["Екатеринбург", "Москва", "Санкт-Петербург", "Сочи"] as any[])
const text = ref('')

// Функция добавления в список
const addtodo = ()=>{
  if (text.value) {
  todo.value.push({text:text.value})
}
  text.value=''
}

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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>