<template>

    <div class="callUs_div">
        <button id="callUs_button" @click="CallUs">Позвонить</button>
        <transition mode="out-in">
            <p style="height:48px" v-if="!showPhoneNumber">8-9**-***-***</p>
            <p v-else>8-922-323-232</p>
        </transition>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPhoneNumber = ref(false)

function CallUs() {
    showPhoneNumber.value = !showPhoneNumber.value
}


</script>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.callUs_div {
    max-width: fit-content;
    text-align: center;
}

#callUs_button {
    display: block;
    background: rgb(65, 65, 106);
    color: rgb(255, 255, 255);
    padding: 20px;
    margin: 20px;
    margin-top: 50px;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 15px;
    text-transform: uppercase;
    transition: .5s;
}

#callUs_button:hover {
    transform: scale(1.2);
    transition: .5s;
}

.callUs_div p {
    font-weight: bold;
    font-size: 32px;
}
</style>
