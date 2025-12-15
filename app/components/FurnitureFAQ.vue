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
    question: "Будет ли мебель пахнуть химией после чистки?",
    answer:
      "Мы используем профессиональные эффективные гипоаллергенные чистящие средства, допущенные к применению в жилых помещениях. Они не имеют неприятного запаха. После химчистки мастер обработает вашу мебель кондиционером, так что  ваша мебель будет иметь приятный запах чистоты и свежести.",
  },
  {
    question: "Можно ли просто обеспылить мягкую мебель, без химчистки?",
    answer:
      "Да, мы производим обеспыливание мягкой мебели без проведения химчистки. Позвоните нам и мы рассчитаем стоимость заказа индивидуально.",
  },
  {
    question: "Понадобится ли вам мой пылесос?",
    answer:
      "Нет, от Вас требуется только доступ к сети электропитания с напряжением 220 В, а также доступ к санузлу. Всё остальное оборудование мастер привезёт с собой.",
  },
  {
    question: "Как долго сохнет мебель после химчистки?",
    answer:
      "Все зависит от материала обивки, типа наполнения мебели, температуры воздуха в помещении, хорошо ли оно проветривается. Мастер, проведя визуальную диагностику, оценив сложность загрязнения, подберет оптимальное решение. Так же мы предоставляем сушку мягкой мебели професиональным феном, которое ускорит время высыхания.",
  },
  {
    question: "Безопасна ли химия для детей и животных?",
    answer:
      "Наши мастера используют качественные, професиональные средства, которые абсолютно безопасны для Вас и Ваших близких. Выбирая компанию, которая будет проводить химчистку Вашей мебели, настоятельно рекомендуем убедиться в том, что мастера прошли соответствующее обучение, дающее право работать с химией, сертификаты на средства, которые они используют при проведении работ. Решая проблемы с загрязнением, важно помнить, что Ваше здоровье превыше всего.",
  },
  {
    question: "Возможно ли избавиться от запаха мочи на диване?",
    answer:
      "Каждый случай рассматривается индивидуально. В большинстве случаев все зависит от истории эксплуатации мебели, самостоятельных замывов и возраста мебели. Команда наших мастеров, с помощью знаний, опыта, профессионального оборудования, соблюдения технологий и использования высококачественных средств, способна решить большую часть задач.",
  },
  {
    question: "Все ли пятна можно вывести?",
    answer:
      "До 95% загрязнений, с помощью опытного специалиста, можно вывести и спасти внешний вид Вашей мебели, однако, пренебрегая своевременным вызовом профессионала, желая сэкономить, клиенты часто пытаются самостоятельно бороться с проблемой. Использование бытовой химии, может привести к непоправимым последствиям: пигментации, разрушении текстуры ткани.",
  },
];
</script>
