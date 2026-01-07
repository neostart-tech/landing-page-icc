<template>
  <div class="title">
    <h1>Ce que nous vous offrons</h1>
    <p>
      Partagez vos trajets, vivez la communion, et rejoignez chaque culte sans
      souci, grâce au covoiturage solidaire <br />
      d'Impact Centre Chrétien du Togo.Venez partager des moments de foi et de
      fraternité !
    </p>
  </div>
  <div class="row">
    <div class="card" v-for="offre in offres" :key="offre.id">
      <h3>{{ offre.titre }}</h3>
      <p>{{ offre.description }}</p>
      <button>{{ offre.buttonText }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const offres = ref([
  {
    id: 1,
    titre: "Covoiturage lié aux activités",
    description:
      "Proposez ou demandez un trajet pour les programmes de votre église : cultes, réunions, répétitions, familles d’impact, départements, etc.",
    buttonText: "Telecharger",
    background: "/images/image.jpg",
  },
  {
    id: 2,
    titre: "Covoiturage lié aux activités",
    description:
      "Proposez ou demandez un trajet pour les programmes de votre église : cultes, réunions, répétitions, familles d’impact, départements, etc.",
    buttonText: "Telecharger",
    background: "/images/image.jpg",
  },
  {
    id: 3,
    titre: "Covoiturage lié aux activités",
    description:
      "Proposez ou demandez un trajet pour les programmes de votre église : cultes, réunions, répétitions, familles d’impact, départements, etc.",
    buttonText: "Telecharger",
    background: "/images/image.jpg",
  },
]);
</script>

<style scoped>
.title {
  text-align: center;
}
h1 {
  font-size: 48px;
  color: #000;
}

.row{
    display: flex;
    margin:50px 160px;
    gap: 1rem;
}

.card{
    height: 600px;
    background: #3B0539;
    color: white;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;

}

.card h3{
    font-weight: bold;
    font-size: 20px;

}

.card p{
    font-weight: 400;
    font-size: 13px;
    font-style: normal;
    color: #ffffffb5;

}

.card button{
   border: 1px solid #fff;
   padding:0 40px;
background: #840B7F;
}
</style>
