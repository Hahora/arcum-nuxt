<template>
  <div>
    <FacadePageHeroSection />
    <FacadePageServicesSection id="services" />
    <DividerPage />
    <PhoneConsultationForm id="price" />
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
    "Мойка фасадов в Ростове-на-Дону и области | Клининговая компания Аркум",
  meta: [
    {
      name: "description",
      content:
        "Профессиональная мойка фасадов зданий в Ростове-на-Дону и Ростовской области. Очистка от загрязнений, высолов, граффити. Мойка фасадов офисов, торговых центров, жилых домов. Современное оборудование, промышленный альпинизм, безопасные технологии. Закажите мойку фасадов по телефону +7 (929) 820-53-21",
    },
    {
      property: "og:title",
      content:
        "Мойка фасадов в Ростове-на-Дону и области | Клининговая компания Аркум",
    },
    {
      property: "og:description",
      content:
        "Профессиональная мойка и очистка фасадов зданий в Ростове-на-Дону. Современное оборудование, промышленный альпинизм, безопасные технологии.",
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
      content: "https://arkum.ru/facade",
    },
    {
      property: "og:image",
      content: "https://arkum.ru/images/og-facade.png",
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
      content: "Мойка фасадов в Ростове-на-Дону - Клининговая компания Аркум",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Мойка фасадов в Ростове-на-Дону | Аркум",
    },
    {
      name: "twitter:description",
      content: "Профессиональная мойка фасадов зданий в Ростове-на-Дону",
    },
    {
      name: "twitter:image",
      content: "https://arkum.ru/images/og-facade.png",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://arkum.ru/facade",
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
          "Профессиональная мойка фасадов зданий в Ростове-на-Дону и области. Очистка офисов, торговых центров, жилых домов.",
        url: "https://arkum.ru/facade",
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
        image: ["https://arkum.ru/logo.png"],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "47.265701",
            longitude: "39.682377",
          },
          geoRadius: "50000",
        },
        sameAs: [
          "https://vk.com/klining_rostov",
          "https://t.me/arkum_161",
          "https://wa.me/79298205321",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги мойки фасадов",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Мойка фасадов жилых домов",
                description: "Очистка фасадов многоквартирных и частных домов",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Мойка фасадов офисных зданий",
                description: "Очистка бизнес-центров и административных зданий",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Мойка фасадов торговых центров",
                description: "Очистка витрин и фасадов торговых комплексов",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Удаление граффити с фасадов",
                description: "Безопасное удаление надписей и рисунков",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Удаление высолов с фасадов",
                description: "Очистка от солевых отложений и налета",
              },
            },
          ],
        },
      }),
    },
  ],
});
</script>
