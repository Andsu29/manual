<template>
  <div>
    <section class="contain">
      <div class="caixas">
        <img class="img1" src="../assets/imagens/CodigoProduto.png" alt="" />
        <h2>1) Código do produto</h2>
      </div>
      <div class="caixas">
        <img class="img1" src="../assets/imagens/cores.png" alt="" />
        <h2>2) Selecionar cores</h2>
      </div>
      <div class="caixas">
        <img class="img1" src="../assets/imagens/titulo.png" alt="" />
        <h2>3) Título</h2>
      </div>
      <div class="caixas">
        <img class="img4" src="../assets/imagens/final.png" alt="" />
        <h2>4) Salvar e Finalizar duas vezes</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "criarProduto",
  data() {
    return {
      passoApasso: [
        "Código do produto",
        "Selecionar cores",
        "Título",
        "Salvar",
        "Finalizar duas vezes",
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

img {
  display: block;
  border-radius: 15px;
  transition: all 0.3s;
}
.contain {
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.caixas {
  display: grid;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
}
.img4:hover {
  transform: scale(1.1);
}
.img1:hover {
  transform: scale(1.1);
}
.img1 {
  height: 200px;
  width: 300px;
  padding: 10px;
  margin-left: 30px;
}
.img4 {
  height: 200px;
  width: 300px;
  padding: 10px;
  margin-left: 30px;
}
</style>
