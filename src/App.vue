<template>
  <div v-if="route.path!='/blocks'">
    <RouterLink to="/">Home</RouterLink><br>
    <RouterLink to="/about">About</RouterLink><br>
    <RouterLink to="/myPage">My new page</RouterLink><br>
    <RouterLink to="/tasks">Tasks</RouterLink><br>
    <RouterLink to="/blocks">Blocks</RouterLink>
  </div>
  
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style scoped>
</style>