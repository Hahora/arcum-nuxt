<template>
  <section class="bg-white py-14 lg:py-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Заголовок -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Результаты <span class="text-cyan-400">нашей работы</span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Посмотрите реальные примеры химчистки до и после — мы действительно
          делаем чисто.
        </p>
      </div>

      <!-- Сетка карточек -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        <!-- Карточка -->
        <div
          v-for="item in items"
          :key="item.id"
          class="bg-slate-50 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <!-- До / После слайдер -->
          <div class="relative w-full h-64 rounded-xl overflow-hidden">
            <div class="relative w-full h-full select-none">
              <!-- Изображение "После" (подложка) -->
              <div class="absolute inset-0 w-full h-full">
                <img
                  :src="item.after"
                  class="w-full h-full object-cover"
                  alt="После уборки"
                  draggable="false"
                />
              </div>

              <!-- Изображение "До" с клипом (надвигается справа) -->
              <div
                class="absolute inset-0 w-full h-full overflow-hidden"
                :style="{ clipPath: `inset(0 0 0 ${item.slider}%)` }"
              >
                <img
                  :src="item.before"
                  class="w-full h-full object-cover"
                  alt="До уборки"
                  draggable="false"
                />
              </div>

              <!-- Подписи внутри фото -->
              <div class="absolute inset-0 pointer-events-none">
                <!-- Подпись "До" (левый верхний угол) -->
                <div class="absolute top-3 left-3">
                  <span
                    class="inline-block px-3 py-1.5 bg-slate-800/80 text-white text-xs font-semibold rounded-md backdrop-blur-sm"
                  >
                    До
                  </span>
                </div>

                <!-- Подпись "После" (правый верхний угол) -->
                <div class="absolute top-3 right-3">
                  <span
                    class="inline-block px-3 py-1.5 bg-cyan-500/90 text-white text-xs font-semibold rounded-md backdrop-blur-sm"
                  >
                    После
                  </span>
                </div>
              </div>

              <!-- Ползунок вертикальный по центру -->
              <div class="absolute inset-0 pointer-events-none">
                <!-- Линия-разделитель -->
                <div
                  class="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-lg shadow-cyan-400/50"
                  :style="{ left: `${item.slider}%` }"
                ></div>

                <!-- Ручка ползунка -->
                <div
                  class="absolute top-1/2 -translate-y-1/2 w-12 h-12 cursor-grab active:cursor-grabbing pointer-events-auto z-10"
                  :style="{
                    left: `${item.slider}%`,
                    transform: `translate(-50%, -50%)`,
                  }"
                  @mousedown="startDrag(item, $event)"
                  @touchstart="startDrag(item, $event)"
                >
                  <!-- Кнопка-ручка со стрелками -->
                  <div
                    class="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-cyan-400 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
                  >
                    <!-- Стрелки влево-вправо -->
                    <div class="flex items-center space-x-1">
                      <!-- Стрелка влево -->
                      <svg
                        class="w-3 h-3 text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>

                      <!-- Стрелка вправо -->
                      <svg
                        class="w-3 h-3 text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Название -->
          <h3 class="text-lg font-semibold text-slate-900 mt-4">
            {{ item.title }}
          </h3>

          <p class="text-gray-600 text-sm mt-1">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onUnmounted } from "vue";

const items = reactive([
  {
    id: 1,
    before: "/images/clean-before-after/a1.webp",
    after: "/images/clean-before-after/b1.webp",
    slider: 50,
  },
  {
    id: 2,
    before: "/images/clean-before-after/a2.webp",
    after: "/images/clean-before-after/b2.webp",
    slider: 50,
  },
  {
    id: 3,
    before: "/images/clean-before-after/a3.webp",
    after: "/images/clean-before-after/b3.webp",
    slider: 50,
  },
]);

let isDragging = false;
let currentItem = null;
let containerRect = null;

const startDrag = (item, event) => {
  event.preventDefault();
  isDragging = true;
  currentItem = item;

  // Получаем размеры контейнера
  const container = event.target.closest(".relative.w-full.h-64");
  if (container) {
    containerRect = container.getBoundingClientRect();
  }

  // Добавляем обработчики для движения и окончания
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("touchend", stopDrag);
};

const onDrag = (event) => {
  if (!isDragging || !currentItem || !containerRect) return;

  event.preventDefault();

  // Получаем позицию курсора/пальца
  const clientX = event.type.includes("touch")
    ? event.touches[0].clientX
    : event.clientX;

  // Вычисляем процент относительно контейнера
  const relativeX = clientX - containerRect.left;
  const percentage = Math.max(
    0,
    Math.min(100, (relativeX / containerRect.width) * 100)
  );

  currentItem.slider = percentage;
};

const stopDrag = () => {
  isDragging = false;
  currentItem = null;
  containerRect = null;

  // Удаляем обработчики
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", stopDrag);
};

// Очистка при размонтировании компонента
onUnmounted(() => {
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", stopDrag);
});
</script>

<style scoped>
/* Предотвращаем выделение текста при перетаскивании */
.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .w-12.h-12 {
    width: 40px;
    height: 40px;
  }

  /* Увеличиваем область касания для мобильных */
  .cursor-grab {
    padding: 8px;
  }

  /* Делаем стрелки немного меньше на мобильных */
  .w-3.h-3 {
    width: 12px;
    height: 12px;
  }

  /* Уменьшаем подписи внутри фото на мобильных */
  .absolute.top-3 span {
    padding: 4px 8px;
    font-size: 10px;
  }
}

/* Улучшаем курсор при перетаскивании */
.cursor-grab:active {
  cursor: grabbing;
}

/* Плавные переходы для ручки */
.transition-transform {
  transition: transform 0.2s ease;
}
</style>
