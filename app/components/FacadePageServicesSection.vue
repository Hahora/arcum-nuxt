<template>
  <section class="bg-white py-10 lg:py-16">
    <div class="mx-auto max-w-7xl px-4">
      <!-- Заголовок -->
      <div class="text-center mb-10">
        <h2 class="text-2xl lg:text-3xl font-bold">
          Услуги
          <span class="text-cyan-400">мойки фасадов зданий</span>
        </h2>
        <p class="text-gray-400 text-base mt-2">
          Комплексная очистка наружных поверхностей для бизнеса, офисов,
          торговых и промышленных объектов
        </p>
      </div>

      <!-- Сетка - 3 колонки на больших экранах -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <!-- Карточка -->
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-cyan-400/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Фото -->
          <div class="relative h-52 lg:h-56 overflow-hidden">
            <NuxtImg
              :src="service.image"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute bottom-3 left-4">
              <h3
                class="text-lg lg:text-xl font-bold text-white drop-shadow-xl"
              >
                {{ service.title }}
              </h3>
            </div>
          </div>

          <!-- Контент -->
          <div class="p-5 lg:p-6">
            <p
              class="text-gray-600 text-sm lg:text-base leading-relaxed mb-5 lg:mb-6"
            >
              {{ service.description }}
            </p>

            <!-- Кнопка -->
            <button
              @click="openCallbackModal(service.title)"
              class="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 flex items-center justify-center space-x-2"
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
      :preselectedService="'facade'"
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
    title: "Сезонная мойка фасада",
    description:
      "Удаляем пыль, копоть, пыльцу, следы дождя и другие атмосферные загрязнения, накопившиеся за сезон.",
    image: "/images/facade-serv/1.webp",
  },
  {
    title: "Мойка фасада после ремонта",
    description:
      "Эффективно устраняем строительную пыль, цементные брызги, пятна краски, клея и другие следы отделочных работ.",
    image: "/images/facade-serv/2.webp",
  },
  {
    title: "Удаление высолов с фасада",
    description:
      "Боремся с белым соляным налётом, появляющимся на кирпиче, бетоне и штукатурке.",
    image: "/images/facade-serv/3.webp",
  },
];

// Функция для открытия модального окна
const openCallbackModal = (subcategory) => {
  selectedSubcategory.value = subcategory;
  showCallbackModal.value = true;
  if (process.client) {
    document.body.style.overflow = "hidden";
  }
};

// Функция для закрытия модального окна
const closeCallbackModal = () => {
  showCallbackModal.value = false;
  selectedSubcategory.value = "";
  if (process.client) {
    document.body.style.overflow = "auto";
  }
};

// Обработка отправки формы
const handleCallbackSubmit = (formData) => {
  console.log("Форма отправлена из секции фасадов:", formData);
};
</script>
