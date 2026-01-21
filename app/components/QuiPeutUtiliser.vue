<template>
  <section id="quipeuutiliser" class="relative py-16 lg:py-20 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="/images/a.jpg"
        alt="Background image"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#522650]/75 backdrop-blur-[2px]"></div>
    </div>

    <!-- Décors -->
    <div class="absolute top-8 right-8 w-24 h-24 border border-white/15 rounded-full animate-pulse-slow"></div>
    <div class="absolute bottom-12 left-8 w-20 h-20 border border-white/10 rounded-lg rotate-45 animate-float-medium"></div>
    <div class="absolute top-1/2 left-1/4 w-12 h-12 border border-white/5 rounded-full animate-float-slow"></div>

    <div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
      <!-- Titre -->
      <div class="text-center mb-12 lg:mb-16 animate-slide-up">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-gray-900 mb-4">
          Alors, <span class="text-white">Qui peut l'utiliser ?</span>
        </h1>

        <p class="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Pour tous ceux qui servent et participent aux activités de l'église.
        </p>
      </div>

      <!-- CARTES -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cards-section">
        
        <!-- Bloc 1 -->
        <div class="valeur-card animate-card-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10">
          <img src="/images/valid-vector-icon.png" alt="icon" class="w-10 h-10 mb-4 mx-auto" />
          <h3 class="text-lg font-semibold mb-2">Les fidèles</h3>
          <p class="text-sm text-white/80 leading-relaxed">
            Tous les membres des églises ICC au Togo
          </p>
        </div>

        <!-- Bloc 2 -->
        <div class="valeur-card animate-card-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10">
          <img src="/images/valid-vector-icon.png" alt="icon" class="w-10 h-10 mb-4 mx-auto" />
          <h3 class="text-lg font-semibold mb-2">Les S.T.A.R</h3>
          <p class="text-sm text-white/80 leading-relaxed">
            Les serviteurs et servantes des départements des églises ICC
          </p>
        </div>

        <!-- Bloc 3 -->
        <div class="valeur-card animate-card-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10">
          <img src="/images/valid-vector-icon.png" alt="icon" class="w-10 h-10 mb-4 mx-auto" />
          <h3 class="text-lg font-semibold mb-2">Famille d'impact</h3>
          <p class="text-sm text-white/80 leading-relaxed">
            Les responsables dans les églises ICC (Pasteurs, Assistants Pasteurs)
          </p>
        </div>

        <!-- Bloc 4 -->
        <div class="valeur-card animate-fade-in bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10">
          <img src="/images/valid-vector-icon.png"  alt="icon" class="w-10 h-10 mb-4 mx-auto"  />
          <h3 class="text-lg font-semibold mb-2">Les Bergers</h3>
          <p class="text-sm text-white/80 leading-relaxed">
            Les responsables dans les églises ICC (Pasteurs, Assistants Pasteurs)
          </p>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
// Aucune logique particulière nécessaire
</script>

<style scoped>

@keyframes float-slow {
    0%, 100% { 
        transform: translateY(0px) translateX(0px) rotate(0deg); 
    }
    33% { 
        transform: translateY(-15px) translateX(8px) rotate(120deg); 
    }
    66% { 
        transform: translateY(8px) translateX(-12px) rotate(240deg); 
    }
}

@keyframes float-medium {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
    }
    50% { 
        transform: translateY(-12px) rotate(180deg); 
    }
}

.animate-float-slow { 
    animation: float-slow 15s ease-in-out infinite; 
}

.animate-float-medium { 
    animation: float-medium 12s ease-in-out infinite; 
}

/* Animations d'apparition */
.animate-slide-up {
    animation: slideUp 1s ease-out;
}

.animate-card-1 {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-card-2 {
    animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-card-3 {
    animation: slideUp 0.8s ease-out 0.6s both;
}

.animate-fade-in {
    animation: fadeIn 1s ease-out 1s both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Pulse animation subtile */
.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
    0%, 100% {
        opacity: 0.2;
        transform: scale(1);
    }
    50% {
        opacity: 0.4;
        transform: scale(1.05);
    }
}

/* CORRECTION RESPONSIVE - GARANTIR 3 SUR MÊME LIGNE OU 1 PAR LIGNE */

/* Grille des valeurs - Version desktop : 3 colonnes */
.valeurs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: stretch;
}

/* Version tablette large : 3 colonnes réduites */
@media (max-width: 1280px) {
    .valeurs-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
    }
    
    .container {
        max-width: 1000px;
    }
}

/* Version tablette : 1 colonne pour éviter tout problème de layout */
@media (max-width: 1024px) {
    .valeurs-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        max-width: 500px;
        margin: 0 auto;
    }
    
    /* Sur tablette, les cartes occupent toute la largeur */
    .valeur-card {
        width: 100%;
    }
}

/* Version mobile */
@media (max-width: 768px) {
    .valeurs-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        max-width: 100%;
    }
    
    .text-3xl {
        font-size: 1.875rem;
    }
    
    .text-5xl {
        font-size: 2.5rem;
    }
    
    .p-6 {
        padding: 1.25rem;
    }
    
    .mb-12 {
        margin-bottom: 3rem;
    }
    
    /* Assurer que les cartes prennent toute la largeur sur mobile */
    .valeur-card {
        width: 100%;
        margin: 0 auto;
    }
}

/* Version petit mobile */
@media (max-width: 640px) {
    .valeurs-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .text-3xl {
        font-size: 1.75rem;
    }
    
    .text-5xl {
        font-size: 2.25rem;
    }
    
    .py-16 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    
    .mb-16 {
        margin-bottom: 4rem;
    }
    
    .p-6 {
        padding: 1rem;
    }
    
    .gap-6 {
        gap: 1rem;
    }
    
    /* Optimisations pour très petits écrans */
    .container {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
}

/* Garantir l'alignement parfait des cartes */
.valeur-card {
    display: flex;
    flex-direction: column;
}

/* S'assurer que toutes les cartes ont la même hauteur */
.valeur-card > div {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.valeur-card .relative.z-10 {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Réduction des animations pour accessibilité */
@media (prefers-reduced-motion: reduce) {
    .animate-float-slow,
    .animate-float-medium,
    .animate-slide-up,
    .animate-card-1,
    .animate-card-2,
    .animate-card-3,
    .animate-fade-in,
    .animate-pulse-slow {
        animation: none !important;
    }
}
</style>