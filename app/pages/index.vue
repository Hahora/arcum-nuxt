<template>
  <div>
    <MainPageHeroSection />
    <MainPageAboutSection id="about" />
    <DividerPage />
    <MainPageServicesSection id="services" />
    <DividerPage />
    <MainPageAdvantagesSection id="advantages" />
    <DividerPage />
    <MainPageCleaningProcessSection id="gallery" />
    <DividerPage />
    <MainPageReviewsSection id="reviews" />
    <DividerPage />
    <MainPageTrustedSection id="clients" />
    <DividerPage />
    <MainPageContactsSection id="contacts" />
  </div>
</template>

<script setup>
onMounted(() => {
  // Простая анимация при скролле
  const sections = document.querySelectorAll("section[id]");

  // Добавляем начальные классы
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
  });

  // Создаем наблюдатель
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Наблюдаем за секциями
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// SEO оптимизация
useHead({
  title:
    "Клининговая компания Аркум - Профессиональная уборка в Ростове-на-Дону и Ростовской области",
  meta: [
    {
      name: "description",
      content:
        "Профессиональная уборка квартир, офисов, химчистка мебели и мойка фасадов в Ростове-на-Дону и Ростовской области. Клининговая компания Аркум. Работаем 24/7, гарантия качества, доступные цены. Закажите уборку по телефону +7 (929) 820-53-21",
    },
    {
      property: "og:title",
      content:
        "Клининговая компания Аркум - Профессиональная уборка в Ростове-на-Дону и Ростовской области",
    },
    {
      property: "og:description",
      content:
        "Профессиональная уборка квартир, офисов, химчистка мебели в Ростове-на-Дону и Ростовской области. Качественно, быстро, с гарантией.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "ru_RU",
    },
    {
      property: "og:url",
      content: "https://arkum.ru/",
    },
    {
      property: "og:image",
      content: "https://arkum.ru/images/og-image.png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Клининговая компания Аркум - профессиональная уборка",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://arkum.ru/",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Клининговая компания Аркум",
        description:
          "Профессиональные клининговые услуги в Ростове-на-Дону и области. Уборка квартир, офисов, химчистка мебели, мойка фасадов.",
        url: "https://arkum.ru",
        telephone: "+7-929-820-53-21",
        email: "arkum161@yandex.ru",
        address: {
          "@type": "PostalAddress",
          streetAddress: "улица Вавилова, 49",
          addressLocality: "Ростов-на-Дону",
          addressRegion: "Ростовская область",
          postalCode: "344064",
          addressCountry: "RU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "47.265701",
          longitude: "39.682377",
        },
        openingHours: "Mo-Su 08:00-23:00",
        priceRange: "₽₽",
        image: [
          "https://arkum.ru/images/main1.webp",
          "https://arkum.ru/images/main2.webp",
        ],
        sameAs: [
          "https://vk.com/klining_rostov",
          "https://t.me/arkum_161",
          "https://wa.me/79298205321",
        ],
      }),
    },
  ],
});
</script>
