<template>
  <section
    class="relative min-h-[600px] sm:min-h-[700px] md:min-h-screen flex items-center text-white py-20 md:py-0"
  >
    <!-- Image de fond -->
    <img
      src="/images/image.jpg"
      alt="Hero background"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Contenu -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 w-full">
      <div class="max-w-2xl">
        <!-- Titre -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {{ $t('hero.title') }}
        </h1>

        <!-- Description -->
        <p class="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          {{ $t('hero.description') }}
        </p>

        <!-- Boutons -->
        <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
          <a
            href="#"
            class="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#8b1d7a] rounded-lg hover:bg-[#732064] transition"
          >
            <img src="/icone/google-play.png" class="h-4 sm:h-5" alt="Google Play" />
            <span class="text-xs sm:text-sm font-medium">{{ $t('download.play_store') }}</span>
          </a>

          <a
            href="#"
            class="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            <img src="/icone/apple-store.png" class="h-4 sm:h-5 invert" alt="App Store" />
            <span class="text-xs sm:text-sm font-medium">{{ $t('download.app_store') }}</span>
          </a>

        </div>
      </div>

      <!-- Statistiques -->
      <div
        class="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center"
      >
        <div>
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold">2000+</p>
          <p class="text-xs sm:text-sm md:text-base text-gray-300 mt-1">{{ $t('hero.stats.users') }}</p>
        </div>

        <div>
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold">20+</p>
          <p class="text-xs sm:text-sm md:text-base text-gray-300 mt-1">{{ $t('hero.stats.vehicles') }}</p>
        </div>

        <div>
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold">15+</p>
          <p class="text-xs sm:text-sm md:text-base text-gray-300 mt-1">{{ $t('hero.stats.activities') }}</p>
        </div>

        <div>
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold">50+</p>
          <p class="text-xs sm:text-sm md:text-base text-gray-300 mt-1">{{ $t('hero.stats.rides') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
