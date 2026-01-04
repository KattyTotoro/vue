<template>
  <h1><slot name='title'></slot></h1>

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

  <slot></slot>

<slot name='footer'></slot>
</template>

<script setup lang="ts">

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