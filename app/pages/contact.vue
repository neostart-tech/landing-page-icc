<template>
  <Breadcrumb :breadcrumb="breadcrumbItems" />

  <div class="bg-white">

    <!-- CONTACT SECTION -->
    <section class="py-18 px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT : CONTACT INFOS -->
        <div class="flex flex-col justify-start">
          <h2 class="text-2xl text-black font-extrabold mb-5">
            Contactez-nous !
          </h2>

          <p class="text-black mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul class="space-y-6 text-black">
            <li class="flex items-center gap-4">
              <img src="/icone/a.png" alt="Téléphone" class="w-12 h-12" />
              <span>(+228) 93 33 22 33</span>
            </li>
            <li class="flex items-center gap-4">
              <img src="/icone/l.png" alt="Adresse" class="w-12 h-12" />
              <span>Hountigomé, Lomé</span>
            </li>
            <li class="flex items-center gap-4">
              <img src="/icone/m.png" alt="Email" class="w-12 h-12" />
              <span>contact@icclome.com</span>
            </li>
          </ul>
        </div>

        <!-- RIGHT : FORM -->
        <form class="bg-white border rounded-xl p-10 shadow-sm flex flex-col justify-start">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Nom"
              class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Numéro de téléphone"
              class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
            />
            <input
              type="text"
              placeholder="Objet du message"
              class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            class="w-full border rounded-lg px-4 py-3 text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
          ></textarea>

          <button
            type="submit"
            class="w-full bg-[#840B7F] text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Envoyer
          </button>
        </form>

      </div>
    </section>

    <!-- MAP SECTION -->
    <section class="w-full">
      <iframe
        class="w-full h-[320px]"
        src="https://www.google.com/maps?q=Hountigome%20Togo&output=embed"
        loading="lazy"
      ></iframe>
    </section>

    <!-- FAQ SECTION -->
    <section class="py-20 px-8 lg:px-16 xl:px-24 2xl:px-32 bg-gray-50">
    </section>

  </div>
</template>

<script setup>
import Breadcrumb from '~/components/Breadcrumb.vue';
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Contact' } // Pas de href = texte actif
]
</script>
