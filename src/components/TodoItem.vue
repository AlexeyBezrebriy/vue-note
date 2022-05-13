<template>
  <div>
    <li class="todo-item">
      <span>
        {{ todo.title }}
      </span>
      <button class="btn-delete">&times;</button>
    </li>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style>
  .todo-item {
    text-align: center;
  }
  .btn-delete {
    margin-left: 3px;
  }
</style>
