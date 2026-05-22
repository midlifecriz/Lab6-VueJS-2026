<template>
  <div>
    <router-link to="/add">Add</router-link>
    <router-link to="/about">About</router-link>

    <div v-for="t in tasks" :key="t.id">
      <div>
        <span :style="{ textDecoration: t.done ? 'line-through' : 'none' }">
          {{ t.title }}
        </span>

        <router-link :to="`/task/${t.id}`">open</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref([])

const load = () => {
  tasks.value = JSON.parse(localStorage.getItem('tasks') || '[]')
}

onMounted(load)
</script>
