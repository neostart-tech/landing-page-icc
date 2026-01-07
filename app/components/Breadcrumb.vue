<!-- components/HeroSection.vue -->
<template>
  <section
    class="relative py-12 lg:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
    :style="`background-image: url('${backgroundImage}')`"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#019fbf] to-[#202a50] opacity-90"></div>

    <!-- Décoratifs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-72 h-72 bg-[#01b4d5]/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#0056b3]/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-[#01b4d5]/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
      <!-- Breadcrumb -->
      <nav v-if="breadcrumb?.length" class="flex items-center justify-center space-x-2 text-sm text-white/80 mb-6">
        <template v-for="(item, index) in breadcrumb" :key="index">
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            class="hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            <span v-if="index === 0">
              <!-- Icône maison -->
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </span>
            {{ item.label }}
          </NuxtLink>
          <span v-if="index < breadcrumb.length - 1" class="text-white/50">/</span>
        </template>
      </nav>

      <!-- Contenu -->
      <div class="text-center text-white">
        <div class="inline-flex items-center gap-4 mb-6">
          <div class="w-12 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] font-semibold text-sm tracking-widest uppercase">
            {{ subtitle }}
          </span>
          <div class="w-12 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>

        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight">
          {{ title }}
        </h1>

        <p v-if="description" class="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          {{ description }}
        </p>

        <!-- Durée optionnelle -->
        <div
          v-if="duration"
          class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
        >
          <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-white font-semibold">{{ duration }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  description: { type: String, default: '' },
  duration: { type: String, default: null }, // optionnel
  backgroundImage: { type: String, default: '/valeurs/bg.jpg' },
  breadcrumb: {
    type: Array,
    default: () => [],
  },
})
</script>
