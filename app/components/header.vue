<template>
  <div>
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav class="py-4 px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div class="flex items-center justify-between">

          <!-- Logo + texte -->
          <div class="flex items-center space-x-4 ">
            <NuxtLink to="/" class="flex items-center">
              <img src="/logo/logo-icc.jpg" alt="ICC" class="h-12 w-auto" />
            </NuxtLink>

            <div class="hidden md:block">
              <div class="text-[#202a50] font-bold text-lg">
                {{ $t("header.title") }}
              </div>
              <div class="text-[#666] text-sm">
                {{ $t("header.subtitle") }}
              </div>
            </div>
          </div>

          <!-- Menu desktop -->
          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink to="/" class="nav-link">{{ $t("nav.home") }}</NuxtLink>
            <NuxtLink to="/fonctionnalites" class="nav-link">{{ $t("nav.features") }}</NuxtLink>
            <NuxtLink to="/blog" class="nav-link">{{ $t("nav.blog") }}</NuxtLink>
            <NuxtLink to="/faq" class="nav-link">{{ $t("nav.faq") }}</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">{{ $t("nav.contact") }}</NuxtLink>

            <!-- Langues desktop -->
            <div class="flex space-x-2">
              <button
                v-for="loc in locales"
                :key="loc.code"
                @click="setLocale(loc.code)"
                :class="{
                  'font-bold text-[#840b7f]': currentLocale === loc.code,
                  'text-[#202a50]': currentLocale !== loc.code
                }"
                class="px-2 py-1 rounded"
              >
                {{ loc.name }}
              </button>
            </div>

            <!-- Bouton télécharger -->
            <button
              @click="openDownloadModal"
              class="ml-4 px-5 py-2.5 bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white rounded-lg text-sm"
            >
              {{ $t("buttons.download") }}
            </button>
          </div>

          <!-- Mobile button -->
          <button
            class="lg:hidden p-2"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>

    <!-- Spacer -->
    <div class="h-[80px]"></div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white z-50 p-6">
      <button class="mb-4" @click="closeMobile">✕</button>

      <nav class="space-y-4">
        <NuxtLink to="/" @click="closeMobile">{{ $t("nav.home") }}</NuxtLink>
        <NuxtLink to="/fonctionnalites" @click="closeMobile">{{ $t("nav.features") }}</NuxtLink>
        <NuxtLink to="/blog" @click="closeMobile">{{ $t("nav.blog") }}</NuxtLink>
        <NuxtLink to="/faq" @click="closeMobile">{{ $t("nav.faq") }}</NuxtLink>
        <NuxtLink to="/contact" @click="closeMobile">{{ $t("nav.contact") }}</NuxtLink>

        <!-- Langue mobile -->
        <div class="pt-4">
          <label class="block text-sm mb-1">{{ $t("nav.language") }}</label>
          <select v-model="locale.value" class="border rounded px-2 py-1 w-full">
            <option v-for="loc in locales" :key="loc.code" :value="loc.code">
              {{ loc.name }}
            </option>
          </select>
        </div>

        <button
          @click="openDownloadModal"
          class="mt-4 w-full bg-[#840B7F] text-white py-2 rounded"
        >
          {{ $t("buttons.download") }}
        </button>
      </nav>
    </div>

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

const { locales, setLocale, locale } = useI18n()
const currentLocale = locale.value

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
