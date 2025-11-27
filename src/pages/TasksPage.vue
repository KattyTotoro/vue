<template>
  <TrainingOne></TrainingOne>
  <TrainingTwo></TrainingTwo>
  <TrainingThree></TrainingThree>
</template>

<script setup lang="ts">
import TrainingOne from '../components/TrainingOne.vue';
import TrainingTwo from '../components/TrainingTwo.vue';
import TrainingThree from '../components/TrainingThree.vue';

</script>

<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;

}
</style>