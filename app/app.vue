<script setup>
import { onMounted } from "vue";

const isCallbackModalOpen = ref(false);

const openCallbackModal = () => {
  isCallbackModalOpen.value = true;
};

const closeCallbackModal = () => {
  isCallbackModalOpen.value = false;
};

// Делаем функции глобально доступными
provide("callbackModal", {
  openCallbackModal,
  closeCallbackModal,
});

// Убираем инициализацию аналитики отсюда - она уже происходит в useCookieConsent
// onMounted(() => {
//   console.log('App.vue mounted, checking analytics...');
//
//   setTimeout(() => {
//     const { init } = useAnalytics();
//     console.log('Calling analytics init...');
//     init();
//   }, 2000);
// });
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <FloatingNavigation />
    <CallbackModal :is-open="isCallbackModalOpen" @close="closeCallbackModal" />
    <CookieBanner />
  </div>
</template>
