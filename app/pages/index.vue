<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-5xl p-8">

      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">
          📚 Bibliothèque en ligne
        </h1>
        <span class="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
          Connecté
        </span>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-indigo-50 p-6 rounded-xl hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-indigo-700">📖 Livres</h2>
          <p class="text-gray-600 mt-2">Consulter tous les livres disponibles</p>
          <NuxtLink to="/livres" class="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Voir
          </NuxtLink>
        </div>

        <div class="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-purple-700">➕ Ajouter</h2>
          <p class="text-gray-600 mt-2">Ajouter un nouveau livre</p>
          <NuxtLink to="/ajouter" class="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Ajouter
          </NuxtLink>
        </div>

        <div class="bg-pink-50 p-6 rounded-xl hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-pink-700">👤 Profil</h2>
          <p class="text-gray-600 mt-2">Gérer votre compte</p>
          <NuxtLink to="/profil" class="inline-block mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
            Ouvrir
          </NuxtLink>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center text-gray-400 text-sm mt-10">
        © 2026 — Nuxt 3 + Tailwind CSS
      </div>

    </div>
  </div>
</template>
