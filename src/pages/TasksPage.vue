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

  <LayoutComponent userStyle="text-align: center; font-size: 22px; font-weight: 600; color: darkgreen; background: lightblue; padding: 20px;" title="Приветствие!">
    <template #header>
      <div>Объявление!</div>
    </template>
    <template #footer>
      <div>Администрация</div>
    </template>
    <div>Внимание! Запрещено! Прекратить!</div>
  </LayoutComponent>

  <FormInput></FormInput>

  <TrainingThirteen></TrainingThirteen>

</template>

<script setup lang="ts">
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
import TrainingThirteen from "#root/components/TrainingThirteen.vue";
const title = `fhkjs
gkjdf
lnsdkjfsd`
</script>

<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;
}
</style>
