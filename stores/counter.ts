export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref("hdh")
  const increment = () => {
    count.value++;
  }

  return {count, name, increment}
})