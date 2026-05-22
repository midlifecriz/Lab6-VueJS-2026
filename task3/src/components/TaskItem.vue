<template>
  <div>
    <RouterLink :to="'/task/' + task.id">
      {{ task.title }}
    </RouterLink>

    <span>{{ task.completed }}</span>

    <RouterLink :to="'/task/' + task.id + '/complete'">
      complete
    </RouterLink>

    <RouterLink :to="'/task/' + task.id + '/delete'">
      delete
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  task: Object
})
</script>
