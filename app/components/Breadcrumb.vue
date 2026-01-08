<!-- components/HeroSection.vue -->
<template>
  <section
    class="relative py-12 lg:py-20 lg:px-[160px] bg-cover bg-center bg-no-repeat overflow-hidden min-h-[50vh] flex items-center "
    :style="`background-image: url('${backgroundImage}');background-position: center 30%;`"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#000] to-[#000] opacity-50"
    ></div>

    <!-- Décoratifs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-72 h-72 bg-[#01b4d5]/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#0056b3]/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-[#01b4d5]/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Breadcrumb en bas à gauche -->
    <div
      v-if="breadcrumb?.length"
      class="absolute bottom-0 left-0 z-20 p-6 lg:p-8  lg:px-[150px]"
    >
      <nav class="flex items-center justify-end space-x-2 text-white/80">
        <template v-for="(item, index) in breadcrumb" :key="index">
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            class="hover:text-white transition-colors duration-200 flex items-center gap-1 text-sm lg:text-base"
          >
            <span v-if="index === 0" class="flex items-center">
              <!-- Icône maison -->
              <svg
                class="w-4 h-4 lg:w-5 lg:h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              {{ item.label }}
            </span>
            <span v-else>{{ item.label }}</span>
          </NuxtLink>
          <span v-if="index < breadcrumb.length - 1" class="text-white/50 px-1"
            >></span
          >
        </template>
      </nav>
    </div>
  </section>
</template>

<script setup>
defineProps({
  backgroundImage: { type: String, default: "/images/bg-breadcrumb.jpg" },
  breadcrumb: {
    type: Array,
    default: () => [],
  },
});
</script>