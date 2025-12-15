<template>
  <section class="bg-white py-14 lg:py-20" id="services">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold">
          Клининговые <span class="text-cyan-400">услуги</span>
        </h2>
        <p class="text-gray-400 text-lg mt-3">
          Профессиональная уборка квартир и домов: регулярная, поддерживающая,
          генеральная и после ремонта.
        </p>
      </div>

      <!-- Сетка -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Карточка -->
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-400/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Фото -->
          <div class="relative h-48 overflow-hidden">
            <NuxtImg
              :src="service.image"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute bottom-3 left-4">
              <h3
                class="text-base lg:text-lg font-bold text-white drop-shadow-xl"
              >
                {{ service.title }}
              </h3>
            </div>
          </div>

          <!-- Контент -->
          <div class="p-4">
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ service.description }}
            </p>

            <!-- Кнопка -->
            <button
              @click="openCallbackModal(service.title)"
              class="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Узнать стоимость</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
      :preselectedService="currentServiceCategory"
      :preselectedSubcategory="selectedSubcategory"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Определяем на какой странице мы находимся
const currentPage = ref("");
const currentServiceCategory = ref("");
const showCallbackModal = ref(false);
const selectedSubcategory = ref("");

const services = [
  {
    title: "Генеральная уборка квартир",
    description: "Моем пол, выносим мусор, чистим стеклянные поверхности.",
    image: "/images/clean-serv/1.webp",
  },
  {
    title: "Мытьё окон",
    description:
      "Моем стекла с обеих сторон, рамы и москитные сетки, протираем подоконники.",
    image: "/images/clean-serv/2.webp",
  },
  {
    title: "Генеральная уборка коттеджей",
    description:
      "Протираем все поверхности, стеклянные вещии зеркала, моем полы.",
    image: "/images/clean-serv/3.webp",
  },
  {
    title: "Уборка офисов",
    description:
      "Протираем все доступные поверхности, переговорки, пылесосим и моем полы.",
    image: "/images/clean-serv/4.webp",
  },
  {
    title: "Мытьё фасадов",
    description: "Моем фасады, при необходимости с использованием спецтехники.",
    image: "/images/clean-serv/5.webp",
  },
  {
    title: "Уборка после ремонта",
    description:
      "Удаление строительной пыли, пятен краски, клея, силикона и т.д. со всех поверхностей.",
    image: "/images/clean-serv/6.webp",
  },
  {
    title: "Уборка производственных помещений и складов",
    description:
      "Уборка производственных помещений, цехов, вентиляции, и оборудования.",
    image: "/images/clean-serv/7.webp",
  },
  {
    title: "Уборка гостиниц, отелей и ресторанов",
    description:
      "Уборка и содержание в чистоте жилых номеров гостиницы и помещенй общепита.",
    image: "/images/clean-serv/8.webp",
  },
];

// Определяем текущую страницу при монтировании
onMounted(() => {
  if (process.client) {
    const path = window.location.pathname;
    currentPage.value = path;

    // Определяем service_category на основе URL
    if (path.includes("/clean-region")) {
      currentServiceCategory.value = "cleaning-region"; // Ростовская область
    } else if (path.includes("/clean")) {
      currentServiceCategory.value = "cleaning-rostov"; // Ростов-на-Дону
    }

    console.log("Текущая страница:", path);
    console.log("Service category:", currentServiceCategory.value);
  }
});

// Функция для открытия модального окна
const openCallbackModal = (subcategory) => {
  selectedSubcategory.value = subcategory;
  showCallbackModal.value = true;
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
  console.log("Форма отправлена из секции услуг клининга:", formData);
  // Проверяем правильность service_category
  console.log("Должен быть service_category:", getExpectedServiceCategory());
};

// Функция для получения ожидаемого service_category
const getExpectedServiceCategory = () => {
  return currentServiceCategory.value === "cleaning-region"
    ? "cleaning_region"
    : "cleaning_rostov";
};
</script>
