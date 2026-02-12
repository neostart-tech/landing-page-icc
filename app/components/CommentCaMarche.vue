<template>
  <section class="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
    <div class="max-w-6xl mx-auto">

      <!-- TITRE PRINCIPAL -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 md:mb-4 px-4">
        {{ $t('how_it_works.title') }}
      </h1>

      <!-- SOUS-TITRE -->
      <p class="text-sm sm:text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16 px-4">
        {{ $t('how_it_works.subtitle') }}
      </p>

      <div class="flex justify-center mb-8 md:mb-10 lg:mb-12 px-4">
        <button @click="openDownloadModal" class="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white rounded-lg text-xs sm:text-sm font-medium hover:shadow-lg transition-shadow">{{ $t('buttons.download') }}</button>
      </div>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

        <!-- Bloc 1 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">{{ $t('how_it_works.steps.download.title') }}</h3>
          <p class="text-sm leading-relaxed ">
            {{ $t('how_it_works.steps.download.description') }}
          </p>
          <img src="/images/e.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

        <!-- Bloc 2 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">{{ $t('how_it_works.steps.create_account.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('how_it_works.steps.create_account.description') }}
          </p>
          <img src="/images/b.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

        <!-- Bloc 3 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">{{ $t('how_it_works.steps.verify_identity.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('how_it_works.steps.verify_identity.description') }}
          </p>
          <img src="/images/c.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

        <!-- Bloc 4 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">{{ $t('how_it_works.steps.enjoy_app.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('how_it_works.steps.enjoy_app.description') }}
          </p>
          <img src="/images/d.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

      </div>

      <!-- CONTENU À AJOUTER PLUS TARD -->
      <div class="mt-20 text-center text-gray-400 text-sm">
        <!-- Autres éléments à ajouter ici -->
      </div>

    </div>
  </section>
</template>

<script setup>
// Aucune logique nécessaire pour cette section
</script>
