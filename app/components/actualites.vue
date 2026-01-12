<template>
  <section class="py-20 px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
    <div class="max-w-6xl mx-auto">

      <!-- TITRE -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
        Restez connecté à nos actualités
      </h2>

      <!-- BOUTONS -->
      <div class="flex justify-center gap-4 mb-12">
  <button
    v-for="(btn, index) in buttons"
    :key="btn.id"
    @click="selected = btn.id"
    :class="[
      'w-48 h-12 rounded-full font-semibold transition-colors',
      selected === btn.id
        ? 'bg-[#840B7F] text-white'
        : 'bg-white text-black border border-gray-300'
    ]"
  >
    {{ btn.label }}
  </button>
</div>


      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center ">
        <div
          v-for="(block, idx) in displayedBlocks"
          :key="idx"
          class="bg-[#F0F0F0] text-black rounded-2xl max-w-md w-full overflow-hidden shadow-lg"
        >
          <!-- IMAGE QUI PREND TOUT LE BLOC -->
          <img 
            :src="block.image" 
            alt="Illustration" 
            class="w-full h-48 object-cover mb-4"
          />

          <!-- TEXTE -->
          <div class="p-6">
            <h3 class="text-xl mb-2">{{ block.title }}</h3>
            <p class="text-sm md:text-base leading-relaxed">{{ block.text1 }}</p>
            <p class="text-sm md:text-base leading-relaxed mt-4">{{ block.text2 }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// État du bouton sélectionné
const selected = ref('formation')

// Définition des boutons
const buttons = [
  { id: 'formation', label: 'Session de formation' },
  { id: 'miseajour', label: 'Mise à jour' },
  { id: 'annonces', label: 'Annonces' }
]

// Contenu des blocs pour chaque bouton
const blocksData = {
  formation: [
    { image: '/images/f1.png', title: 'SESSION DE FORMATION', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscimperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend, luctus purus eu, lacinia neque. Quisque hendrerit sit amet risus ut tempus.Donec sodales posuere leo at maximus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/f2.png', title: 'SESSION DE FORMATION', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/f3.png', title: 'SESSION DE FORMATION', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus.', text2: 'Mercredi 07 janvier 2026' },
  ],
  miseajour: [
    { image: '/images/m1.jpg', title: 'MISE À JOUR', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus. Cras sempeus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/m2.jpg', title: 'MISE À JOUR', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus. Cras sempeus.', text2: 'Mercredi 07 janvier 2026' },
   { image: '/images/m3.jpg', title: 'MISE À JOUR', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus. Cras sempeus.', text2: 'Mercredi 07 janvier 2026' },
    ],
  annonces: [
    { image: '/images/a1.jpg', title: 'ANNONCES', text1: 'Lorem ipsum dolor sit amet, od nunc nec, pharetra eros. Vivamus ma aliquam urnauet dapibus tincidunt. Mauris id urna ex. Sed vitae nisi imperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend. Quisque hendrerus ut tempus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/a2.jpg', title: 'ANNONCES', text1: 'Lorem ipsum dolor sit amet, od nunc nec, pharetra eros. Vivamus ma aliquam urnauet dapibus tincidunt. Mauris id urna ex. Sed vitae nisi imperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend. Quisque hendrerus ut tempus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/a3.jpg', title: 'ANNONCES', text1: 'Lorem ipsum dolor sit amet, od nunc nec, pharetra eros. Vivamus ma aliquam urnauet dapibus tincidunt. Mauris id urna ex. Sed vitae nisi imperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend. Quisque hendrerus ut tempus.', text2: 'Mercredi 07 janvier 2026' },
  ]
}

// Computed pour retourner les blocs selon le bouton sélectionné
const displayedBlocks = computed(() => blocksData[selected.value])
</script>
