import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import imprimirNotas from "../views/imprimirNotas.vue";
import criarProduto from "../views/criarProduto.vue";
import subirTamanhos from "../views/subirTamanhos.vue";
import regrasTitulo from "../views/regrasTitulo.vue";
import consideraçoesFinais from "../views/consideraçoesFinais.vue";
import eMillenium from "../views/eMillenium.vue";
import planilhaPos from "../views/planilhaPos.vue";
import anotacoesView from "../views/anotacoesView.vue";
import vitrineView from "../views/vitrineView.vue";

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
  {
    path: "/consideracoes",
    name: "consideracoes",
    component: consideraçoesFinais,
  },
  {
    path: "/planilha",
    name: "planilha",
    component: planilhaPos,
  },
  {
    path: "/millenium",
    name: "millenium",
    component: eMillenium,
  },
  {
    path: "/vitrine",
    name: "vitrine",
    component: vitrineView,
  },
  {
    path: "/anotacao",
    name: "anotacao",
    component: anotacoesView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
