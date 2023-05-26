<template>
  <div class="nav">
    <div class="caixa">
      <p class="logo">Manual das NFs</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.nav {
  background-color: rgb(91, 91, 212);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.logo {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Comfortaa", cursive;
}
.caixa {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
</style>
