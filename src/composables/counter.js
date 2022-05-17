import { ref } from 'vue';

export function useCounter(startCounter = 0) {
  const counter = ref(startCounter);

  function increase() {
    counter.value += 1;
  }

  function decrease() {
    counter.value -= 1;
  }

  return { counter, increase, decrease };
}
