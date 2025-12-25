<template>
  <h1>Задача 9 </h1>


  <div>
  <p>
  Создайте калькулятор:

Используйте два ref для чисел num1 и num2
Создайте вычисляемое свойство computed, которое возвращает сумму
Создайте вычисляемое свойство isResultPositive, которое проверяет, положительна ли сумма
Изменяйте цвет результата в зависимости от знака
</p>
</div>

<div>
  <p>
    <input type="text" v-model="num1">
    +
    <input type="text" v-model="num2">
    =
    <span :class="isResultPositive">{{ sum }}</span>
  </p>

  <button @click="counter.decrement">-</button>
{{ counter.count }}
<button @click="counter.increment">+</button>
<button @click="counter.reset">reset</button>

</div>

</template>

<script setup lang="ts">
  import {ref, computed} from 'vue'
import useCounter from '#root/coposables/useCounter'

const counter = useCounter()
  const num1 = ref()
  const num2 = ref()
  const sum = computed(()=>{
    if (!+num1.value && !+num2.value) {
      return ''
    } else if (!+num1.value || !+num2.value) {
      return +num1.value || +num2.value
    }
    return +num1.value + +num2.value
  })
  const isResultPositive = computed(()=>+sum.value>0?'black':'red')




</script>

<style>
  .red {
    color: red;
  }
  .black {
    color: black;
  }


</style>