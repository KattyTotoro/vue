<template :style="userStyle">
  <div>компонент UserForm для ввода
  </div>
  <!-- Создайте компонент UserForm для ввода:

имени (v-model:firstName)
фамилии (v-model:lastName)
email (v-model:email)
Каждое поле должно быть независимо связано с родительским компонентом. -->


<form action="">
<!-- <input type="text" v-model="firstName">
<input type="text" v-model="lastName">
<input type="text" v-model="email"> -->
<input type="text" v-model="user.firstName">
<input type="text" v-model="user.lastName">
<input type="text" v-model="user.email">
</form>

</template>

<script setup lang="ts">
defineProps(['userStyle'])
const user = defineModel<Record<string,string>>({default:{firstName:'',lastName:'',email:''}})
// const firstName = defineModel<string>('firstName')
// const lastName = defineModel<string>('lastName')
// const email = defineModel<string>('email')
  


</script>