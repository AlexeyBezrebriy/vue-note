<template>
  <div class="header">
    <nav class="menu">
      <ul class="menu__items">
        <li class="menu__item">Logo</li>
        <li class="menu__item">Notes</li>
        <li class="menu__item">Information</li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }

  .header {
    background-color: #42d392;
    height: 2rem;
  }
  .menu__items {
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .menu__item {
    display: block;
    width: 100px;
  }
</style>
