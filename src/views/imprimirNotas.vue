<template>
  <div>
    <section class="modal" v-if="imagemModal" @click="fecharModal">
      <div class="modal_container">
        <button @click="imagemModal = false" class="modal_fechar">X</button>
        <img
          class="imgModal"
          src="../assets/imagens/segundaparte.png"
          alt="img_modal"
        />
      </div>
    </section>
    <div class="content">
      <div class="items">
        <h2>1) Icone para imprimir as notas.</h2>
        <img class="img1" src="../assets/imagens/impress.png" alt="teste" />
      </div>

      <div class="items">
        <h2>
          2) Conferir se caiu todas as Notas (Importante ir atualizando),
          selecionar e imprimir uma a uma.
        </h2>

        <div class="grade2">
          <img
            class="img2"
            src="../assets/imagens/segundaparte.png"
            alt="impress"
            @click="abrirModal"
          />
          <button class="btn" @click="abrirModal">Ver imagem</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imprimirNotas",
  data() {
    return {
      imagem: "../assets/imagens/impress.png",
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
img {
  display: block;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 16px;
}
.btn {
  margin: 5px auto;
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
.modal {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal_container img {
  margin-top: 80px;
  height: 600px;
  width: 1200px;
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
  display: flex;
  flex-direction: column;
  padding: 10px;
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
</style>
