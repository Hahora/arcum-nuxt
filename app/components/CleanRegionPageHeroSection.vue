<template>
  <section
    class="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 overflow-hidden"
  >
    <!-- Мягкое свечение -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 blur-[150px] rounded-full"
      ></div>
    </div>

    <!-- Центральный компактный блок -->
    <div class="relative mx-auto max-w-4xl px-6 text-center z-10">
      <!-- Хлебные крошки -->
      <div
        class="flex justify-center items-center space-x-2 text-xs text-gray-400 mb-6"
      >
        <NuxtLink href="/" class="hover:text-cyan-400 transition"
          >Главная</NuxtLink
        >
        <Icon name="heroicons:chevron-right" class="w-4 h-4 text-gray-500" />
        <span class="text-gray-300">Клининг Ростовская область</span>
      </div>

      <!-- Тег -->
      <span
        class="px-4 py-1.5 text-xs font-semibold rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 inline-block mb-4"
      >
        Профессиональный клининг в Ростовской области
      </span>

      <!-- Компактный заголовок -->
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5"
      >
        Клининговая компания <span class="text-cyan-400">Аркум</span><br />
        уборка квартир и офисов в Ростовской области
      </h1>

      <!-- Подзаголовок -->
      <p
        class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
      >
        Таганрог, Шахты, Новочеркасск, Батайск, Новошахтинск
      </p>

      <!-- Кнопки -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
      >
        <button
          @click="scrollToPrice"
          class="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-full text-base shadow-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-105"
        >
          Рассчитать стоимость
        </button>

        <button
          @click="openCallbackModal"
          class="px-8 py-3 bg-slate-800/60 backdrop-blur border border-slate-600 text-gray-200 rounded-full text-base hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
        >
          <Icon name="heroicons:phone" class="w-5 h-5 text-cyan-400" />
          <span>Связаться с нами</span>
        </button>
      </div>

      <!-- Мини преимущества -->
      <div class="grid grid-cols-3 gap-6 max-w-xl mx-auto">
        <div class="text-center">
          <Icon
            name="heroicons:sparkles"
            class="w-7 h-7 mx-auto text-cyan-400 mb-2"
          />
          <p class="text-sm font-semibold">Качество</p>
        </div>

        <div class="text-center">
          <Icon
            name="heroicons:clock"
            class="w-7 h-7 mx-auto text-cyan-400 mb-2"
          />
          <p class="text-sm font-semibold">Работаем 24/7</p>
        </div>

        <div class="text-center">
          <Icon
            name="heroicons:map-pin"
            class="w-7 h-7 mx-auto text-cyan-400 mb-2"
          />
          <p class="text-sm font-semibold">Ростовская область</p>
        </div>
      </div>
    </div>

    <!-- Декоративные фото -->
    <div
      class="absolute left-0 top-0 h-full w-[20%] hidden lg:block opacity-15"
    >
      <NuxtImg src="/images/main1.webp" class="w-full h-full object-cover" />
    </div>

    <div
      class="absolute right-0 top-0 h-full w-[20%] hidden lg:block opacity-15"
    >
      <NuxtImg src="/images/main2.webp" class="w-full h-full object-cover" />
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
      :preselectedService="'cleaning-region'"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";

// Реф для управления модальным окном
const showCallbackModal = ref(false);

// Функция для открытия модального окна
const openCallbackModal = () => {
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
  console.log("Форма отправлена из Hero секции региона:", formData);
};

// Функция для плавной прокрутки к прайсу
const scrollToPrice = () => {
  if (process.client) {
    const priceSection = document.getElementById("price");
    if (priceSection) {
      // Плавная прокрутка
      priceSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Если секция price не найдена, скроллим к началу
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
};
</script>
