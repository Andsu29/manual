<template>
  <div>
    <h1>Criar Produto</h1>
    <ul>
      <li v-for="(passo, index) in passoApasso" :key="passo">
        {{ index + 1 }} - {{ passo }}
      </li>
    </ul>
    <p>Agora marca na nota o tamanho pra subir</p>
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

<style>
ul {
  list-style: none;
}
</style>
