<template>
   

<!-- <img :src="myImages.image1.src"> -->

    <div class="img1"></div>
    <img src="/images/mango.png" width="500px" alt="Mango">
</template>

<script setup lang="ts">
// import { ref } from 'vue'



const myImages = [{
image1: {src:'/images/orange.png', alt:'Orange'},
// // {},
// // {},
// // {},
}]
</script>

<style scoped>
.img1 {
    background: url(/images/apple.png) center/cover no-repeat;
    width: 500px;
    height: 500px;
}
</style>
