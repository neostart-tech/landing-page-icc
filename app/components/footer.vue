<template>
  <footer class="bg-[#6a0d5f] text-white">
    <!-- Section principale -->
    <div class="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 md:py-14 lg:py-16">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        <!-- Colonne 1 : Logo + réseaux + newsletter -->
        <div class="space-y-6 md:space-y-8">
          <!-- Logo + nom -->
          <div class="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo/logo-icc.jpg"
              alt="Impact Centre Chrétien Togo"
              class="h-10 sm:h-11 md:h-12 w-auto"
            />
            <div class="leading-tight">
              <p class="font-semibold text-white text-sm sm:text-base">Impact Centre</p>
              <p class="text-xs sm:text-sm text-white/80">
                chrétien | <span class="font-semibold">TOGO</span>
              </p>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="flex gap-3 sm:gap-4">
            <a
              href="#"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/facebook.png" alt="Facebook" class="w-full h-full object-cover" />
            </a>
            <a
              href="#"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/tiktok.png" alt="TikTok" class="w-full h-full object-cover" />
            </a>
            <a
              href="#"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/instagram.png" alt="Instagram" class="w-full h-full object-cover" />
            </a>
            <a
              href="#"
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/60 flex items-center justify-center hover:opacity-80 transition"
            >
              <img src="/icone/youtube.png" alt="YouTube" class="w-full h-full object-cover" />
            </a>
          </div>

          <!-- Newsletter -->
          <div class="space-y-3 md:space-y-4">
            <h3 class="text-xl sm:text-2xl font-bold">
              {{ $t('footer.newsletter.title') }}
            </h3>
            <p class="text-xs sm:text-sm text-white/80">
              {{ $t('footer.newsletter.subtitle') }}
            </p>

            <div class="flex w-full max-w-md">
              <input
                type="email"
                :placeholder="$t('footer.newsletter.email_placeholder')"
                class="flex-1 bg-white px-3 sm:px-4 py-3 sm:py-4 rounded-l-lg text-gray-700 text-sm focus:outline-none"
              />
              <button
                class="px-4 sm:px-6 py-3 sm:py-4 bg-[#7b1b6f] hover:bg-[#8d2a80] text-white font-medium rounded-r-lg transition"
              >
                ▶
              </button>
            </div>

            <label class="flex items-center gap-2 text-xs sm:text-sm text-white/80">
              <input type="checkbox" class="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-white" />
              {{ $t('footer.newsletter.accept_newsletter') }}
            </label>
          </div>
        </div>

        <!-- Colonne 2 : Navigation -->
        <div class="space-y-4 md:space-y-5 lg:pl-8 xl:pl-12">
          <h4 class="font-semibold text-base sm:text-lg">{{ $t('footer.navigation.title') }}</h4>
          <ul class="space-y-2.5 md:space-y-3 text-xs sm:text-sm opacity-90">
            <li><NuxtLink to="/" class="hover:text-white/70 transition-colors">{{ $t('footer.navigation.home') }}</NuxtLink></li>
            <li><NuxtLink to="/fonctionnalites" class="hover:text-white/70 transition-colors">{{ $t('footer.navigation.features') }}</NuxtLink></li>
            <li><NuxtLink to="/faq" class="hover:text-white/70 transition-colors">{{ $t('footer.navigation.faqs') }}</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white/70 transition-colors">{{ $t('footer.navigation.blogs') }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white/70 transition-colors">{{ $t('footer.navigation.contact') }}</NuxtLink></li>
            <li class="flex items-center gap-1 cursor-pointer hover:text-white/70 transition-colors">
              {{ $t('footer.navigation.languages') }}
              <svg
                class="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
        <div class="space-y-4 md:space-y-5 lg:pl-8 xl:pl-12">
          <h4 class="font-semibold text-base sm:text-lg">{{ $t('footer.useful_links.title') }}</h4>
          <ul class="space-y-2.5 md:space-y-3 text-xs sm:text-sm opacity-90">
            <li><NuxtLink to="/" class="hover:text-white/70 transition-colors">{{ $t('footer.useful_links.getting_started') }}</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white/70 transition-colors">{{ $t('footer.useful_links.terms') }}</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white/70 transition-colors">{{ $t('footer.useful_links.account_deletion') }}</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white/70 transition-colors">{{ $t('footer.useful_links.privacy') }}</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white/70 transition-colors">{{ $t('footer.useful_links.legal') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Colonne 4 : Notre application -->
        <div class="space-y-4 md:space-y-5 lg:pl-8 xl:pl-12">
          <h4 class="font-semibold text-base sm:text-lg">{{ $t('footer.our_app.title') }}</h4>
          <div class="space-y-2.5 md:space-y-3">
            <a
              href="#"
              class="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-white text-[#6a0d5f] rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="/icone/google-play.png"
                alt="Google Play"
                class="h-5 sm:h-6 w-auto"
              />
              <span class="text-xs sm:text-sm font-medium">
                {{ $t('download.play_store') }}
              </span>
            </a>

            <a
              href="#"
              class="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-white text-[#6a0d5f] rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="/icone/apple-store.png"
                alt="App Store"
                class="h-5 sm:h-6 w-auto"
              />
              <span class="text-xs sm:text-sm font-medium">
                {{ $t('download.app_store') }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bas de footer -->
    <div class="bg-[#5a0a50] py-3 md:py-4 text-center text-xs sm:text-sm opacity-80 px-4">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>
