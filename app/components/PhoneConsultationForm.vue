<template>
  <section class="bg-white py-14 lg:py-20">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
          Получить <span class="text-cyan-400">консультацию</span> по телефону
        </h2>
        <p class="text-gray-600 mt-3 text-lg">
          Оставьте заявку и наш специалист свяжется с вами
        </p>
      </div>

      <!-- Форма -->
      <form
        class="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto"
        @submit.prevent="submitForm"
      >
        <div class="space-y-6">
          <!-- Имя -->
          <div class="flex flex-col">
            <label class="text-slate-700 mb-2 font-medium text-sm">
              Ваше имя <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="name"
              placeholder="Введите ваше имя"
              required
              class="rounded-full border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
            />
          </div>

          <!-- Телефон -->
          <div class="flex flex-col">
            <label class="text-slate-700 mb-2 font-medium text-sm">
              Номер телефона <span class="text-red-500">*</span>
            </label>
            <input
              type="tel"
              v-model="phone"
              placeholder="+7 (___) ___-__-__"
              required
              class="rounded-full border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
            />
          </div>

          <!-- Комментарий -->
          <div class="flex flex-col">
            <label class="text-slate-700 mb-2 font-medium text-sm">
              Комментарий
            </label>
            <textarea
              v-model="comment"
              placeholder="Расскажите о ваших пожеланиях или задайте вопрос по мойке фасадов..."
              rows="4"
              class="rounded-2xl border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none"
            ></textarea>
          </div>

          <!-- Кнопка -->
          <div class="pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-300 text-white font-semibold rounded-full py-4 px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              <Icon
                v-if="isSubmitting"
                name="heroicons:arrow-path"
                class="w-5 h-5 animate-spin"
              />
              <Icon v-else name="heroicons:phone" class="w-5 h-5" />
              <span>{{
                isSubmitting ? "Отправляем..." : "Получить консультацию"
              }}</span>
            </button>
          </div>

          <!-- Дополнительная информация -->
          <div class="text-center pt-2">
            <p class="text-sm text-gray-500">
              Нажимая кнопку, вы соглашаетесь с
              <a href="#" class="text-cyan-500 hover:text-cyan-600 underline">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const comment = ref("");
const isSubmitting = ref(false);

const submitForm = async () => {
  if (!name.value || !phone.value) {
    alert("Пожалуйста, заполните обязательные поля");
    return;
  }

  isSubmitting.value = true;

  try {
    // Формируем данные для отправки
    const formData = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      service_category: "facades", // Категория для фасадов
      source_page: "Консультация по фасадам",
      comment: comment.value.trim() || "",
      cleaning_details: {
        location_type: "Окна и фасады",
        cleaning_type: "Консультация по мойке фасадов",
        area_size: "Не указано",
      },
    };

    console.log("Отправка заявки на консультацию по фасадам:", formData);

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
    alert(
      "Спасибо! Мы свяжемся с вами в ближайшее время для консультации по мойке фасадов."
    );

    // Очистка формы
    name.value = "";
    phone.value = "";
    comment.value = "";
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
</script>
