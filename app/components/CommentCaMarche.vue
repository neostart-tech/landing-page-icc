<template>
  <section class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">

      <!-- TITRE PRINCIPAL -->
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4">
        Comment ça marche ?
      </h1>

      <!-- SOUS-TITRE -->
      <p class="text-base md:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Partagez vos trajets, vivez la communion, et rejoignez chaque culte sans souci, grâce au covoiturage solidaire d'Impact Centre Chrétien du Togo. Venez partager des moments de foi et de fraternité ! </p>

      <div class="flex justify-center mb-12">
        <button @click="openDownloadModal" class="px-5 py-2.5 bg-gradient-to-r from-[#840B7F] to-[#6E096A] text-white rounded-lg text-sm"> Télécharger </button>
      </div>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

        <!-- Bloc 1 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">Télécharger l'application</h3>
          <p class="text-sm leading-relaxed ">
            Disponibles actuellement sur App store et Play store, l'application est bilingue pour une expérience optimale où que vous soyez. 
          </p>
          <img src="/images/e.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

        <!-- Bloc 2 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">Créer votre compte</h3>
          <p class="text-sm leading-relaxed">
            Inscrivez-vous gratuitement et profitez de notre application sur tous vos appareils avec un seul compte.
          </p>
          <img src="/images/b.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

        <!-- Bloc 3 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">Certifier votre identité</h3>
          <p class="text-sm leading-relaxed">
            Inscrivez-vous gratuitement et profitez de notre application sur tous vos appareils avec un seul compte.
          </p>
          <img src="/images/c.png" alt="Illustration" class="w-75 h-75 mx-auto mb-4 object-contain" />
        </div>

        <!-- Bloc 4 -->
        <div class="bg-[#F5E4F1] text-black rounded-2xl p-6">
          <h3 class="text-lg font-extrabold mb-3">Profiter de l'application</h3>
          <p class="text-sm leading-relaxed">
            À la création de chaque nouvelle activité, une notification est envoyée aux utilisateurs par mail et dans l'application.
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
