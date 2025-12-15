<template>
  <!-- Модальное окно обратного звонка -->
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
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        @click="closeModal"
      >
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-90 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-90 translate-y-4"
        >
          <div
            v-if="isOpen"
            class="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[95vh] overflow-hidden flex flex-col"
            @click.stop
          >
            <!-- Кнопка закрытия -->
            <button
              @click="closeModal"
              class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
            >
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </button>

            <!-- Заголовок - компактный -->
            <div class="text-center pt-6 pb-4 px-6">
              <div
                class="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <Icon name="heroicons:phone" class="w-6 h-6 text-slate-900" />
              </div>
              <h2 class="text-xl font-bold text-slate-900 mb-1">
                Обратный звонок
              </h2>
              <p class="text-gray-600 text-xs">Перезвоним в течение 15 минут</p>
            </div>

            <!-- Прокручиваемый контент -->
            <div class="flex-1 overflow-y-auto">
              <!-- Форма -->
              <form @submit.prevent="submitForm" class="px-6 pb-4">
                <div class="space-y-3">
                  <!-- Имя -->
                  <div>
                    <label
                      class="block text-xs font-medium text-slate-700 mb-1"
                    >
                      Ваше имя <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      v-model="form.name"
                      placeholder="Введите ваше имя"
                      required
                      class="w-full px-3 py-2.5 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm"
                      @input="trackFieldChange('name')"
                    />
                  </div>

                  <!-- Телефон -->
                  <div>
                    <label
                      class="block text-xs font-medium text-slate-700 mb-1"
                    >
                      Номер телефона <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      v-model="form.phone"
                      placeholder="+7 (___) ___-__-__"
                      required
                      class="w-full px-3 py-2.5 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm"
                      @input="trackFieldChange('phone')"
                    />
                  </div>

                  <!-- Выбор услуги -->
                  <div>
                    <label
                      class="block text-xs font-medium text-slate-700 mb-1"
                    >
                      Выберите услугу
                    </label>
                    <select
                      v-model="form.service"
                      class="w-full px-3 py-2.5 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 bg-white text-sm"
                      @change="trackFieldChange('service')"
                    >
                      <option value="">Не выбрано</option>
                      <option value="cleaning-rostov">
                        Клининг Ростов-на-Дону
                      </option>
                      <option value="cleaning-region">
                        Клининг Ростовская область
                      </option>
                      <option value="furniture-rostov">
                        Химчистка мебели Ростов
                      </option>
                      <option value="furniture-region">
                        Химчистка мебели область
                      </option>
                      <option value="b2b">Уборка для организаций</option>
                      <option value="facade">Фасады</option>
                    </select>
                  </div>

                  <!-- Подкатегория (если есть) -->
                  <div v-if="form.subcategory">
                    <label
                      class="block text-xs font-medium text-slate-700 mb-1"
                    >
                      Выбранная подкатегория
                    </label>
                    <div
                      class="w-full px-3 py-2.5 border border-gray-300 rounded-full text-gray-700 bg-gray-50 text-sm"
                    >
                      {{ form.subcategory }}
                    </div>
                  </div>

                  <!-- Комментарий -->
                  <div>
                    <label
                      class="block text-xs font-medium text-slate-700 mb-1"
                    >
                      Комментарий
                    </label>
                    <textarea
                      v-model="form.comment"
                      placeholder="Расскажите о ваших пожеланиях..."
                      rows="2"
                      class="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none text-sm"
                      @input="trackFieldChange('comment')"
                    ></textarea>
                  </div>

                  <!-- Кнопка отправки -->
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-cyan-400 hover:bg-cyan-500 disabled:bg-gray-300 text-slate-900 font-semibold py-2.5 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center space-x-2 text-sm"
                  >
                    <Icon
                      v-if="isSubmitting"
                      name="heroicons:arrow-path"
                      class="w-4 h-4 animate-spin"
                    />
                    <Icon v-else name="heroicons:phone" class="w-4 h-4" />
                    <span>{{
                      isSubmitting ? "Отправляем..." : "Заказать звонок"
                    }}</span>
                  </button>

                  <!-- Согласие -->
                  <p class="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с
                    <NuxtLink
                      to="/policy"
                      class="text-cyan-500 hover:text-cyan-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      политикой конфиденциальности
                    </NuxtLink>
                  </p>
                </div>
              </form>

              <!-- Контакты - компактные -->
              <div class="bg-gray-50 px-6 py-4">
                <div class="text-center mb-3">
                  <h3 class="text-sm font-semibold text-slate-900 mb-2">
                    Или свяжитесь напрямую
                  </h3>
                </div>

                <!-- Телефон -->
                <div class="flex items-center justify-center mb-3">
                  <a
                    href="tel:+79298205321"
                    @click="handlePhoneClick"
                    class="flex items-center space-x-2 text-cyan-500 hover:text-cyan-600 transition-colors duration-200 group"
                  >
                    <div
                      class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-200 transition-colors"
                    >
                      <Icon name="heroicons:phone" class="w-4 h-4" />
                    </div>
                    <span class="font-semibold text-sm">8 (929) 820-53-21</span>
                  </a>
                </div>

                <!-- Социальные сети -->
                <div class="flex items-center justify-center space-x-2">
                  <span class="text-xs text-gray-600 mr-1">Соцсети:</span>
                  <a
                    v-for="social in socialLinks"
                    :key="social.name"
                    :href="social.href"
                    :title="social.title"
                    @click="handleSocialClick(social)"
                    class="w-7 h-7 bg-slate-200 hover:bg-slate-300 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Icon
                      :name="social.icon"
                      class="w-3.5 h-3.5 text-slate-600"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, watchEffect } from "vue";

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  // Пропс для предварительного выбора услуги
  preselectedService: {
    type: String,
    default: "",
  },
  // Пропс для подкатегории услуги
  preselectedSubcategory: {
    type: String,
    default: "",
  },
});

// Emits
const emit = defineEmits(["close", "submit"]);

// Analytics
const { trackEvent, trackGoal } = useAnalytics();

// Реактивные данные
const isSubmitting = ref(false);
const form = ref({
  name: "",
  phone: "",
  service: "",
  subcategory: "",
  comment: "",
});

// Watch для изменения preselectedService
watch(
  () => props.preselectedService,
  (newService) => {
    if (newService) {
      form.value.service = newService;
    }
  }
);

// Watch для изменения preselectedSubcategory
watch(
  () => props.preselectedSubcategory,
  (newSubcategory) => {
    if (newSubcategory) {
      form.value.subcategory = newSubcategory;
    }
  }
);

// Социальные сети
const socialLinks = [
  {
    name: "telegram",
    href: "https://t.me/arkum_161",
    icon: "simple-icons:telegram",
    title: "Telegram",
  },
  {
    name: "whatsapp",
    href: "https://wa.me/79298205321",
    icon: "simple-icons:whatsapp",
    title: "WhatsApp",
  },
  {
    name: "viber",
    href: "viber://chat?number=79298205321",
    icon: "simple-icons:viber",
    title: "Viber",
  },
  {
    name: "vk",
    href: "https://vk.com/klining_rostov",
    icon: "simple-icons:vk",
    title: "ВКонтакте",
  },
];

// Analytics методы
const trackFieldChange = (fieldName) => {
  // Отслеживаем заполнение полей формы
  trackEvent("callback_form_field_change", {
    category: "form_interaction",
    label: fieldName,
    form_type: "callback_modal",
  });
};

const handlePhoneClick = () => {
  // Отслеживаем клик по телефону в модальном окне (ВАЖНАЯ ЦЕЛЬ!)
  trackGoal("phone_call_attempt", {
    category: "conversion",
    label: "callback_modal_phone",
    value: 100, // Высокая ценность - прямой контакт
    source: "modal",
  });

  trackEvent("PHONE_CLICK", {
    category: "contact",
    label: "modal_phone",
    phone_number: "+79298205321",
  });
};

const handleSocialClick = (social) => {
  // Отслеживаем клики по соцсетям
  trackEvent("social_link_click", {
    category: "social_engagement",
    label: social.name,
    source: "callback_modal",
  });
};

// Методы
const closeModal = () => {
  // Отслеживаем закрытие модального окна
  const hasFilledFields =
    form.value.name || form.value.phone || form.value.comment;

  trackEvent("callback_modal_close", {
    category: "modal_interaction",
    label: "callback_modal",
    form_filled: hasFilledFields,
    fields_count: [
      form.value.name,
      form.value.phone,
      form.value.comment,
    ].filter(Boolean).length,
  });

  emit("close");
  // Проверяем что мы на клиенте
  if (process.client && document?.body) {
    document.body.style.overflow = "auto";
  }
};

const submitForm = async () => {
  if (!form.value.name || !form.value.phone) {
    // Отслеживаем ошибку валидации
    trackEvent("callback_form_validation_error", {
      category: "form_error",
      label: "callback_modal",
      missing_fields: [
        !form.value.name ? "name" : null,
        !form.value.phone ? "phone" : null,
      ]
        .filter(Boolean)
        .join(","),
    });

    alert("Пожалуйста, заполните обязательные поля");
    return;
  }

  // Отслеживаем начало отправки формы
  trackEvent("callback_form_submit_start", {
    category: "form_interaction",
    label: "callback_modal",
    has_service: !!form.value.service,
    has_comment: !!form.value.comment.trim(),
    service_type: form.value.service || "not_selected",
  });

  isSubmitting.value = true;

  try {
    // Определяем категорию услуги
    const serviceMap = {
      "cleaning-rostov": "cleaning_rostov",
      "cleaning-region": "cleaning_region",
      "furniture-rostov": "dry_cleaning_rostov",
      "furniture-region": "dry_cleaning_region",
      b2b: "corporate_cleaning",
      facade: "facades",
    };

    const serviceCategory = form.value.service
      ? serviceMap[form.value.service] || "general_form"
      : "general_form";

    // Получаем текущую страницу
    let sourcePage = "клининг Ростов на дону";
    if (process.client) {
      sourcePage = document.title || window.location.pathname;
    }

    // Подготавливаем данные с подкатегорией
    const formData = {
      name: form.value.name.trim(),
      phone: form.value.phone.trim(),
      service_category: serviceCategory,
      source_page: sourcePage,
      comment: form.value.comment?.trim() || "",
    };

    // Добавляем подкатегорию, если она есть
    if (form.value.subcategory?.trim()) {
      formData.subcategory = form.value.subcategory.trim();
    }

    console.log("Отправка формы:", formData);

    // Отправляем через API endpoint
    const response = await $fetch("/api/callbacks", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Успешный ответ:", response);

    // УСПЕШНАЯ ОТПРАВКА - ГЛАВНАЯ ЦЕЛЬ!
    trackGoal("callback_submitted", {
      category: "conversion",
      label: "callback_modal",
      value: 75, // Ценность лида
      service_type: form.value.service || "general",
      source: "modal",
    });

    // Дополнительные события для детальной аналитики
    trackEvent("CALLBACK_SUCCESS", {
      category: "lead_generation",
      source: "modal",
      service_category: serviceCategory,
      has_comment: !!form.value.comment.trim(),
    });

    // Отслеживаем лид
    trackEvent("LEAD_GENERATED", {
      category: "business",
      lead_type: "callback_request",
      source: "modal",
      service: form.value.service || "general",
    });

    // Уведомление об успехе
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");

    // Сбрасываем форму
    form.value = {
      name: "",
      phone: "",
      service: "",
      subcategory: "",
      comment: "",
    };

    // Эмитим событие
    emit("submit", formData);

    // Закрываем модальное окно
    closeModal();
  } catch (error) {
    console.error("Ошибка отправки:", error);

    // Отслеживаем ошибку отправки
    trackEvent("callback_form_error", {
      category: "form_error",
      label: "callback_modal",
      error_type: error?.statusCode || "unknown",
      error_message: error?.message || "unknown_error",
    });

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

// Закрытие по Escape
const handleKeydown = (event) => {
  if (event.key === "Escape" && props.isOpen) {
    closeModal();
  }
};

// Отслеживание открытия модального окна
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      // Отслеживаем открытие модального окна
      trackEvent("callback_modal_open", {
        category: "modal_interaction",
        label: "callback_modal",
        preselected_service: props.preselectedService || "none",
        preselected_subcategory: props.preselectedSubcategory || "none",
      });
    }
  }
);

// Блокировка скролла при открытии - с проверкой на клиент
watchEffect(() => {
  if (process.client && document?.body) {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
});

// Lifecycle hooks
onMounted(() => {
  if (process.client) {
    document.addEventListener("keydown", handleKeydown);

    // Устанавливаем предвыбранную услугу при монтировании
    if (props.preselectedService) {
      form.value.service = props.preselectedService;
    }

    // Устанавливаем подкатегорию при монтировании
    if (props.preselectedSubcategory) {
      form.value.subcategory = props.preselectedSubcategory;
    }
  }
});

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener("keydown", handleKeydown);
    if (document?.body) {
      document.body.style.overflow = "auto";
    }
  }
});
</script>
