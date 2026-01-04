<template>
  <button @click="decrement">-</button>
{{ count }}
<button @click="increment">+</button>
<button @click="reset">reset</button>

</template>

<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'

const count = defineModel<number>({ default: 0 })
const half = defineModel<number>('half')

const increment = ()=>{
  count.value++
}
const decrement = ()=>{
  count.value--
}
const reset = () => {
  count.value = 0
}

watchEffect(()=>{
  half.value = count.value/2
})

</script>