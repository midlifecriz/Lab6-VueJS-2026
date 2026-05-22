import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  }),

  actions: {
    save() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    add(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false
      })
      this.save()
    },

    remove(id) {
      this.tasks = this.tasks.filter(t => t.id != id)
      this.save()
    },

    toggle(id) {
      const task = this.tasks.find(t => t.id == id)
      if (task) task.completed = !task.completed
      this.save()
    }
  }
})
