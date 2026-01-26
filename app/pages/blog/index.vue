<template>
  <div class="bg-white">
  <Breadcrumb 
      :breadcrumb="breadcrumbItems" 
    />

    <!-- FILTER -->
    <section class="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 py-16">
    <div class="flex flex-wrap gap-4"> <!-- <-- flex et gap ici -->
        <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[
            'px-4 py-1.5 rounded-full text-sm transition',
            activeCategory === cat
            ? 'bg-[#840B7F] text-white'
            : 'border border-gray-300 hover:bg-gray-100'
        ]"
        >
        {{ cat }}
        </button>
    </div>
    </section>

    <!-- ARTICLES -->
    <section class="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 -mt-10 relative z-10 pb-28">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <NuxtLink
          v-for="article in filteredArticles"
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
        >
          <div class="relative h-52 overflow-hidden">
            <img
              :src="article.image"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span class="absolute top-4 left-4 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full">
              {{ article.category }}
            </span>
          </div>

          <div class="p-6">
            <h3 class="font-extrabold text-gray-900 leading-snug mb-3">
              {{ article.title }}
            </h3>

            <p class="text-sm text-gray-600 mb-4 line-clamp-3">
              {{ article.excerpt }}
            </p>

            <div class="flex items-center justify-between text-xs text-gray-400">
              <span>{{ article.date }}</span>
              <span class="text-[#840B7F] font-semibold group-hover:underline">
                Lire →
              </span>
            </div>
          </div>
        </NuxtLink>

      </div>

      <!-- AUCUN ARTICLE -->
      <div
        v-if="filteredArticles.length === 0"
        class="text-center text-gray-500 mt-20"
      >
        Aucun article trouvé pour cette catégorie.
      </div>
    </section>
  </div>
</template>


<script setup>

import Breadcrumb from '~/components/Breadcrumb.vue';
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog' } // Pas de href = texte actif
]

import { ref, computed } from 'vue'

const categories = ['Tous', 'Mise à jour', 'Événement', 'Annonce']
const activeCategory = ref('Tous')

const articles = [
  {
    slug: 'nouvelle-mise-a-jour',
    title: 'Une nouvelle mise à jour dans ICC Covoiturage',
    excerpt: 'Découvrez les nouvelles fonctionnalités...',
    image: '/images/f.jpg',
    date: '20 Octobre 2025',
    category: 'Mise à jour'
  },
  {
    slug: 'evenement-icc',
    title: 'Retour sur l’événement ICC Transport Solidaire',
    excerpt: 'Un moment fort de partage autour de la mobilité...',
    image: '/images/f.jpg',
    date: '05 Novembre 2025',
    category: 'Événement'
  },
  {
    slug: 'nouvelle-application-mobile',
    title: 'Lancement de la nouvelle application mobile',
    excerpt: 'ICC Covoiturage arrive sur mobile...',
    image: '/images/f.jpg',
    date: '10 Décembre 2025',
    category: 'Annonce'
  },
  {
    slug: 'reservation-instantanee',
    title: 'La réservation instantanée est disponible',
    excerpt: 'Réservez votre place en un clic...',
    image: '/images/f.jpg',
    date: '28 Octobre 2025',
    category: 'Mise à jour'
  }
]

const filteredArticles = computed(() => {
  if (activeCategory.value === 'Tous') {
    return articles
  }
  return articles.filter(a => a.category === activeCategory.value)
})
</script>
