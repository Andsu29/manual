<template>
  <div>
    <h1>Tamanhos</h1>
    <div class="content">
      <div class="textos">
        <h2 style="color: orange">Bebê</h2>
        <p>Bebê: P,M,G subir G</p>
        <br />
        <h2 style="color: purple">Infantil</h2>
        <p>Infantil: 1 ao 3 subir 3, e do 4 ao 8 subir o 4</p>
        <p>Juvenil: 10 ao 16 subir o 10</p>
        <br />
        <h2 style="color: green">Adulto</h2>
        <p>FEMININO - Blusa M, Calça 38/M, Sutiã M/44, Calcinha M</p>
        <p>MASCULINO - Camiseta M/3, Calça 42, Cueca M</p>
        <br />
        <h2 style="color: blue">Plus Size</h2>
        <p>PLUS FEMININO - Blusa G1, Calça 48/G1, Sutiã 50, Calcinha 50</p>
        <p>PLUS MASCULINO - Camiseta G2/6, Calça 50/G2</p>
        <br />
        <h2 style="color: grey">Calçados</h2>
        <p>CALÇADOS - Fem 36, Mas 40, BB 21, Inf 27, Juv 30</p>
        <br />
        <br />
        <p>
          <span style="color: red">Atenção:</span> Quando não tiver o tamanho
          correto, subir a numeração mais próxima.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  text-align: center;
}
p {
  margin-top: 15px;
}
</style>
