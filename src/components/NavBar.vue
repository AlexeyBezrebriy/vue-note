<template>
  <div>
    <nav class="menu">
      <ul class="menu__items">
        <li class="menu__item"><a href="#">Vue-Notes</a></li>
        <li class="menu__item"><a href="#">Notes</a></li>
        <li class="menu__item"><a href="#">Information</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
  .menu {
    background-color: #42d392;
    height: 2rem;
  }
  .menu__items {
    display: flex;
    flex-direction: row;
    /* justify-content: start; */
    align-items: center;
    padding: 0.5rem;
  }
  .menu__item {
    display: block;
    width: 100px;
  }
</style>
