<template>
  <div>Компонент EditableList</div>
  <!-- Создайте компонент EditableList:

v-model: принимает массив элементов
ref: кнопка "Добавить" фокусируется на новом input
slots:
Именованный слот для заголовка
Слот для пустого состояния

Функционал:
Добавление новых элементов
Редактирование по клику
Удаление элементов
 -->

<slot name="header"></slot>
<slot name="empty" v-if="!arr?.length"></slot>
<div v-for="el,i in arr" :key="i">
  {{el}}
  <input type="text" ref="inputs" placeholder="Пишите..." v-model="el.text">
  <button @click="del(i)">Удалить</button>
</div>

<button @click="add">Добавить</button>

</template>

<script setup lang="ts">
import {ref, nextTick} from 'vue' 
const inputs = ref()
const arr = defineModel<{text:string}[]>()
const add = async()=>{
  arr.value?.push({text:''})
  await nextTick()
  inputs.value[inputs.value?.length-1].focus()
}
const del = (i:number)=>{
  arr.value?.splice(i, 1)
}

</script>