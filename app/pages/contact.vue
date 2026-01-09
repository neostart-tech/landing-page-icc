<template>
  <div class="bg-white">
    <!-- HERO IMAGE -->
    <section class="relative h-[260px] w-full">
      <img
        src="/images/jeunes-amis-afro-americains-assis-dans-voiture.jpg"
        alt="Contact"
        class="w-full h-full object-cover"
      />
    </section>

    <!-- CONTACT SECTION -->
    <section class="py-18 px-5 lg:px-10 xl:px-14">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- LEFT : CONTACT INFOS -->
        <div class="flex flex-col justify-start">
          <h2 class="text-2xl text-black font-extrabold mb-5">
            Contactez-nous!
          </h2>

          <p class="text-black mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul class="space-y-6 text-black">
            <li class="flex items-center gap-4">
              <img src="/icone/a.png" alt="Téléphone" class="w-12 h-12" />
              <span>+228 93 00 00 00</span>
            </li>
            <li class="flex items-center gap-4">
              <img src="/icone/l.png" alt="Adresse" class="w-12 h-12" />
              <span>Hountigomé, Lomé</span>
            </li>
            <li class="flex items-center gap-4">
              <img src="/icone/m.png" alt="Email" class="w-12 h-12" />
              <span>contact@icc-togo.org</span>
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
    <section class="py-20 px-5 lg:px-10 xl:px-14 bg-gray-50">
      <div class="max-w-7xl mx-auto flex flex-col gap-12">
        <!-- TOP -->
        <div class="flex flex-col lg:flex-row items-start justify-between gap-12">
          <!-- LEFT -->
          <div class="lg:w-1/2">
            <h2 class="text-2xl font-extrabold mb-4">
              Trouvez réponse <br />
              à vos questions ici
            </h2>
          </div>

          <!-- RIGHT -->
          <div class="lg:w-1/2 flex flex-col">
            <p class="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="relative w-64">
              <input
                type="text"
                placeholder="Rechercher une question"
                class="w-full border rounded-lg pr-10 pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
              />
              <svg
                class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- FAQ CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-[#840B7F] text-white p-6 rounded-xl">
            <h3 class="font-bold mb-3">
              Lorem ipsum dolor sit amet?
            </h3>
            <p class="text-sm opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div
            v-for="i in 5"
            :key="i"
            class="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 class="font-bold mb-3">
              Lorem ipsum dolor sit amet?
            </h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
