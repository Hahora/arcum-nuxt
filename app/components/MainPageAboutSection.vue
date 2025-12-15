<template>
  <section class="bg-white py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center"
      >
        <!-- Левая часть -->
        <div class="relative flex justify-center">
          <div
            class="w-96 h-96 lg:w-[28rem] lg:h-[28rem] clip-path-pentagon-flipped overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src="/images/main3(2).webp"
              alt="Профессиональная клининговая команда"
              class="w-full h-full object-cover"
              placeholder
              loading="lazy"
            />
          </div>
        </div>

        <!-- Правая часть -->
        <div class="space-y-8">
          <!-- Заголовок -->
          <div class="space-y-5">
            <h2
              class="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
            >
              Профессиональная уборка,<br />
              <span class="text-cyan-400">как она должна быть</span>
            </h2>

            <p class="text-lg text-gray-600 leading-relaxed">
              Мы создаём пространство, в котором приятно жить. Наш подход
              основан на внимании к деталям, честности и уважении к вашему дому.
              Каждый сотрудник проходит обучение, а все процессы строго отлажены
              — чтобы вы могли получить идеально чистый результат без лишних
              забот.
            </p>
          </div>

          <!-- Преимущества -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex items-start space-x-4">
              <div
                class="icon-container-large bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:check-circle"
                  class="icon-large text-cyan-400"
                />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-2">
                  Поддержка и развитие
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Каждый специалист регулярно проходит повышение квалификации,
                  чтобы соответствовать высоким стандартам.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="icon-container-large bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:clipboard-document-check"
                  class="icon-large text-cyan-400"
                />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-2">
                  Чёткое планирование
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Мы заранее определяем объём, задачи и время уборки — без
                  спешки и хаоса.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="icon-container-large bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:light-bulb"
                  class="icon-large text-cyan-400"
                />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-2">
                  Индивидуальный подход
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Подбираем решения под стиль и особенности вашего дома —
                  никакой шаблонности.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="icon-container-large bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:currency-dollar"
                  class="icon-large text-cyan-400"
                />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-2">Честные цены</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Стоимость фиксируется заранее. Никаких скрытых платежей или
                  доплат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Логика компонента если нужна
</script>

<style scoped>
.clip-path-pentagon-flipped {
  clip-path: polygon(0% 25%, 50% 0%, 100% 25%, 100% 100%, 0% 100%);
  transform: scaleX(-1);
}

.icon-container-large {
  width: 4rem;
  height: 4rem;
}

.icon-large {
  width: 2rem;
  height: 2rem;
}
</style>
