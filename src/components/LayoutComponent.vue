<template>
  <!-- Создайте компонент Layout с:
Слотом header (верхняя часть)
Default slot (основной контент)
Слотом footer (нижняя часть)

Требование: В родительском компоненте передать разный контент в каждый слот. -->


  <div :style="userStyle">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>

</template>

<script setup lang="ts">
defineProps(['userStyle'])

</script>