<template>
  <TrainingOne></TrainingOne>
  <TrainingTwo></TrainingTwo>
  <TrainingThree></TrainingThree>
  <TrainingFour></TrainingFour>
  <TrainingFive></TrainingFive>
  <TrainingSix></TrainingSix>
  <TrainingSeven></TrainingSeven>
  <TrainingEight></TrainingEight>
  <TrainingNine></TrainingNine>
  <TrainingTen></TrainingTen>
  <TrainingTwelve></TrainingTwelve>

  <CardComponent userStyle="text-align: left; font-size: 22px; font-weight: 600; color: darkgreen; background: lightblue; padding: 20px;" title="Приветствие!">
    <p>Добро пожаловать во Vue 3!!!!</p>
  </CardComponent>

  <LayoutComponent userStyle="text-align: center; font-size: 22px; font-weight: 600; color: darkgreen; background: lightblue; padding: 20px;">
    <template #header>
      <div>Объявление!</div>
    </template>
    <template #default>
      <div>Внимание! Запрещено! Прекратить!</div>
    </template>
    <template #footer>
      <div>Администрация</div>
    </template>
  </LayoutComponent>

  <FormInput v-model="text1" userStyle="text-align: center; font-size: 22px; font-weight: 600; color: darkgreen; background: lightblue; padding: 20px;"></FormInput>
    <p>
      {{ text1 }}
    </p>
  <FormInput v-model="text2" userStyle="text-align: center; font-size: 22px; font-weight: 600; color: darkgreen; background: lightblue; padding: 20px;"></FormInput>
    <p>
      {{ text2 }}
    </p>

    <!-- <UserForm v-model:firstName="firstName" v-model:lastName="lastName" v-model:email="email"></UserForm>
    {{ firstName }} / {{ lastName }} / {{ email }} -->
    <UserForm v-model="user" userStyle="text-align: center; font-size: 22px; font-weight: 600; color: darkgreen; background: lightblue; padding: 20px;"></UserForm>
    {{ user.firstName }} / {{ user.lastName }} / {{ user.email }}

  <EditableList v-model="arr">
    <template #header><p>Заголовок</p></template>
    <template #empty><p>Список пуст</p></template>
  </EditableList>

  <UserCard :userId="userId" :userName="userName" :userEmail="userEmail">
  <template #default>
  ||{{ userId }} / {{ userName }} / {{ userEmail }}||
  </template>

  <template #actions>
  <button>Режактировать</button>
  <button>Удалить</button>
  </template>
  
  </UserCard>
  
  <TrainingThirteen></TrainingThirteen>

</template>

<script setup lang="ts">
  import { ref } from "vue";
import TrainingOne from "../components/TrainingOne.vue";
import TrainingTwo from "../components/TrainingTwo.vue";
import TrainingThree from "../components/TrainingThree.vue";
import TrainingFour from "#root/components/TrainingFour.vue";
import TrainingFive from "#root/components/TrainingFive.vue";
import TrainingSix from "#root/components/TrainingSix.vue";
import TrainingSeven from "#root/components/TrainingSeven.vue";
import TrainingEight from "#root/components/TrainingEight.vue";
import TrainingNine from "#root/components/TrainingNine.vue";
import TrainingTen from "#root/components/TrainingTen.vue";
// import TrainingEleven from "#root/components/TrainingEleven.vue";
import TrainingTwelve from "#root/components/TrainingTwelve.vue";
import CardComponent from "#root/components/CardComponent.vue";
import LayoutComponent from "#root/components/LayoutComponent.vue";
import FormInput from "#root/components/FormInput.vue";
import UserForm from "#root/components/UserForm.vue";
import EditableList from "#root/components/EditableList.vue";
import UserCard from "#root/components/UserCard.vue";
import TrainingThirteen from "#root/components/TrainingThirteen.vue";
const title = `fhkjs
gkjdf
lnsdkjfsd`

const text1 = ref('')
const text2 = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const user = ref<{firstName:string,lastName:string,email:string }>({firstName:'76',lastName:'jh',email:'gi'})
const arr = ref([{text:'1fsdfd'}, {text:'fsdfd'}])
const userId = ref(12)
const userName = ref('Ivan')
const userEmail = ref('jkjk@klk')
</script>

<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;
}
</style>
