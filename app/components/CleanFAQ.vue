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
      "На ваше усмотрение. Вы можете присутствовать в квартире во время уборки или же поехать по своим делам. Вам нужно впустить клинеров в квартиру, в оговоренное с менеджером время, уточнить нюансы связанные с уборкой, задать интересующие Вас вопросы бригадиру и оговорить дополнительные услуги. Клинеры приступают к работе. За 1 час до окончания уборки менеджер перезвонит Вам.",
  },
  {
    question: "Сколько стоит уборка квартиры?",
    answer:
      "Стоимость уборки может варьироваться в зависимости от:<br><br>1. Наличия дополнительных услуг - мойка окон, химчистка, мойка духовки или холодильника изнутри и.т.д.<br><br>2. Общей площади - расценки на уборку квартир напрямую зависят от количества комнат.<br><br>3. Типа уборки - комплексная уборка квартиры, генеральная уборка или уборка после ремонта.",
  },
  {
    question: "Если в шкафу и на полках есть вещи?",
    answer:
      "Перед уборкой заранее вы можете самостоятельно освободить полки, клинер их обязательно помоет. Или во время уборки клинер аккуратно уберет предметы с полок, очистит поверхности и вернет содержимое на место. Вы можете заранее обсудить этот вопрос если нужно уделит вопросу ыопросц дополнительное внимание.",
  },
  {
    question: "Отмываете ли вы сложные загрязнения?",
    answer:
      "Да, клинеры привозят к вам все необходимые моющие средства для удаления загрязнений любой сложности: следы жира на кухне, пятна на плитке, известковый налет и.т.д.",
  },
  {
    question: "Моете ли вы окна?",
    answer:
      "Да, мойка окон это дополнительная услуга, менеджер обязательно уточнит у Вас при заказе нужно ли мыть окна в квартире.",
  },
  {
    question: "Сколько длится уборка?",
    answer:
      "Время зависит от типа уборки, площади помещения и набора дополнительных услуг. В среднем, поддерживающая занимает от 2 до 4 часов. Генеральная и После ремонта от 5 до 10 часов. После пожара от 1 до 3 дней.",
  },
  {
    question: "Выезжаете ли вы за город?",
    answer:
      "Да, мы выезжаем за город. Точную стоимость заказа и доплату за выезд уточняйте у наших менеджеров по телефону.",
  },
];
</script>
