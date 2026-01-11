<template>
  <!-- Создайте компонент FormInput, который:

Использует v-model для связи с родительским компонентом
Отображает текущее значение под полем ввода
В родительском компоненте показывать значение из двух таких инпутов -->

<!-- Решение: -->

<input type="text" v-model="text">

</template>

<script setup lang="ts">
const text = defineModel()

</script>