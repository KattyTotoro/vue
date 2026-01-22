<template>
  <div>Компонент UserCard</div>
  <!-- Создайте многоразовый компонент UserCard, который:

1. Ожидает входные параметры:
userId (Number, обязательный) — ID пользователя
userName (String, обязательный) — Имя пользователя
userEmail (String, необязательный) — Email пользователя

2. Содержит слоты:
Default slot — для основного контента карточки
Именованный slot actions — для кнопок действий (редактировать, удалить и т.д.)
Scoped slot stats — который передает объект { posts: 5, comments: 12 } в родительский компонент, где эти значения можно отобразить

3. Компонент должен поддерживать:
v-model:active — для управления состоянием активности карточки (Boolean)
v-model:role — для управления ролью пользователя (String: 'user', 'moderator', 'admin') -->

<slot>
 {{ userId }} / {{ userName }} / {{ userEmail }}
</slot>
<slot name="stats"></slot>
<slot name="actions">
  
</slot>

</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  userId: {type:Number, required: true},
  userName: {type:String, required: true},
  userEmail: {type:String, required: false, default:''},
})




</script>