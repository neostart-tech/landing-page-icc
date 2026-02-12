<template>
  <Breadcrumb :breadcrumb="breadcrumbItems" />

    <div class="bg-white">
      
    <section class="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 py-16">
      <!-- HEADER -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
        <!-- LEFT -->
        <div>
          <h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
            {{ $t('features_page.account_creation.title') }}
          </h1>
        </div>

        <!-- RIGHT -->
        <p class="text-black text-sm leading-relaxed">
          {{ $t('features_page.account_creation.description') }}
        </p>
      </div>

      <!-- BLOC -->
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
  <!-- Bloc 1 -->
  <div class="bg-[#F5ECF5] rounded-2xl p-6">
    <img src="/icone/i1.png" alt="icone" class="w-20 h-20 mb-4" />

    <h3 class="text-lg font-extrabold text-gray-900 mb-2">
      {{ $t('features_page.account_creation.registration.title') }}
    </h3>

    <p class="text-sm text-gray-700 leading-relaxed">
        {{ $t('features_page.account_creation.registration.description') }}
    </p>
  </div>

  <!-- Bloc 2 -->
  <div class="bg-[#F5ECF5] rounded-2xl p-6">
    <img src="/icone/i2.png" alt="icone" class="w25 h-20 mb-4" />

    <h3 class="text-lg font-extrabold text-gray-900 mb-2">
      {{ $t('features_page.account_creation.recognition.title') }}
    </h3>

    <p class="text-sm text-gray-700 leading-relaxed">
        {{ $t('features_page.account_creation.recognition.description') }}
    </p>
  </div>

  <!-- Bloc 3 -->
  <div class="bg-[#F5ECF5] rounded-2xl p-6">
    <img src="/icone/i3.png" alt="icone" class="w-20 h-20 mb-4" />

    <h3 class="text-lg font-extrabold text-gray-900 mb-2">
      {{ $t('features_page.account_creation.badge.title') }}
    </h3>

    <p class="text-sm text-gray-700 leading-relaxed">
        {{ $t('features_page.account_creation.badge.description') }}
    </p>
  </div>

</div>

    </section>

    <!-- Certification des comptes -->

<section class="bg-white py-20 px-8 lg:px-16 xl:px-24 2xl:px-32">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 items-stretch">

    <!-- ================= LEFT SIDE ================= -->
    <div class="lg:col-span-2">

      <!-- HEADER -->
      <h2 class="text-3xl font-extrabold text-gray-900 mb-3">
        {{ $t('features_page.certification.title') }}
      </h2>
      <p class="text-sm text-gray-600 max-w-xl mb-10">
        {{ $t('features_page.certification.description') }}
      </p>

      <!-- GRID CONTENT -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <!-- 1. CNI -->
        <div class="bg-[#7C0A6D] rounded-xl p-6 text-white">
          <h4 class="font-bold mb-4">
            1. {{ $t('features_page.certification.cni') }}
          </h4>

          <div class="bg-white/10 rounded-lg h-32 flex items-center justify-center text-sm">
            {{ $t('features_page.certification.cni_description') }}
          </div>
        </div>

        <!-- 2. PHOTO PROFIL -->
        <div class="bg-gray-100 rounded-xl p-6 relative">
          <h4 class="font-bold text-gray-900 mb-6">
            2. {{ $t('features_page.certification.photo') }}
          </h4>

          <div class="flex items-center gap-6">
            <!-- avatar -->
            <img
              src="/images/picture.jpg"
              alt="Photo profil"
              class="w-16 h-16 rounded-full object-cover"
            />

            <!-- arrow -->
            <svg
              class="w-10 h-10 text-[#7C0A6D]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>

            <!-- check -->
            <div class="w-10 h-10 bg-[#7C0A6D] rounded-full flex items-center justify-center text-white">
              ✓
            </div>
          </div>
        </div>

        <!-- 3. BADGE (FULL WIDTH) -->
        <div class="sm:col-span-2 bg-gray-100 rounded-xl p-6">
          <h4 class="font-bold text-gray-900 mb-2">
            3. {{ $t('features_page.certification.badge_title') }}
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ $t('features_page.certification.badge_description') }}
          </p>
        </div>

      </div>
    </div>

    <!-- ================= RIGHT SIDE ================= -->
    <div class="bg-[#3B0539] rounded-3xl p-10 flex flex-col justify-between">
      <h3 class="text-white text-2xl font-extrabold leading-snug">
        {{ $t('features_page.certification.security_title') }}
      </h3>

      <img
        src="/images/t.png"
        alt="Application mobile"
        class="w-full max-w-xs mx-auto mt-10"
      />
    </div>

  </div>
</section>

    
    </div>

    <!-- Parc automobile & Validation des vehicules  -->
    <section class="py-20 px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white">
    <div class="max-w-6xl mx-auto">

      <!-- TITRE PRINCIPAL -->
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-4">
        {{ $t('features_page.vehicle_park.title') }}
      </h1>

      <!-- SOUS-TITRE -->
      <p class="text-base md:text-lg text-black max-w-2xl mx-auto mb-16 text-center">
        {{ $t('features_page.vehicle_park.description') }}
      </p>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Bloc 1 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">{{ $t('features_page.vehicle_park.carte_grise.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('features_page.vehicle_park.carte_grise.description') }}
          </p>
        </div>

        <!-- Bloc 2 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">{{ $t('features_page.vehicle_park.assurance.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('features_page.vehicle_park.assurance.description') }}
          </p>
        </div>

        <!-- Bloc 3 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">{{ $t('features_page.vehicle_park.visite_technique.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('features_page.vehicle_park.visite_technique.description') }}
          </p>
        </div>

        <!-- Bloc 4 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">{{ $t('features_page.vehicle_park.tvm.title') }}</h3>
          <p class="text-sm leading-relaxed">
            {{ $t('features_page.vehicle_park.tvm.description') }}
          </p>
        </div>

      </div>

    </div>
    </section>



  <section class="bg-[#3B0539] h-[400px] px-8 lg:px-16 xl:px-24 2xl:px-32 mb-24 overflow-hidden">

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-full gap-10">

      <!-- GAUCHE : Texte + boutons -->
      <div class="flex flex-col justify-center text-white space-y-16">
          <h2 class="text-2xl md:text-3xl font-extrabold">{{ $t('features_page.new_way.title') }}</h2>

        <div class="flex flex-col sm:flex-row gap-3 mt-2">
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
                {{ $t('download.play_store') }}
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
                {{ $t('download.app_store') }}
              </span>
            </a>
        </div>
      </div>

      <!-- DROITE : Image qui prend tout le côté -->
      <div class="flex items-center justify-center h-full w-full overflow-hidden">
        <img src="/images/t.png" alt="Application Mobile" class="max-h-[320px] lg:max-h-[400px] w-auto object-contain" />
      </div>

    </div>
  </section>

  <!-- PROPOSER UN COVOITURAGE -->
    <section class="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 py-16">
      <!-- HEADER -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
        <!-- LEFT -->
        <div>
          <h1 class="text-xl md:text-2xl lg:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {{ $t('features_page.offer_ride.title') }}
          </h1>
        </div>

        <!-- RIGHT -->
        <p class="text-black text-sm leading-relaxed">
          {{ $t('features_page.offer_ride.description') }}
        </p>
      </div>

      <!-- BLOC -->
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
    <!-- Bloc 1 -->
    <div class="border border-black rounded-2xl p-6 bg-transparent">
      <img src="/icone/a1.png" alt="icone" class="w-12 h-12 mb-4 mx-auto" />

      <h3 class="text-lg font-extrabold text-black mb-2 text-center">
        {{ $t('features_page.offer_ride.choose_vehicle.title') }}
      </h3>

      <p class="text-sm text-black leading-relaxed text-center">
          {{ $t('features_page.offer_ride.choose_vehicle.description') }}
      </p>
    </div>

  <!-- Bloc 2 -->
      <div class="border border-black rounded-2xl p-6 bg-transparent">
    <img src="/icone/a2.png" alt="icone" class="w-12 h-12 mb-4 mx-auto" />

    <h3 class="text-lg font-extrabold text-black mb-2 text-center">
      {{ $t('features_page.offer_ride.define_offer.title') }}
    </h3>

    <p class="text-sm text-black leading-relaxed text-center">
      {{ $t('features_page.offer_ride.define_offer.description') }}
    </p>
    </div>


  <!-- Bloc 3 -->
    <div class="border border-black rounded-2xl p-6 bg-transparent">
      <img src="/icone/a3.png" alt="icone" class="w-12 h-12 mb-4 mx-auto" />

      <h3 class="text-lg font-extrabold text-black mb-2 text-center">
        {{ $t('features_page.offer_ride.specify_route.title') }}
      </h3>

      <p class="text-sm text-black leading-relaxed text-center">
          {{ $t('features_page.offer_ride.specify_route.description') }}
      </p>
    </div>

  </div>

    </section>

    <!-- ================= DEMANDER UN COVOITURAGE ================= -->
    <section class="bg-[#F6EAF5] py-24">
      <div class="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- IMAGE -->
        <img
          src="/images/t2.png"
          class="w-full max-w-md mx-auto"
        />

        <!-- TEXT -->
        <div>
          <h2 class="text-3xl font-extrabold mb-6 text-black">
            {{ $t('features_page.request_ride.title') }}
          </h2>

          <ul class="space-y-4 text-black">
            <li>
              <span class="font-bold text-lg">
                <span class="text-[#8532A6]">↗</span> {{ $t('features_page.request_ride.request.title') }}
              </span>
              <p class="pl-5 mt-1 text-sm text-black">{{ $t('features_page.request_ride.request.description') }}</p>
            </li>

            <li>
              <span class="font-bold text-lg">
                <span class="text-[#8532A6]">↗</span> {{ $t('features_page.request_ride.driver_response.title') }}
              </span>
              <p class="pl-5 mt-1 text-sm text-black">{{ $t('features_page.request_ride.driver_response.description') }}</p>
            </li>

            <li>
              <span class="font-bold text-lg">
                <span class="text-[#8532A6]">↗</span> {{ $t('features_page.request_ride.discuss_evaluate.title') }}
              </span>
              <p class="pl-5 mt-1 text-sm text-black">{{ $t('features_page.request_ride.discuss_evaluate.description') }}</p>
            </li>

          </ul>
        </div>

      </div>
    </section>

    <!-- ================= MAP SECTION ================= -->
    <section class="bg-[#3B0539] py-24 text-white">
    <div class="mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    <!-- LEFT : TEXT -->
    <div class="pt-4">
      <h2 class="text-3xl font-extrabold mb-8">
        {{ $t('features_page.geolocation.title') }}
      </h2>

      <ul class="space-y-6 text-white">
        <li>
          <span class="font-bold text-lg">
            <span class="text-pink-400">↗</span> {{ $t('features_page.geolocation.visualize.title') }}
          </span>
          <p class="pl-5 mt-1 text-sm text-white">
            {{ $t('features_page.geolocation.visualize.description') }}
          </p>
        </li>

        <li>
          <span class="font-bold text-lg">
            <span class="text-pink-400">↗</span> {{ $t('features_page.geolocation.follow_driver.title') }}
          </span>
          <p class="pl-5 mt-1 text-sm text-white">
            {{ $t('features_page.geolocation.follow_driver.description') }}
          </p>
        </li>

        <li>
          <span class="font-bold text-lg">
            <span class="text-pink-400">↗</span> {{ $t('features_page.geolocation.find_closest.title') }}
          </span>
          <p class="pl-5 mt-1 text-sm text-white">
            {{ $t('features_page.geolocation.find_closest.description') }}
          </p>
        </li>
      </ul>
    </div>

    <!-- RIGHT : IMAGE -->
    <div class="flex justify-center items-start">
      <img src="/images/m1.png" alt="Map illustration" class="w-full max-w-md h-auto object-cover rounded-2xl" />
    </div>

  </div>
  </section>

</template>

<script setup>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const breadcrumbItems = [
  { label: t('breadcrumb.home'), href: '/' },
  { label: t('nav.features') }
]
</script>
