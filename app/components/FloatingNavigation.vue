<template>
  <!-- Стрелка "Наверх" слева -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-x-4 scale-90"
    enter-to-class="opacity-100 translate-x-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0 scale-100"
    leave-to-class="opacity-0 -translate-x-4 scale-90"
  >
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed left-6 bottom-6 z-40 w-12 h-12 bg-cyan-400 hover:bg-cyan-500 text-slate-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
      title="Наверх"
    >
      <Icon
        name="heroicons:arrow-up"
        class="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  </Transition>

  <!-- Социальные сети справа -->
  <div class="fixed right-6 bottom-6 z-40" ref="socialContainer">
    <!-- Основная кнопка соцсетей -->
    <div
      class="relative group"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Панель с соцсетями -->
      <Transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 translate-y-4 scale-90"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-4 scale-90"
      >
        <div
          v-if="showSocials"
          class="absolute bottom-16 right-0 bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700 min-w-[200px]"
        >
          <!-- Заголовок -->
          <div class="text-center mb-4">
            <h3 class="text-white font-semibold text-sm mb-1">Мы в соцсетях</h3>
            <div class="w-12 h-0.5 bg-cyan-400 mx-auto"></div>
          </div>

          <!-- Социальные сети -->
          <div class="space-y-3">
            <a
              v-for="(social, index) in socialLinks"
              :key="social.name"
              :href="social.href"
              @click="handleSocialClick"
              class="flex items-center space-x-3 p-2 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300 group/social transform hover:scale-105"
              :style="{ 'animation-delay': `${index * 50}ms` }"
            >
              <div
                class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover/social:bg-cyan-900/30 transition-colors"
              >
                <Icon :name="social.icon" class="w-4 h-4" />
              </div>
              <span class="text-sm font-medium">{{ social.label }}</span>
            </a>
          </div>

          <!-- Стрелочка указывающая на кнопку -->
          <div
            class="absolute -bottom-2 right-6 w-4 h-4 bg-slate-900 border-r border-b border-slate-700 transform rotate-45"
          ></div>
        </div>
      </Transition>

      <!-- Основная кнопка -->
      <button
        @click="handleButtonClick"
        class="w-12 h-12 bg-slate-900 hover:bg-slate-800 text-cyan-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-slate-700 hover:border-cyan-400/50 group/btn hover:scale-110 active:scale-95"
        title="Социальные сети"
      >
        <Icon
          :name="showSocials ? 'heroicons:x-mark' : 'heroicons:share'"
          class="w-5 h-5 transition-all duration-300"
          :class="showSocials ? 'rotate-90' : 'group-hover/btn:rotate-12'"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Реактивные данные
const showScrollTop = ref(false);
const showSocials = ref(false);
const socialContainer = ref(null);
const isTouchDevice = ref(false);

// Социальные сети
const socialLinks = [
  {
    name: "vk",
    label: "ВКонтакте",
    href: "https://vk.com/klining_rostov",
    icon: "simple-icons:vk",
  },
  {
    name: "telegram",
    label: "Telegram",
    href: "https://t.me/arkum_161",
    icon: "simple-icons:telegram",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/79298205321",
    icon: "simple-icons:whatsapp",
  },
  {
    name: "viber",
    label: "Viber",
    href: "viber://chat?number=79298205321",
    icon: "simple-icons:viber",
  },
];

// Определение тач-устройства
const detectTouchDevice = () => {
  isTouchDevice.value =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
};

// Функция для скролла наверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Обработчики для соцсетей
const handleButtonClick = () => {
  if (isTouchDevice.value) {
    showSocials.value = !showSocials.value;
  }
};

const handleMouseEnter = () => {
  if (!isTouchDevice.value) {
    showSocials.value = true;
  }
};

const handleMouseLeave = () => {
  if (!isTouchDevice.value) {
    showSocials.value = false;
  }
};

const handleSocialClick = () => {
  // На мобильных закрываем панель после клика по соцсети
  if (isTouchDevice.value) {
    setTimeout(() => {
      showSocials.value = false;
    }, 100);
  }
};

// Закрытие панели при клике вне её (только для тач-устройств)
const handleClickOutside = (event) => {
  if (
    isTouchDevice.value &&
    showSocials.value &&
    socialContainer.value &&
    !socialContainer.value.contains(event.target)
  ) {
    showSocials.value = false;
  }
};

// Обработчик скролла
const handleScroll = () => {
  // Показываем кнопку "наверх" если прокрутили больше чем на высоту экрана
  showScrollTop.value = window.scrollY > window.innerHeight;

  // Закрываем соцсети при скролле на мобильных
  if (isTouchDevice.value && showSocials.value) {
    showSocials.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  detectTouchDevice();
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
  // Проверяем начальное состояние
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Анимация появления соцсетей */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.space-y-3 > * {
  animation: slideInUp 0.3s ease-out forwards;
  opacity: 0;
}

.space-y-3 > *:nth-child(1) {
  animation-delay: 0ms;
}
.space-y-3 > *:nth-child(2) {
  animation-delay: 50ms;
}
.space-y-3 > *:nth-child(3) {
  animation-delay: 100ms;
}
.space-y-3 > *:nth-child(4) {
  animation-delay: 150ms;
}
.space-y-3 > *:nth-child(5) {
  animation-delay: 200ms;
}
</style>
