import { defineStore } from 'pinia'

const { public: publicConfig } = useRuntimeConfig()

type State = {
  todolist: Todolist[]
  isLoading: boolean
  error?: any
}

export const useStoreTodolist = defineStore('todolist', {
  state: (): State => ({
    todolist: <Todolist[]>[],
    isLoading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchTodolist() {
      this.$state.isLoading = true
      await $fetch<TodolistResponse[]>(`${publicConfig.apiUrl}/api/todolist`, {
        method: 'GET',
      })
        .then((data) => {
          // fetch時に配列を初期化
          this.$state.todolist.slice()
          // fetchしたdateをフロント用にフォーマットして新たに格納
          this.$state.todolist = convertTodoResponse(data).slice()
          this.$state.error = null
        })
        .catch((err) => (this.$state.error = err))
      this.$state.isLoading = false
    },
    async addTodolist(request: CreateTodoRequest) {
      this.$state.isLoading = true
      await $fetch(`${publicConfig.apiUrl}/api/todolist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        credentials: 'include',
        body: JSON.stringify(request),
      }).then((num) => console.log(num), (this.$state.error = null))

      this.$state.isLoading = false
    },
    async selectedDelete(selectedIds: number[]) {
      this.$state.isLoading = true
      $fetch(`${publicConfig.apiUrl}/api/todolist`, {
        mode: 'cors',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        credentials: 'include',
        body: JSON.stringify(selectedIds),
      }).then((num) => console.log(num), (this.$state.error = null))

      this.$state.isLoading = false
    },
  },
})
