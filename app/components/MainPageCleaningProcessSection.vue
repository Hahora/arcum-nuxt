<template>
  <section class="py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Заголовок -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Процесс <span class="text-cyan-400">уборки</span>
        </h2>
      </div>

      <!-- Сетка 3x3 с изображениями и центральным блоком -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Первый ряд - 3 фото -->
        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full"
          @click="openModal('/images/process/DSC_5063.webp')"
        >
          <img
            src="/images/process/DSC_5063.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <!-- Иконка увеличения -->
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full"
          @click="openModal('/images/process/DSC_5110.webp')"
        >
          <img
            src="/images/process/DSC_5110.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full"
          @click="openModal('/images/process/DSC_5122.webp')"
        >
          <img
            src="/images/process/DSC_5122.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <!-- Второй ряд - фото слева, центральный блок, фото справа -->
        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full row-span-2"
          @click="openModal('/images/process/DSC_5154.webp')"
        >
          <img
            src="/images/process/DSC_5154.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <!-- Центральный блок с текстом и формой -->
        <div class="flex justify-center items-center h-full row-span-2">
          <div
            class="bg-white rounded-3xl shadow-xl p-6 w-full text-center h-full flex flex-col justify-center"
          >
            <h3 class="text-xl font-bold text-slate-900 mb-4">
              Процесс уборки<br />
              помещений<br />
              организаций
            </h3>

            <!-- Форма заявки -->
            <div class="space-y-4">
              <h4 class="text-base font-semibold text-slate-900">
                Оставьте заявку
              </h4>

              <!-- Поле для имени -->
              <div>
                <input
                  type="text"
                  v-model="name"
                  placeholder="Ваше имя"
                  :disabled="isSubmitting"
                  class="w-full px-3 py-2.5 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <p class="text-xs text-gray-500 mt-1">Введите ваше имя</p>
              </div>

              <!-- Поле для телефона -->
              <div>
                <input
                  type="tel"
                  v-model="phone"
                  placeholder="8 (XXX) XXX-XX-XX"
                  :disabled="isSubmitting"
                  class="w-full px-3 py-2.5 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <p class="text-xs text-gray-500 mt-1">
                  Оставьте ваш номер телефона
                </p>
              </div>

              <button
                @click="submitRequest"
                :disabled="isSubmitting"
                class="w-full bg-cyan-400 hover:bg-cyan-500 disabled:bg-gray-300 text-slate-900 disabled:text-gray-500 font-semibold py-2.5 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:hover:shadow-md text-sm flex items-center justify-center space-x-2 mt-2"
              >
                <Icon
                  v-if="isSubmitting"
                  name="heroicons:arrow-path"
                  class="w-4 h-4 animate-spin"
                />
                <span>{{
                  isSubmitting ? "Отправляем..." : "Отправить заявку"
                }}</span>
              </button>

              <!-- Согласие на обработку данных -->
              <p class="text-xs text-gray-500 mt-2">
                Нажимая кнопку, вы соглашаетесь с
                <a
                  href="/policy"
                  class="text-cyan-500 hover:text-cyan-600 underline"
                >
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full row-span-2"
          @click="
            openModal('/images/process/DSC_5275.webp', 'Уборка территории')
          "
        >
          <img
            src="/images/process/DSC_5275.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <!-- Третий ряд - 3 фото -->
        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full"
          @click="openModal('/images/process/DSC_5336.webp')"
        >
          <img
            src="/images/process/DSC_5336.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full"
          @click="openModal('/images/process/DSC_5351.webp')"
        >
          <img
            src="/images/process/DSC_5351.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <div
          class="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full"
          @click="openModal('/images/process/DSC_5447.webp')"
        >
          <img
            src="/images/process/DSC_5447.webp"
            class="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
          >
            <Icon
              name="heroicons:magnifying-glass-plus"
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      <!-- Дополнительная информация -->
      <div class="text-center mt-12">
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Наша команда профессионалов использует современное оборудование и
          экологически безопасные средства для качественной уборки любых
          помещений
        </p>
      </div>
    </div>

    <!-- Модальное окно для просмотра фото -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          @click="closeModal"
        >
          <div class="relative max-w-7xl max-h-full">
            <!-- Кнопка закрытия -->
            <button
              @click="closeModal"
              class="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-200 z-10"
            >
              <Icon name="heroicons:x-mark" class="w-8 h-8" />
            </button>

            <!-- Изображение -->
            <img
              :src="modalImage"
              :alt="modalAlt"
              class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              @click.stop
            />

            <!-- Подпись -->
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
            >
              <h3 class="text-white text-xl font-semibold text-center">
                {{ modalAlt }}
              </h3>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const name = ref("");
const phone = ref("");
const isModalOpen = ref(false);
const modalImage = ref("");
const modalAlt = ref("");
const isSubmitting = ref(false);

const submitRequest = async () => {
  // Проверяем обязательные поля
  if (!name.value || name.value.trim() === "") {
    alert("Пожалуйста, введите ваше имя");
    return;
  }

  if (!phone.value || phone.value.trim() === "") {
    alert("Пожалуйста, введите номер телефона");
    return;
  }

  isSubmitting.value = true;

  try {
    // Подготавливаем данные для отправки - ВСЕ поля как в общей форме
    const formData = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      service_category: "general_form",
      source_page: "Процесс уборки организаций",
      comment: "", // Пустой комментарий
    };

    console.log("Отправка заявки:", formData);

    // Отправляем через API endpoint
    const response = await $fetch("/api/callbacks", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Заявка успешно отправлена:", response);

    // Уведомление об успехе
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");

    // Очищаем поля формы
    name.value = "";
    phone.value = "";
  } catch (error) {
    console.error("Ошибка отправки:", error);

    let errorMessage = "Произошла ошибка. Попробуйте еще раз.";

    // Проверяем статус ошибки
    if (error?.statusCode === 400) {
      errorMessage =
        error?.data?.message || "Пожалуйста, проверьте заполнение полей.";
    } else if (error?.statusCode === 405) {
      errorMessage = "Метод не разрешен.";
    } else if (error?.statusCode === 503) {
      errorMessage =
        "Сервис временно недоступен. Пожалуйста, свяжитесь с нами по телефону.";
    } else if (error?.statusCode === 500) {
      errorMessage = "Внутренняя ошибка сервера. Попробуйте позже.";
    }

    alert(errorMessage);
  } finally {
    isSubmitting.value = false;
  }
};

const openModal = (imageSrc, imageAlt = "Фото процесса уборки") => {
  modalImage.value = imageSrc;
  modalAlt.value = imageAlt;
  isModalOpen.value = true;
  // Блокируем скролл страницы
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  modalImage.value = "";
  modalAlt.value = "";
  // Возвращаем скролл страницы
  document.body.style.overflow = "auto";
};

// Закрытие модального окна по Escape
const handleKeydown = (event) => {
  if (event.key === "Escape" && isModalOpen.value) {
    closeModal();
  }
};

// Добавляем обработчик клавиатуры при монтировании
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

// Убираем обработчик при размонтировании
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  // Возвращаем скролл на всякий случай
  document.body.style.overflow = "auto";
});
</script>
