<template>
  <main>
    <div class="input">
      <input
        type="text"
        id="campo"
        v-model="anotacoes"
        placeholder="Adicionar..."
        @keyup.enter="adicionar"
      />
      <button class="btn" @click="adicionar" title="Adicionar">+</button>
    </div>
    <div class="caixa">
      <ul class="lista">
        <li v-for="(item, index) in lista" :key="item">
          <p class="paragrafo">{{ item }}</p>
          <img
            @click="remover(index)"
            class="lixeira"
            src="../assets/lixeira.svg"
            alt="lixo"
            title="Excluir"
          />
        </li>
      </ul>
    </div>
    <div class="alerta" :class="{ ativo: alertaAtivo }">
      <p class="alerta_mensagem">{{ mensagemAlerta }}</p>
    </div>
    <div class="alerta" :class="{ ativo: removerAtivo }">
      <p class="alertaRemover">{{ mensagemAlerta }}</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      anotacoes: "",
      mensagemAlerta: "",
      alertaAtivo: false,
      removerAtivo: false,
    };
  },
  computed: {
    lista() {
      return this.$store.state.listaAnotacoes;
    },
  },
  methods: {
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    alertaRemovida(mensagem) {
      this.mensagemAlerta = mensagem;
      this.removerAtivo = true;
      setTimeout(() => {
        this.removerAtivo = false;
      }, 1500);
    },
    limparInput() {
      const inputTarefa = document.getElementById("campo");
      inputTarefa.focus();
      this.anotacoes = "";
    },
    adicionar() {
      this.$store.dispatch("adicionarAnotacao", this.anotacoes);
      window.localStorage.lista = JSON.stringify(this.lista);
      this.limparInput();
      this.alerta("Anotação adicionada.");
    },
    remover(i) {
      this.$store.dispatch("removerAnotacao", i);
      window.localStorage.lista = JSON.stringify(this.lista);
      this.alertaRemovida("Anotação removida.");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
main {
  width: 100%;
}
input {
  height: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  width: 500px;
  font-size: 1.5rem;
  padding-left: 20px;
  transition: all 0.3s;
}
input:hover,
input:focus {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
.input {
  display: flex;
  justify-content: center;
  position: relative;
}
.btn {
  font-weight: bold;
  color: #f9f9f9;
  background-color: rgb(91, 91, 212);
  padding: 6px 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 8px;
  right: 100px;
}
.btn:hover {
  background-color: rgb(121, 121, 228);
}
.caixa {
  display: flex;
  justify-content: center;
}
.lista {
  margin-top: 40px;
}
li {
  list-style: none;
  font-weight: bold;
  color: #f9f9f9;
  background-color: rgb(61, 61, 112);
  padding: 20px 20px;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.paragrafo {
  width: 45ch;
}
.lixeira {
  width: 25px;
  transition: all 0.3s;
}
.lixeira:hover {
  transform: scale(1.2);
}
.alerta {
  position: absolute;
  top: 20px;
  right: 0px;
  z-index: 9999;
  text-align: center;
  display: none;
}
.alerta.ativo {
  display: block;
  animation: fadeInDown 0.3s forwards;
}
@keyframes fadeInDown {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}
.alerta_mensagem {
  background: #3fd281;
  display: inline-block;
  padding: 20px 40px;
  border: 2px solid #f9f9f9;
  color: #f9f9f9;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.alertaRemover {
  background: #e74e4e;
  display: inline-block;
  padding: 20px 40px;
  border: 2px solid #f9f9f9;
  color: #f9f9f9;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
</style>
