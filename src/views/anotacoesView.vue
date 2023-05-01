<template>
  <main>
    <div class="input">
      <input type="text" v-model="anotacoes" />
      <button class="btn" @click="adicionar">Adicionar</button>
    </div>
    <div>
      <ul>
        <li v-for="item in lista" :key="item">{{ item }}</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      anotacoes: "",
    };
  },
  computed: {
    lista() {
      return this.$store.state.listaAnotacoes;
    },
  },
  methods: {
    adicionar() {
      this.$store.dispatch("adicionarAnotacao", this.anotacoes);
      window.localStorage.lista = JSON.stringify(this.lista);
    },
    checarLocalStorage() {
      if (window.localStorage.lista) {
        this.$store.state.listaAnotacoes = JSON.parse(
          window.localStorage.lista
        );
      }
    },
  },
  created() {
    this.checarLocalStorage();
  },
};
</script>

<style scoped>
input {
  height: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: none;
  width: 500px;
  font-size: 1.5rem;
}
.input {
  display: flex;
  justify-content: center;
}
.btn {
  font-weight: bold;
  color: #f9f9f9;
  background-color: #84e;
  padding: 10px 16px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
li {
  list-style: none;
}
</style>
