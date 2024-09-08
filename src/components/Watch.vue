<template>

<div class="clouds">
    <div class="watch">
      <div class="hours"><img src="/images/Hour.png" height="150px" alt=""></div>
      <div class="minutes"><img src="/images/minutes.png" height="180px" alt=""></div>
      <div class="seconds"><img src="/images/seconds.png" height="230px" alt=""></div>
    </div>
  </div>

    <h1>{{hours}}</h1>
    <h1>{{minutes}}</h1>

</template>

<script setup lang="ts">
import { ref } from 'vue'

let date = new Date()
let hours = date.getHours()
hours = (hours > 12) ? hours = hours - 12 : hours
const minutes = date.getMinutes()

// x градусов = hours * 360 / 12

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
      animation: time 86400s linear infinite;
    }

    .minutes {
      position: absolute;
      left: 47%;
      top: 80px;
      transform-origin: 50% 89%;
      animation: time 3600s linear infinite;
    }

    .seconds {
      position: absolute;
      left: calc(47% + (3px/2));
      top: 30px;
      transform-origin: 50% 92%;
      animation: time 60s linear infinite;
      /* animation: time 60s steps(60) infinite; */
    }

    @keyframes time {
      from {
        transform: rotate(0);
      }

      to {
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
