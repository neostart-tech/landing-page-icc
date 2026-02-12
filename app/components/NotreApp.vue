<template>
  <section class="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-[#F3F0F7]">

    <!-- TITRE -->
      <div class="text-center mb-8 md:mb-12 lg:mb-14">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 md:mb-4 px-4">
        {{ $t('our_app.title') }}
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16 px-4">
          Découvrez quelques captures d'écran de l'application en action.
          Les différentes interfaces défilent pour vous donner un aperçu de l'expérience utilisateur.
        </p>
      </div>


    <!-- CAROUSEL -->
    <div class="relative overflow-hidden max-w-6xl mx-auto">

      <!-- FLÈCHE GAUCHE - cachée sur mobile -->
      <button
        @click="prev"
        class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
               bg-white shadow-lg w-10 h-10 md:w-12 md:h-12 rounded-full
               items-center justify-center text-2xl md:text-3xl
               hover:bg-gray-100 transition z-20"
      >
        ‹
      </button>

      <!-- SLIDER -->
      <div class="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 transition-all duration-500">
        <div
          v-for="(img, i) in visibleImages"
          :key="img"
          class="transition-transform duration-500"
          :class="i === centerIndex ? 'scale-100 md:scale-110 z-10' : 'scale-75 md:scale-95 opacity-60 md:opacity-100'"
        >
          <img
            :src="img"
            class="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] h-auto object-contain rounded-xl shadow-xl"
            alt="capture application"
          />
        </div>
      </div>

      <!-- FLÈCHE DROITE - cachée sur mobile -->
      <button
        @click="next"
        class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
               bg-white shadow-lg w-10 h-10 md:w-12 md:h-12 rounded-full
               items-center justify-center text-2xl md:text-3xl
               hover:bg-gray-100 transition z-20"
      >
        ›
      </button>
    </div>

    <!-- DOTS -->
    <div class="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8 lg:mt-10">
      <button
        v-for="(_, i) in images"
        :key="i"
        @click="goTo(i)"
        class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition"
        :class="index === i ? 'bg-violet-600 scale-110' : 'bg-violet-300'"
      ></button>
    </div>

    <!-- Boutons de navigation mobile -->
    <div class="flex md:hidden justify-center gap-4 mt-6">
      <button
        @click="prev"
        class="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition"
      >
        ‹
      </button>
      <button
        @click="next"
        class="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition"
      >
        ›
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const images = [
  '/screenshot/screen1.png',
  '/screenshot/screen2.png',
  '/screenshot/screen3.png',
  '/screenshot/screen4.png',
  '/screenshot/screen5.png',
  '/screenshot/screen6.png',
  '/screenshot/screen7.png',
  '/screenshot/screen8.png'
]

const index = ref(0)
let interval = null

// Nombre d'images visibles selon la taille d'écran
const isMobile = ref(false)

// 3 images sur mobile (1 avant, centre, 1 après), 5 sur desktop (2 avant, centre, 2 après)
const visibleImages = computed(() => {
  const result = []
  const range = isMobile.value ? 1 : 2
  for (let i = -range; i <= range; i++) {
    result.push(images[(index.value + i + images.length) % images.length])
  }
  return result
})

const centerIndex = computed(() => {
  return isMobile.value ? 1 : 2
})

const next = () => {
  index.value = (index.value + 1) % images.length
}

const prev = () => {
  index.value = (index.value - 1 + images.length) % images.length
}

const goTo = (i) => {
  index.value = i
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

// auto défilement
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  interval = setInterval(next, 3000)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
  clearInterval(interval)
})
</script>
