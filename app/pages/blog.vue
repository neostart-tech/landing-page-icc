<template>
  <div class="bg-white">

    <!-- HERO IMAGE -->
    <section class="relative h-[260px] w-full">
      <img
        src="/images/jeunes-amis-afro-americains-assis-dans-voiture.jpg"
        alt="Blog ICC"
        class="w-full h-full object-cover"
      />
    </section>

    <!-- ARTICLE PRINCIPAL -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- LEFT CONTENT -->
        <div class="lg:col-span-2">
          <h1 class="text-2xl md:text-3xl font-extrabold mb-4">
            Une nouvelle mise à jour <br />
            dans ICC Covoiturage
          </h1>

          <p class="text-sm text-gray-500 mb-6">
            Publié le mardi 10 décembre 2025
          </p>

          <img
            src="/images/m1.jpg"
            alt="Article image"
            class="w-full rounded-xl mb-6"
          />

          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <!-- RIGHT SIDEBAR -->
        <aside class="space-y-4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </aside>

      </div>
    </section>

    <!-- AUTRES ARTICLES -->
    <section class="py-20 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">

        <!-- TITLE + FILTER -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 class="text-2xl font-extrabold mb-4 md:mb-0">
            Autres articles
          </h2>

          <div class="flex gap-3">
            <button class="px-4 py-1.5 rounded-full bg-[#840B7F] text-white text-sm">
              Mise à jour
            </button>
            <button class="px-4 py-1.5 rounded-full border text-sm">
              Événement
            </button>
            <button class="px-4 py-1.5 rounded-full border text-sm">
              Annonce
            </button>
          </div>
        </div>

        <!-- ARTICLES GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="i in 6"
            :key="i"
            class="bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <img
              src="/images/m1.jpg"
              alt="Article"
              class="w-full h-48 object-cover"
            />

            <div class="p-5">
              <p class="text-xs text-gray-500 mb-2">
                MISE À JOUR
              </p>

              <h3 class="font-bold text-sm mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>

              <p class="text-xs text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p class="text-xs text-gray-400">
                Mardi 10 décembre 2025
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
