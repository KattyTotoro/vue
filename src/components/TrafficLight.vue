<template>
    <div class="trafficLight">
        <div class="lights">
            <div class="l" :style="num==0?'background-color:red':''"></div>
            <div class="l" :style="num==1?'background-color:orange':''"></div>
            <div class="l" :style="num==2?'background-color:green':''"></div>
        </div>
        <button class="l_button" @click="changeColor">next</button>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(1)

function changeColor() {
    num.value++
    if (num.value==3) num.value = 0
}

</script>

<style scoped>
.trafficLight {
    display: flex;
    max-width: fit-content;
    background-color: #fbf2e9;
    padding: 20px;
    margin: 20px;
}

.lights {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin-right: 20px;
    border: 1px solid;
    border-radius: 10px;
    gap: 15px;
}

.l {
    background-color: #8a8a8a;
    width: 70px;
    height: 70px;
    border-radius: 50px;
}

.l_button {
    background-color: #e1e1e1;
    width: 80px;
    border: 1px solid;
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
}
</style>
