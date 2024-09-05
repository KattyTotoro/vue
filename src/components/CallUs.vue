<template>

    <div class="callUs_div">
        <button id="callUs_button">Позвонить</button>
        <p>8-922-323-232</p>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'



</script>

<style scoped>
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
    visibility: hidden;
}
</style>
