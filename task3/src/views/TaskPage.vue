<template>
  <div v-if="task">
    <h1>{{ task.title }}</h1>
    <p>{{ task.completed }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const route = useRoute()
const store = useTasksStore()

const task = computed(() =>
  store.tasks.find(t => t.id == route.params.id)
)
</script>
