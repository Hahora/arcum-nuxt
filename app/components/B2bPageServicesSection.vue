<template>
  <section class="bg-white py-14 lg:py-20" id="services">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold">
          Услуги <span class="text-cyan-400">для организаций</span>
        </h2>
        <p class="text-gray-400 text-lg mt-3">
          Комплексная уборка офисов и коммерческих помещений. Поддерживаем
          чистоту, создавая комфортную рабочую атмосферу.
        </p>
      </div>

      <!-- Сетка -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Блок услуги -->
        <div
          v-for="service in services"
          :key="service.title"
          class="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
        >
          <!-- Круглое изображение -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 rounded-full overflow-hidden shadow-md">
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Контент -->
          <div class="flex-1 min-w-0">
            <!-- Заголовок с подчеркиванием -->
            <div class="mb-3">
              <h3 class="text-xl font-bold text-slate-900 mb-2">
                {{ service.title }}
              </h3>
              <div class="w-full h-0.5 bg-cyan-400"></div>
            </div>

            <!-- Описание -->
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ service.description }}
            </p>

            <!-- Кнопка -->
            <button
              @click="openCallbackModal(service.title)"
              class="px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Узнать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
      :preselectedService="'b2b'"
      :preselectedSubcategory="selectedSubcategory"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";

// Реф для управления модальным окном
const showCallbackModal = ref(false);
const selectedSubcategory = ref("");

const services = [
  {
    title: "Уборка на регулярной основе",
    description:
      "Торговые центры, бизнес-центры, учебные заведения, учреждения.",
    image: "/images/b2b-serv/1-serv.webp",
  },
  {
    title: "Уборка коммерческой недвижимости",
    description: "Офисы, магазины, производство, склады, общепит, гостиницы.",
    image: "/images/b2b-serv/2-serv.webp",
  },
  {
    title: "Мойка окон, витражей, стеклянных перегородок",
    description:
      "Моем стекла с обеих сторон, рамы и москитные сетки, протираем подоконники.",
    image: "/images/b2b-serv/5-serv.webp",
  },
  {
    title: "Мытье фасадов и вывесок",
    description: "Моем фасады, при необходимости с использованием спецтехники.",
    image: "/images/b2b-serv/6-serv.webp",
  },
  {
    title: "Уборка производственных помещений и складов",
    description:
      "Уборка производственных помещений, цехов, вентиляции, и оборудования.",
    image: "/images/b2b-serv/7-serv.webp",
  },
  {
    title: "Уборка гостиниц, отелей и ресторанов",
    description:
      "Уборка и содержание в чистоте жилых номеров гостиницы и помещенй общепита.",
    image: "/images/b2b-serv/8-serv.webp",
  },
  {
    title: "Уборка квартир",
    description: "Моем пол, выносим мусор, чистим стеклянные поверхностию.",
    image: "/images/b2b-serv/9-serv.webp",
  },
  {
    title: "Уборка дома, коттеджа",
    description:
      "Протираем все поверхности, стеклянные вещии зеркала, моем полы.",
    image: "/images/b2b-serv/10-serv.webp",
  },
];

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
  console.log("Форма отправлена из секции услуг:", formData);
  // Проверяем, что subcategory передается
  if (formData.subcategory) {
    console.log("Подкатегория:", formData.subcategory);
  }
};
</script>
