<template>
  <div>
    <li class="note-item">
      <span>
        <strong>{{ index + 1 }}</strong>
        {{ note.title }}
        <span>{{ Date() }}</span>
      </span>
      <button class="btn-delete" @click="$emit('remove-note', note.id)">
        &times;
      </button>
    </li>
  </div>
</template>

<script>
  export default {
    props: {
      note: {
        type: Object,
        required: true,
      },
      index: Number,
    },
  }
</script>

<style scoped>
  p {
    opacity: 10;
  }
  span {
    display: inline;
  }
  .note-item {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }
  .btn-delete {
  }
</style>
