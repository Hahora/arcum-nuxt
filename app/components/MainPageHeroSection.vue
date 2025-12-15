<template>
  <section
    class="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 overflow-hidden"
    id="home"
  >
    <!-- Светящееся пятно -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"
      ></div>
    </div>

    <!-- Декоративные фото -->
    <div
      class="absolute left-0 top-0 h-full w-[20%] hidden lg:block opacity-15"
    >
      <img
        src="/images/main1.webp"
        class="w-full h-full object-cover"
        loading="lazy"
        sizes="20vw"
        alt="Пример уборки помещения"
      />
    </div>

    <div
      class="absolute right-0 top-0 h-full w-[20%] hidden lg:block opacity-15"
    >
      <img
        src="/images/main2.webp"
        class="w-full h-full object-cover"
        loading="lazy"
        sizes="20vw"
        alt="Профессиональный клининг"
      />
    </div>

    <!-- Центральный контентер -->
    <div class="relative mx-auto max-w-4xl px-6 z-10 text-center">
      <!-- Навигация сверху - адаптивная -->
      <div class="mb-6">
        <!-- Десктопная версия -->
        <div class="hidden md:flex justify-center space-x-6 text-sm">
          <a
            href="#services"
            @click.prevent="scrollToServices('b2b')"
            class="text-gray-300 hover:text-cyan-400 transition hover:scale-105 duration-200 cursor-pointer"
          >
            Уборка для организаций
          </a>
          <a
            href="#services"
            @click.prevent="scrollToServices('cleaning')"
            class="text-gray-300 hover:text-cyan-400 transition hover:scale-105 duration-200 cursor-pointer"
          >
            Клининг
          </a>
          <a
            href="#services"
            @click.prevent="scrollToServices('furniture')"
            class="text-gray-300 hover:text-cyan-400 transition hover:scale-105 duration-200 cursor-pointer"
          >
            Химчистка
          </a>
          <a
            href="#services"
            @click.prevent="scrollToServices('facade')"
            class="text-gray-300 hover:text-cyan-400 transition hover:scale-105 duration-200 cursor-pointer"
          >
            Фасады
          </a>
        </div>

        <!-- Мобильная версия - сетка 2x2 -->
        <div class="grid grid-cols-2 gap-3 md:hidden max-w-xs mx-auto">
          <button
            @click="scrollToServices('b2b')"
            class="px-3 py-2 text-xs bg-slate-800/50 backdrop-blur border border-slate-600/50 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-lg transition-all duration-200 text-center"
          >
            Для организаций
          </button>
          <button
            @click="scrollToServices('cleaning')"
            class="px-3 py-2 text-xs bg-slate-800/50 backdrop-blur border border-slate-600/50 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-lg transition-all duration-200 text-center"
          >
            Клининг
          </button>
          <button
            @click="scrollToServices('furniture')"
            class="px-3 py-2 text-xs bg-slate-800/50 backdrop-blur border border-slate-600/50 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-lg transition-all duration-200 text-center"
          >
            Химчистка
          </button>
          <button
            @click="scrollToServices('facade')"
            class="px-3 py-2 text-xs bg-slate-800/50 backdrop-blur border border-slate-600/50 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-lg transition-all duration-200 text-center"
          >
            Фасады
          </button>
        </div>
      </div>

      <!-- Главный заголовок -->
      <h1 class="hero-title">
        <span class="company-top">Клининговая компания</span>
        <span class="arcum-3d">Аркум</span>
      </h1>

      <p class="hero-subtitle">
        Бесплатная консультация, честные цены и гарантированно качественный
        результат.
      </p>

      <!-- Кнопка вызова модального окна -->
      <button
        @click="openCallbackModal"
        class="mt-10 bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto group"
      >
        <span>Заказать звонок</span>
        <span
          class="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        >
          <Icon name="heroicons:phone" class="w-4 h-4 text-slate-900" />
        </span>
      </button>

      <!-- Преимущества - всегда в ряд на мобильных -->
      <div class="grid grid-cols-3 gap-4 mt-14 max-w-2xl mx-auto">
        <div class="text-center">
          <Icon
            name="heroicons:shield-check"
            class="feature-icon text-cyan-400 mx-auto mb-2"
          />
          <p class="text-xs sm:text-sm font-semibold">Гарантия качества</p>
        </div>

        <div class="text-center">
          <Icon
            name="heroicons:clock"
            class="feature-icon text-cyan-400 mx-auto mb-2"
          />
          <p class="text-xs sm:text-sm font-semibold">Работаем 24/7</p>
        </div>

        <div class="text-center">
          <Icon
            name="heroicons:map-pin"
            class="feature-icon text-cyan-400 mx-auto mb-2"
          />
          <p class="text-xs sm:text-sm font-semibold">
            Ростов-на-Дону и область
          </p>
        </div>
      </div>
    </div>

    <!-- Модальное окно обратного звонка -->
    <CallbackModal
      v-if="showCallbackModal"
      :isOpen="showCallbackModal"
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

// Функция для открытия модального окна с аналитикой
const openCallbackModal = () => {
  // Отслеживаем клик по кнопке "Заказать звонок"
  trackEvent("callback_button_click", {
    category: "engagement",
    label: "hero_section",
    button_position: "primary",
  });

  trackGoal("callback_interest", {
    category: "funnel",
    step: "interest",
    source: "hero",
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
  console.log("Форма отправлена из Hero секции:", formData);
};

// Функция для плавной прокрутки к секции услуг с аналитикой
const scrollToServices = (serviceType = null) => {
  // Отслеживаем клик по навигационным ссылкам
  trackEvent("hero_navigation_click", {
    category: "navigation",
    label: serviceType || "unknown",
    source: "hero_section",
  });

  if (process.client) {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      // Плавная прокрутка
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Можно добавить логику для выделения конкретной услуги
      if (serviceType) {
        // Небольшая задержка для корректного скролла
        setTimeout(() => {
          console.log("Выбрана услуга:", serviceType);

          // Пример: если нужно открыть определенную вкладку
          const event = new CustomEvent("select-service", {
            detail: { serviceType },
          });
          window.dispatchEvent(event);
        }, 500);
      }
    } else {
      // Если секция services не найдена, прокручиваем к верху
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
};
</script>

<style scoped>
.hero-title {
  line-height: 1;
  margin-bottom: 1.8rem;
}

.company-top {
  display: block;
  margin-bottom: 0.1rem;
  font-size: 2.4rem;
  font-weight: 800;
  color: #e2e8f0;
  text-shadow: 0 0 4px rgba(14, 165, 233, 0.3), 0 0 8px rgba(14, 165, 233, 0.25);
}

/* Адаптивные размеры заголовка */
@media (max-width: 640px) {
  .company-top {
    font-size: 1.8rem;
  }

  .arcum-3d {
    font-size: 3.5rem;
  }
}

@media (max-width: 480px) {
  .company-top {
    font-size: 1.5rem;
  }

  .arcum-3d {
    font-size: 2.8rem;
  }
}

.arcum-3d {
  display: block;
  margin-top: -0.15rem;
  font-size: 5rem;
  font-weight: 900;
  color: #0ea5e9;
  letter-spacing: 1px;
  text-shadow: 1px 1px 0px #003c50, 2px 2px 0px #003245, 3px 3px 0px #002a3b,
    4px 4px 0px #002132, 0 0 25px #0284c7, 0 0 55px #0ea5e9, 0 0 90px #22d3ee;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #cbd5e1;
  max-width: 34rem;
  margin: 0 auto;
}

/* Адаптивный размер подзаголовка */
@media (max-width: 640px) {
  .hero-subtitle {
    font-size: 1rem;
    max-width: 28rem;
  }
}

/* ---- Адаптивные иконки   еимуществ ---- */
.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.35));
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* На мобильных иконки меньше */
@media (max-width: 640px) {
  .feature-icon {
    width: 2rem;
    height: 2rem;
  }
}

.feature-icon:hover {
  transform: scale(1.15);
  filter: drop-shadow(0 0 12px rgba(14, 165, 233, 0.55));
}

/* Анимация для якорных ссылок - только для десктопа */
@media (min-width: 768px) {
  a {
    position: relative;
    overflow: hidden;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #22d3ee;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }
}

/* Стили для мобильных кнопок навигации */
@media (max-width: 767px) {
  .grid-cols-2 button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
