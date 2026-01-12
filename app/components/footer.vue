<template>
  <footer class="bg-[#6a0d5f] text-white">
    <!-- Section principale -->
    <div class="w-full px-8 lg:px-16 xl:px-24 2xl:px-32 py-16">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <!-- Colonne 1 : Logo + réseaux + newsletter -->
        <div class="space-y-8">
          <!-- Logo + nom -->
          <div class="flex items-center gap-3">
            <img
              src="/logo/logo-icc.jpg"
              alt="Impact Centre Chrétien Togo"
              class="h-12 w-auto"
            />
            <div class="leading-tight">
              <p class="font-semibold text-white">Impact Centre</p>
              <p class="text-sm text-white/80">
                chrétien | <span class="font-semibold">TOGO</span>
              </p>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="flex gap-4">
            <a
              href="#"
              class="w-9 h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/facebook.png" alt="Facebook" class="w-full h-full object-cover" />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/tiktok.png" alt="TikTok" class="w-full h-full object-cover" />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/instagram.png" alt="Instagram" class="w-full h-full object-cover" />
            </a>
            <a
              href="#"
              class="w-9 h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/youtube.png" alt="YouTube" class="w-full h-full object-cover" />
            </a>
          </div>

          <!-- Newsletter -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">
              Abonnez-vous à la newsletter
            </h3>
            <p class="text-sm text-white/80">
              Soyez le premier à recevoir tous les derniers articles
            </p>

            <div class="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Votre email"
                class="flex-1 bg-white px-4 py-4 rounded-l-lg text-gray-700 focus:outline-none"
              />
              <button
                class="px-6 py-4 bg-[#7b1b6f] hover:bg-[#8d2a80] text-white font-medium rounded-r-lg transition"
              >
                ▶
              </button>
            </div>

            <label class="flex items-center gap-2 text-sm text-white/80">
              <input type="checkbox" class="w-4 h-4 accent-white" />
              J’accepte m’abonner à la News Letter
            </label>
          </div>
        </div>

        <!-- Colonne 2 : Navigation -->
        <div class="space-y-5 lg:pl-12 xl:pl-16">
          <h4 class="font-semibold">Navigation</h4>
          <ul class="space-y-3 text-sm opacity-90">
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/">Détails de fonctionnalités</NuxtLink></li>
            <li><NuxtLink to="/">FAQs</NuxtLink></li>
            <li><NuxtLink to="/">Blogs</NuxtLink></li>
            <li><NuxtLink to="/">Contact</NuxtLink></li>
            <li class="flex items-center gap-1 cursor-pointer">
              Langues
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Liens utiles -->
        <div class="space-y-5 lg:pl-12 xl:pl-16">
          <h4 class="font-semibold">Liens utiles</h4>
          <ul class="space-y-3 text-sm opacity-90">
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/">Prise en main</NuxtLink></li>
            <li><NuxtLink to="/">Conditions Générales d’Utilisation</NuxtLink></li>
            <li><NuxtLink to="/">Politique de suppression de compte</NuxtLink></li>
            <li><NuxtLink to="/">Politique de confidentialité</NuxtLink></li>
            <li><NuxtLink to="/">Mentions Légales</NuxtLink></li>
          </ul>
        </div>

        <!-- Colonne 4 : Notre application -->
        <div class="space-y-5 lg:pl-12 xl:pl-16">
          <h4 class="font-semibold">Notre application</h4>
          <div class="space-y-3">
            <a
              href="#"
              class="flex items-center gap-3 px-4 py-3 bg-white text-[#6a0d5f] rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="/icone/google-play.png"
                alt="Google Play"
                class="h-6 w-auto"
              />
              <span class="text-sm font-medium">
                Télécharger sur Play Store
              </span>
            </a>

            <a
              href="#"
              class="flex items-center gap-3 px-4 py-3 bg-white text-[#6a0d5f] rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="/icone/apple-store.png"
                alt="App Store"
                class="h-6 w-auto"
              />
              <span class="text-sm font-medium">
                Disponible sur App Store
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bas de footer -->
    <div class="bg-[#5a0a50] py-4 text-center text-sm opacity-80">
      © Copyrights, ICC – TOGO, 2025. Tous droits réservés.
      Développé par <span class="font-medium">Neo Start Technology</span>
    </div>
  </footer>
</template>
