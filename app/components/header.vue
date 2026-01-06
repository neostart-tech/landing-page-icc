<template>
  <div>
    <!-- Header Component FIXE -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <!-- Navigation principale -->
      <nav class="py-4 px-8 lg:px-16 xl:px-32">
        <div class="flex items-center justify-between">
          <!-- Côté gauche avec logo et texte -->
          <div class="flex items-center space-x-4">
            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center">
              <img
                src="/logo/logo-icc.jpg"
                alt="ICC"
                class="h-12 w-auto object-contain"
              >
            </NuxtLink>
            
            <!-- Texte en deux lignes -->
            <div class="hidden md:block">
              <div class="text-[#202a50] font-bold text-lg leading-tight">
                Impact Centre Chrétien | TOGO
              </div>
              <div class="text-[#666] text-sm">
                Partagez vos trajets, vivez la communion
              </div>
            </div>
          </div>

          <!-- Navigation desktop -->
          <div class="hidden lg:flex items-center space-x-8">
            <!-- Accueil -->
            <NuxtLink
              to="/"
              class="text-[#202a50] font-medium hover:text-[#840B7F] transition-colors text-sm relative"
              :class="{ 'text-[#840B7F]': $route.path === '/' }"
            >
              Accueil
              <span v-if="$route.path === '/'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#840B7F]"></span>
            </NuxtLink>

            <!-- Détails de fonctionnalités -->
            <NuxtLink
              to="/fonctionnalites"
              class="text-[#202a50] font-medium hover:text-[#840B7F] transition-colors text-sm relative"
              :class="{ 'text-[#840B7F]': $route.path === '/fonctionnalites' }"
            >
              Détails de fonctionnalités
              <span v-if="$route.path === '/fonctionnalites'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#840B7F]"></span>
            </NuxtLink>

            <!-- Blog -->
            <NuxtLink
              to="/blog"
              class="text-[#202a50] font-medium hover:text-[#840B7F] transition-colors text-sm relative"
              :class="{ 'text-[#840B7F]': $route.path === '/blog' }"
            >
              Blog
              <span v-if="$route.path === '/blog'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#840B7F]"></span>
            </NuxtLink>

            <!-- FAQs -->
            <NuxtLink
              to="/faq"
              class="text-[#202a50] font-medium hover:text-[#840B7F] transition-colors text-sm relative"
              :class="{ 'text-[#840B7F]': $route.path === '/faq' }"
            >
              FAQs
              <span v-if="$route.path === '/faq'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#840B7F]"></span>
            </NuxtLink>

            <!-- Contact -->
            <NuxtLink
              to="/contact"
              class="text-[#202a50] font-medium hover:text-[#840B7F] transition-colors text-sm relative"
              :class="{ 'text-[#840B7F]': $route.path === '/contact' }"
            >
              Contact
              <span v-if="$route.path === '/contact'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#840B7F]"></span>
            </NuxtLink>

            <!-- Langues avec menu déroulant -->
            <div class="relative group">
              <button class="flex items-center space-x-1 text-[#202a50] font-medium hover:text-[#840B7F] transition-colors text-sm">
                <span>Langues</span>
                <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              <!-- Menu déroulant -->
              <div class="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                <div class="py-1">
                  <button
                    @click="changeLanguage('fr')"
                    class="flex items-center justify-between w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#840B7F] transition-colors"
                  >
                    <span>Français</span>
                    <span v-if="currentLanguage === 'fr'" class="text-[#840B7F]">✓</span>
                  </button>
                  <button
                    @click="changeLanguage('en')"
                    class="flex items-center justify-between w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#840B7F] transition-colors"
                  >
                    <span>English</span>
                    <span v-if="currentLanguage === 'en'" class="text-[#840B7F]">✓</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Bouton Télécharger avec flèche -->
            <button
              @click="openDownloadModal"
              class="ml-4 px-5 py-2.5 bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm flex items-center space-x-2 group"
            >
              <span>Télécharger</span>
              <svg class="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>

          <!-- Menu hamburger mobile -->
          <div class="lg:hidden">
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 rounded-lg text-[#202a50] hover:bg-gray-100 transition-colors"
            >
              <svg
                v-if="!isMobileMenuOpen"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
              <svg
                v-else
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Espace pour le header fixe -->
    <div class="h-[72px] md:h-[84px]"></div>

    <!-- Menu mobile -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-5 h-full overflow-y-auto">
        <!-- Header du menu mobile -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-3">
            <img
              src="/logo/logo-icc.jpg"
              alt="ICC"
              class="h-10 w-auto object-contain"
            >
            <div>
              <div class="text-[#202a50] font-bold text-lg">
                Impact Centre Chrétien
              </div>
              <div class="text-[#666] text-sm">TOGO</div>
            </div>
          </div>
          <button @click="isMobileMenuOpen = false" class="p-1 hover:bg-gray-100 rounded-lg">
            <svg class="w-6 h-6 text-[#202a50]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <!-- Navigation mobile -->
        <nav class="space-y-1">
          <NuxtLink
            to="/"
            @click="isMobileMenuOpen = false"
            class="block py-3 px-4 text-[#202a50] font-medium hover:bg-[#840B7F] hover:text-white rounded-lg transition-colors text-sm"
          >
            Accueil
          </NuxtLink>
          
          <NuxtLink
            to="/fonctionnalites"
            @click="isMobileMenuOpen = false"
            class="block py-3 px-4 text-[#202a50] font-medium hover:bg-[#840B7F] hover:text-white rounded-lg transition-colors text-sm"
          >
            Détails de fonctionnalités
          </NuxtLink>
          
          <NuxtLink
            to="/blog"
            @click="isMobileMenuOpen = false"
            class="block py-3 px-4 text-[#202a50] font-medium hover:bg-[#840B7F] hover:text-white rounded-lg transition-colors text-sm"
          >
            Blog
          </NuxtLink>
          
          <NuxtLink
            to="/faq"
            @click="isMobileMenuOpen = false"
            class="block py-3 px-4 text-[#202a50] font-medium hover:bg-[#840B7F] hover:text-white rounded-lg transition-colors text-sm"
          >
            FAQs
          </NuxtLink>
          
          <NuxtLink
            to="/contact"
            @click="isMobileMenuOpen = false"
            class="block py-3 px-4 text-[#202a50] font-medium hover:bg-[#840B7F] hover:text-white rounded-lg transition-colors text-sm"
          >
            Contact
          </NuxtLink>

          <!-- Section Langue mobile -->
          <div class="pt-2">
            <div class="text-xs text-gray-500 px-4 py-2">Langue</div>
            <div class="flex space-x-2 px-4">
              <button
                @click="changeLanguage('fr')"
                :class="['px-3 py-1.5 text-sm rounded-lg transition-colors', currentLanguage === 'fr' ? 'bg-[#840B7F] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
              >
                Français
              </button>
              <button
                @click="changeLanguage('en')"
                :class="['px-3 py-1.5 text-sm rounded-lg transition-colors', currentLanguage === 'en' ? 'bg-[#840B7F] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
              >
                English
              </button>
            </div>
          </div>
        </nav>

        <!-- Bouton Télécharger mobile -->
        <div class="mt-6">
          <button
            @click="openDownloadModal"
            class="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white text-center py-3 px-4 rounded-lg font-medium hover:shadow-md transition-all text-sm"
          >
            <span>Télécharger</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>

        <!-- Information supplémentaire mobile -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="text-sm text-[#666] px-4">
            Partagez vos trajets, vivez la communion
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay pour mobile -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-black/30 z-40"
      @click="isMobileMenuOpen = false"
    />

    <!-- Modal de téléchargement -->
    <div
      v-if="isDownloadModalOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="isDownloadModalOpen = false"
    >
      <div class="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-[#202a50]">Télécharger l'application</h3>
            <button @click="isDownloadModalOpen = false" class="p-2 hover:bg-gray-100 rounded-lg">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <p class="text-gray-600 mb-6">Choisissez votre plateforme :</p>
          
          <div class="space-y-3">
            <a
              href="#"
              class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#840B7F] hover:bg-purple-50 transition-all group"
            >
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">Google Play Store</div>
                  <div class="text-sm text-gray-500">Pour Android</div>
                </div>
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-[#840B7F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            
            <a
              href="#"
              class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#840B7F] hover:bg-purple-50 transition-all group"
            >
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">Apple App Store</div>
                  <div class="text-sm text-gray-500">Pour iOS</div>
                </div>
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-[#840B7F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
          
          <div class="mt-6 pt-6 border-t border-gray-200">
            <p class="text-sm text-gray-500 text-center">
              Version disponible pour Android 8.0+ et iOS 12.0+
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from '#imports'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isDownloadModalOpen = ref(false)
const currentLanguage = ref('fr')

// Fonction pour changer la langue
const changeLanguage = (langCode) => {
  currentLanguage.value = langCode
  console.log(`Langue changée: ${langCode}`)
  isMobileMenuOpen.value = false
}

// Fonction pour ouvrir le modal de téléchargement
const openDownloadModal = () => {
  isDownloadModalOpen.value = true
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Style pour le header */
header {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Animation pour le menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Animation pour le modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>