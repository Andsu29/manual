<template>
  <div>
    <section class="modal" v-if="imagemModal" @click="fecharModal">
      <button @click="imagemModal = false" class="modal_fechar">X</button>
      <div class="modal_container">
        <div class="modal_img">
          <img
            class="imgModal"
            src="../assets/imagens/segundaparte.png"
            alt="img_modal"
          />
        </div>
      </div>
    </section>
    <h1>Imprimir Notas:</h1>
    <div class="content">
      <div class="items">
        <h2>1) Icone para imprimir as notas.</h2>
        <img class="img1" src="../assets/imagens/impress.png" alt="teste" />
      </div>
      <hr />
      <div class="items">
        <h2>
          2) Conferir se caiu todas as Notas (Importante ir atualizando),
          selecionar e imprimir uma a uma.
        </h2>

        <div class="teste">
          <img
            class="img2"
            src="../assets/imagens/segundaparte.png"
            alt="impress"
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
}
.btn {
  margin: 5px auto;
  border: none;
  background-color: #84e;
  color: white;
  border-radius: 6px;
  padding: 10px 16px;
}
.btn:hover {
  background-color: rgb(180, 136, 247);
}
.img1 {
  height: 100px;
}
.img2 {
  max-height: 300px;
}
.content {
  margin-top: 30px;
  font-family: "Comfortaa", cursive;
}
.items {
  margin-bottom: 50px;
}
.modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal_img {
  position: absolute;
  top: 20px;
  left: 0px;
  width: 100%;
}
.modal_container {
  z-index: 999;
  display: grid;
}
.imgModal {
  margin-top: 50px;
  height: 600px;
}
.modal_fechar {
  position: absolute;
  z-index: 9999;
  padding: 15px 20px;
  border-radius: 50%;
  border: 2px solid white;
  right: 205px;
  top: 59px;
  color: white;
  background-color: rgb(240, 53, 53);
}
.teste {
  display: grid;
  padding: 10px;
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 80px;
}
</style>
