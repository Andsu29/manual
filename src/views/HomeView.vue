<template>
  <div class="vh">
    <h1>Marcas Relevantes:</h1>
    <div class="box lista">
      <ul>
        <li v-for="list in lista" :key="list">{{ list }}</li>
      </ul>
      <ul>
        <li v-for="lis in lista2" :key="lis">{{ lis }}</li>
      </ul>
      <ul>
        <li v-for="lis in lista3" :key="lis">{{ lis }}</li>
      </ul>
      <ul>
        <li v-for="lis in lista4" :key="lis">{{ lis }}</li>
      </ul>
      <ul>
        <li v-for="lis in lista5" :key="lis">{{ lis }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        "Adidas",
        "Altenburg",
        "Amil",
        "Amuage",
        "Andreza Enxovais",
        "Artex",
        "Atlântica",
        "Autentique",
        "Azaleia",
        "Bambi",
        "Bebecê",
        "Beira Rio",
        "Bibi",
        "Bivik",
        "Bottero",
        "Bout's",
        "Braddock",
        "Brandili",
        "Bull Terrier",
        "Café com Pimenta",
        "Capricho",
        "Cartago",
        "Casa Fashion Pompéia",
        "Cativa Disney",
        "Cativa",
        "Ciclo Mini",
        "Cobra D'agua",
        "Cook's Jeans",
        "Comfortflex",
        "Converse",
      ],
      lista2: [
        "Corttex",
        "Crysalis",
        "Dakota",
        "DelRio",
        "Diadora",
        "Dianneli",
        "Dijean",
        "Disney",
        "Disney Frozen",
        "Dixie",
        "Dôhler",
        "Eagle Rock",
        "Econfort",
        "Elétron",
        "Elétron Sport",
        "Endless",
        "Enrico Rossi",
        "Fatal",
        "Federal Art",
        "Ferracini",
        "Fido Dido",
        "Fila",
        "Flik",
        "Freeday",
        "Free Way",
        "Full Surf",
        "Gangster",
        "Grendha",
        "Grendene",
      ],
      lista3: [
        "Grendene Kids",
        "Habana",
        "Hang Loose",
        "Havaianas",
        "HedronsS",
        "Ipanema",
        "Jolitex",
        "Kappa",
        "Karsten",
        "Kidy",
        "Kid+",
        "Kolosh",
        "Klin",
        "Lepper",
        "Lol surprise",
        "Lunender",
        "Lupo",
        "Mokkai Jeans",
        "Moleca",
        "Molekinha",
        "Mormaii",
        "Nike",
        "No Stress",
        "Ocecy",
        "Olympikus",
        "Pacific Blue",
        "Pegada",
        "Pampili",
        "Penalty",
        "Piccadilly",
      ],
      lista4: [
        "PimPom",
        "Portallar",
        "Quiz",
        "Rainha",
        "Reebok",
        "Ramarim",
        "Rider",
        "Rock_&_Soda",
        "Rovitex",
        "Sawary",
        "Selene",
        "Santista",
        "Teen",
        "Teka",
        "Torp",
        "Topper",
        "Trifil",
        "Tryon",
        "Úber Jeans",
        "Umbro",
        "Usaflex",
        "vels",
        "Venesa Têxtil",
        "Via Uno",
        "Via Marte",
        "Vilejack",
        "Vizzano",
        "Vult",
        "Zaxy",
        "Zune",
        "West Coast",
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.box {
  width: 1200px;
}
.lista {
  display: grid;
  margin-right: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
