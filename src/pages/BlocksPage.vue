<template>

  <div :style="`grid-template-columns: ${open?'200px':'0px'}  10px 1fr;`" class="grid">
    <div class="flex">
      <div class="blue">1</div>
      <div class="grey"><span></span></div>
      <div class="pink">4</div>
    </div>
    <div @click="open=!open" class="grey-w"><span :style="`transform: scaleY(3) scaleX(0.9) translate(-2px, ${open?'-1px':'0.5px'}) ${!open?'rotate(180deg)':''};`">&#9668;</span></div>
    <div class="flex">
      <div class="green">1</div>
      <div class="grey"><span></span></div>
      <div class="orange">4</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(true)

</script>

<style scoped>
.grid {
  display: grid;
  height: 100dvh;
}

.flex {
  display: flex;
  flex-direction: column;
}

.blue {
  flex: 1 1 auto;
  background-color: #b4dbe8;
}

.pink {
  flex: 1 1 auto;
  background-color: #febcc6;
}

.green {
  flex: 1 1 auto;
  background-color: #27b8b1;
}

.orange {
  flex: 1 1 auto;
  background-color: #fea883;
}
.grey {
  height: 10px;
  background-color: #d6d6d6;
  text-align: center;
  font-size: 7px;
  cursor: pointer;
}
.grey span {
  display: inline-block;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  width: 12px;
  height: 4px;
  margin-top: 1px;
  user-select: none;
}
.grey-w {
  height: 100dvh;
  background-color: #d6d6d6;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.grey-w span {
  display: inline-block;
  user-select: none;
}

</style>