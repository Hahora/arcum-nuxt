<template>
  <div class="min-h-screen flex flex-col">
    <!-- Хедер (упрощенный для страницы ошибки) -->
    <header class="relative bg-slate-900 border-b border-slate-700 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Логотип -->
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div
              class="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <img src="/logo.png" alt="Arkum" />
            </div>
            <span class="text-xl font-bold text-white">Arkum</span>
          </NuxtLink>

          <!-- Телефон -->
          <a
            href="tel:+79298205321"
            class="hidden sm:flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200"
          >
            <Icon name="heroicons:phone" class="w-5 h-5" />
            <span>8 (929) 820-53-21</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Основной контент 404 -->
    <main
      class="flex-1 relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden"
    >
      <!-- Светящееся пятно -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"
        ></div>
      </div>

      <!-- Анимированные декоративные элементы -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <!-- Плавающие частицы -->
        <div
          v-for="i in 6"
          :key="i"
          class="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }"
        ></div>
      </div>

      <div
        class="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8"
      >
        <div class="text-center max-w-2xl mx-auto">
          <!-- Большая 404 с анимацией -->
          <div class="mb-8">
            <h1
              class="text-8xl sm:text-9xl lg:text-[12rem] font-black text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text leading-none animate-pulse"
            >
              404
            </h1>

            <!-- Подсветка под цифрами -->
            <div class="relative -mt-4">
              <div
                class="w-32 sm:w-40 lg:w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto opacity-60"
              ></div>
            </div>
          </div>

          <!-- Заголовок ошибки -->
          <div class="mb-6">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Страница не найдена
            </h2>
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
              К сожалению, запрашиваемая страница не существует или была
              перемещена.
              <br class="hidden sm:block" />
              Но не переживайте — мы поможем вам найти то, что нужно!
            </p>
          </div>

          <!-- Кнопки действий -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <!-- Главная страница -->
            <NuxtLink
              to="/"
              class="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-full text-base shadow-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="heroicons:home" class="w-5 h-5" />
              <span>На главную</span>
            </NuxtLink>

            <!-- Обратный звонок -->
            <button
              @click="openCallbackModal"
              class="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-base hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="heroicons:phone" class="w-5 h-5" />
              <span>Связаться с нами</span>
            </button>
          </div>

          <!-- Популярные разделы -->
          <div
            class="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50"
          >
            <h3 class="text-lg sm:text-xl font-semibold mb-4 text-center">
              Популярные разделы
            </h3>

            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              <NuxtLink
                v-for="link in popularLinks"
                :key="link.id"
                :to="link.href"
                class="flex items-center space-x-3 p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105"
              >
                <span
                  class="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors"
                >
                  {{ link.label }}
                </span>
              </NuxtLink>
            </div>
          </div>

          <!-- Контактная информация -->
          <div class="mt-8 pt-6 border-t border-slate-700/50">
            <p class="text-gray-400 text-sm sm:text-base mb-4">
              Или свяжитесь с нами напрямую:
            </p>

            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
            >
              <!-- Телефон -->
              <a
                href="tel:+79298205321"
                class="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <Icon name="heroicons:phone" class="w-5 h-5" />
                <span class="font-semibold">8 (929) 820-53-21</span>
              </a>

              <!-- Email -->
              <a
                href="mailto:arkum161@yandex.ru"
                class="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <Icon name="heroicons:envelope" class="w-5 h-5" />
                <span class="font-semibold">arkum161@yandex.ru</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      :is-open="isCallbackModalOpen"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Мета-теги для SEO
useHead({
  title: "Arkum | 404 - Страница не найдена",
  meta: [
    {
      name: "description",
      content:
        "Страница не найдена. Вернитесь на главную страницу клининговой компании Arkum или свяжитесь с нами для получения помощи.",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

// Состояние модального окна
const isCallbackModalOpen = ref(false);

// Популярные ссылки
const popularLinks = [
  {
    id: "b2b-cleaning",
    label: "Уборка для организаций",
    href: "/b2b",
  },
  {
    id: "cleaning-rostov",
    label: "Клининг Ростов",
    href: "/clean",
  },
  {
    id: "cleaning-region",
    label: "Клининг область",
    href: "/clean-region",
  },
  {
    id: "furniture-cleaning-rostov",
    label: "Химчистка Ростов",
    href: "/furniture",
  },
  {
    id: "furniture-cleaning-region",
    label: "Химчистка область",
    href: "/furniture-region",
  },
  {
    id: "facade-cleaning",
    label: "Фасады",
    href: "/facade",
  },
];

// Методы для модального окна
const openCallbackModal = () => {
  isCallbackModalOpen.value = true;
};

const closeCallbackModal = () => {
  isCallbackModalOpen.value = false;
};

const handleCallbackSubmit = (formData) => {
  console.log("Заявка с 404 страницы:", formData);
  // Дополнительная логика при необходимости
};

// Обработка ошибки (для Nuxt)
const error = useError();
console.log("Error details:", error.value);
</script>

<style scoped>
/* Дополнительные анимации */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Улучшенная анимация пульсации для 404 */
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.3));
  }
  50% {
    opacity: 0.8;
    filter: drop-shadow(0 0 30px rgba(34, 211, 238, 0.5));
  }
}

h1 {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Адаптивность для очень маленьких экранов */
@media (max-width: 375px) {
  h1 {
    font-size: 6rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }
}

/* Улучшение читаемости на мобильных */
@media (max-width: 640px) {
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
  }
}
</style>
