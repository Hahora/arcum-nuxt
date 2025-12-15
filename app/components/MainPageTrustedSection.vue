<template>
  <section class="bg-white py-16 md:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="text-center mb-12 md:mb-14">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Нам <span class="text-cyan-400">доверяют</span>
        </h2>
        <p class="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Компании, которые сотрудничают с нами и доверяют качество нашей
          работы.
        </p>
      </div>

      <!-- Автокарусель -->
      <div class="slider">
        <div class="slide-track">
          <div
            v-for="(company, index) in doubledCompanies"
            :key="index"
            class="slide"
          >
            <img
              :src="company.logo"
              :alt="`Логотип компании ${index + 1}`"
              class="h-12 md:h-16 object-contain mx-auto brightness-95 hover:brightness-110 transition duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  { logo: "/images/main-trusted/1.webp" },
  { logo: "/images/main-trusted/2.webp" },
  { logo: "/images/main-trusted/3.webp" },
  { logo: "/images/main-trusted/4.webp" },
  { logo: "/images/main-trusted/5.webp" },
  { logo: "/images/main-trusted/6.webp" },
  { logo: "/images/main-trusted/7.webp" },
  { logo: "/images/main-trusted/8.webp" },
  { logo: "/images/main-trusted/9.webp" },
  { logo: "/images/main-trusted/10.webp" },
  { logo: "/images/main-trusted/11.webp" },
  { logo: "/images/main-trusted/12.webp" },
  { logo: "/images/main-trusted/13.webp" },
  { logo: "/images/main-trusted/14.webp" },
  { logo: "/images/main-trusted/15.webp" },
  { logo: "/images/main-trusted/16.webp" },
  { logo: "/images/main-trusted/17.webp" },
  { logo: "/images/main-trusted/18.webp" },
  { logo: "/images/main-trusted/19.webp" },
  { logo: "/images/main-trusted/20.webp" },
  { logo: "/images/main-trusted/21.webp" },
  { logo: "/images/main-trusted/22.webp" },
  { logo: "/images/main-trusted/23.webp" },
  { logo: "/images/main-trusted/24.webp" },
  { logo: "/images/main-trusted/25.webp" },
];

// Дублируем для бесконечной карусели
const doubledCompanies = [...companies, ...companies];
</script>

<style scoped>
.slider {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  padding: 0.5rem 0;
}

.slide-track {
  display: flex;
  width: calc(160px * 50); /* 25 логотипов × 2 копии × 160px на каждый */
  animation: scroll 60s linear infinite; /* Увеличено с 40s до 60s */
}

.slide {
  width: 160px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Убраны фильтры grayscale, оставлены только эффекты при наведении */
img {
  filter: none !important;
}

/* Анимация */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-160px * 25)); /* Смещение на 25 логотипов */
  }
}

/* Адаптивность */
@media (max-width: 1024px) {
  .slide-track {
    width: calc(140px * 50);
    animation: scroll 50s linear infinite; /* Увеличено с 35s до 50s */
  }

  .slide {
    width: 140px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-140px * 25));
    }
  }
}

@media (max-width: 768px) {
  .slide-track {
    width: calc(100px * 50);
    animation: scroll 40s linear infinite; /* Увеличено с 30s до 40s */
  }

  .slide {
    width: 100px;
    padding: 0.5rem;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100px * 25));
    }
  }
}

@media (max-width: 480px) {
  .slide-track {
    width: calc(80px * 50);
    animation: scroll 35s linear infinite; /* Увеличено с 25s до 35s */
  }

  .slide {
    width: 80px;
    padding: 0.5rem;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-80px * 25));
    }
  }
}

/* Добавляем паузу при наведении для лучшего восприятия */
.slide-track:hover {
  animation-play-state: paused;
}
</style>
