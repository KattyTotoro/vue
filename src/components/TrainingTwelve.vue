<template>
  <TrainingEleven>
    <form @submit.prevent>
      <input class="training" type="email" v-model="user.email" placeholder="Введите электронную почту"> {{ user.email }}
      <input class="training" type="text" v-model="user.password" placeholder="Введите пароль"> {{ user.password }}
      <input class="training" type="text" v-model="user.confirmPassword" placeholder="Повторите пароль"> {{ user.confirmPassword }}
      <CounterComponent v-model="counter" v-model:half="half"></CounterComponent> {{ counter }} - {{ half }}
      <button class="training" :disabled="isDisabled">Зарегистрировать</button>
    </form>
    <template #footer>Task 11 END</template>
    <template #title>Task 11</template>
  </TrainingEleven>
</template>

<script setup lang="ts">
import TrainingEleven from "#root/components/TrainingEleven.vue"
import CounterComponent from "./CounterComponent.vue"
import {ref, computed} from 'vue'

const isDisabled = ref(true)

const counter = ref(15)
const half = ref(counter.value/2)

const user = ref({
  email: '',
  password: '',
  confirmPassword: '',
})


</script>

<style scoped>
</style>