<template>
  <section class="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
    <div class="max-w-6xl mx-auto">
      <!-- TITRE -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 md:mb-4 px-4">
        {{ $t('stay_connected.title') }}
      </h1>

      <!-- BOUTONS -->
      <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-10 lg:mb-12 px-4">
        <button
          v-for="btn in buttons"
          :key="btn.id"
          :class="[
            'w-full sm:w-40 md:w-48 h-11 md:h-12 rounded-full font-semibold text-sm md:text-base transition-colors',
            selected === btn.id
              ? 'bg-[#840B7F] text-white'
              : 'bg-white text-black border border-gray-300 hover:border-[#840B7F]'
          ]"
          @click="selected = btn.id"
        >
          {{ $t(btn.labelKey) }}
        </button>
      </div>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 justify-items-center px-4">
        <div
          v-for="(block, idx) in displayedBlocks"
          :key="idx"
          class="bg-[#F0F0F0] text-black rounded-2xl max-w-md w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <!-- IMAGE QUI PREND TOUT LE BLOC -->
          <img
            :src="block.image"
            alt="Illustration"
            class="w-full h-40 sm:h-48 object-cover mb-4"
          >

          <!-- TEXTE -->
          <div class="p-4 sm:p-5 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold mb-2">
              {{ $t(block.titleKey) }}
            </h3>
            <p class="text-sm md:text-base leading-relaxed text-gray-700">
              {{ block.text1 }}
            </p>
            <p class="text-xs sm:text-sm md:text-base leading-relaxed mt-3 md:mt-4 text-gray-600">
              {{ block.text2 }}
            </p>
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
  { id: 'formation', labelKey: 'stay_connected.buttons.training' },
  { id: 'miseajour', labelKey: 'stay_connected.buttons.update' },
  { id: 'annonces', labelKey: 'stay_connected.buttons.announcements' }
]

// Contenu des blocs pour chaque bouton
const blocksData = {
  formation: [
    { image: '/images/f1.png', titleKey: 'stay_connected.categories.training', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscimperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend, luctus purus eu, lacinia neque. Quisque hendrerit sit amet risus ut tempus.Donec sodales posuere leo at maximus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/f2.png', titleKey: 'stay_connected.categories.training', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/f3.png', titleKey: 'stay_connected.categories.training', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus.', text2: 'Mercredi 07 janvier 2026' }
  ],
  miseajour: [
    { image: '/images/m1.jpg', titleKey: 'stay_connected.categories.update', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus. Cras sempeus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/m2.jpg', titleKey: 'stay_connected.categories.update', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus. Cras sempeus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/m3.jpg', titleKey: 'stay_connected.categories.update', text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sem condimentum, euismod nunc nec, pharetra eros. Vivamus magna nisi, tincidunt at nunc at, imperdiet aliquam urna. Donec sodales posuere leo at maximus. Cras sempeus.', text2: 'Mercredi 07 janvier 2026' }
  ],
  annonces: [
    { image: '/images/a1.jpg', titleKey: 'stay_connected.categories.announcements', text1: 'Lorem ipsum dolor sit amet, od nunc nec, pharetra eros. Vivamus ma aliquam urnauet dapibus tincidunt. Mauris id urna ex. Sed vitae nisi imperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend. Quisque hendrerus ut tempus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/a2.jpg', titleKey: 'stay_connected.categories.announcements', text1: 'Lorem ipsum dolor sit amet, od nunc nec, pharetra eros. Vivamus ma aliquam urnauet dapibus tincidunt. Mauris id urna ex. Sed vitae nisi imperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend. Quisque hendrerus ut tempus.', text2: 'Mercredi 07 janvier 2026' },
    { image: '/images/a3.jpg', titleKey: 'stay_connected.categories.announcements', text1: 'Lorem ipsum dolor sit amet, od nunc nec, pharetra eros. Vivamus ma aliquam urnauet dapibus tincidunt. Mauris id urna ex. Sed vitae nisi imperdiet, ultricies augue nec, venenatis dolor. Morbi ac lacus eleifend. Quisque hendrerus ut tempus.', text2: 'Mercredi 07 janvier 2026' }
  ]
}

// Computed pour retourner les blocs selon le bouton sélectionné
const displayedBlocks = computed(() => blocksData[selected.value])
</script>
