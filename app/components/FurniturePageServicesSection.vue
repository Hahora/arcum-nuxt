<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="text-center mb-10 lg:mb-12">
        <h2
          class="text-3xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 lg:mb-4"
        >
          Услуги <span class="text-cyan-400">химчистки</span> на дому
        </h2>
        <p
          class="text-gray-600 text-lg sm:text-lg lg:text-lg max-w-2xl mx-auto px-4"
        >
          Глубокая очистка мягкой мебели. Удаляем запахи, трудные пятна и
          аллергенные частицы.
        </p>
      </div>

      <!-- Сетка с 4 колонками на больших экранах -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
      >
        <!-- Карточка -->
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-white rounded-xl lg:rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-400/40 hover:shadow-lg lg:hover:shadow-xl transition-all duration-300"
        >
          <!-- Мобильная версия (телефон) -->
          <div class="sm:hidden">
            <div class="p-5">
              <!-- Заголовок и фото в строку -->
              <div class="flex items-start space-x-4 mb-4">
                <!-- Круглая фото -->
                <div class="flex-shrink-0">
                  <div
                    class="relative w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-md"
                  >
                    <NuxtImg
                      :src="service.image"
                      :alt="service.title"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      sizes="80px"
                      :modifiers="{
                        width: 160,
                        height: 160,
                        quality: 85,
                        fit: 'cover',
                      }"
                    />
                  </div>
                </div>

                <!-- Заголовок и кнопка -->
                <div class="flex-1 pt-1">
                  <h3 class="text-lg font-bold text-slate-900 mb-2">
                    {{ service.title }}
                  </h3>
                  <!-- Кнопка на телефоне -->
                  <button
                    @click="openCallbackModal(service.title)"
                    class="bg-cyan-400 hover:bg-cyan-500 text-slate-900 py-2.5 px-5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Заказать</span>
                    <Icon
                      name="heroicons:arrow-right"
                      class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>

              <!-- Описание -->
              <div
                class="text-gray-600 text-sm leading-relaxed border-t border-slate-100 pt-3"
              >
                <div class="whitespace-pre-line space-y-1">
                  <div
                    v-for="(point, index) in service.description.split('\n')"
                    :key="index"
                    class="flex items-start"
                  >
                    <Icon
                      name="heroicons:check-circle"
                      class="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span class="text-sm">{{ point }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Десктопная версия (планшет и больше) -->
          <div class="hidden sm:block">
            <div class="flex flex-col p-5 h-full">
              <!-- Верхняя часть - Фото -->
              <div class="flex-shrink-0 flex justify-center mb-4">
                <div
                  class="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-cyan-400/30 transition-all duration-300 group-hover:rotate-3"
                >
                  <NuxtImg
                    :src="service.image"
                    :alt="service.title"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>
              </div>

              <!-- Средняя часть - Текст -->
              <div class="flex-1">
                <!-- Заголовок -->
                <h3
                  class="text-lg lg:text-xl font-bold text-slate-900 mb-3 text-center"
                >
                  {{ service.title }}
                </h3>

                <!-- Описание с пунктами -->
                <div
                  class="text-gray-600 text-sm lg:text-base leading-relaxed mb-4 space-y-2"
                >
                  <div
                    v-for="(point, index) in service.description.split('\n')"
                    :key="index"
                    class="flex items-start"
                  >
                    <Icon
                      name="heroicons:check-circle"
                      class="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span class="text-sm lg:text-base">{{ point }}</span>
                  </div>
                </div>
              </div>

              <!-- Нижняя часть - Кнопка -->
              <div class="flex-shrink-0 mt-4">
                <button
                  @click="openCallbackModal(service.title)"
                  class="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-md"
                >
                  <span>Узнать стоимость</span>
                  <Icon
                    name="heroicons:arrow-right"
                    class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
      :preselectedService="currentService"
      :preselectedSubcategory="selectedSubcategory"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Реф для управления модальным окном
const showCallbackModal = ref(false);
const selectedSubcategory = ref("");
const currentService = ref("");

const services = [
  {
    title: "Химчистка дивана",
    description:
      "Устраним неприятный запах\nВыведем пятна\nУберем шерсть животных\nУдалим засаленности",
    image: "/images/furniture-serv/1.webp",
  },
  {
    title: "Химчистка матраса",
    description:
      "Устраним неприятный запах\nИзбавим от пылевых клещей\nИзбавим от глубинной пыли\nОбработаем дезинфицирующим средством",
    image: "/images/furniture-serv/2.webp",
  },
  {
    title: "Химчистка подушек",
    description:
      "Устраним неприятный запах\nИзбавим наполнитель от пыли\nСделаем полную очистку наперника\nОбработаем дезинфицирующим средством",
    image: "/images/furniture-serv/3.webp",
  },
  {
    title: "Химчистка кресел",
    description:
      "Устраним неприятный запах\nВыведем пятна\nВернем обивке прежний цвет\nУдалим засаленности",
    image: "/images/furniture-serv/4.webp",
  },
];

// Определяем на какой странице мы находимся
onMounted(() => {
  if (process.client) {
    // Проверяем URL или заголовок страницы
    const currentUrl = window.location.pathname;
    const pageTitle = document.title || "";

    // Определяем текущий сервис
    if (
      currentUrl.includes("furniture-rostov") ||
      pageTitle.includes("Ростов-на-Дону")
    ) {
      currentService.value = "furniture-rostov"; // Для химчистки в Ростове
    } else if (
      currentUrl.includes("furniture-region") ||
      pageTitle.includes("Ростовская область")
    ) {
      currentService.value = "furniture-region"; // Для химчистки в области
    } else {
      // Если не можем определить, используем Ростов по умолчанию
      currentService.value = "furniture-rostov";
    }

    console.log("Определена категория для химчистки:", currentService.value);
  }
});

// Функция для открытия модального окна
const openCallbackModal = (subcategory) => {
  selectedSubcategory.value = subcategory;
  showCallbackModal.value = true;

  // Если currentService не определился, определяем здесь
  if (!currentService.value) {
    // Проверяем URL или заголовок страницы
    if (process.client) {
      const currentUrl = window.location.pathname;
      const pageTitle = document.title || "";

      if (
        currentUrl.includes("furniture-region") ||
        pageTitle.includes("Ростовская область")
      ) {
        currentService.value = "furniture-region";
      } else {
        currentService.value = "furniture-rostov"; // По умолчанию Ростов
      }
    }
  }

  // Блокировка скролла фона
  if (process.client) {
    document.body.style.overflow = "hidden";
  }
};

// Функция для закрытия модального окна
const closeCallbackModal = () => {
  showCallbackModal.value = false;
  selectedSubcategory.value = "";
  // Разблокировка скролла фона
  if (process.client) {
    document.body.style.overflow = "auto";
  }
};

// Обработка отправки формы
const handleCallbackSubmit = (formData) => {
  console.log("Форма отправлена из секции химчистки:", formData);
  console.log("Категория:", currentService.value);
  console.log("Подкатегория:", selectedSubcategory.value);
};
</script>

<style scoped>
/* Мобильная версия стили */
@media (max-width: 640px) {
  .w-20 {
    width: 5rem;
    height: 5rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .space-x-4 > * + * {
    margin-left: 1rem;
  }

  button {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    font-size: 0.875rem;
  }

  .p-5 {
    padding: 1.25rem;
  }
}

/* Адаптация для 4 колонок */
@media (min-width: 1280px) {
  .p-5 {
    padding: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .lg\:text-base {
    font-size: 0.875rem;
  }
}

/* Эффекты при наведении */
.group:hover button {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2);
}
</style>
