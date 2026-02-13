<template>
  <div class="bg-white">
    <BreadcrumbNav :breadcrumb="breadcrumbItems" />

    <!-- Composant actualites -->
    <ActualitesSection />
  </div>
</template>

<script setup>
import BreadcrumbNav from '~/components/BreadcrumbNav.vue'
import ActualitesSection from '~/components/ActualitesSection.vue'

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog' }
]
</script>
