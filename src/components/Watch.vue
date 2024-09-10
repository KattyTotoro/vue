<template>

  <div class="clouds">
    <div class="watch">

      <div class="hours" :style="'transform: rotate(' + num_hours + 'deg);'"><img src="/images/Hour.png" height="150px"
          alt=""></div>

      <div class="minutes_wrapper" :style="'transform: rotate(' + num_minutes + 'deg);'">
        <div class="minutes"><img src="/images/minutes.png"
            height="180px" alt=""></div>
      </div>

      <div class="seconds_wrapper" :style="'transform: rotate(' + num_seconds + 'deg);'">
        <div class="seconds"><img src="/images/seconds.png" height="230px" alt=""></div>
      </div>

      <!-- <div class="seconds2" :style="'transform: rotate(' + num_seconds + 'deg); animation: time2 6s linear infinite;'" v-@keyframes="'time2{ from {transform: rotate(' + num_seconds + 'deg);} to {transform: rotate(360deg);}}'"><img src="/images/seconds.png" height="230px" alt=""></div> -->
      <!-- <div :@keyframes="'time2{ from {transform: rotate(' + num_seconds + 'deg);} to {transform: rotate(360deg);}}'" class="seconds2" :style="'transform: rotate(' + num_seconds + 'deg); @keyframes time2{ from {transform: rotate(' + num_seconds + 'deg);} to {transform: rotate(360deg);}}; animation: time2 6s linear infinite;'"><img src="/images/seconds.png" height="230px" alt=""></div> -->
      <!-- <div class="seconds"><img src="/images/seconds.png" height="230px" alt=""></div> -->
      <!-- <div :style="'@keyframes time2{' + pr_seconds + 'deg{transform: rotate(360deg);}}'"></div> -->
    </div>
  </div>

  <!-- <h1>{{hours}}</h1>
    <h1>{{minutes}}</h1>
    <h1>{{seconds}}</h1>
    <h1>{{num_hours}}</h1> -->

</template>

<script setup lang="ts">
import { transform } from 'typescript';
import { ref } from 'vue'
let num_hours = ref(0) as any
let num_minutes = ref(0) as any
let num_seconds = ref(0) as any
let seconds = ref(0) as any
let minutes = ref(0) as any
let hours = ref(0) as any

let date = new Date()
hours = date.getHours()
hours = hours % 12
// hours = (hours > 12) ? hours = hours - 12 : hours
minutes = date.getMinutes()
seconds = date.getSeconds()

num_seconds.value = seconds * 360 / 60
num_minutes.value = (minutes * 360 / 60) + (seconds * 0.1)
num_hours.value = (hours * 360 / 12) + ((minutes * 60) * 0.006)

</script>

<style scoped>
.clouds {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #b6cbe8;
  border-radius: 50%;
  background-image: url(images/cloud.png), url(images/cloud.png), url(images/cloud.png);
  /* background-repeat: no-repeat, no-repeat; */
  background-position: 20% 50%, 0% 20%, 50% 100%;
  background-size: 100%, 50%, 40%;
  /* background: url(images/training/cloud.png) 0 0/500px no-repeat, url(images/bg10.png) 100% 100%/350px no-repeat #b6cbe8; */

  animation: cloud 280s linear infinite;
}

.watch {
  background: url(images/clock_face.png) center/cover no-repeat;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: relative;
}

.hours {
  position: absolute;
  left: calc(47% - (3px/2));
  top: 112px;
  transform-origin: 50% 86%;
  animation: time 43200s linear infinite;
}

.minutes_wrapper {
  position: absolute;
  width: 30px;
  height: 186px;
  left: 47%;
  top: 80px;
  transform-origin: 50% 89%;
}

.minutes {
  position: absolute;
  transform-origin: 50% 89%;
  animation: time 3600s linear infinite;
}

.seconds_wrapper {
  position: absolute;
  width: 28px;
  height: 236px;
  left: calc(47% + (3px/2));
  top: 30px;
  transform-origin: 50% 92%;
}

.seconds {
  position: absolute;
  transform-origin: 50% 92%;
  animation: time 60s linear infinite;
  /* animation: time 60s steps(60) infinite; */
}

.seconds2 {
  position: absolute;
  left: calc(47% + (3px/2));
  top: 30px;
  transform-origin: 50% 92%;
  animation: time2 60s linear infinite;
  /* animation: time 60s steps(60) infinite; */
}

@keyframes time {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes cloud {
  from {
    background-position-x: -1000px, -800px, -500px;
  }

  to {
    background-position-x: 2000px, 1800px, 1500px;
  }
}
</style>
