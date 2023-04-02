<template>
  <div class="nav">
    <div class="container">
      <p class="logo">Manual das NFs</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 40px;
  width: 100%;
  background-color: #84e;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 99;
}
.container {
  display: flex;
  justify-content: start;
  width: 1000px;
}
.logo {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
}
</style>
