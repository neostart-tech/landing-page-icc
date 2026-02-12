<template>
  <div>
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav class="py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div class="flex items-center justify-between">

          <!-- Logo + texte -->
          <div class="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <NuxtLink to="/" class="flex items-center">
              <img src="/logo/logo-icc.jpg" alt="ICC" class="h-10 sm:h-11 md:h-12 w-auto" />
            </NuxtLink>

            <div class="hidden md:block">
              <div class="text-[#202a50] font-bold text-base lg:text-lg">
                {{ $t("header.title") }}
              </div>
              <div class="text-[#666] text-xs lg:text-sm">
                {{ $t("header.subtitle") }}
              </div>
            </div>
          </div>

          <!-- Menu desktop -->
          <div class="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <NuxtLink to="/" class="nav-link">{{ $t("nav.home") }}</NuxtLink>
            <NuxtLink to="/fonctionnalites" class="nav-link">{{ $t("nav.features") }}</NuxtLink>
            <NuxtLink to="/blog" class="nav-link">{{ $t("nav.blog") }}</NuxtLink>
            <NuxtLink to="/faq" class="nav-link">{{ $t("nav.faq") }}</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">{{ $t("nav.contact") }}</NuxtLink>

            <!-- Langues desktop avec globe -->
            <div class="relative group">
              <button class="flex items-center space-x-1.5 px-2.5 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 xl:h-5 xl:w-5 text-[#202a50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs xl:text-sm font-medium text-[#202a50] uppercase">{{ currentLocale }}</span>
              </button>
              <div class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  v-for="loc in locales"
                  :key="loc.code"
                  @click="setLocale(loc.code)"
                  :class="{
                    'bg-[#840b7f] text-white': locale.value === loc.code,
                    'text-[#202a50] hover:bg-gray-100': locale.value !== loc.code
                  }"
                  class="w-full px-4 py-2 text-left text-sm first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {{ loc.name }}
                </button>
              </div>
            </div>

            <!-- Bouton télécharger -->
            <button
              @click="openDownloadModal"
              class="ml-2 xl:ml-4 px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white rounded-lg text-xs xl:text-sm font-medium hover:shadow-lg transition-shadow"
            >
              {{ $t("buttons.download") }}
            </button>
          </div>

          <!-- Mobile button -->
          <button
            class="lg:hidden p-2 text-2xl text-[#202a50] hover:bg-gray-100 rounded-lg transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>

    <!-- Spacer -->
    <div class="h-[64px] md:h-[72px] lg:h-[80px]"></div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div class="p-4 sm:p-6">
          <!-- Header du menu mobile -->
          <div class="flex items-center justify-between mb-8">
            <img src="/logo/logo-icc.jpg" alt="ICC" class="h-10 w-auto" />
            <button 
              class="text-3xl text-[#202a50] hover:bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center transition-colors" 
              @click="closeMobile"
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </div>

          <nav class="space-y-1">
            <NuxtLink 
              to="/" 
              @click="closeMobile"
              class="block px-4 py-3 text-base font-medium text-[#202a50] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {{ $t("nav.home") }}
            </NuxtLink>
            <NuxtLink 
              to="/fonctionnalites" 
              @click="closeMobile"
              class="block px-4 py-3 text-base font-medium text-[#202a50] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {{ $t("nav.features") }}
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              @click="closeMobile"
              class="block px-4 py-3 text-base font-medium text-[#202a50] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {{ $t("nav.blog") }}
            </NuxtLink>
            <NuxtLink 
              to="/faq" 
              @click="closeMobile"
              class="block px-4 py-3 text-base font-medium text-[#202a50] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {{ $t("nav.faq") }}
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              @click="closeMobile"
              class="block px-4 py-3 text-base font-medium text-[#202a50] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {{ $t("nav.contact") }}
            </NuxtLink>

            <!-- Langue mobile -->
            <div class="pt-4 px-4">
              <label class="block text-sm font-medium text-[#202a50] mb-2">{{ $t("nav.language") }}</label>
              <select 
                v-model="locale.value" 
                class="border border-gray-300 rounded-lg px-3 py-2.5 w-full text-[#202a50] focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
              >
                <option v-for="loc in locales" :key="loc.code" :value="loc.code">
                  {{ loc.name }}
                </option>
              </select>
            </div>

            <div class="pt-4 px-4">
              <button
                @click="openDownloadModal"
                class="w-full bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                {{ $t("buttons.download") }}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </transition>

    <!-- Modal téléchargement -->
    <div
      v-if="isDownloadModalOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="isDownloadModalOpen = false"
    >
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">{{ $t("download.title") }}</h3>
        <p class="text-gray-600 mb-4">{{ $t("download.choose") }}</p>

        <button class="w-full bg-green-500 text-white py-2 rounded mb-2">
          Google Play
        </button>
        <button class="w-full bg-black text-white py-2 rounded">
          App Store
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { computed } from "vue"

const { locales, setLocale, locale } = useI18n()
const currentLocale = computed(() => locale.value.toUpperCase())

const isMobileMenuOpen = ref(false)
const isDownloadModalOpen = ref(false)

const closeMobile = () => {
  isMobileMenuOpen.value = false
}

const openDownloadModal = () => {
  isDownloadModalOpen.value = true
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  color: #202a50;
  font-size: 0.875rem;
}
.nav-link:hover {
  color: #840b7f;
}
</style>
