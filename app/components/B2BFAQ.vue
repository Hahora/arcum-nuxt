<template>
  <section class="bg-white py-20">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Ответы на <span class="text-cyan-500">вопросы</span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Наши клиенты спрашивают — мы отвечаем. Всё быстро и честно.
        </p>
      </div>

      <!-- FAQ -->
      <div class="space-y-4">
        <div
          v-for="(item, index) in faq"
          :key="index"
          class="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300"
        >
          <!-- Кнопка -->
          <button
            @click="toggle(index)"
            class="w-full flex justify-between items-center py-5 px-6 cursor-pointer group"
          >
            <!-- Вопрос -->
            <span
              class="font-semibold text-slate-900 text-lg group-hover:text-cyan-500 transition-colors"
            >
              {{ item.question }}
            </span>

            <!-- Стрелка -->
            <Icon
              name="heroicons:chevron-down"
              class="w-6 h-6 text-slate-500 transition-transform duration-300 ease-out"
              :class="opened.includes(index) ? 'rotate-180 text-cyan-500' : ''"
            />
          </button>

          <!-- Ответ -->
          <transition
            enter-active-class="transition-all duration-400 ease-out"
            enter-from-class="opacity-0 max-h-0 -translate-y-2"
            enter-to-class="opacity-100 max-h-96 translate-y-0"
            leave-active-class="transition-all duration-400 ease-in"
            leave-from-class="opacity-100 max-h-96 translate-y-0"
            leave-to-class="opacity-0 max-h-0 -translate-y-2"
          >
            <div
              v-if="opened.includes(index)"
              class="px-6 pb-5 text-gray-600 leading-relaxed text-base"
            >
              <p v-html="item.answer"></p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const opened = ref([]);

const toggle = (index) => {
  if (opened.value.includes(index)) {
    opened.value = opened.value.filter((i) => i !== index);
  } else {
    opened.value.push(index);
  }
};

const faq = [
  {
    question: "Нужно ли мне присутствовать в квартире во время уборки?",
    answer:
      "Нет, это не обязательно. Вы можете впустить клинеров, обсудить детали — и уехать по своим делам. За 1 час до завершения уборки менеджер позвонит вам.",
  },
  {
    question: "Сколько стоит уборка квартиры?",
    answer:
      "Цена зависит от:<br>• площади;<br>• дополнительных услуг;<br>• типа уборки (поддерживающая / генеральная / после ремонта).",
  },
  {
    question: "Если в шкафу и на полках есть вещи?",
    answer:
      "Клинер аккуратно снимет предметы, уберёт полку и вернёт всё на место. Можно заранее предупредить менеджера, если нужен особый подход.",
  },
  {
    question: "Отмываете ли вы сложные загрязнения?",
    answer:
      "Да. Привозим профессиональные безопасные средства, справляемся с жиром, нагаром, налётом, пятнами на плитке и многим другим.",
  },
  {
    question: "Моете ли вы окна?",
    answer:
      "Да, мойка окон — дополнительная услуга. Менеджер уточнит необходимость при оформлении заказа.",
  },
  {
    question: "Сколько длится уборка?",
    answer:
      "Обычно:<br>• поддерживающая — 2–4 часа;<br>• генеральная или после ремонта — 5–10 часов;<br>• после пожара — до 1–3 дней.",
  },
  {
    question: "Выезжаете ли вы за город?",
    answer:
      "Да, работаем по Ростовской области. Стоимость рассчитывается индивидуально.",
  },
];
</script>
