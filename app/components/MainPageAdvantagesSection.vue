<template>
  <section class="py-16" id="advantages">
    <div class="relative max-w-screen-xl mx-auto px-6">
      <!-- Ticket Shape Card -->
      <div
        class="relative bg-[#0A1A2F] text-white rounded-3xl p-10 shadow-xl advantages-card"
      >
        <!-- Decor left -->
        <div class="ticket-cut left-cut"></div>
        <!-- Decor right -->
        <div class="ticket-cut right-cut"></div>

        <!-- Decorative top accent -->
        <div class="w-16 h-1 bg-cyan-400 rounded-full mb-6"></div>

        <!-- Заголовок -->
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Наши преимущества</h2>

        <!-- Подзаголовок -->
        <p class="text-gray-300 max-w-xl mb-10">
          Мы создаём сервис, на который можно положиться. Работаем быстро,
          честно и профессионально — чтобы вы всегда были уверены в результате.
        </p>

        <!-- Сетка 4 слева — 4 справа -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Левая колонка -->
          <div class="space-y-8">
            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:check-circle" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Гарантия качества</h3>
                <p class="text-gray-300">
                  Каждый объект проходит контроль качества — мы доводим уборку
                  до идеала.
                </p>
              </div>
            </div>

            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:document-text" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Бесплатная оценка</h3>
                <p class="text-gray-300">
                  Честно рассчитываем стоимость и объясняем, что входит в
                  работу.
                </p>
              </div>
            </div>

            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:calendar" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Удобный график</h3>
                <p class="text-gray-300">
                  Работаем в любое удобное время — утром, вечером или в
                  выходные.
                </p>
              </div>
            </div>

            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:user-group" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Вежливые сотрудники</h3>
                <p class="text-gray-300">
                  Наш персонал — вежливые, обученные специалисты с опытом.
                </p>
              </div>
            </div>
          </div>

          <!-- Правая колонка -->
          <div class="space-y-8">
            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:map-pin" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Местные специалисты</h3>
                <p class="text-gray-300">
                  Работаем по всему городу — приезжаем быстро, без задержек.
                </p>
              </div>
            </div>

            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:bolt" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Срочные вызовы 24/7</h3>
                <p class="text-gray-300">
                  Готовы приехать даже ночью — уборка без ожиданий.
                </p>
              </div>
            </div>

            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon name="heroicons:shield-check" class="icon" />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Безопасные средства</h3>
                <p class="text-gray-300">
                  Используем сертифицированные, гипоаллергенные средства.
                </p>
              </div>
            </div>

            <div class="flex space-x-5 feature">
              <div class="icon-box">
                <Icon
                  name="heroicons:chat-bubble-bottom-center-text"
                  class="icon"
                />
              </div>
              <div>
                <h3 class="font-semibold text-xl mb-1">
                  Честность и прозрачность
                </h3>
                <p class="text-gray-300">
                  Никаких скрытых платежей — фиксированная стоимость заранее.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA - ОРИГИНАЛЬНАЯ КНОПКА -->
        <div class="text-center mt-14">
          <button
            @click="openCallbackModal"
            class="px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500 transition-transform hover:scale-105"
          >
            Получить консультацию
          </button>
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

// Реф для управления модальным окном
const showCallbackModal = ref(false);

// Функция для открытия модального окна
const openCallbackModal = () => {
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
  console.log("Форма отправлена из секции преимуществ:", formData);
  // Здесь можно добавить дополнительную логику
};
</script>

<style scoped>
/* Ticket cuts */
.advantages-card {
  position: relative;
}

.ticket-cut {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 80px;
  background: #ffffff;
  border-radius: 50px;
}
.left-cut {
  left: -18px;
}
.right-cut {
  right: -18px;
}

/* Icons */
.icon-box {
  background: rgba(255, 255, 255, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 34px;
  height: 34px;
  color: #38e8ff;
}

/* Animation */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.feature {
  animation: fade-up 0.8s ease forwards;
}
.feature:nth-child(1) {
  animation-delay: 0s;
}
.feature:nth-child(2) {
  animation-delay: 0.1s;
}
.feature:nth-child(3) {
  animation-delay: 0.2s;
}
.feature:nth-child(4) {
  animation-delay: 0.3s;
}
</style>
