<template>
  <div>
    <nav class="menu">
      <ul class="menu__items">
        <li class="menu__item">Vue-Notes</li>
        <li class="menu__item">Notes</li>
        <li class="menu__item">Information</li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .menu {
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
