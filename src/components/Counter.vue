<script setup>
import { ref, computed, watch } from 'vue';
import { useCounter } from '../composables/counter.js';

const props = defineProps({
  count: { type: Number, default: 0 },
});

const { counter, increase, decrease } = useCounter(props.count);
const biggest = ref(false);

const doubleCount = computed(() => counter.value * 2);
watch(
  () => counter.value,
  (value) => {
    if (value > 10) {
      biggest.value = true;
    } else {
      biggest.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>Count : {{ counter }}</div>
  <div>DoubleCount : {{ doubleCount }}</div>

  <button @click="increase">increment</button>
  <button @click="decrease">decrement</button>
  <h2 v-if="biggest">More than 10</h2>
</template>
