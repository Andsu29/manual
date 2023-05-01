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
  },
  actions: {
    adicionarAnotacao(context, payload) {
      context.commit("PREENCHER_LISTA", payload);
    },
  },
});
