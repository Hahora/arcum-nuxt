<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Заголовок -->
      <div class="text-center mb-14">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Отзывы <span class="text-cyan-400">клиентов</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Реальные отзывы наших клиентов на Яндексе.
        </p>
      </div>

      <!-- Полная вставка Яндекс-виджета -->
      <div class="flex justify-center">
        <div
          style="
            width: 560px;
            height: 800px;
            overflow: hidden;
            position: relative;
          "
        >
          <iframe
            style="
              width: 100%;
              height: 100%;
              border: 1px solid #e6e6e6;
              border-radius: 8px;
              box-sizing: border-box;
            "
            src="https://yandex.ru/maps-reviews-widget/97354977416?comments"
          ></iframe>

          <a
            href="https://yandex.ru/maps/org/arkum/97354977416/"
            target="_blank"
            style="
              box-sizing: border-box;
              text-decoration: none;
              color: #b3b3b3;
              font-size: 10px;
              font-family: YS Text, sans-serif;
              padding: 0 20px;
              position: absolute;
              bottom: 8px;
              width: 100%;
              text-align: center;
              left: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              display: block;
              max-height: 14px;
              white-space: nowrap;
              padding: 0 16px;
              box-sizing: border-box;
            "
          >
            Аркум на карте Ростова-на-Дону — Яндекс Карты
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
