import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import imprimirNotas from "../views/imprimirNotas.vue";
import criarProduto from "../views/criarProduto.vue";
import subirTamanhos from "../views/subirTamanhos.vue";
import regrasTitulo from "../views/regrasTitulo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/notas",
    name: "notas",
    component: imprimirNotas,
  },
  {
    path: "/produto",
    name: "produto",
    component: criarProduto,
  },
  {
    path: "/tamanhos",
    name: "tamanhos",
    component: subirTamanhos,
  },
  {
    path: "/titulos",
    name: "titulos",
    component: regrasTitulo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
