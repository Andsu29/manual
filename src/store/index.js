import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listaAnotacoes: [],
  },
  mutations: {
    PREENCHER_LISTA(state, payload) {
      state.listaAnotacoes.push(payload);
    },
    REMOVER_LISTA(state, payload) {
      state.listaAnotacoes.splice(payload, 1);
    },
  },
  actions: {
    adicionarAnotacao(context, payload) {
      context.commit("PREENCHER_LISTA", payload);
    },
    removerAnotacao(context, payload) {
      context.commit("REMOVER_LISTA", payload);
    },
  },
});
