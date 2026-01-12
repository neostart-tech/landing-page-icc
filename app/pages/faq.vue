<template>
    <Breadcrumb 
      :breadcrumb="breadcrumbItems" 
    />

    <section class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-5 lg:px-10">

      <!-- TITRE -->
      <div class="text-center mb-20">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-black mb-6">
          Des préoccupations ?
        </h2>
        <p class="text-black text-lg">
          Parcourez notre foire aux questions <br><br><br>
        </p>
      </div>

      <!-- FAQ ACCORDION -->
      <div class="space-y-6">
        <div
            v-for="(item, index) in faqs"
            :key="index"
            class="rounded-xl border transition-all duration-300"
            :class="
                activeIndex === index
                ? 'border-[#840B7F] shadow-sm'
                : 'border-gray-200'
            "
            >

          <!-- QUESTION -->
            <button
            @click="toggle(index)"
            class="w-full flex items-center gap-3 px-6 py-6 text-left"
            >
            <!-- NUMÉRO + QUESTION -->
            <h3 class="flex-1 font-semibold text-black text-base lg:text-lg">
                <span class="text-[#285a43] font-bold mr-2">
                {{ index + 1 }}.
                </span>
                {{ item.question }}
            </h3>

            <!-- ICÔNE -->
            <svg
                class="w-5 h-5 text-black transition-transform duration-300 flex-shrink-0"
                :class="{ 'rotate-180': activeIndex === index }"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            </button>


          <!-- RÉPONSE -->
            <div
  v-show="activeIndex === index"
  class="px-6 pb-6 pl-10 text-black leading-relaxed text-sm lg:text-base"
>
  {{ item.answer }}
            </div>
        </div>
      </div>

    </div>
  </section>

</template> 



<script setup>
  
import Breadcrumb from '~/components/Breadcrumb.vue';
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'faq' } 
]

import { ref } from 'vue'

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: "À qui est destinée l’application ICC Covoiturage ?",
    answer:
      "L’application ICC Covoiturage est destinée à tous les membres de l’église Impact Centre Chrétien (fidèles, serviteurs, responsables et visiteurs). Elle permet de faciliter les déplacements vers les cultes, réunions, formations et autres activités organisées par l’église.",
  },
  {
    question: "Comment puis-je proposer ou demander un trajet ?",
    answer:
      "Après vous être connecté à l’application, vous pouvez soit proposer un trajet en tant que conducteur, soit demander un covoiturage en tant que passager. Il vous suffit d’indiquer votre lieu de départ, votre destination et l’activité concernée.",
  },
  {
    question: "Le covoiturage est-il payant ?",
    answer:
      "Non. Le service ICC Covoiturage est totalement gratuit. Il repose sur un esprit de solidarité et de communion entre les membres de l’église afin de faciliter l’accès aux activités sans contrainte financière.",
  },
  {
    question: "Puis-je suivre mon conducteur le jour du trajet ?",
    answer:
      "Oui. Une fois votre demande acceptée, vous pouvez suivre la position du conducteur en temps réel sur la carte intégrée. Vous recevez également une estimation du temps d’arrivée au point de rendez-vous.",
  },
];


</script>