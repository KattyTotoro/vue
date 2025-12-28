<template>
  <h1>Задача 11</h1>

  <div>
  <p>
  Создайте сложную форму валидации:

Используйте ref для объекта формы с полями: email, password, confirmPassword
Создайте вычисляемые свойства для валидации каждого поля
Добавьте ref для отслеживания, была ли форма отправлена
Показывайте ошибки только после первой попытки отправки
Блокируйте кнопку отправки при невалидных данных
  </p>
  </div>

<form @submit.prevent>
  <input class="training" type="email" v-model="user.email" placeholder="Введите электронную почту"> {{ user.email }}
  <input class="training" type="text" v-model="user.password" placeholder="Введите пароль"> {{ user.password }}
  <input class="training" type="text" v-model="user.confirmPassword" placeholder="Повторите пароль"> {{ user.confirmPassword }}

  <button class="training" :disabled="isDisabled">Зарегистрировать</button>
</form>

</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const isDisabled = ref(true)

const user = ref({
  email: '',
  password: '',
  confirmPassword: '',
})




</script>

<style scoped>
    .training {
  min-width: 250px;
  display: block;
  background-color: rgb(180, 180, 247);
  padding: 20px 50px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 600;
  margin: 20px;
  font-size: 16px;
}
</style>