<template>
  <div id="app" :class="{ escuro: modoEscuro }">
    <header-view>
      <div>
        <img
          title="Modo Noturno"
          class="lua"
          @click="modoEscuro = !modoEscuro"
          src="./assets/moon.svg"
          alt="lua"
        />
      </div>
    </header-view>
    <div class="container">
      <nav class="navegacao">
        <router-link to="/notas">Primeiros Passos</router-link>
        <router-link to="/produto">Criar Produto</router-link>
        <router-link to="/tamanhos">Tamanho Padrão</router-link>
        <router-link to="/">Marcas</router-link>
        <router-link to="/titulos">Título</router-link>
        <router-link to="/planilha">Planilha</router-link>
        <router-link to="/millenium">Millenium</router-link>
        <router-link to="/vitrine">Vitrine</router-link>
        <router-link to="/anotacao">Anotações</router-link>
        <router-link to="/consideracoes">Considerações Finais</router-link>
      </nav>
      <div>
        <transition mode="out-in">
          <router-view class="conteudo" />
        </transition>
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
  data() {
    return {
      modoEscuro: false,
    };
  },
  components: {
    headerView,
    footerView,
  },
};
</script>

<style>
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
  padding: 0px;
  box-sizing: border-box;
}
body {
  background-image: url("../src/assets/pattern.svg");
  max-height: 100vh;
  font-family: "Comfortaa", cursive;
}
.lua {
  height: 25px;
}
.lua:hover {
  transform: scale(1.1);
}
.escuro {
  background-color: rgb(27, 27, 36);
  background-image: url("../src/assets/pattern2.svg");
  color: #f9f9f9;
  transition: all 0.3s;
}
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  flex: 1;
}
.navegacao {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 50px;
}
.navegacao a {
  text-decoration: none;
  font-weight: bold;
  color: #f9f9f9;
  background-color: rgb(91, 91, 212);
  padding: 10px 16px;
  border-radius: 3px;
}
.navegacao a:hover {
  background-color: rgb(121, 121, 228);
}
.navegacao a.router-link-exact-active:hover {
  color: #f9f9f9;
}
.navegacao a.router-link-exact-active {
  color: rgb(99, 129, 211);
}
.conteudo {
  margin: 50px 0px 50px 50px;
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
