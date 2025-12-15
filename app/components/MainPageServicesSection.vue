<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Наши <span class="text-cyan-400">услуги</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Профессиональные клининговые решения для дома и бизнеса. Работаем
          быстро, качественно и с гарантией результата.
        </p>
      </div>

      <!-- Сетка услуг -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Уборка для организаций -->
        <div
          class="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex flex-col h-full">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/images/main-serv/main4-serv.webp"
                alt="Уборка для организаций"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder
                loading="lazy"
              />

              <div class="absolute bottom-4 left-6">
                <h3
                  class="text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                >
                  Уборка для организаций
                </h3>
              </div>
            </div>

            <div class="p-6 flex-grow">
              <!-- Категория -->
              <span
                class="inline-block bg-cyan-400/20 text-cyan-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              >
                Коммерческая уборка
              </span>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Комплексная уборка офисов и коммерческих помещений. Поддерживаем
                чистоту, создавая комфортную рабочую атмосферу.
              </p>

              <NuxtLink to="/b2b">
                <button
                  class="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Подробнее</span>
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Химчистка мебели -->
        <div
          class="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex flex-col h-full">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/images/main-serv/main2-serv.webp"
                alt="Химчистка мебели"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder
                loading="lazy"
              />

              <div class="absolute bottom-4 left-6">
                <h3
                  class="text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                >
                  Химчистка мебели
                </h3>
              </div>
            </div>

            <div class="p-6 flex-grow">
              <!-- Категория -->
              <span
                class="inline-block bg-cyan-400/20 text-cyan-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              >
                Чистка и восстановление
              </span>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Глубокая очистка мягкой мебели. Удаляем запахи, трудные пятна и
                аллергенные частицы.
              </p>

              <div class="grid grid-cols-2 gap-3">
                <NuxtLink to="/furniture">
                  <button
                    class="w-full bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center space-x-2"
                  >
                    <Icon name="heroicons:map-pin" class="w-4 h-4" />
                    <span>В Ростове</span>
                  </button>
                </NuxtLink>
                <NuxtLink to="/furniture-region">
                  <button
                    class="w-full bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center space-x-2"
                  >
                    <Icon name="heroicons:map-pin" class="w-4 h-4" />
                    <span>В области</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Клининговые услуги -->
        <div
          class="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex flex-col h-full">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/images/main-serv/main1-serv.webp"
                alt="Клининговые услуги"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder
                loading="lazy"
              />

              <div class="absolute bottom-4 left-6">
                <h3
                  class="text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                >
                  Клининговые услуги
                </h3>
              </div>
            </div>

            <div class="p-6 flex-grow">
              <!-- Категория -->
              <span
                class="inline-block bg-cyan-400/20 text-cyan-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              >
                Уборка помещений
              </span>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Профессиональная уборка квартир и домов: регулярная,
                поддерживающая, генеральная и после ремонта.
              </p>

              <div class="grid grid-cols-2 gap-3">
                <NuxtLink to="/clean">
                  <button
                    class="w-full bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center space-x-2"
                  >
                    <Icon name="heroicons:map-pin" class="w-4 h-4" />
                    <span>В Ростове</span>
                  </button>
                </NuxtLink>
                <NuxtLink to="/clean-region">
                  <button
                    class="w-full bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center space-x-2"
                  >
                    <Icon name="heroicons:map-pin" class="w-4 h-4" />
                    <span>В области</span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Услуги дезинфекции -->
        <div
          class="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex flex-col h-full">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/images/main-serv/main3-serv.webp"
                alt="Услуги дезинфекции"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder
                loading="lazy"
              />

              <div class="absolute bottom-4 left-6">
                <h3
                  class="text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                >
                  Мойки фасадов
                </h3>
              </div>
            </div>

            <div class="p-6 flex-grow">
              <!-- Категория -->
              <span
                class="inline-block bg-cyan-400/20 text-cyan-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              >
                Мойка и очистка фасадов
              </span>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Профессиональная очистка наружных стен зданий от грязи, пыли,
                налёта и атмосферных загрязнений.
              </p>

              <NuxtLink to="/facade">
                <button
                  class="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Подробнее</span>
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* ничего лишнего не нужно */
</style>
