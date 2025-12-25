<template>
  <h1>Задача 8  Юзер</h1>

  <div>
  <p>
  Создайте компонент профиля пользователя:

Используйте ref для объекта user с полями name, age, email
Сделайте форму для редактирования каждого поля (все поля в одной форме)
Добавьте кнопку "Сбросить", которая возвращает объект к исходным значениям
</p>
</div>

  <form @submit.prevent>
  <input class="training" ref="inputName" type="text" placeholder="Введите имя" v-model="user.name">{{ user.name }}
  <input class="training" ref="inputAge" type="text" placeholder="Введите возраст" v-model="user.age">{{ user.age }}
  <input class="training" type="text" placeholder="Введите имейл" v-model="user.email">{{ user.email }}

  <button class="training" @click="reset">Сбросить</button>
  <button class="training" @click="focus">Focus</button>
  </form>


</template>


<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
const inputName = ref()
const inputAge = ref()
const user = reactive({
  name: '',
  age: '',
  email: '',
})

onMounted(()=>{
  inputName.value.focus()
})
const focus = ()  => {
  inputAge.value.focus()
  inputAge.value.style='background-color: red'
}
const reset = () => {
  // user = {
  //   name: '',
  //   age: '',
  //   email: '',
  // }
  user.name = ''
  user.age = ''
  user.email = ''
}

</script>

<style>
  .training {
  display: block;
  background-color: rgb(180, 180, 247);
  padding: 20px 50px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 600;
  margin: 20px;
}
</style>