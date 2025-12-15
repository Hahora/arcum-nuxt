// Глобальное состояние (singleton)
const globalCookieState = {
  showBanner: ref(false),
  cookieConsent: ref<any>(null),
  isInitialized: ref(false),
};

export const useCookieConsent = () => {
  // Используем глобальное состояние
  const { showBanner, cookieConsent, isInitialized } = globalCookieState;

  // COMPUTED свойства для удобства
  const hasAnalyticsConsent = computed(() => {
    return cookieConsent.value?.analytics === true;
  });

  const hasMarketingConsent = computed(() => {
    return cookieConsent.value?.marketing === true;
  });

  const getConsent = computed(() => cookieConsent.value);

  // Хелпер для проверки статуса
  const hasConsent = (type: "analytics" | "marketing") => {
    return cookieConsent.value?.[type] === true;
  };

  // Функция для инициализации аналитики
  const initAnalytics = () => {
    if (hasAnalyticsConsent.value) {
      console.log("Cookie consent: Initializing analytics...");
      // Небольшая задержка для загрузки плагинов
      setTimeout(() => {
        try {
          const { init } = useAnalytics();
          init();
        } catch (error) {
          console.error("Error initializing analytics:", error);
        }
      }, 1000);
    } else {
      console.log(
        "Cookie consent: Analytics not allowed, skipping initialization"
      );
    }
  };

  // Инициализация
  const initialize = () => {
    console.log("Initializing cookie consent...");
    if (process.client && !isInitialized.value) {
      try {
        const consentStr = localStorage.getItem("cookie-consent");

        if (consentStr) {
          const consent = JSON.parse(consentStr);
          cookieConsent.value = consent;
          console.log("Current consent (parsed):", consent);
          console.log("Analytics allowed:", consent.analytics === true);

          // Инициализируем аналитику если разрешено
          if (consent.analytics === true) {
            initAnalytics();
          }
        } else {
          console.log("No consent found, showing banner");
          setTimeout(() => {
            showBanner.value = true;
          }, 1000);
        }
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
        showBanner.value = true;
      }

      isInitialized.value = true;
    }
  };

  // Принять все куки
  const acceptAllCookies = () => {
    console.log("Accepting all cookies");
    if (process.client) {
      const consent = {
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: Date.now(),
      };
      localStorage.setItem("cookie-consent", JSON.stringify(consent));
      cookieConsent.value = consent;
      showBanner.value = false;

      // Инициализируем аналитику
      initAnalytics();
    }
  };

  // Принять только необходимые куки
  const acceptNecessaryOnly = () => {
    console.log("Accepting necessary cookies only");
    if (process.client) {
      const consent = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now(),
      };
      localStorage.setItem("cookie-consent", JSON.stringify(consent));
      cookieConsent.value = consent;
      showBanner.value = false;
    }
  };

  // Отклонить все куки (кроме необходимых)
  const rejectAllCookies = () => {
    console.log("Rejecting all cookies");
    if (process.client) {
      const consent = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now(),
      };
      localStorage.setItem("cookie-consent", JSON.stringify(consent));
      cookieConsent.value = consent;
      showBanner.value = false;
    }
  };

  // Сбросить настройки куки
  const resetConsent = () => {
    console.log("Resetting consent");
    if (process.client) {
      localStorage.removeItem("cookie-consent");
      cookieConsent.value = null;
      showBanner.value = true;
    }
  };

  return {
    // Реактивные свойства
    showBanner: readonly(showBanner),
    cookieConsent: readonly(cookieConsent),
    hasAnalyticsConsent,
    hasMarketingConsent,
    getConsent,
    isInitialized: readonly(isInitialized),

    // Основные методы
    initialize,
    acceptAllCookies,
    acceptNecessaryOnly,
    rejectAllCookies,
    resetConsent,

    // Утилиты
    hasConsent,
  };
};
