<template>
<h1>Задача 7</h1>
<h2>Игра 21</h2>

  <button :disabled="isGame" @click="send4all">Начать игру</button>
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

  <p>{{ winText ? winText : text }}</p>
  <div style="position:relative; margin: 10px auto; height: 210px">
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
    
    <button :disabled="!(isGame && whoMoves==2 && count(2)!=21)" @click="take(2)">Взять</button>
    <button :disabled="!(isGame && whoMoves==2)" @click="userPass">Пас</button>
  </div>

</template>

<script setup lang="ts">
import {ref, watch} from 'vue'

const cardsReference = [
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
] 

const cards = ref([...cardsReference] as any[])
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

const isGame = ref(false)
const whoMoves = ref(0)
const text = ref('')
const winText = ref('')

const users = ref({1:[], 2:[]} as any)
const passes = ref({1:false, 2:false} as any)
let currUser = 1 

const count = (user:number) => {
  let axeCount = 0
  let noAxeSum = 0
  let sum = 0
  let isAxe11 = false
  for (let i=0;i<users.value[user].length;i++) {
    if (users.value[user][i].value==1) {
      axeCount++
      continue
    }
    noAxeSum+=users.value[user][i].value
  }
  for (let i=0; i<axeCount;i++) {
    if (noAxeSum+11<=21 && !isAxe11) {
      isAxe11=true
      sum+= 11
    } else {
      sum+=1
    }
  }
  if (noAxeSum+sum>21 && isAxe11) {
    sum-=10
  }
  return noAxeSum+sum
}

const sleep = () => {
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(true),2000)
  })
}

const pass = ()=>{
  whoMoves.value = whoMoves.value == 1 ? 2 : 1
}

const userPass = () => {
  passes.value[2] = true
  pass()
}

const take = (i:number) => {
  passes.value[i] = false
  const card = cards.value.pop()
  card.status = 1
  users.value[i].push(card)
  if (count(i)>21) {
    winText.value = i==1 ? 'Игрок победил' : 'Дилер победил'
    users.value[1][0].status = 1
    isGame.value = false
    whoMoves.value = 0 
    passes.value[0] = false
    passes.value[1] = false
    currUser = 1
  } else {
    pass() 
  }
}

watch(whoMoves, async ()=>{
  if (passes.value[1] && passes.value[2]) {
    winText.value = count(1)<count(2) ? 'Игрок победил' : 'Дилер победил'
    winText.value = count(1)==count(2) ? 'Ничья' : winText.value
    users.value[1][0].status = 1
    isGame.value = false
    whoMoves.value = 0 
    passes.value[0] = false
    passes.value[1] = false
    currUser = 1
  }
  if (whoMoves.value == 1 && isGame) {
    text.value = 'Ход дилера'
    await sleep()
    if (count(1)>16) {
      passes.value[1] = true
      pass()
    }
    else {
      take(1)
    }
  } else {
    text.value = 'Ход игрока'
  }
})

function randomInteger(min:number, max:number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle() {
  for (let i=0; i<cardsReference.length; i++) {
    cardsReference[i].status = 0
  }
  cards.value = [...cardsReference]
  const max = cards.value.length-1
  for (let i=0; i<500; i++) {
    const x = randomInteger(0,max)
    const y = randomInteger(0,max-1)
    const card = cards.value.splice(x,1)
    cards.value.splice(y,0,card[0])
  }
}

const send4all = () => {
  shuffle()
  users.value[1] = []
  users.value[2] = []
  winText.value = ''
  isGame.value = true
  whoMoves.value = 2
  for (let i=0;i<4;i++) {
    const card = cards.value.pop()
    if (i==0) {
      card.status=0
    } else {
      card.status=1
    }
    users.value[currUser].push(card)
    if (currUser==1) {
      currUser = 2
    } else {
      currUser = 1
    }
  }
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