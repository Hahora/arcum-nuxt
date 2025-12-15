export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const { hasConsent } = useCookieConsent();

  const loadYandexMetrika = () => {
    if (!config.public.yandexMetrikaId || !process.client) {
      console.log("❌ Yandex Metrika ID not configured");
      return;
    }

    console.log("🚀 Loading Yandex Metrika...", config.public.yandexMetrikaId);

    // Создаем скрипт Яндекс Метрики
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(config.public.yandexMetrikaId, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      trackHash: true,
    });

    console.log("✅ Yandex Metrika loaded successfully");
  };

  // Загружаем при согласии на куки
  watch(
    () => hasConsent("analytics"),
    (hasAnalyticsConsent) => {
      if (hasAnalyticsConsent) {
        loadYandexMetrika();
      }
    },
    { immediate: true }
  );

  // Также загружаем сразу если согласие уже есть
  if (process.client) {
    setTimeout(() => {
      if (hasConsent("analytics")) {
        loadYandexMetrika();
      }
    }, 100);
  }
});
