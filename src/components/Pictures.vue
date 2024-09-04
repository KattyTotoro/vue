<template>   

<div class="divFlex">
<button class="buttonLeft" @click="changeIndexLeft"></button>
<img :src="myImages[arr_index].src" width="600px" :alt="myImages[arr_index].alt">
<button class="buttonRight" @click="changeIndexRight"></button>
</div>

<div class="img1"></div>
<img src="/images/mango.png" width="500px" alt="Mango">
</template>

<script setup lang="ts">
import { ref } from 'vue'
const arr_index = ref(0)

let myImages = [
{image: 0, src: '/images/apple.png', alt: 'Apple'},
{image: 1, src: '/images/mango.png', alt: 'Mango'},
{image: 2, src: '/images/orange.png', alt: 'Orange'},
{image: 3, src: '/images/strawberry.png', alt: 'Strawberry'},
{image: 4, src: '/images/pear.png', alt: 'Pear'},
{image: 5, src: '/images/blueberry.png', alt: 'Blueberry'},
]

function changeIndexRight() {
    arr_index.value++
    if (arr_index.value == myImages.length) arr_index.value = 0
}

function changeIndexLeft() {
    arr_index.value--
    if (arr_index.value == -1) arr_index.value = myImages.length - 1
}
</script>

<style scoped>
.divFlex {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.buttonLeft {
    background: url(/images/arrow_left.png) center/cover no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50px;
}

.buttonRight {
    background: url(/images/arrow_right.png) center/cover no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50px;
}

.divFlex img {
    object-fit: cover;
    object-position: center center;
}

.img1 {
    background: url(/images/apple.png) center/cover no-repeat;
    width: 500px;
    height: 500px;
}
</style>
