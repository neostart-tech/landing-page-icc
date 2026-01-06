<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'


const loading = ref(true)

onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 800)
})
</script>
