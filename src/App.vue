<template>
  <div>
    <NavBar />
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue"
  import TodoList from "@/components/TodoList.vue"
  export default {
    data() {
      return {
        todos: [
          { id: 1, title: "make home work", completed: false },
          { id: 2, title: "make school work", completed: false },
          { id: 3, title: "make work", completed: false },
        ],
      }
    },
    methods: {},
    components: {
      NavBar,
      TodoList,
    },
  }
</script>

<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
</style>
