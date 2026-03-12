<template>

  <div :style="`grid-template-columns: ${open ? '200px' : '0px'}  10px 1fr;`" class="grid">
    <div class="flex">
      <div style="flex-basis: calc((100% - 10px)/2);" class="blue">1</div>
      <div class="grey"><span></span></div>
      <div class="pink">4</div>
    </div>
    <div @click="open = !open" class="grey-w"><span
        :style="`transform: scaleY(3) scaleX(0.9) translate(-2px, ${open ? '-1px' : '0.5px'}) ${!open ? 'rotate(180deg)' : ''};`">&#9668;</span>
    </div>
    <div class="flex">
      <div style="flex-basis: calc((100% - 10px)/2);" class="green">1</div>
      <div class="grey"><span></span></div>
      <div class="orange">4</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const open = ref(true)

watch(open,()=>{
  const position = JSON.parse(localStorage.position)
  position.open = open.value
  localStorage.position = JSON.stringify(position)
})

onMounted(() => {
  if (!localStorage.position) {
    localStorage.position = JSON.stringify({ open: true, blue: 'calc((100% - 10px)/2)', green: 'calc((100% - 10px)/2)' })
  } else {
    const position = JSON.parse(localStorage.position)
    open.value = position.open
    const blue = document.querySelector('.blue') as HTMLDivElement
    blue.style.flexBasis = position.blue
    const green = document.querySelector('.green') as HTMLDivElement
    green.style.flexBasis = position.green
  }
  const thumbs = document.querySelectorAll('.grey') as NodeListOf<HTMLDivElement>
  // console.log(thumbs)
  for (let thumb of thumbs) {
    thumb.onpointerdown = function (event) {
      // перенацелить все события указателя (до pointerup) на thumb
      thumb.setPointerCapture(event.pointerId);
      // начать отслеживание перемещения указателя
      thumb.onpointermove = function (event) {
        // перемещение слайдера: отслеживание thumb, т.к все события указателя перенацелены на него
        const target = event.target as HTMLElement
        const parent = target.closest('.flex')
        let newTop = event.clientY < 100 ? 100 : event.clientY > (window.innerHeight - 100) ? window.innerHeight - 100 : event.clientY;
        // @ts-ignore
        parent.firstChild.style.flexBasis = newTop + 'px';
      };
      // если сработало событие pointerup, завершить отслеживание перемещения указателя
      thumb.onpointerup = function () {
        thumb.onpointermove = null;
        thumb.onpointerup = null;
        for (let thumb of thumbs) {
          const parent = thumb.closest('.flex')
          const position = JSON.parse(localStorage.position)
          // @ts-ignore
          position[parent.firstChild.className] = parent?.firstChild.style.flexBasis
          localStorage.position = JSON.stringify(position)
        }
        // ...при необходимости также обработайте "конец перемещения"
      };
    };
  }
})


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
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #b4dbe8;
}

.pink {
  flex: 1 1 auto;
  background-color: #febcc6;
}

.green {
  flex-grow: 0;
  flex-shrink: 0;
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