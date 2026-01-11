<template>
  <hr>
    <div style="text-align: left; font-size: 18px; font-weight: 600;">
      <p>Создайте компонент Card, который:</p>
      <p>Принимает title через props
      Имеет слот для контента
      Используется в родительском компоненте так:</p>
        {{ str }}
      &lt;Card title="Приветствие"&gt; <br>
        Добро пожаловать во Vue 3! <br>
      &lt;/Card&gt; <br>
      <p>Ожидаемый результат: Карточка с заголовком "Приветствие" и текстом "Добро пожаловать во Vue 3!".</p>
    </div>

    <div :style="userStyle">
      <h4>{{ title }}</h4>
      <slot></slot>
    </div>
<hr><hr>
</template>


<script setup lang="ts">
defineProps(['title', 'userStyle'])
const num = 7
const str = `sfbkfskjfd'${num}k\tadsdsada\nsdfdsfds`
console.log(str)
</script>

