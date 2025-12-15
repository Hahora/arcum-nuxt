<template>
  <div>
    <CleanRegionPageHeroSection />
    <CleanPageServicesSection id="services" />
    <DividerPage />
    <CleanBeforeAfterSection id="results" />
    <DividerPage />
    <CleanCostCalculator id="price" />
    <DividerPage />
    <CleanFAQ id="faq" />
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
  title: "Уборка квартир в Ростове-на-Дону и области | Аркум",
  meta: [
    {
      name: "description",
      content:
        "Профессиональная уборка квартир и офисов в Ростове-на-Дону. Генеральная, послеремонтная, поддерживающая уборка. Опытные специалисты, современное оборудование, экологичные средства. Закажите уборку квартиры по телефону +7 (929) 820-53-21",
    },
    {
      property: "og:title",
      content: "Уборка квартир и офисов в Ростове-на-Дону и области | Аркум",
    },
    {
      property: "og:description",
      content:
        "Профессиональная уборка квартир и офисов в Ростове-на-Дону и области. Генеральная, послеремонтная, поддерживающая уборка. Экологичные средства, гарантия качества.",
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
      content: "https://arkum.ru/clean",
    },
    {
      property: "og:image",
      content: "https://arkum.ru/images/og-clean.png",
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
        "Уборка квартир и офисов в Ростове-на-Дону и области - Клининговая компания Аркум",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Уборка квартир и офисов в Ростове-на-Дону и области | Аркум",
    },
    {
      name: "twitter:description",
      content:
        "Профессиональная уборка квартир и офисов в Ростове-на-Дону и области",
    },
    {
      name: "twitter:image",
      content: "https://arkum.ru/images/og-clean-region.png",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://arkum.ru/clean-region",
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
          "Профессиональная уборка квартир и офисов в Ростове-на-Дону и области. Генеральная, послеремонтная, поддерживающая уборка.",
        url: "https://arkum.ru/clean-region",
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
          name: "Услуги уборки квартир",
        },
      }),
    },
  ],
});
</script>
