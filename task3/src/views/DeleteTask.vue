<template>
  <h1>Task deleted</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const route = useRoute()
const router = useRouter()
const store = useTasksStore()

onMounted(() => {
  store.remove(route.params.id)
  router.push('/')
})
</script>
