<!-- components/CookieBanner.vue -->
<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div
        v-if="showBanner"
        class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 shadow-2xl"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <!-- Текст -->
            <div class="flex-1">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 mt-1">
                  <Icon
                    name="heroicons:information-circle"
                    class="w-5 h-5 text-cyan-400"
                  />
                </div>
                <div>
                  <p class="text-white text-sm sm:text-base font-medium mb-1">
                    Мы используем файлы cookie
                  </p>
                  <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Этот сайт использует файлы cookie для улучшения
                    пользовательского опыта и аналитики. Продолжая использовать
                    сайт, вы соглашаетесь с нашей
                    <a
                      href="/policy"
                      class="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                    >
                      политикой конфиденциальности </a
                    >.
                  </p>
                </div>
              </div>
            </div>

            <!-- Кнопки -->
            <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                @click="acceptAllCookies"
                class="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                Принять все
              </button>
              <button
                @click="acceptNecessaryOnly"
                class="bg-transparent border border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto"
              >
                Только необходимые
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const { showBanner, acceptAllCookies, acceptNecessaryOnly, initialize } =
  useCookieConsent();

onMounted(() => {
  console.log("CookieBanner mounted, initializing...");
  initialize();
});
</script>
