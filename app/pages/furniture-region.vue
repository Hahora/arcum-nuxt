<template>
  <div>
    <FurnitureRegionPageHeroSection />
    <FurniturePageServicesSection id="services" />
    <DividerPage />
    <FurnitureBeforeAfterSection id="results" />
    <DividerPage />
    <FurnitureCostCalculator id="price" />
    <DividerPage />
    <FurnitureFAQ id="faq" />
    <DividerPage />
    <FurnitureOrderProcessSection id="order" />
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
  title: "Химчистка мебели в Ростове-на-Дону и области | Аркум",
  meta: [
    {
      name: "description",
      content:
        "Профессиональная химчистка мебели в Ростове-на-Дону и области. Чистка диванов, кресел, матрасов, ковров на дому. Удаление пятен, запахов, аллергенов. Безопасные средства, гарантия качества, работаем 24/7. Закажите химчистку по телефону +7 (929) 820-53-21",
    },
    {
      property: "og:title",
      content:
        "Химчистка мебели в Ростове-на-Дону и области - Чистка диванов, кресел, матрасов | Клининговая компания Аркум",
    },
    {
      property: "og:description",
      content:
        "Профессиональная химчистка мебели на дому в Ростове-на-Дону и области. Чистка диванов, кресел, матрасов, ковров. Удаление пятен и запахов. Гарантия качества.",
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
      content: "https://arkum.ru/furniture-region",
    },
    {
      property: "og:image",
      content: "https://arkum.ru/images/og-furniture-region.png",
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
      content:
        "Химчистка мебели в Ростове-на-Дону и области - Клининговая компания Аркум",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Химчистка мебели в Ростове-на-Дону и области - Чистка диванов, кресел, матрасов | Аркум",
    },
    {
      name: "twitter:description",
      content:
        "Профессиональная химчистка мебели на дому в Ростове-на-Дону и области",
    },
    {
      name: "twitter:image",
      content: "https://arkum.ru/images/og-furniture.png",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://arkum.ru/furniture-region",
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
          "Профессиональная химчистка мебели в Ростове-на-Дону и области. Чистка диванов, кресел, матрасов, ковров на дому.",
        url: "https://arkum.ru/furniture-region",
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
          name: "Услуги химчистки мебели",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Химчистка диванов",
                description: "Профессиональная чистка диванов на дому",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Химчистка кресел",
                description: "Чистка кресел и пуфиков",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Химчистка матрасов",
                description: "Глубокая чистка матрасов от пылевых клещей",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Химчистка ковров",
                description: "Чистка ковров и ковролина на дому",
              },
            },
          ],
        },
      }),
    },
  ],
});
</script>
