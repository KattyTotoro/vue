<template>
<!-- <div><img :src="" alt=""></div> -->
<!-- <div class="img1"></div> -->
<div>
<img :src="myImages">
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'



const myImages = [
{src:'images/apple.png'},
// {},
// {},
// {},
]
</script>

<style scoped>
/* .img1 {
    background-image: url(images/apple.png);
   width: 100px;
    height: 100px;
} */
</style>
