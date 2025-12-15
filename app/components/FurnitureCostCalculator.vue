<template>
  <section class="bg-white py-14 lg:py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
          Рассчитать <span class="text-cyan-400">точную стоимость</span>
        </h2>
        <p class="text-gray-600 mt-3 text-lg">
          Ответьте на несколько вопросов — и мы назовём точную цену за
          химчистку.
        </p>
      </div>

      <!-- Форма -->
      <form
        @submit.prevent="submitCalculation"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 bg-white p-8 rounded-3xl shadow-xl"
      >
        <!-- Где нужно убрать -->
        <div class="flex flex-col">
          <label class="text-slate-700 mb-1 font-medium text-sm">
            Что будем чистить?
          </label>
          <select
            v-model="location"
            class="rounded-full border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400"
          >
            <option>Не выбрано</option>
            <option>Диван</option>
            <option>Кресло</option>
            <option>Диван + 2 кресла</option>
            <option>Матрас</option>
            <option>Ковер</option>
            <option>Другое</option>
          </select>
        </div>

        <!-- Вид уборки -->
        <div class="flex flex-col">
          <label class="text-slate-700 mb-1 font-medium text-sm"
            >Какой материал?</label
          >
          <select
            v-model="cleanType"
            class="rounded-full border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400"
          >
            <option>Не выбрано</option>
            <option>Текстиль</option>
            <option>Флок</option>
            <option>Кожзам</option>
            <option>Кожа натуральная</option>
            <option>Шелк</option>
            <option>Гобелен</option>
            <option>Другое</option>
          </select>
        </div>

        <!-- Метраж -->
        <div class="flex flex-col">
          <label class="text-slate-700 mb-1 font-medium text-sm">
            Посадочных мест
          </label>
          <select
            v-model="square"
            class="rounded-full border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400"
          >
            <option>Не выбрано</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>Другое</option>
          </select>
        </div>

        <!-- Телефон -->
        <div class="flex flex-col">
          <label class="text-slate-700 mb-1 font-medium text-sm">
            Ваш номер телефона <span class="text-red-500">*</span>
          </label>
          <input
            type="tel"
            v-model="phone"
            placeholder="+7 (___) ___-__-__"
            required
            class="rounded-full border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400"
          />
        </div>

        <!-- Кнопка -->
        <div class="flex items-end">
          <button
            type="submit"
            class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full py-3 px-6 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Получить расчёт
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const location = ref("Не выбрано");
const cleanType = ref("Не выбрано");
const square = ref("Не выбрано");
const phone = ref("");

// Определяем текущую категорию (Ростов или область)
const currentCategory = ref("dry_cleaning_rostov"); // По умолчанию Ростов

// Функция для определения категории
const determineCategory = () => {
  if (process.client) {
    // Проверяем URL или заголовок страницы
    const currentUrl = window.location.pathname;
    const pageTitle = document.title || "";

    if (
      currentUrl.includes("furniture-region") ||
      pageTitle.includes("Ростовская область")
    ) {
      currentCategory.value = "dry_cleaning_region";
    } else {
      currentCategory.value = "dry_cleaning_rostov"; // По умолчанию Ростов
    }

    console.log(
      "Определена категория для калькулятора химчистки:",
      currentCategory.value
    );
  }
};

onMounted(() => {
  determineCategory();
});

const submitCalculation = async () => {
  if (!phone.value) {
    alert("Пожалуйста, введите номер телефона");
    return;
  }

  try {
    // Формируем данные для отправки
    const formData = {
      name: "Запрос на расчет стоимости химчистки",
      phone: phone.value.trim(),
      service_category: currentCategory.value, // Используем определенную категорию
      source_page: "Калькулятор стоимости для химчистки",
      comment: "",
      dry_cleaning_details: {
        item_type: location.value || "Не указано",
        material: cleanType.value || "Не указано",
        seats_count: square.value || "Не указано",
      },
    };

    console.log("Отправка запроса на расчет химчистки:", formData);

    // Отправляем через API endpoint
    const response = await $fetch("/api/callbacks", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Запрос на расчет успешно отправлен:", response);

    // Уведомление об успехе
    alert(
      "Спасибо! Мы свяжемся с вами в течение 15 минут для точного расчета стоимости химчистки."
    );

    // Сбрасываем форму
    location.value = "Не выбрано";
    cleanType.value = "Не выбрано";
    square.value = "Не выбрано";
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
  }
};
</script>
