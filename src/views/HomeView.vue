<template>
  <div>
    <h1>Marcas</h1>
    <div class="lista">
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
        "Australian Gold",
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
        "Corttex",
        "Crysalis",
      ],
      lista2: [
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
        "Eco.ar",
        "Econfort",
        "Elétron",
        "Elétron Sport",
        "Endless",
        "Enrico Rossi",
        "Eudora",
        "Everlast",
        "Fatal",
        "Fatal Surf",
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
        "Grendene Kids",
      ],
      lista3: [
        "Habana",
        "Hang Loose",
        "Havaianas",
        "HedronsS",
        "Ipanema",
        "Jequiti",
        "Jolitex",
        "Kappa",
        "Karsten",
        "Kidy",
        "Kid+",
        "Kolosh",
        "Klin",
        "Lepper",
        "Lunender",
        "Lupo",
        "Mississipi",
        "Mizuno",
        "Mokkai Jeans",
        "Moleca",
        "Molekinha",
        "Mormaii",
        "New Balance",
        "Nike",
        "No Stress",
        "Occy",
        "Olympikus",
        "Pacific Blue",
        "Pegada",
        "Pampili",
        "Penalty",
        "Piccadilly",
      ],
      lista4: [
        "PimPom",
        "Pisom",
        "Portallar",
        "Quiz",
        "Rainha",
        "Reebok",
        "Ramarim",
        "Rider",
        "Rock_&_Soda",
        "Rovitex",
        "Ruby Rose",
        "Sawary",
        "Selene",
        "Santista",
        "Suzana Santos",
        "Teen",
        "Teka",
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
h1 {
  margin-bottom: 24px;
}
.lista {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
