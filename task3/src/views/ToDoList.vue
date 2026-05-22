<template>
  <div>
    <h1>Todo List</h1>

    <TaskItem
      v-for="t in store.tasks"
      :key="t.id"
      :task="t"
    />
  </div>
</template>

<script setup>
import TaskItem from '../components/TaskItem.vue'
import { useTasksStore } from '../stores/tasks'

const store = useTasksStore()
</script>
