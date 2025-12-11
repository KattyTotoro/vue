<template>
<h1>Задача 6</h1>

  <button @click="shuffle">Перемешать</button>
  <button @click="sortInAscending">По возрастанию</button>
  <button @click="sortInDescending">По убыванию</button>
  <button @click="sortRed">Только красные</button>
  <button @click="sortBlack">Только черные</button>
  <button @click="sortAces">Только тузы</button>
  <TransitionGroup style="position:relative; margin: 10px auto; height: 210px" name="cards" tag="div">
    <div class="card" :style="`position:absolute; left:${i*25}px; z-index:${i+1}`" v-for="card, i of cards" :key="card.type+''+card.value">
      <template v-if="card.status">
        <div style="display:flex; flex-direction: column; align-items: flex-start;"><span>{{ types[card.type] }}</span><span style="text-align: center;">{{ values[card.value] ? values[card.value] : card.value }}</span></div>
        <div>{{ values[card.value] ? values[card.value] : card.value }}</div>
        <div style="display:flex; flex-direction: column; align-items: flex-end;"><span>{{ values[card.value] ? values[card.value] : card.value }}</span> <span>{{ types[card.type] }}</span></div>
      </template>
      <template v-else>
        <div style="background: url(/images/card.jpg) center/cover no-repeat white; height:100%" ></div>
      </template>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const cardsRefence = [
  {type:1, value:6, status:1},
  {type:1, value:7, status:1},
  {type:1, value:8, status:1},
  {type:1, value:9, status:1},
  {type:1, value:10, status:1},
  {type:1, value:11, status:1},
  {type:1, value:12, status:1},
  {type:1, value:13, status:1},
  {type:1, value:14, status:1},
  {type:2, value:6, status:1},
  {type:2, value:7, status:1},
  {type:2, value:8, status:1},
  {type:2, value:9, status:1},
  {type:2, value:10, status:1},
  {type:2, value:11, status:1},
  {type:2, value:12, status:1},
  {type:2, value:13, status:1},
  {type:2, value:14, status:1},
  {type:3, value:6, status:1},
  {type:3, value:7, status:1},
  {type:3, value:8, status:1},
  {type:3, value:9, status:1},
  {type:3, value:10, status:1},
  {type:3, value:11, status:1},
  {type:3, value:12, status:1},
  {type:3, value:13, status:1},
  {type:3, value:14, status:1},
  {type:4, value:6, status:1},
  {type:4, value:7, status:1},
  {type:4, value:8, status:1},
  {type:4, value:9, status:1},
  {type:4, value:10, status:1},
  {type:4, value:11, status:1},
  {type:4, value:12, status:1},
  {type:4, value:13, status:1},
  {type:4, value:14, status:1},
]
const cards = ref([...cardsRefence] as any[])
const types = {
  1:'♦️',
  2:'♥️',
  3:'♣️',
  4:'♠️',
} as any
const values = {
  11:'В',
  12:'Д',
  13:'К',
  14:'А',
} as any

function randomInteger(min:number, max:number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle() {
  cards.value = cardsRefence
  const max = cards.value.length-1
  for (let i=0; i<500; i++) {
    const x = randomInteger(0,max)
    const y = randomInteger(0,max-1)
    const card = cards.value.splice(x,1)
    cards.value.splice(y,0,card[0])
  }
}

const sortRed = ()=>{
  cards.value = cardsRefence.filter(el=>el.type==1 || el.type==2)
}

const sortBlack = ()=>{
  cards.value = cardsRefence.filter(el=>el.type==3 || el.type==4)
}

const sortAces = ()=>{
  cards.value = cardsRefence.filter(el=>el.value==14)
}

const sortInAscending = ()=>{
  cards.value = cardsRefence
  cards.value.sort((a,b)=>a.type**3*a.value-b.type**3*b.value)
}

const sortInDescending = ()=>{
  cards.value = cardsRefence
  cards.value.sort((a,b)=>b.type**3*b.value-a.type**3*a.value)
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

.cards-move, /* применять переход к движущимся элементам */
.cards-enter-active,
.cards-leave-active {
  transition: all 0.5s ease;
}

.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* убедитесь, что удаляющиеся элементы выведены из потока, чтобы 
анимации перемещения могли быть рассчитаны правильно. */
.cards-leave-active {
  position: absolute;
}

</style>