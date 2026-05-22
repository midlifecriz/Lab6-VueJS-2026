<template>
  <div>
    <h1>Add Task</h1>

    <input v-model="text" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const text = ref('')
const router = useRouter()
const store = useTasksStore()

function addTask() {
  if (!text.value) return
  store.add(text.value)
  router.push('/')
}
</script>
