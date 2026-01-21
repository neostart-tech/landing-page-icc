<template>
  <Breadcrumb :breadcrumb="breadcrumbItems" />

    <div class="bg-white">
      
    <section class="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32 py-16">
      <!-- HEADER -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
        <!-- LEFT -->
        <div>
          <h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
            Création et vérification <br />
            de compte
          </h1>
        </div>

        <!-- RIGHT -->
        <p class="text-black text-sm leading-relaxed">
          Créez votre compte en quelques minutes.
          Une vérification est ensuite effectuée pour garantir l’authenticité des membres.
        </p>
      </div>

      <!-- BLOC -->
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
  <!-- Bloc 1 -->
  <div class="bg-[#F5ECF5] rounded-2xl p-6">
    <img src="/icone/i1.png" alt="icone" class="w-20 h-20 mb-4" />

    <h3 class="text-lg font-extrabold text-gray-900 mb-2">
      Inscription
    </h3>

    <p class="text-sm text-gray-700 leading-relaxed">
        Lors de son inscription, l'utilisateur renseigne son église locale ainsi que sa famille
        d'impact ou son département. Ces informations permettent de l'associer à la bonne structure
        de l'église et de garantir un suivi cohérent de son profil. Pour sécuriser l'accès, le numéro
        de téléphone est validé par un code OTP envoyé par SMS et l'adresse email est confirmée via
        un lien de vérification. Dès l'inscription terminée, l'utilisateur peut consulter les
        activités, mais certaines fonctionnalités restent limitées tant qu'il n'a pas été reconnu
        par son église.
    </p>
  </div>

  <!-- Bloc 2 -->
  <div class="bg-[#F5ECF5] rounded-2xl p-6">
    <img src="/icone/i2.png" alt="icone" class="w25 h-20 mb-4" />

    <h3 class="text-lg font-extrabold text-gray-900 mb-2">
      Reconnaissance obligatoire
    </h3>

    <p class="text-sm text-gray-700 leading-relaxed">
        Avant de pouvoir proposer ou demander un covoiturage, le compte doit être reconnu comme
        appartenant réellement à un membre de l'église. Cette reconnaissance est effectuée par les
        pilotes, copilotes ou responsables de département, et peut également être assurée par un administrateur
        si nécessaire. Chaque responsable reçoit une notification l'invitant à vérifier et reconnaître
        les comptes en attente. Ce processus constitue une première barrière de sécurité, garantissant que seuls
        les membres authentifiés accèdent aux services complets de l'application.
    </p>
  </div>

  <!-- Bloc 3 -->
  <div class="bg-[#F5ECF5] rounded-2xl p-6">
    <img src="/icone/i3.png" alt="icone" class="w-20 h-20 mb-4" />

    <h3 class="text-lg font-extrabold text-gray-900 mb-2">
      Badge de reconnaissance
    </h3>

    <p class="text-sm text-gray-700 leading-relaxed">
        Une fois reconnu par sa structure locale, l'utilisateur voit apparaître un badge R sur son profil.
        Ce badge indique aux autres membres que son identité au sein de l'église a été confirmée.
        L'utilisateur reçoit également une notification l'informant qu'il peut désormais accéder à la certification
        de son compte, étape suivante pour renforcer encore la confiance au sein de la communauté.
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
        Certification des comptes
      </h2>
      <p class="text-sm text-gray-600 max-w-xl mb-10">
        Pour certifier son compte, l’utilisateur envoie :
      </p>

      <!-- GRID CONTENT -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <!-- 1. CNI -->
        <div class="bg-[#7C0A6D] rounded-xl p-6 text-white">
          <h4 class="font-bold mb-4">
            1. Carte Nationale d’Identité (CNI)
          </h4>

          <div class="bg-white/10 rounded-lg h-32 flex items-center justify-center text-sm">
            Photo d’une CNI recto verso
          </div>
        </div>

        <!-- 2. PHOTO PROFIL -->
        <div class="bg-gray-100 rounded-xl p-6 relative">
          <h4 class="font-bold text-gray-900 mb-6">
            2. Photo de profil
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
            3. Badge de certification
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            Les administrateurs vérifient la conformité des informations et
            valident ou rejettent la certification. Une fois certifié,
            un badge apparaît sur le profil. Cela renforce la confiance
            et facilite la traçabilité en cas d’incident.
          </p>
        </div>

      </div>
    </div>

    <!-- ================= RIGHT SIDE ================= -->
    <div class="bg-[#3B0539] rounded-3xl p-10 flex flex-col justify-between">
      <h3 class="text-white text-2xl font-extrabold leading-snug">
        Votre sécurité, notre<br />priorité !
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
        Parc automobile & Validation des véhicules
      </h1>

      <!-- SOUS-TITRE -->
      <p class="text-base md:text-lg text-black max-w-2xl mx-auto mb-16 text-center">
        Les administrateurs valident chaque pièce et notifient l’utilisateur. Des rappels sont envoyés avant l’expiration. Un véhicule ne peut plus être utilisé pour le covoiturage si ses documents sont expirés. Pour proposer un covoiturage, l’utilisateur doit enregistrer son véhicule avec :
      </p>

      <!-- BLOCS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Bloc 1 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">Carte grise</h3>
          <p class="text-sm leading-relaxed">
            Document officiel d’identification du véhicule, obligatoire pour validation.
          </p>
        </div>

        <!-- Bloc 2 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">Assurance</h3>
          <p class="text-sm leading-relaxed">
            Couverture en cas d’incident (obligatoire pour voitures et bus).
          </p>
        </div>

        <!-- Bloc 3 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">Visite technique</h3>
          <p class="text-sm leading-relaxed">
            Contrôle de sécurité et d’état du véhicule (obligatoire pour voitures/bus).
          </p>
        </div>

        <!-- Bloc 4 -->
        <div class="bg-[#F5F5F5] text-black rounded-2xl p-6">
          <img src="/icone/i4.png" alt="Illustration" class="w-12 h-12 mb-4 object-contain"/>
          <h3 class="text-lg font-extrabold mb-3">TVM</h3>
          <p class="text-sm leading-relaxed">
            Taxe à jour (non exigée pour motos et tricycles).
          </p>
        </div>

      </div>

    </div>
    </section>



  <section class="bg-[#3B0539] h-[400px] px-8 lg:px-16 xl:px-24 2xl:px-32 mb-24 overflow-hidden">

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-full gap-10">

      <!-- GAUCHE : Texte + boutons -->
      <div class="flex flex-col justify-center text-white space-y-16">
          <h2 class="text-2xl md:text-3xl font-extrabold">Une nouvelle façon de se rendre à l’église, ensemble </h2>

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
            Proposer un covoiturage
          </h1>
        </div>

        <!-- RIGHT -->
        <p class="text-black text-sm leading-relaxed">
          Proposez un trajet et partagez vos places disponibles avec d’autres utilisateurs.
          Facilitez les déplacements tout en réduisant les coûts et l’empreinte carbone.
        </p>
      </div>

      <!-- BLOC -->
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
    <!-- Bloc 1 -->
    <div class="border border-black rounded-2xl p-6 bg-transparent">
      <img src="/icone/a1.png" alt="icone" class="w-12 h-12 mb-4 mx-auto" />

      <h3 class="text-lg font-extrabold text-black mb-2 text-center">
        Choisissez votre véhicule
      </h3>

      <p class="text-sm text-black leading-relaxed text-center">
          Choisissez l’un des véhicules que vous avez enregistrés dans votre parc automobile. Chaque véhicule doit être validé au préalable pour assurer la conformité et la sécurité du trajet.
      </p>
    </div>

  <!-- Bloc 2 -->
      <div class="border border-black rounded-2xl p-6 bg-transparent">
    <img src="/icone/a2.png" alt="icone" class="w-12 h-12 mb-4 mx-auto" />

    <h3 class="text-lg font-extrabold text-black mb-2 text-center">
      Définissez votre offre
    </h3>

    <p class="text-sm text-black leading-relaxed text-center">
      Indiquez le nombre de places disponibles et choisissez le type de trajet que vous souhaitez proposer :
      aller simple, retour ou aller–retour. Ces informations seront visibles par les membres concernés par l’activité.
    </p>
    </div>


  <!-- Bloc 3 -->
    <div class="border border-black rounded-2xl p-6 bg-transparent">
      <img src="/icone/a3.png" alt="icone" class="w-12 h-12 mb-4 mx-auto" />

      <h3 class="text-lg font-extrabold text-black mb-2 text-center">
        Précisez votre itinéraire
      </h3>

      <p class="text-sm text-black leading-relaxed text-center">
          Entrez votre point de départ et, si nécessaire, votre point de chute pour le retour. Pour les trajets retour, l’adresse de l’activité est automatiquement définie comme point de départ par défaut.
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
            Demander un covoiturage
          </h2>

          <ul class="space-y-4 text-black">
            <li>
              <span class="font-bold text-lg">
                <span class="text-[#8532A6]">↗</span> Demander un covoiturage
              </span>
              <p class="pl-5 mt-1 text-sm text-black">Trouvez facilement un trajet pour vous rendre à l’église. Il vous suffit de créer votre demande et de laisser la communauté s’organiser pour vous accueillir dans un véhicule proche. Voyagez en toute sécurité et dans la bonne humeur. </p>
            </li>

            <li>
              <span class="font-bold text-lg">
                <span class="text-[#8532A6]">↗</span> Le conducteur répond à votre demande
              </span>
              <p class="pl-5 mt-1 text-sm text-black">Un membre de la communauté accepte votre demande et vous confirme votre place. Vous êtes informé en temps réel pour que votre trajet se déroule sans stress et dans un esprit convivial. </p>
            </li>

            <li>
              <span class="font-bold text-lg">
                <span class="text-[#8532A6]">↗</span> Discutez et évaluez votre trajet
              </span>
              <p class="pl-5 mt-1 text-sm text-black">Communiquez facilement avec votre conducteur ou vos passagers avant et après le trajet. Partagez vos impressions et laissez un avis pour renforcer la confiance et la solidarité au sein de votre communauté. </p>
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
        Géolocalisation & Map
      </h2>

      <ul class="space-y-6 text-white">
        <li>
          <span class="font-bold text-lg">
            <span class="text-pink-400">↗</span> Visualisez vos trajets en temps réel
          </span>
          <p class="pl-5 mt-1 text-sm text-white">
            Consultez l'itinéraire exact vers le lieu de l'activité et suivez les trajets proposés directement sur la carte. Chaque adresse est affichée avec précision pour faciliter votre déplacement.
          </p>
        </li>

        <li>
          <span class="font-bold text-lg">
            <span class="text-pink-400">↗</span> Suivez votre conducteur
          </span>
          <p class="pl-5 mt-1 text-sm text-white">
            Lorsqu'un conducteur accepte votre demande, vous pouvez suivre sa position sur la carte en temps réel. L'application affiche également le temps d'attente estimé jusqu'au point de rendez-vous.
          </p>
        </li>

        <li>
          <span class="font-bold text-lg">
            <span class="text-pink-400">↗</span> Trouvez les trajets les plus proches
          </span>
          <p class="pl-5 mt-1 text-sm text-white">
            Les différentes offres de covoiturage sont automatiquement triées selon la distance entre vous et le conducteur. Cela vous permet de choisir le trajet le plus pratique et le plus rapide.
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
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonctionnalités' }
]
</script>
