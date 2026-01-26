<template>
  <section class="py-20 px-8 lg:px-16 xl:px-24 2xl:px-32 bg-[#F3F0F7]">

    <!-- TITRE -->
      <div class="text-center mb-14">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-gray-900 mb-4">
        Notre application
        </h1>
        <p class="text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Découvrez quelques captures d’écran de l’application en action.
          Les différentes interfaces défilent pour vous donner un aperçu de l’expérience utilisateur.
        </p>
      </div>


    <!-- CAROUSEL -->
    <div class="relative overflow-hidden max-w-6xl mx-auto">

      <!-- FLÈCHE GAUCHE -->
      <button
        @click="prev"
        class="absolute left-0 top-1/2 -translate-y-1/2
               bg-white shadow-lg w-12 h-12 rounded-full
               flex items-center justify-center text-3xl
               hover:bg-gray-100 transition z-20"
      >
        ‹
      </button>

      <!-- SLIDER -->
      <div class="flex justify-center items-center gap-6 transition-all duration-500">
        <div
          v-for="(img, i) in visibleImages"
          :key="img"
          class="transition-transform duration-500"
          :class="i === 2 ? 'scale-110 z-10' : 'scale-95'"
        >
          <img
            :src="img"
            class="w-[280px] h-auto object-contain rounded-xl shadow-xl"
            alt="capture application"
          />
        </div>
      </div>

      <!-- FLÈCHE DROITE -->
      <button
        @click="next"
        class="absolute right-0 top-1/2 -translate-y-1/2
               bg-white shadow-lg w-12 h-12 rounded-full
               flex items-center justify-center text-3xl
               hover:bg-gray-100 transition z-20"
      >
        ›
      </button>
    </div>

    <!-- DOTS -->
    <div class="flex justify-center gap-3 mt-10">
      <button
        v-for="(_, i) in images"
        :key="i"
        @click="goTo(i)"
        class="w-3 h-3 rounded-full transition"
        :class="index === i ? 'bg-violet-600 scale-110' : 'bg-violet-300'"
      ></button>
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

// 5 images visibles (2 avant, centre, 2 après)
const visibleImages = computed(() => {
  const result = []
  for (let i = -2; i <= 2; i++) {
    result.push(images[(index.value + i + images.length) % images.length])
  }
  return result
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

// auto défilement
onMounted(() => {
  interval = setInterval(next, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>
