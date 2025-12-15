<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
          Свяжитесь <span class="text-cyan-400">с нами</span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Мы всегда на связи и будем рады помочь вам.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Левая колонка -->
        <div class="space-y-8">
          <!-- Адрес -->
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Наш адрес</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              г. Ростов-на-Дону, ул. Вавилова, д. 49
            </p>
          </div>

          <!-- Часы работы -->
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Часы работы</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              Пн–Пт: 08:00 – 23:00<br />
              Сб–Вс: 08:00 – 23:00<br />
              <span class="text-cyan-500 font-semibold">
                Услуги оказываем круглосуточно
              </span>
            </p>
          </div>

          <!-- Телефон -->
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Телефон</h3>
            <a
              href="tel:+79298205321"
              @click="handlePhoneClick"
              class="text-cyan-400 text-2xl font-bold hover:text-cyan-500 transition"
            >
              8 (929) 820-53-21
            </a>
          </div>

          <!-- Почта -->
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Email</h3>
            <a
              href="mailto:arkum161@yandex.ru"
              @click="handleEmailClick"
              class="text-cyan-400 text-lg font-semibold hover:text-cyan-500 transition"
            >
              arkum161@yandex.ru
            </a>
          </div>

          <!-- Соц сети -->
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">
              Мы в соцсетях
            </h3>

            <div class="flex space-x-4">
              <!-- VK -->
              <a
                href="https://vk.com/klining_rostov"
                @click="handleSocialClick('vk')"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Icon name="simple-icons:vk" class="w-6 h-6 text-cyan-400" />
              </a>

              <!-- Telegram -->
              <a
                href="https://t.me/arkum_161"
                @click="handleSocialClick('telegram')"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Icon
                  name="simple-icons:telegram"
                  class="w-6 h-6 text-cyan-400"
                />
              </a>

              <!-- WhatsApp -->
              <a
                href="https://wa.me/79298205321"
                @click="handleSocialClick('whatsapp')"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Icon
                  name="simple-icons:whatsapp"
                  class="w-6 h-6 text-cyan-400"
                />
              </a>

              <!-- Viber -->
              <a
                href="viber://chat?number=79298205321"
                @click="handleSocialClick('viber')"
                class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Icon name="simple-icons:viber" class="w-6 h-6 text-cyan-400" />
              </a>
            </div>
          </div>

          <!-- Кнопка -->
          <button
            @click="openCallbackModal"
            class="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-10 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Обратный звонок
          </button>
        </div>

        <!-- Правая колонка — обновленная карта -->
        <div class="w-full overflow-hidden rounded-3xl shadow-xl">
          <div class="relative w-full h-[650px] overflow-hidden">
            <a
              href="https://yandex.ru/maps/39/rostov-na-donu/?utm_medium=mapframe&utm_source=maps"
              style="
                color: #eee;
                font-size: 12px;
                position: absolute;
                top: 0px;
                z-index: 10;
                padding: 4px 8px;
              "
            >
              Ростов‑на‑Дону
            </a>

            <a
              href="https://yandex.ru/maps/39/rostov-na-donu/house/ulitsa_vavilova_49/Z0AYcA9iSkIAQFptfX53dHtjZQ==/?ll=39.682739%2C47.265639&utm_medium=mapframe&utm_source=maps&z=19"
              style="
                color: #eee;
                font-size: 12px;
                position: absolute;
                top: 14px;
                z-index: 10;
                padding: 4px 8px;
              "
            >
              Улица Вавилова, 49 на карте Ростова‑на‑Дону — Яндекс Карты
            </a>

            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.682739%2C47.265639&mode=whatshere&whatshere%5Bpoint%5D=39.682377%2C47.265701&whatshere%5Bzoom%5D=17&z=19"
              width="560"
              height="400"
              frameborder="0"
              allowfullscreen="true"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
              "
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
      :preselectedService="''"
      @close="closeCallbackModal"
      @submit="handleCallbackSubmit"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";

// Analytics
const { trackEvent, trackGoal } = useAnalytics();

// Реф для управления модальным окном
const showCallbackModal = ref(false);

// Analytics методы
const handlePhoneClick = () => {
  // Отслеживаем клик по телефону в секции контактов (ВАЖНАЯ ЦЕЛЬ!)
  trackGoal("phone_call_attempt", {
    category: "conversion",
    label: "contacts_section_phone",
    value: 100, // Высокая ценность - прямой контакт
    source: "contacts_section",
  });

  trackEvent("PHONE_CLICK", {
    category: "contact",
    label: "contacts_section",
    phone_number: "+79298205321",
  });
};

const handleEmailClick = () => {
  // Отслеживаем клик по email
  trackEvent("email_click", {
    category: "contact",
    label: "contacts_section",
    email: "arkum161@yandex.ru",
  });
};

const handleSocialClick = (socialNetwork) => {
  // Отслеживаем клики по соцсетям
  trackEvent("social_link_click", {
    category: "social_engagement",
    label: socialNetwork,
    source: "contacts_section",
  });
};

// Функция для открытия модального окна
const openCallbackModal = () => {
  // Отслеживаем клик по кнопке обратного звонка
  trackEvent("callback_button_click", {
    category: "engagement",
    label: "contacts_section",
    button_position: "contacts_section",
  });

  trackGoal("callback_interest", {
    category: "funnel",
    step: "interest",
    source: "contacts_section",
  });

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
  console.log("Форма отправлена из секции контактов:", formData);
  // Проверяем, что service_category правильный
  if (formData.service_category !== "general_form") {
    console.log('ВНИМАНИЕ: service_category должен быть "general_form"');
  }
};
</script>

<style scoped></style>
