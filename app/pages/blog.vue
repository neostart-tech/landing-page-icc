<template>
  <Breadcrumb 
      :breadcrumb="breadcrumbItems" 
    />
  <div class="bg-white">
    <!-- ARTICLE -->
    <section class="max-w-7xl mx-auto px-5 lg:px-10 xl:px-14 py-16">
      <!-- HEADER -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
        <!-- LEFT -->
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Une nouvelle mise à jour <br />
            dans ICC Covoiturage
          </h1>

          <div class="flex items-center gap-3 mt-4">
            <span class="w-10 h-[1px] bg-gray-300"></span>
            <p class="text-sm text-gray-500">
              Publié le Mercredi 20 Octobre 2025
            </p>
          </div>
        </div>

        <!-- RIGHT -->
        <p class="text-black text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      <!-- IMAGE -->
      <div class="mb-12">
        <img
          src="/images/f.jpg"
          alt="Blog ICC Covoiturage"
          class="w-full h-[260px] md:h-[420px] object-cover rounded-2xl"
        />
      </div>

      <!-- CONTENT -->
      <div class="text-black text-sm leading-7 space-y-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>

        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>

        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </section>

    <!-- AUTRES ARTICLES -->
    <section class="py-20 px-5 lg:px-10 xl:px-14 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <!-- TITLE + FILTER -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 class="text-2xl font-extrabold mb-4 md:mb-0 text-black">
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
              src="/images/f.jpg"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

<script setup>
  import Breadcrumb from '~/components/Breadcrumb.vue';
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog' } // Pas de href = texte actif
]
</script>
