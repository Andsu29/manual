<template>
  <div>
    <h1>Lavagens</h1>
    <ul>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Delavê:</h2>
            <p>
              Consiste em uma lavagem mais delicada e clara. Logo, quem gosta de
              itens mais claros e leves, essa é uma ótima opção, pois esse tipo
              de lavagem proporciona um visual mais delicado e simples.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/delave.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Estonada:</h2>
            <p>
              As peças estonadas, geralmente, apresentam uma característica mais
              desbotada. <br />
              <br />
              <span style="color: red"
                >( Atenção, essa lavagem não serve só para jeans, pode usar em
                camisetas por exemplo. )</span
              >
            </p>
          </div>
          <div>
            <img src="../assets/imagens/estonada.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Estonada com puídos:</h2>
            <p>
              peças com aparência desbotada e puídos que são detalhes como se o
              tecido tivesse sido “raspado”. Dica para descrição: desenvolvida
              em jeans macio de lavagem estonada com puídos que agregam
              modernidade à peça. (fazer variações dessa frase para não ficar
              sempre a mesma).
            </p>
          </div>
          <div>
            <img src="../assets/imagens/estonadaPuidos.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Marmorizada:</h2>
            <p>
              apresenta um leve desbotamento “dissolvido” da cor original do
              tecido, realçando pontos estratégicos no jeans. Esse processo
              deixa o item mais sofisticado. Diversos clientes buscam por esse
              jeans, já que apresenta um aspecto mais casual e combina com
              muitas peças. Isso pode ajudar na construção de looks despojados e
              confortáveis.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/marmorizada.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Destroyed:</h2>
            <p>
              Destruído e com rasgos, é uma lavagem parecida com a estonagem
              combinada com alvejamento. Nesse processo é empregada uma
              quantidade maior de enzimas que chegam a corroer a fibra, deixando
              a peça com aspecto de surrada.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/destroyed.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Jeans de lavagem preta:</h2>
            <p>
              <span style="color: red">Atenção: não confundir com sarja.</span>
              (pedir ajuda)
            </p>
          </div>
          <div>
            <img src="../assets/imagens/jeansPreta.png" alt="" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  margin-bottom: 40px;
}
li {
  list-style: none;
  margin-bottom: 10px;
}
li:hover {
  transform: scale(1.1);
  transition: all 0.4s;
}
li:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.2);
}
.caixaMaior {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
.caixaTexto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 30px;
}
</style>
