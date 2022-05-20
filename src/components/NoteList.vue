<template>
  <div>
    <ul>
      <NoteItem
        v-for="(note, index) in notes"
        v-bind:note="note"
        v-bind:index="index"
        @remove-note="removeNote"
      />
    </ul>
  </div>
</template>

<script>
  import NoteItem from "@/components/NoteItem.vue"
  export default {
    components: {
      NoteItem,
    },
    props: ["notes"],
    methods: {
      removeNote(id) {
        this.$emit("remove-note", id)
      },
    },
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
