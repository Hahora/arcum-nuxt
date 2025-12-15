export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const { hasConsent } = useCookieConsent();

  const loadGoogleAnalytics = () => {
    if (!config.public.googleAnalyticsId || !process.client) {
      console.log("❌ Google Analytics ID not configured");
      return;
    }

    console.log(
      "🚀 Loading Google Analytics...",
      config.public.googleAnalyticsId
    );

    // Загружаем gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`;
    document.head.appendChild(script);

    // Инициализируем gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", config.public.googleAnalyticsId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    console.log("✅ Google Analytics loaded successfully");
  };

  // Загружаем при согласии на куки
  watch(
    () => hasConsent("analytics"),
    (hasAnalyticsConsent) => {
      if (hasAnalyticsConsent) {
        loadGoogleAnalytics();
      }
    },
    { immediate: true }
  );

  // Также загружаем сразу если согласие уже есть
  if (process.client) {
    setTimeout(() => {
      if (hasConsent("analytics")) {
        loadGoogleAnalytics();
      }
    }, 100);
  }
});
