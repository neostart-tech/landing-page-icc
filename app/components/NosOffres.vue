<template>
  <section class="py-20 px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
    <div class="max-w-6xl mx-auto">
      <!-- TITRE PRINCIPAL -->
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4">
        Ce que nous offrons
      </h1>

      <!-- SOUS-TITRE -->
      <p class="text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Partagez vos trajets, vivez la communion, et rejoignez chaque culte sans souci, grâce au covoiturage solidaire d'Impact Centre Chrétien du Togo. Venez partager des moments de foi et de fraternité !
      </p>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <!-- Bloc 1 -->
        <div class="bg-[#3D0F2F] text-white rounded-2xl overflow-hidden flex flex-col justify-between items-center">
        <div class="p-6 z-10 relative">
          <h3 class="text-xl font-extrabold mb-3">Covoiturage lié aux activités</h3>
          <p class="text-sm md:text-base mb-4">
            Proposez ou demandez un trajet pour les programmes de votre église : cultes, réunions, répétitions, falilles d'impact, départements, etc.
          </p>
          <button class="px-6 py-2 bg-white text-[#840B7F] font-semibold rounded-lg mb-4 hover:bg-gray-200 transition">
            Télécharger
          </button>
        </div>

        <img src="/images/t.png" alt="Illustration" class="w-full h-95 object-cover" />
      </div>

        <!-- Bloc 2 -->
        <div
          class="relative rounded-2xl overflow-hidden flex flex-col justify-between items-center text-white
                bg-[url('/images/message.jpg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/50"></div>

          <!-- Contenu -->
          <div class="relative z-10 p-6 text-center">
            <h3 class="text-xl font-extrabold mb-3">Communication et Map intégrée</h3>
            <p class="text-sm md:text-base mb-4">
              Chat groupé entre conducteur et passagers, suivi du trajet sur la carte, position du conducteur, itinéraire et estimation du temps d'arrivée.
            </p>
            <button class="px-6 py-2 bg-[#840B7F] text-white font-semibold rounded-lg hover:bg-purple-800 transition">
              Voir Demo
            </button>
          </div>
        </div>

        <!-- Bloc 3 -->
        <div
          class="relative rounded-2xl overflow-hidden flex flex-col justify-between items-center text-white
                bg-[url('/images/smartphone-security.jpg')] bg-cover bg-center"
        >
          <!-- Overlay violet -->
          <div class="absolute inset-0 bg-[#8F578B]/80"></div>

          <!-- Contenu -->
          <div class="relative z-10 p-6 text-center">
            <h3 class="text-xl font-extrabold mb-3">Profiter de l'application</h3>
            <p class="text-sm md:text-base mb-4">
              À la création de chaque nouvelle activité, une notification est envoyée aux utilisateurs par mail et dans l'application.
            </p>
            <button class="px-6 py-2 bg-white text-[#840B7F] font-semibold rounded-lg hover:bg-gray-200 transition">
              Télécharger
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Aucune logique nécessaire ici
</script>
