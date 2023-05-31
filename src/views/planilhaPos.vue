<template>
  <div>
    <section class="modal" v-if="imagemModal" @click="fecharModal">
      <div class="modal_container">
        <button @click="imagemModal = false" class="modal_fechar">X</button>
        <img class="imgModal" src="../assets/imagens/pos.png" alt="pos" />
      </div>
    </section>
    <h1>POS</h1>
    <br />
    <p>Há dois tipos de preenchimento na POS, eles são:</p>
    <br />
    <ul>
      <li>- Adição de produtos novos.</li>
      <li>- Atualização dos produtos container.</li>
    </ul>
    <br />
    <p>
      Na imagem abaixo vemos os dois exemplos de como deve ser preenchido a
      planilha.
    </p>
    <p>Na sinalização em vermelho está a ordem de preenchimento.</p>
    <br />
    <p>
      Mais abaixo podemos ver os códigos adicionados pelo setor do container,
      todos sem datas, cujo os mesmos devem ser atualizados com seus respectivos
      valores, e as datas de recebimento atualizadas no final da semana.
    </p>
    <br />
    <p>Ou seja:</p>
    <br />
    <h3>Diariamente</h3>
    <br />
    <ul>
      <li>- Titulo Atualizado</li>
      <li>- Cor do legado (Cor da etiqueta se necessário)</li>
      <li>- Categoria</li>
    </ul>
    <br />
    <h3>Fim da semana</h3>
    <br />
    <ul>
      <li>- Data de recebimento (Dados da Millenium)</li>
    </ul>
    <br />
    <p>
      Por enquanto o padrão container se aplica apenas em Feminino e Masculino.
    </p>
    <p class="vermelho">
      Os códigos do container devem ser atualizados diariamente para agilizar a
      subida ao site.
    </p>
    <div class="grade2">
      <img src="../assets/imagens/pos.png" alt="pos" @click="abrirModal" />
      <button class="btn" @click="abrirModal">Ver imagem</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagemModal: false,
    };
  },
  methods: {
    modal_true() {
      this.imagemModal = !this.imagemModal;
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.imagemModal = false;
      }
    },
    abrirModal() {
      this.modal_true();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
img {
  display: block;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 16px;
}
.btn {
  margin: 0 auto;
  margin-top: 25px;
  border: none;
  background-color: rgb(91, 91, 212);
  color: white;
  border-radius: 6px;
  padding: 10px 16px;
}
.btn:hover {
  background-color: rgb(121, 121, 228);
}
.img1 {
  height: 100px;
}
.img2 {
  max-height: 300px;
}
.content {
  margin-top: 30px;
}
.items {
  margin-bottom: 20px;
}
.items h2 {
  margin-top: 30px;
}
.imgModal {
  margin-top: 80px;
}
.modal {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal_container img {
  height: 600px;
  animation: fadeIn 0.4s forwards;
}
.modal_container {
  z-index: 999;
}
.modal_fechar {
  position: absolute;
  z-index: 9999;
  border: none;
  right: 20px;
  top: 20px;
  background-color: transparent;
  font-size: 2rem;
  color: #f9f9f9;
}
.grade2 {
  display: grid;
  padding: 10px;
  margin-top: 30px;
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
}

@keyframes fadeIn {
  from {
    transform: translateX(50px);
  }
  to {
    transform: translateX(0px);
  }
}
.vermelho {
  color: red;
}
</style>
