<template>
  <div id="app">
    <header-view />
    <div class="container">
      <div class="barra-lateral">
        <nav class="navegacao">
          <router-link to="/">Home</router-link>
          <router-link to="/notas">Primeiros Passos</router-link>
          <router-link to="/produto">Criar Produto</router-link>
          <router-link to="/tamanhos">Tamanho Padrão</router-link>
        </nav>
      </div>
      <div>
        <router-view />
      </div>
    </div>
    <footer-view />
  </div>
</template>

<script>
import headerView from "@/components/headerView.vue";
import footerView from "@/components/footerView.vue";

export default {
  name: "app",
  components: {
    headerView,
    footerView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
img {
  display: block;
  max-width: 100%;
}
body,
p,
a {
  margin: 0px;
}
body {
  background-image: url("../src/assets/pattern.svg");
  height: 100vh;
}
h1 {
  margin-left: 15px;
  padding: 10px 16px;
}
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
}
.barra-lateral {
  background-color: #dfe3e6;
  box-shadow: 2px 2px 0px 2px rgba(0, 0, 0, 0.2);
}
.navegacao {
  display: grid;
  gap: 8px;
  padding: 30px;
}
.navegacao a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
.navegacao a:hover {
  color: rgb(180, 136, 247);
}
.navegacao a.router-link-exact-active {
  color: #84e;
}
</style>
