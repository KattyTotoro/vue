<template>
<div class="task">
<!-- Валидация пароля -->
  <h3>Задача 3: "Поиск с debounce"</h3>
  <p>
    Создать форму с полем ввода пароля, требованиями к паролю и кнопкой регистрации, которая по умолчанию отключена (disabled)
  </p>
  <p>
  Требования: символы в верхнем регистре, символы в нижнем регистре, цифры, минимальная длинна 8 символов
  </p>
  <p>
  Требования должны визуально показывать, что они выполнены.
  </p>
  <p>
  Когда выполнены все требования, убираем disabled с кнопки регистрации
  </p>

</div>

<form @submit.prevent>
  <input class="training" type="text" v-model="userPassword" placeholder="Введите пароль">
  
  <p :style="topLetter?'color:green':'color:red'">
  <img :class="topLetter?'visible':'invisible'" src="/images/light2.webp" width="40" alt="" style="margin-bottom: -10px;">
  символы в верхнем регистре
  </p>

  <p :style="`color:${lowLetter?'green':'red'}`">
  <img :class="lowLetter?'visible':'invisible'" src="/images/light2.webp" width="40" alt="" style="margin-bottom: -10px;">
  символы в нижнем регистре
  </p>

  <p :class="number?'color-green':'color-red'">
  <img :class="number?'visible':'invisible'" src="/images/light2.webp" width="40" alt="" style="margin-bottom: -10px;">
  цифры
  </p>

  <p :class="{'color-green':minLength, 'color-red':!minLength}">
  <img :class="minLength?'visible':'invisible'" src="/images/light2.webp" width="40" alt="" style="margin-bottom: -10px;">
  минимальная длинна 8 символов
  </p>

  <!-- <p :class="minLength?'color-green':'color-red'">минимальная длинна 8 символов</p> -->
  <button class="training" :disabled="isDisabled">Зарегистрировать</button>
</form>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const userPassword = ref('')
const isDisabled = ref(true)
const topLetter = ref(false)
const lowLetter = ref(false)
const number = ref(false)
const minLength = ref(false)

watch(userPassword, async (pass)=>{

  const topLetterTest = new RegExp(/[A-Z]/)
  topLetter.value = topLetterTest.test(pass)

  const lowLetterTest = new RegExp(/[a-z]/)
  lowLetter.value = lowLetterTest.test(pass)

  const numberTest = new RegExp(/[0-9]/)
  number.value = numberTest.test(pass)

  // const minLengthTest = new RegExp(/.{8,}/)
  // minLength.value = minLengthTest.test(pass)
  minLength.value = pass.length>=8
  

  if(topLetter.value && lowLetter.value && number.value && minLength.value) {
    isDisabled.value = false
  } else {
    isDisabled.value = true
  }

//   const checkIsDisabled = ()=>{
//   if(topLetter.value == true && lowLetter.value == true && number.value == true && minLength.value == true) {
//     isDisabled.value = false
//   }
// }

// const IsDisabledTest = new RegExp(//)
//   isDisabled.value = IsDisabledTest.test(pass)

})

// const checkIsDisabled = ()=>{
//   if(topLetter.value == true && lowLetter.value == true) {
//     isDisabled.value = false
//   }
// }
</script>


<style scoped>
.task {
  text-align: justify;
  margin-top: 20px;
}

.color-red {
  color:red
}

.color-green {
  color: green
}

.training {
  background-color: rgb(163, 163, 240);
  padding: 20px 50px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 600;
  margin: 20px;
}

.invisible {
  visibility: hidden;
}

.visible {
  visibility: visible;
}

</style>

