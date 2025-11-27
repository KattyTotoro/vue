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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const number = ref(0)

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