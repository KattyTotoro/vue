<template>
  <div>Компонент FormInput</div>
  <!-- Создайте компонент FormInput, который:
Использует v-model для связи с родительским компонентом
Отображает текущее значение под полем ввода
В родительском компоненте показывать значение из двух таких инпутов -->

<!-- Решение: -->

<div :style="userStyle">
<form action="">
<input type="text" v-model="text">
</form>
</div>
</template>

<script setup lang="ts">
defineProps(['userStyle'])

const text = defineModel<string>()

</script>