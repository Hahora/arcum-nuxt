<template>
  <footer
    class="bg-slate-900 text-gray-300 py-12 md:py-16 mt-20 border-t border-slate-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Основной контент футера -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        <!-- Логотип и описание - на всю ширину на мобиле -->
        <div class="md:col-span-3 lg:col-span-4">
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-15 h-15 sm:w-12 sm:h-12 flex items-center justify-center"
            >
              <img src="/logo.png" class="w-15 h-15 text-slate-900" />
            </div>
            <span class="text-xl sm:text-2xl font-bold text-white">Arkum</span>
          </div>

          <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
            Профессиональные клининговые услуги для дома и бизнеса. Чистота,
            порядок и комфорт — наша работа.
          </p>

          <!-- Социальные сети для мобильной версии -->
          <div class="mt-6 md:hidden">
            <h3 class="text-lg font-semibold text-white mb-3">Мы в соцсетях</h3>
            <div class="flex space-x-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :title="social.title"
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition transform hover:scale-110"
              >
                <Icon :name="social.icon" class="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        <!-- Навигация и Услуги в одной строке на мобиле -->
        <div class="md:col-span-5 lg:col-span-5 grid grid-cols-2 gap-6">
          <!-- Навигация -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">Навигация</h3>
            <ul class="space-y-2">
              <li v-for="item in currentNavigation" :key="item.id">
                <a
                  :href="item.href"
                  class="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Услуги -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">Наши услуги</h3>
            <ul class="space-y-2">
              <li v-for="service in services" :key="service.id">
                <a
                  :href="service.href"
                  class="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  {{ service.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Контакты и Соцсети на десктопе -->
        <div class="md:col-span-4 lg:col-span-3 space-y-6">
          <!-- Контакты -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">Контакты</h3>

            <div class="space-y-3">
              <div class="flex items-start space-x-2">
                <Icon
                  name="heroicons:map-pin"
                  class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                />
                <p class="text-gray-400 text-sm sm:text-base">
                  г. Ростов-на-Дону<br />ул. Вавилова, д. 49
                </p>
              </div>

              <div class="flex items-start space-x-2">
                <Icon
                  name="heroicons:clock"
                  class="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                />
                <p class="text-gray-400 text-sm sm:text-base">
                  Пн–Вс: 08:00 – 23:00<br />
                  <span class="text-cyan-400 font-semibold"
                    >Круглосуточно по вызову</span
                  >
                </p>
              </div>

              <div class="pt-2">
                <a
                  href="tel:+79298205321"
                  class="flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200 group"
                >
                  <div
                    class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors"
                  >
                    <Icon name="heroicons:phone" class="w-4 h-4" />
                  </div>
                  <span class="text-sm sm:text-base">8 (929) 820-53-21</span>
                </a>

                <a
                  href="mailto:arkum161@yandex.ru"
                  class="flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200 mt-2 group"
                >
                  <div
                    class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-900/30 transition-colors"
                  >
                    <Icon name="heroicons:envelope" class="w-4 h-4" />
                  </div>
                  <span class="text-sm sm:text-base">arkum161@yandex.ru</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Социальные сети для десктопа -->
          <div class="hidden md:block">
            <h3 class="text-lg font-semibold text-white mb-3">Мы в соцсетях</h3>
            <div class="flex space-x-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :title="social.title"
                class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition transform hover:scale-110"
              >
                <Icon :name="social.icon" class="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Нижняя часть футера -->
      <div class="mt-8 md:mt-12 pt-6 border-t border-slate-700">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <!-- Политика конфиденциальности -->
          <a
            href="/policy"
            class="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
          >
            Политика конфиденциальности
          </a>

          <!-- Копирайт -->
          <div class="text-gray-500 text-sm">
            © 2025 Arkum. Все права защищены.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Получаем текущий маршрут
const route = useRoute();

// Конфигурации навигации для разных страниц
const navigationConfigs = {
  // Главная страница
  home: [
    { id: "about", label: "О нас", href: "#about" },
    { id: "advantages", label: "Преимущества", href: "#advantages" },
    { id: "gallery", label: "Фотогаллерея", href: "#gallery" },
    { id: "reviews", label: "Отзывы", href: "#reviews" },
    { id: "clients", label: "Нам доверяют", href: "#clients" },
    { id: "contacts", label: "Контакты", href: "#contacts" },
  ],

  // Страницы клининга (/clean, /clean-region)
  cleaning: [
    { id: "services", label: "Услуги", href: "#services" },
    { id: "results", label: "Результаты работы", href: "#results" },
    { id: "price", label: "Цена", href: "#price" },
    { id: "faq", label: "Ответы на вопросы", href: "#faq" },
    { id: "reviews", label: "Отзывы", href: "#reviews" },
    { id: "clients", label: "Нам доверяют", href: "#clients" },
    { id: "contacts", label: "Контакты", href: "#contacts" },
  ],

  // Страница B2B (/b2b)
  b2b: [
    { id: "services", label: "Услуги", href: "#services" },
    { id: "results", label: "Результаты работы", href: "#results" },
    { id: "price", label: "Цена", href: "#price" },
    { id: "faq", label: "Ответы на вопросы", href: "#faq" },
    { id: "reviews", label: "Отзывы", href: "#reviews" },
    { id: "clients", label: "Нам доверяют", href: "#clients" },
    { id: "contacts", label: "Контакты", href: "#contacts" },
  ],

  // Страница дезинфекции (/facade)
  facade: [
    { id: "services", label: "Услуги", href: "#services" },
    { id: "price", label: "Цена", href: "#price" },
    { id: "reviews", label: "Отзывы", href: "#reviews" },
    { id: "clients", label: "Нам доверяют", href: "#clients" },
    { id: "contacts", label: "Контакты", href: "#contacts" },
  ],

  // Страницы химчистки мебели (/furniture, /furniture-region)
  furniture: [
    { id: "services", label: "Услуги", href: "#services" },
    { id: "results", label: "Результаты работы", href: "#results" },
    { id: "price", label: "Цена", href: "#price" },
    { id: "faq", label: "Ответы на вопросы", href: "#faq" },
    { id: "order", label: "Как заказать?", href: "#order" },
    { id: "reviews", label: "Отзывы", href: "#reviews" },
    { id: "clients", label: "Нам доверяют", href: "#clients" },
    { id: "contacts", label: "Контакты", href: "#contacts" },
  ],
};

// Определяем текущую навигацию на основе маршрута
const currentNavigation = computed(() => {
  const path = route.path;

  if (path === "/") {
    return navigationConfigs.home;
  } else if (path === "/clean" || path === "/clean-region") {
    return navigationConfigs.cleaning;
  } else if (path === "/b2b") {
    return navigationConfigs.b2b;
  } else if (path === "/facade") {
    return navigationConfigs.facade;
  } else if (path === "/furniture" || path === "/furniture-region") {
    return navigationConfigs.furniture;
  }

  // По умолчанию возвращаем навигацию главной страницы
  return navigationConfigs.home;
});

// Услуги (одинаковые для всех страниц)
const services = [
  { id: "org-cleaning", label: "Уборка для организаций", href: "/b2b" },
  { id: "rostov-cleaning", label: "Клининг Ростов", href: "/clean" },
  { id: "region-cleaning", label: "Клининг область", href: "/clean-region" },
  { id: "rostov-dryclean", label: "Химчистка Ростов", href: "/furniture" },
  {
    id: "region-dryclean",
    label: "Химчистка область",
    href: "/furniture-region",
  },
  { id: "facade", label: "Фасады", href: "/facade" },
];

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
</script>

<style scoped>
/* Анимация при наведении на ссылки */
a {
  transition: all 0.2s ease-in-out;
}

/* Улучшение отступов для мобильных устройств */
@media (max-width: 768px) {
  footer {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .grid > div {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
}
</style>
