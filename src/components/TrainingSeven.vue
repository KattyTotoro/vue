<template>
<h1>Задача 7</h1>
<h2>Игра 21</h2>

  <button @click="send4all">Начать игру</button>
  <div class="user1">
    <div style="display:flex; margin: 10px auto; gap:10px; min-height: 200px;">
      <div class="card" v-for="card of users[1]" :key="card.type+''+card.value">
        <template v-if="card.status">
          <div style="text-align: left;">{{ types[card.type] }}</div>
          <div>{{ values[card.value] ? values[card.value] : card.value }}</div>
          <div style="text-align: right;">{{ types[card.type] }}</div>
        </template>
        <template v-else>
          <div style="background: url(/images/card.jpg) center/cover no-repeat white; height:100%" ></div>
        </template>
      </div>
    </div>
  </div>

  <div @click="send" style="position:relative; margin: 10px auto; height: 210px">
    <div class="card" :style="`position:absolute; left:${i*2}px; z-index:${i+1}; ${card.rotate?'transform: rotate(90deg) translateY(-70px)':''};`" v-for="card, i of cards" :key="card.type+''+card.value">
      <template v-if="card.status">
        <div style="text-align: left;">{{ types[card.type] }}</div>
        <div>{{ values[card.value] ? values[card.value] : card.value }}</div>
        <div style="text-align: right;">{{ types[card.type] }}</div>
      </template>
      <template v-else>
        <div style="background: url(/images/card.jpg) center/cover no-repeat white; height:100%" ></div>
      </template>
    </div>
  </div>

  <div class="user2">
    <div style="display:flex;margin: 10px auto; gap:10px; min-height: 200px;">
      <div class="card" v-for="card of users[2]" :key="card.type+''+card.value">
        <template v-if="card.status">
          <div style="text-align: left;">{{ types[card.type] }}</div>
          <div>{{ values[card.value] ? values[card.value] : card.value }}</div>
          <div style="text-align: right;">{{ types[card.type] }}</div>
        </template>
        <template v-else>
          <div style="background: url(/images/card.jpg) center/cover no-repeat white; height:100%" ></div>
        </template>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'

const cards = ref([
  {type:1, value:6, status:0},
  {type:1, value:7, status:0},
  {type:1, value:8, status:0},
  {type:1, value:9, status:0},
  {type:1, value:10, status:0},
  {type:1, value:2, status:0},
  {type:1, value:3, status:0},
  {type:1, value:4, status:0},
  {type:1, value:1, status:0},
  {type:2, value:6, status:0},
  {type:2, value:7, status:0},
  {type:2, value:8, status:0},
  {type:2, value:9, status:0},
  {type:2, value:10, status:0},
  {type:2, value:2, status:0},
  {type:2, value:3, status:0},
  {type:2, value:4, status:0},
  {type:2, value:1, status:0},
  {type:3, value:6, status:0},
  {type:3, value:7, status:0},
  {type:3, value:8, status:0},
  {type:3, value:9, status:0},
  {type:3, value:10, status:0},
  {type:3, value:2, status:0},
  {type:3, value:3, status:0},
  {type:3, value:4, status:0},
  {type:3, value:1, status:0},
  {type:4, value:6, status:0},
  {type:4, value:7, status:0},
  {type:4, value:8, status:0},
  {type:4, value:9, status:0},
  {type:4, value:10, status:0},
  {type:4, value:2, status:0},
  {type:4, value:3, status:0},
  {type:4, value:4, status:0},
  {type:4, value:1, status:0},
] as any[])
const types = {
  1:'♣️',
  2:'♦️',
  3:'♥️',
  4:'♠️',
} as any
const values = {
  2:'В',
  3:'Д',
  4:'К',
  1:'А',
} as any

function randomInteger(min:number, max:number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle() {
  const max = cards.value.length-1
  for (let i=0; i<500; i++) {
    const x = randomInteger(0,max)
    const y = randomInteger(0,max-1)
    const card = cards.value.splice(x,1)
    cards.value.splice(y,0,card[0])
  }
}

shuffle()

const users = ref({1:[], 2:[]} as any)

let currUser = 1
const send = ()=>{
  const card = cards.value.pop()
  card.status=1
  users.value[currUser].push(card)
  if (currUser==1) {
    currUser = 2
  } else {
    currUser = 1
  }
}

const send4all = () => {
  for (let i=0;i<3;i++) {
    const card = cards.value.pop()
    card.status=1
    users.value[currUser].push(card)
    if (currUser==1) {
      currUser = 2
    } else {
      currUser = 1
    }
  }
  const card = cards.value.pop()
  card.status=1
  card.rotate = true
  cards.value.unshift(card)
}

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 120px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 10px;
  flex: 0 0 120px;
  padding: 5px;
}
</style>