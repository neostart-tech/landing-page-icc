<template>
  <div>
    <BreadcrumbNav :breadcrumb="breadcrumbItems" />

    <div class="bg-white">
      <!-- CONTACT SECTION -->
      <section class="py-18 px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- LEFT -->
          <div class="flex flex-col justify-start">
            <h2 class="text-2xl text-black font-extrabold mb-5">
              {{ $t('contact.title') }}
            </h2>

            <p class="text-black mb-10 max-w-md">
              {{ $t('contact.description') }}
            </p>
          </div>

          <!-- RIGHT : FORM -->
          <form
            @submit.prevent="handleSubmit"
            class="bg-white border rounded-xl p-10 shadow-sm flex flex-col"
          >
            
            <!-- Nom & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                v-model="form.nom"
                type="text"
                placeholder="Nom"
                class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
                required
              >

              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
                required
              >
            </div>

            <!-- Téléphone & Objet -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                v-model="form.telephone"
                type="text"
                placeholder="Téléphone"
                class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
              >

              <input
                v-model="form.objet"
                type="text"
                placeholder="Objet"
                class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
                required
              >
            </div>

            <!-- Message -->
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Votre message"
              class="w-full border rounded-lg px-4 py-3 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-[#840B7F]"
              required
            />

            <!-- Bouton -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-[#840B7F] text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition disabled:opacity-60"
            >
              {{ loading ? "Envoi..." : "Envoyer" }}
            </button>

            <!-- Messages -->
            <p v-if="successMessage" class="text-green-600 mt-4">
              {{ successMessage }}
            </p>

            <p v-if="errorMessage" class="text-red-600 mt-4">
              {{ errorMessage }}
            </p>

          </form>
        </div>
      </section>

      <!-- MAP -->
      <section class="w-full">
        <iframe
          class="w-full h-[320px]"
          src="https://www.google.com/maps?q=Hountigome%20Togo&output=embed"
          loading="lazy"
        />
      </section>
    </div>
  </div>
</template>


<script setup lang="ts">
import BreadcrumbNav from '~/components/BreadcrumbNav.vue'
import { useI18n } from 'vue-i18n'
import { useContactService } from '@/services/contact_service'

const { t } = useI18n()
const { sendContact } = useContactService()

const breadcrumbItems = [
  { label: t('breadcrumb.home'), href: '/' },
  { label: t('nav.contact') }
]

const form = ref({
  nom: "",
  email: "",
  telephone: "",
  objet: "",
  message: "",
})

const loading = ref(false)
const successMessage = ref("")
const errorMessage = ref("")

const handleSubmit = async () => {
  successMessage.value = ""
  errorMessage.value = ""
  loading.value = true

  const result = await sendContact(form.value)

  if (result.success) {
    successMessage.value = "Message envoyé avec succès."

    form.value = {
      nom: "",
      email: "",
      telephone: "",
      objet: "",
      message: "",
    }
  } else {
    errorMessage.value = result.message
  }

  loading.value = false
}
</script>
