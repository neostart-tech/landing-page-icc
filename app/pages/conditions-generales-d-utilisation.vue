<template>
  <div class="cgu-wrapper">
    <div class="cgu-bg-pattern"></div>

    <section class="cgu-section bg-white">
      <div class="cgu-container">

        <!-- Header -->
        <div class="cgu-header">
          <span class="cgu-label">Document légal</span>
          <h1 class="cgu-title">
            Conditions Générales
            <em>d'Utilisation</em>
          </h1>
          <div class="cgu-divider"></div>
        </div>

        <!-- Loading state -->
        <div v-if="loading" class="cgu-loading">
          <div class="cgu-spinner">
            <span></span><span></span><span></span>
          </div>
          <p>Chargement du document…</p>
        </div>

        <!-- Content -->
        <div
          v-else
          class="cgu-content"
          v-html="content"
        ></div>

        <!-- Footer -->
        <div class="cgu-footer">
          <span class="cgu-footer-line"></span>
          <p>Dernière mise à jour {{ updatedAt }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useResourcesService } from '@/services/resources_service'

const { getCgu } = useResourcesService()

const content = ref("")
const updatedAt = ref("")
const loading = ref(true)

onMounted(async () => {
  const result = await getCgu()

  if (result.success) {
    content.value = result.data.data.content
    updatedAt.value = result.data.data.updated_at
  }

  loading.value = false
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

/* ========================= */
/* Base */
/* ========================= */
.cgu-wrapper {
  position: relative;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
  background-color: #ffffff; /* ✅ Fond blanc ajouté */
}

/* Background subtle pattern */
.cgu-bg-pattern {
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(210, 195, 170, 0.18) 0%, transparent 50%),
    radial-gradient(circle at 85% 80%, rgba(180, 165, 140, 0.12) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* Section */
.cgu-section {
  position: relative;
  z-index: 1;
  padding: 7rem 1.5rem 6rem;
}

/* Container */
.cgu-container {
  max-width: 740px;
  margin: 0 auto;
}

/* ========================= */
/* Header */
/* ========================= */
.cgu-header {
  margin-bottom: 4rem;
}

.cgu-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #9d8f7a;
  margin-bottom: 1.25rem;
  padding: 0.3rem 0.85rem;
  border: 1px solid #d4c9b6;
  border-radius: 2px;
}

.cgu-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 400;
  line-height: 1.15;
  color: #1c1a17;
  margin: 0.75rem 0 2rem;
}

.cgu-title em {
  font-style: italic;
  color: #6b5e4a;
}

.cgu-divider {
  width: 56px;
  height: 2px;
  background: linear-gradient(90deg, #c4a882, transparent);
}

/* ========================= */
/* Loading */
/* ========================= */
.cgu-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 5rem 0;
  color: #9d8f7a;
  font-size: 0.9rem;
}

.cgu-spinner {
  display: flex;
  gap: 6px;
}

.cgu-spinner span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c4a882;
  animation: pulse 1.2s ease-in-out infinite;
}

.cgu-spinner span:nth-child(2) { animation-delay: 0.2s; }
.cgu-spinner span:nth-child(3) { animation-delay: 0.4s; }

@keyframes pulse {
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
}

/* ========================= */
/* Content */
/* ========================= */
.cgu-content {
  color: #2e2a24;
  font-size: 1rem;
  line-height: 1.85;
  font-weight: 300;
  animation: fadeUp 0.6s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Prose-like styles for injected HTML */
.cgu-content :deep(h1),
.cgu-content :deep(h2),
.cgu-content :deep(h3) {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  color: #1c1a17;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.cgu-content :deep(h2) {
  font-size: 1.6rem;
  border-left: 3px solid #c4a882;
  padding-left: 1rem;
}

.cgu-content :deep(h3) {
  font-size: 1.2rem;
  color: #5a4e3c;
}

.cgu-content :deep(p) {
  margin-bottom: 1.4rem;
  color: #3d3729;
}

.cgu-content :deep(a) {
  color: #7a6248;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: #c4a882;
  transition: color 0.2s;
}

.cgu-content :deep(a:hover) {
  color: #1c1a17;
}

.cgu-content :deep(ul),
.cgu-content :deep(ol) {
  margin: 1rem 0 1.5rem 1.5rem;
  color: #3d3729;
}

.cgu-content :deep(li) {
  margin-bottom: 0.5rem;
}

.cgu-content :deep(strong) {
  font-weight: 500;
  color: #1c1a17;
}

.cgu-content :deep(blockquote) {
  border-left: 2px solid #c4a882;
  margin: 2rem 0;
  padding: 0.75rem 1.5rem;
  background: rgba(196, 168, 130, 0.07);
  font-style: italic;
  color: #6b5e4a;
}

/* ========================= */
/* Footer */
/* ========================= */
.cgu-footer {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #b0a390;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
}

.cgu-footer-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, #d4c9b6, transparent);
}
</style>
