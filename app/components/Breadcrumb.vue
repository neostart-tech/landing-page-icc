<template>
  <section
    class="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-cover bg-center bg-no-repeat overflow-hidden min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh]"
    :style="`background-image: url('${backgroundImage}');background-position: center 30%;`"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#000] to-[#000] opacity-60"
    ></div>

    <!-- Décoratifs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-[#01b4d5]/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#0056b3]/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/3 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#01b4d5]/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Breadcrumb collé tout en bas -->
    <div class="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pb-4 sm:pb-5 md:pb-6">
      <nav 
        v-if="breadcrumb?.length"
        class="flex items-center flex-wrap gap-2 text-white/90"
      >
        <template v-for="(item, index) in breadcrumb" :key="index">
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            class="hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-sm sm:text-base md:text-lg font-medium"
          >
            <span v-if="index === 0" class="flex items-center gap-1.5">
              <!-- Icône maison -->
              <svg
                class="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              {{ $t('breadcrumb.home') }}
            </span>
            <span v-else>{{ item.label }}</span>
          </NuxtLink>
          <span 
            v-else 
            class="text-white font-semibold text-sm sm:text-base md:text-lg"
          >
            {{ item.label }}
          </span>
          <span 
            v-if="index < breadcrumb.length - 1" 
            class="text-white/60 text-sm sm:text-base md:text-lg font-medium"
          >
            >
          </span>
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
  pageTitle: {
    type: String,
    default: "",
  },
});
</script>