<template>
  <div>
    <h1>Calças Femininas</h1>
    <ul>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Flare:</h2>
            <p>
              A calça flare é a famosa boca de sino. Ela foi queridinha dos anos
              70, e marcou uma geração por ser sinônimo de liberdade de
              movimento e de ideias. A peça marcou presença das discotecas aos
              festivais de música, e hoje prova que sua versatilidade continua.
              Mais ajustada ao quadril e nas coxas, a calça flare fica mais
              —soltinha depois do joelho. Geralmente possui cintura alta e é
              confeccionada em jeans com elastano.
            </p>
          </div>
          <div class="img">
            <img src="../assets/imagens/flare.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Cigarrete:</h2>
            <p>
              A calça cigarrete jeans é uma peça básica e um clássico de
              qualquer guarda-roupa feminino, mas que pode fazer total diferença
              em um Look, principalmente por conta da sua modelagem. A calça
              cigarrete pode ter modelagtem com cintura média e alta, possui
              pernas ajustadas ao corpo e o comprimento fica a cima do
              tornozelo. Geralmente é confeccionada em jeans com elastano e pode
              ter diversos tipos de lavaderia e detalhes.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/cigarrete.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Mom:</h2>
            <p>
              A calça mom jeans ressurgiu com tudo e ganhou o coração das
              fashionistas. Como o próprio nome já diz, foram as calças das
              mães, especialmente dos anos 80 e 90, que inspiraram essa
              tendência. A calça mom jeans é confeccionada com um jeans 100%
              algodão, tem modelagem com cintura alta, soltinha no corpo e
              afunilada na barra.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/mom.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Pantalona:</h2>
            <p>
              A calça pantalona conquistou o coração das fashionista: que prezam
              por conforto e versatilidade em seus Looks no dia-a-dia. O modelo
              veio dos anos 70 e possui modelagem com cintura alta pernas soltas
              e largas. A pantalon combina com todo tipo de ocasião.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/pantalona.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Skinny:</h2>
            <p>
              A calça jeans skinny já é um clássico, e a cada dia vem se
              tornando mais essencial e indispensável no guarda roupa feminino
              por sua versatilidade. À calça skinny pode ter modelagem com
              cintura média e alta, possui pernas ajustadas ao corpo. Geralmente
              confeccionada em jeans com elastano e pode ter diversos tipos de
              lavaderia e detalhes.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/skinny.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Wide Leg:</h2>
            <p>
              Um meio-termo entre a calça reta e a pantalona, a calça wide leg
              jeans, como o próprio nome traduzido sugere, tem a modelagem com
              pernas largas e retas. Os modelos mais comuns são encontrados em
              jeans de cintura alta em diversas lavagens.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/wideLeg.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="caixaMaior">
          <div class="caixaTexto">
            <h2>Slouchy:</h2>
            <p>
              A calça slouchy tem uma pegada super autêntica pelo seu formato
              diferenciado, a peça é mais um sucesso dos anos 80 que retornou
              com força total para renovar o guarda-roupa da mulherada. A calça
              Slouchy geralmente é confeccionada em jeans 100% algodão, possui
              modelagem bem larga nas pernas, barra justa, cintura alta, prega
              frontal e o comprimento é no tornozelo. O modelo cria um ângulo
              oval, dando lugar a uma curva estilosa e cheia de atitude.
            </p>
          </div>
          <div>
            <img src="../assets/imagens/slouchy.png" alt="" />
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
  flex: 1;
}
img {
  max-width: 250px;
  flex: 1;
  object-fit: cover;
}
</style>
