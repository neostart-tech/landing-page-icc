<template>
  <section
    class="relative min-h-screen flex items-center text-white"
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
    <div class="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 w-full">
      <div class="max-w-2xl">
        <!-- Titre -->
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          Rejoignez vos
          <span class="bg-[#8b1d7a] px-2 py-1 rounded-md">
            programmes
          </span>
          <br />
          d’église en toute simplicité .
        </h1>

        <!-- Description -->
        <p class="mt-6 text-sm md:text-base text-gray-200 leading-relaxed">
          Partagez vos trajets, vivez la communion, et rejoignez chaque culte
          sans souci et sans aucun frais grâce au covoiturage solidaire
          d’Impact Centre Chrétien du Togo. Les utilisateurs de toutes les
          églises peuvent switcher ou demander du covoiturage.
        </p>

        <!-- Boutons -->
        <div class="flex flex-wrap gap-4 mt-8">
          <a
            href="#"
            class="flex items-center gap-2 px-5 py-3 bg-[#8b1d7a] rounded-lg hover:bg-[#732064] transition"
          >
            <img src="/icone/google-play.png" class="h-5" />
            <span class="text-sm font-medium">Télécharger Google Play</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-2 px-5 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            <img src="/icone/apple-store.png" class="h-5 invert" />
            <span class="text-sm font-medium">Disponible sur Apple Store</span>
          </a>

        </div>
      </div>

      <!-- Statistiques -->
      <div
        class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center "
      >
        <div>
          <p class="text-3xl font-bold">2000+</p>
          <p class="text-sm text-gray-300">Utilisateurs</p>
        </div>

        <div>
          <p class="text-3xl font-bold">20+</p>
          <p class="text-sm text-gray-300">Véhicules</p>
        </div>

        <div>
          <p class="text-3xl font-bold">15+</p>
          <p class="text-sm text-gray-300">Activités</p>
        </div>

        <div>
          <p class="text-3xl font-bold">50+</p>
          <p class="text-sm text-gray-300">Trajets</p>
        </div>
      </div>
    </div>
  </section>
</template>
