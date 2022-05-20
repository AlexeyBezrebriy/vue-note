<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title" />
      <button type="submit">Add note</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "",
      }
    },
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newNote = {
            id: Date.now(),
            title: this.title,
            completed: false,
          }
          this.$emit("add-note", newNote)
          this.title = ""
        }
      },
    },
  }
</script>

<style>
  form {
    display: flex;
    margin: 0.5rem 0.5rem;
  }
  input {
    width: 400px;
  }
  button {
    margin-left: 10px;
  }
</style>
