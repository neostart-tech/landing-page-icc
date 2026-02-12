<template>
  <div class="bg-white">
    <Breadcrumb :breadcrumb="breadcrumbItems" />
    
    <!-- Composant actualites -->
    <actualites />
  </div>
</template>

<script setup>
import Breadcrumb from '~/components/Breadcrumb.vue'
import actualites from '~/components/actualites.vue'

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog' }
]
</script>
