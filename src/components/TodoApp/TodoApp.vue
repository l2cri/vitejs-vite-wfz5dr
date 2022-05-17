<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="[todo.completed ? 'completed' : '']"
      data-test="todo"
    >
      {{ todo.text }}
      <input
        data-test="todo-checkbox"
        type="checkbox"
        v-model="todo.completed"
      />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let inc = 1;
const newTodo = ref('');
const todos = ref([
  {
    id: inc,
    text: 'Learn Vue.js 3',
    completed: false,
  },
]);

function createTodo() {
  todos.value.push({
    id: inc++,
    text: newTodo.value,
    completed: false,
  });
}
</script>
