<template>
  <div>
    <NavBar />
    <NoteInput @add-note="addNote" />
    <hr />
    <NoteList v-bind:notes="notes" @remove-note="removeNote" />
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue"
  import NoteList from "@/components/NoteList.vue"
  import NoteInput from "@/components/NoteInput.vue"
  export default {
    data() {
      return {
        notes: [
          { id: 1, title: "make home work", completed: false },
          { id: 2, title: "make school work", completed: false },
          { id: 3, title: "make work", completed: false },
        ],
      }
    },
    methods: {
      removeNote(id) {
        this.notes = this.notes.filter((t) => t.id !== id)
      },
      addNote(newNote) {
        this.notes.push(newNote)
      },
    },
    components: {
      NavBar,
      NoteList,
      NoteInput,
    },
  }
</script>

<style>
  hr {
    margin: 1rem 0.5rem;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
</style>
