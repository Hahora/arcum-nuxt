<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Левая часть - контент -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Заказать химчистку<br />
            проще простого!
          </h2>

          <!-- Шаги процесса -->
          <div class="space-y-8">
            <!-- Шаг 1 -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg"
                >
                  1
                </div>
                <div class="w-0.5 h-16 bg-cyan-200 mx-auto mt-2"></div>
              </div>
              <div class="pt-2">
                <h3 class="text-lg font-semibold text-slate-900 mb-2">
                  Вы оставляете заявку на сайте
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  Оставляете ваши контакты, рассказываете о пожеланиях
                </p>
                <button
                  @click="openCallbackModal"
                  class="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full text-sm transition-all duration-300 hover:scale-105"
                >
                  Оставить заявку
                </button>
              </div>
            </div>

            <!-- Шаг 2 -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg"
                >
                  2
                </div>
                <div class="w-0.5 h-16 bg-cyan-200 mx-auto mt-2"></div>
              </div>
              <div class="pt-2">
                <h3 class="text-lg font-semibold text-slate-900 mb-2">
                  С вами связывается менеджер
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Уточняет детали, удобное время для химчистки и перечень работ
                </p>
              </div>
            </div>

            <!-- Шаг 3 -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg"
                >
                  3
                </div>
                <div class="w-0.5 h-16 bg-cyan-200 mx-auto mt-2"></div>
              </div>
              <div class="pt-2">
                <h3 class="text-lg font-semibold text-slate-900 mb-2">
                  Выезд на дом
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Мы приезжаем к Вам для выполнения химчистки в заранее
                  оговорённое время
                </p>
              </div>
            </div>

            <!-- Шаг 4 -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg"
                >
                  4
                </div>
              </div>
              <div class="pt-2">
                <h3 class="text-lg font-semibold text-slate-900 mb-2">
                  Выполняем химчистку и получаем оплату
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Мы исполняем весь перечень работ по химчистке, и получаем от
                  Вас оплату
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая часть - изображение -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              src="/images/main2.webp"
              alt="Процесс химчистки"
              class="w-full h-[600px] object-cover"
              placeholder
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
      :preselectedService="currentService"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Реф для управления модальным окном
const showCallbackModal = ref(false);

// Определяем текущий сервис (Ростов или область)
const currentService = ref("furniture-rostov"); // По умолчанию Ростов

// Функция для определения региона
const determineService = () => {
  if (process.client) {
    // Проверяем URL или заголовок страницы
    const currentUrl = window.location.pathname;
    const pageTitle = document.title || "";

    if (
      currentUrl.includes("furniture-region") ||
      currentUrl.includes("region") ||
      pageTitle.includes("Ростовская область") ||
      pageTitle.includes("область")
    ) {
      currentService.value = "furniture-region";
    } else {
      currentService.value = "furniture-rostov"; // По умолчанию Ростов
    }

    console.log("Определен сервис для химчистки:", currentService.value);
  }
};

onMounted(() => {
  determineService();
});

// Функция для открытия модального окна
const openCallbackModal = () => {
  // Если не определился сервис, определяем сейчас
  if (!currentService.value) {
    determineService();
  }

  showCallbackModal.value = true;
  // Блокировка скролла фона
  if (process.client) {
    document.body.style.overflow = "hidden";
  }
};

// Функция для закрытия модального окна
const closeCallbackModal = () => {
  showCallbackModal.value = false;
  // Разблокировка скролла фона
  if (process.client) {
    document.body.style.overflow = "auto";
  }
};

// Обработка отправки формы
const handleCallbackSubmit = (formData) => {
  console.log("Форма отправлена из секции 'Процесс химчистки':", formData);
  console.log("Сервис:", currentService.value);
};
</script>
