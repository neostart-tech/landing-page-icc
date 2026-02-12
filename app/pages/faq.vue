<template>
  <div>
    <BreadcrumbNav
      :breadcrumb="breadcrumbItems"
    />

    <section class="py-24 bg-white">
      <div class="max-w-5xl mx-auto px-5 lg:px-10">
        <!-- TITRE -->
        <div class="text-center mb-20">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-black mb-6">
            {{ $t('faq_page.title') }}
          </h2>
          <p class="text-black text-lg">
            {{ $t('faq_page.subtitle') }} <br><br><br>
          </p>
        </div>

        <!-- FAQ ACCORDION -->
        <div class="space-y-6">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="rounded-xl border transition-all duration-300"
            :class="
              activeIndex === index
                ? 'border-[#840B7F] shadow-sm'
                : 'border-gray-200'
            "
          >
            <!-- QUESTION -->
            <button
              class="w-full flex items-center gap-3 px-6 py-6 text-left"
              @click="toggle(index)"
            >
              <!-- NUMÉRO + QUESTION -->
              <h3 class="flex-1 font-semibold text-black text-base lg:text-lg">
                <span class="text-[#285a43] font-bold mr-2">
                  {{ index + 1 }}.
                </span>
                {{ item.question }}
              </h3>

              <!-- ICÔNE -->
              <svg
                class="w-5 h-5 text-black transition-transform duration-300 flex-shrink-0"
                :class="{ 'rotate-180': activeIndex === index }"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- RÉPONSE -->
            <div
              v-show="activeIndex === index"
              class="px-6 pb-6 pl-10 text-black leading-relaxed text-sm lg:text-base"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BreadcrumbNav from '~/components/BreadcrumbNav.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breadcrumbItems = [
  { label: t('breadcrumb.home'), href: '/' },
  { label: t('nav.faq') }
]

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: t('faq_page.questions.q1.question'),
    answer: t('faq_page.questions.q1.answer')
  },
  {
    question: t('faq_page.questions.q2.question'),
    answer: t('faq_page.questions.q2.answer')
  },
  {
    question: t('faq_page.questions.q3.question'),
    answer: t('faq_page.questions.q3.answer')
  },
  {
    question: t('faq_page.questions.q4.question'),
    answer: t('faq_page.questions.q4.answer')
  }
]
</script>
