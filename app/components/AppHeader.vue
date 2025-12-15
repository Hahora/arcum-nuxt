<template>
  <header class="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Логотип и название слева -->
        <div class="flex items-center space-x-2">
          <NuxtLink href="/" class="flex items-center space-x-2">
            <div class="w-20 h-20 flex items-center justify-center">
              <img src="/logo.png" class="w-15 h-14 text-slate-900" />
            </div>
          </NuxtLink>
        </div>

        <!-- Навигация по центру -->
        <nav class="hidden lg:flex items-center space-x-6">
          <!-- Выпадающее меню "Наши услуги" (только на главной) -->
          <div v-if="currentMenuConfig.services" class="relative group">
            <button
              class="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-sm"
            >
              <span>{{ currentMenuConfig.services.label }}</span>
              <Icon
                name="heroicons:chevron-down"
                class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <!-- Выпадающий список -->
            <div
              class="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100"
            >
              <div class="py-2">
                <a
                  v-for="service in currentMenuConfig.services.children"
                  :key="service.id"
                  :href="service.href"
                  class="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span>{{ service.label }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Остальные пункты меню -->
          <a
            v-for="item in currentMenuConfig.mainMenu"
            :key="item.id"
            :href="item.href"
            class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm whitespace-nowrap"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Правая часть -->
        <div class="flex items-center space-x-3">
          <!-- Кнопка обратной связи для планшетов и телефонов -->
          <button
            @click="callbackModal.openCallbackModal"
            class="lg:hidden bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-1"
          >
            <Icon name="heroicons:chat-bubble-left-right" class="w-3 h-3" />
            <span>Заказать звонок</span>
          </button>

          <!-- Телефон -->
          <a
            href="tel:+79298295321"
            class="hidden md:flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <Icon name="heroicons:phone" class="w-3 h-3" />
            <span class="text-xs">8 (929) 820-53-21</span>
          </a>

          <!-- Социальные сети -->
          <div class="hidden md:flex items-center space-x-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              class="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              :title="social.title"
            >
              <Icon :name="social.icon" class="w-4 h-4" />
            </a>
          </div>

          <!-- Мобильное меню -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative"
          >
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-5 h-5 transition-transform duration-300"
              :class="isMobileMenuOpen ? 'rotate-90' : 'rotate-0'"
            />
          </button>
        </div>
      </div>

      <!-- Мобильное меню -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden fixed top-16 left-0 right-0 bg-slate-800 border-t border-slate-700 shadow-lg"
        >
          <div class="py-4 px-8 space-y-4">
            <!-- Мобильное выпадающее меню -->
            <div
              v-if="currentMenuConfig.services"
              class="border-b border-slate-700 pb-4"
            >
              <button
                @click="isServicesOpen = !isServicesOpen"
                class="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <span class="font-medium">{{
                  currentMenuConfig.services.label
                }}</span>
                <Icon
                  :name="
                    isServicesOpen
                      ? 'heroicons:chevron-up'
                      : 'heroicons:chevron-down'
                  "
                  class="w-4 h-4 transition-transform duration-300"
                  :class="isServicesOpen ? 'rotate-180' : 'rotate-0'"
                />
              </button>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="isServicesOpen"
                  class="mt-3 space-y-2 pl-4 overflow-hidden"
                >
                  <a
                    v-for="service in currentMenuConfig.services.children"
                    :key="service.id"
                    :href="service.href"
                    class="flex items-center space-x-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Icon
                      :name="service.icon || 'heroicons:check'"
                      class="w-4 h-4"
                    />
                    <span>{{ service.label }}</span>
                  </a>
                </div>
              </Transition>
            </div>

            <!-- Остальные пункты меню -->
            <a
              v-for="item in currentMenuConfig.mainMenu"
              :key="item.id"
              :href="item.href"
              class="block py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              {{ item.label }}
            </a>

            <!-- Телефон в мобильном меню -->
            <div class="pt-4 border-t border-slate-700">
              <a
                href="tel:+79298205321"
                class="flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200"
              >
                <Icon name="heroicons:phone" class="w-5 h-5" />
                <span>8 (929) 820-53-21</span>
              </a>
            </div>

            <!-- Социальные сети в мобильном меню -->
            <div class="flex items-center space-x-4 pt-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                :title="social.title"
              >
                <Icon :name="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
// Получаем текущий маршрут
const route = useRoute();

const callbackModal = inject("callbackModal");

// Конфигурации меню для разных страниц
const menuConfigs = {
  // Главная страница
  home: {
    services: {
      id: "services",
      label: "Наши услуги",
      children: [
        {
          id: "org-cleaning",
          label: "Уборка для организаций",
          href: "/b2b",
        },
        {
          id: "rostov-cleaning",
          label: "Клининг Ростов",
          href: "/clean",
        },
        {
          id: "region-cleaning",
          label: "Клининг область",
          href: "/clean-region",
        },
        {
          id: "rostov-dryclean",
          label: "Химчистка Ростов",
          href: "/furniture",
        },
        {
          id: "region-dryclean",
          label: "Химчистка область",
          href: "/furniture-region",
        },
        {
          id: "facade",
          label: "Фасады",
          href: "/facade",
        },
      ],
    },
    mainMenu: [
      { id: "about", label: "О нас", href: "#about" },
      { id: "advantages", label: "Преимущества", href: "#advantages" },
      { id: "gallery", label: "Фотогаллерея", href: "#gallery" },
      { id: "reviews", label: "Отзывы", href: "#reviews" },
      { id: "clients", label: "Нам доверяют", href: "#clients" },
      { id: "contacts", label: "Контакты", href: "#contacts" },
    ],
  },

  // Страницы клининга (/clean, /clean-region)
  cleaning: {
    services: null,
    mainMenu: [
      { id: "services", label: "Услуги", href: "#services" },
      { id: "results", label: "Результаты работы", href: "#results" },
      { id: "price", label: "Цена", href: "#price" },
      { id: "faq", label: "Ответы на вопросы", href: "#faq" },
      { id: "reviews", label: "Отзывы", href: "#reviews" },
      { id: "clients", label: "Нам доверяют", href: "#clients" },
      { id: "contacts", label: "Контакты", href: "#contacts" },
    ],
  },

  // Страница B2B (/b2b)
  b2b: {
    services: null,
    mainMenu: [
      { id: "services", label: "Услуги", href: "#services" },
      { id: "results", label: "Результаты работы", href: "#results" },
      { id: "price", label: "Цена", href: "#price" },
      { id: "faq", label: "Ответы на вопросы", href: "#faq" },
      { id: "reviews", label: "Отзывы", href: "#reviews" },
      { id: "clients", label: "Нам доверяют", href: "#clients" },
      { id: "contacts", label: "Контакты", href: "#contacts" },
    ],
  },

  // Страница фасады (/facade)
  facade: {
    services: null,
    mainMenu: [
      { id: "services", label: "Услуги", href: "#services" },
      { id: "price", label: "Цена", href: "#price" },
      { id: "reviews", label: "Отзывы", href: "#reviews" },
      { id: "clients", label: "Нам доверяют", href: "#clients" },
      { id: "contacts", label: "Контакты", href: "#contacts" },
    ],
  },

  // Страницы химчистки мебели (/furniture, /furniture-region)
  furniture: {
    services: null,
    mainMenu: [
      { id: "services", label: "Услуги", href: "#services" },
      { id: "results", label: "Результаты работы", href: "#results" },
      { id: "price", label: "Цена", href: "#price" },
      { id: "faq", label: "Ответы на вопросы", href: "#faq" },
      { id: "order", label: "Как заказать?", href: "#order" },
      { id: "reviews", label: "Отзывы", href: "#reviews" },
      { id: "clients", label: "Нам доверяют", href: "#clients" },
      { id: "contacts", label: "Контакты", href: "#contacts" },
    ],
  },
};

// Социальные сети (одинаковые для всех страниц)
const socialLinks = [
  {
    name: "vk",
    label: "ВКонтакте",
    href: "https://vk.com/klining_rostov",
    icon: "simple-icons:vk",
    title: "ВКонтакте",
  },
  {
    name: "telegram",
    label: "Telegram",
    href: "https://t.me/arkum_161",
    icon: "simple-icons:telegram",
    title: "Telegram",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/79298205321",
    icon: "simple-icons:whatsapp",
    title: "WhatsApp",
  },
  {
    name: "viber",
    label: "Viber",
    href: "viber://chat?number=79298205321",
    icon: "simple-icons:viber",
    title: "Viber",
  },
];

// Реактивные данные
const isMobileMenuOpen = ref(false);
const isServicesOpen = ref(false);

// Определяем текущую конфигурацию меню на основе маршрута
const currentMenuConfig = computed(() => {
  const path = route.path;

  if (path === "/") {
    return menuConfigs.home;
  } else if (path === "/clean" || path === "/clean-region") {
    return menuConfigs.cleaning;
  } else if (path === "/b2b") {
    return menuConfigs.b2b;
  } else if (path === "/facade") {
    return menuConfigs.facade;
  } else if (path === "/furniture" || path === "/furniture-region") {
    return menuConfigs.furniture;
  }

  // По умолчанию возвращаем конфигурацию главной страницы
  return menuConfigs.home;
});

// Функция для переключения мобильного меню
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isServicesOpen.value = false;
  }
};
</script>

<style scoped>
/* Стили для плавного появления выпадающего меню */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
</style>
