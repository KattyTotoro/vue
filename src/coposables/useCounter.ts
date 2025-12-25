import { ref } from "vue"
const count = ref(0)
export default ()=>{
  const increment = ()=>{
    count.value++
  }
  const decrement = ()=>{
    count.value--
  }
  const reset = () => {
    count.value = 0
  }
  return {count, increment, decrement, reset}
}