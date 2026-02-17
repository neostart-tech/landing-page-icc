<template>
  <section class="pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
    <div class="max-w-6xl mx-auto">
      <!-- TITRE PRINCIPAL -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 md:mb-4 px-4">
        {{ $t('what_we_offer.title') }}
      </h1>

      <!-- SOUS-TITRE -->
      <p class="text-sm sm:text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14 lg:mb-16 px-4">
        {{ $t('what_we_offer.subtitle') }}
      </p>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
        <!-- Bloc 1 -->
        <div class="bg-[#3D0F2F] text-white rounded-2xl overflow-hidden flex flex-col justify-between items-center">
          <div class="p-2 z-10 relative">
            <h3 class="text-xl font-extrabold mb-3">
              {{ $t('what_we_offer.cards.carpooling.title') }}
            </h3>
            <p class="text-sm md:text-base mb-4">
              {{ $t('what_we_offer.cards.carpooling.description') }}
            </p>
            <button class="px-6 py-2 bg-white text-[#840B7F] font-semibold rounded-lg mb-4 hover:bg-gray-200 transition">
              {{ $t('buttons.download') }}
            </button>
          </div>

          <img
            src="/images/t.png"
            alt="Illustration"
            class="w-full h-34 object-cover"
          >
        </div>

        <!-- Bloc 2 -->
        <div
          class="relative rounded-2xl overflow-hidden flex flex-col justify-between items-center text-white
                bg-[url('/images/message.jpg')] bg-cover bg-center"
        >
          <div class="absolute inset-0 bg-black/50" />

          <!-- Contenu -->
          <div class="relative z-10 p-2 text-center">
            <h3 class="text-xl font-extrabold mb-3">
              {{ $t('what_we_offer.cards.communication.title') }}
            </h3>
            <p class="text-sm md:text-base mb-4">
              {{ $t('what_we_offer.cards.communication.description') }}
            </p>
            <button class="px-6 py-2 bg-[#840B7F] text-white font-semibold rounded-lg hover:bg-purple-800 transition">
              {{ $t('buttons.see_demo') }}
            </button>
          </div>
        </div>

        <!-- Bloc 3 -->
        <div
          class="relative rounded-2xl overflow-hidden flex flex-col justify-between items-center text-white
                bg-[url('/images/smartphone-security.jpg')] bg-cover bg-center"
        >
          <!-- Overlay violet -->
          <div class="absolute inset-0 bg-[#8F578B]/80" />

          <!-- Contenu -->
          <div class="relative z-10 p-2 text-center">
            <h3 class="text-xl font-extrabold mb-3">
              {{ $t('what_we_offer.cards.enjoy_app.title') }}
            </h3>
            <p class="text-sm md:text-base mb-4">
              {{ $t('what_we_offer.cards.enjoy_app.description') }}
            </p>
            <button class="px-6 py-2 bg-white text-[#840B7F] font-semibold rounded-lg hover:bg-gray-200 transition">
              {{ $t('buttons.download') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
