<template>

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

</template>

<script setup lang="ts">
import { ref } from 'vue'

const todo = ref([] as any[])
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