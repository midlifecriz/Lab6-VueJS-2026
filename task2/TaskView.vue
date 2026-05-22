<template>
  <div>
    <input v-model="title" />
    <button @click="add">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')

const add = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1

  tasks.push({ id, title: title.value, done: false })
  localStorage.setItem('tasks', JSON.stringify(tasks))

  router.push('/')
}
</script>
