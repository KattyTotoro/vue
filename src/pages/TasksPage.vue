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
</template>

<script setup lang="ts">
import TrainingOne from '../components/TrainingOne.vue';
import TrainingTwo from '../components/TrainingTwo.vue';
import TrainingThree from '../components/TrainingThree.vue';
import TrainingFour from '#root/components/TrainingFour.vue';
import TrainingFive from '#root/components/TrainingFive.vue';
import TrainingSix from '#root/components/TrainingSix.vue';
import TrainingSeven from '#root/components/TrainingSeven.vue';
import TrainingEight from '#root/components/TrainingEight.vue';
import TrainingNine from '#root/components/TrainingNine.vue';

</script>

<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;

}
</style>