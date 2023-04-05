<template>
  <div id="app">
    <header-view />
    <div class="container">
      <div class="barra-lateral">
        <nav class="navegacao">
          <router-link to="/notas">Primeiros Passos</router-link>
          <router-link to="/produto">Criar Produto</router-link>
          <router-link to="/tamanhos">Tamanho Padrão</router-link>
          <router-link to="/">Marcas</router-link>
          <router-link to="/titulos">Título</router-link>
          <router-link to="/planilha">Planilha</router-link>
          <router-link to="/millenium">Millenium</router-link>
          <router-link to="/consideraçoes">Considerações Finais</router-link>
        </nav>
      </div>
      <div class="fonte">
        <transition mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import headerView from "@/components/headerView.vue";

export default {
  name: "app",
  components: {
    headerView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.vh {
  height: 100vh;
}
img {
  display: block;
  max-width: 100%;
}
body,
p,
a,
h1,
h2,
ul,
li {
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
.fonte {
  font-family: "Comfortaa", cursive;
}
.container {
  display: flex;
  gap: 30px;
}
.barra-lateral {
  background-color: #dfe3e6;
  box-shadow: 2px 2px 0px 2px rgba(0, 0, 0, 0.2);
  width: 250px;
}
.navegacao {
  display: flex;
  flex-direction: column;
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
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
