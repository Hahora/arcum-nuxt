// Глобальный флаг инициализации
let isAnalyticsInitialized = false;

export const useAnalytics = () => {
  const config = useRuntimeConfig();

  // Получаем глобальное состояние куки напрямую
  const getCookieConsent = () => {
    if (!process.client) return null;
    try {
      const consentStr = localStorage.getItem("cookie-consent");
      return consentStr ? JSON.parse(consentStr) : null;
    } catch {
      return null;
    }
  };

  // Проверяем разрешена ли аналитика
  const isAnalyticsAllowed = () => {
    const consent = getCookieConsent();
    const allowed = consent?.analytics === true;
    return allowed;
  };

  // Отправка события во все системы
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!isAnalyticsAllowed()) {
      console.log(`[Analytics Skipped] ${eventName} - analytics not allowed`);
      return;
    }

    console.log(`🎯 [Analytics Track] ${eventName}`, parameters);

    // Google Analytics (gtag)
    if (window.gtag && config.public.googleAnalyticsId) {
      window.gtag("event", eventName, {
        event_category: parameters?.category || "general",
        event_label: parameters?.label,
        value: parameters?.value,
        ...parameters,
      });
      console.log("✅ Event sent to Google Analytics:", eventName);
    } else {
      console.log("❌ Google Analytics not available:", {
        hasGtag: !!window.gtag,
        hasId: !!config.public.googleAnalyticsId,
      });
    }

    // Яндекс Метрика
    if (window.ym && config.public.yandexMetrikaId) {
      window.ym(
        config.public.yandexMetrikaId,
        "reachGoal",
        eventName,
        parameters
      );
      console.log("✅ Goal sent to Yandex Metrika:", eventName);
    } else {
      console.log("❌ Yandex Metrika not available:", {
        hasYm: !!window.ym,
        hasId: !!config.public.yandexMetrikaId,
      });
    }

    // Google Tag Manager (если используется)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
      console.log("✅ Event sent to GTM:", eventName);
    }
  };

  // Отслеживание просмотра страницы
  const trackPageView = (url: string, title?: string) => {
    if (!isAnalyticsAllowed()) {
      console.log(`[Analytics Skipped] PageView: ${url}`);
      return;
    }

    console.log(`📄 [Analytics PageView] ${url} - ${title}`);

    // Google Analytics
    if (window.gtag && config.public.googleAnalyticsId) {
      window.gtag("config", config.public.googleAnalyticsId, {
        page_path: url,
        page_title: title,
        page_location: window.location.href,
      });
      console.log("✅ PageView sent to Google Analytics");
    }

    // Яндекс Метрика
    if (window.ym && config.public.yandexMetrikaId) {
      window.ym(config.public.yandexMetrikaId, "hit", url, {
        title: title,
        referer: document.referrer,
      });
      console.log("✅ Hit sent to Yandex Metrika");
    }
  };

  // Автоматическое отслеживание кликов с детальной отладкой
  const setupClickTracking = () => {
    if (!process.client || !isAnalyticsAllowed()) {
      console.log("❌ Click tracking setup skipped:", {
        isClient: process.client,
        analyticsAllowed: isAnalyticsAllowed(),
      });
      return;
    }

    console.log("🎯 Setting up click tracking...");

    // Глобальный обработчик кликов с отладкой
    const handleClick = (event) => {
      console.log("👆 Click detected:", {
        target: event.target,
        tagName: event.target.tagName,
        className: event.target.className,
        textContent: event.target.textContent?.trim(),
      });

      const target = event.target as HTMLElement;

      // Проверяем ссылки
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href");
        const text = link.textContent?.trim();

        console.log("🔗 Link click detected:", { href, text });

        trackEvent("link_click", {
          category: "navigation",
          label: text,
          url: href,
          element_type: "link",
        });
        return;
      }

      // Проверяем кнопки
      const button = target.closest("button");
      if (button) {
        const text = button.textContent?.trim();
        const type = button.getAttribute("type") || "button";

        console.log("🔘 Button click detected:", { text, type });

        trackEvent("button_click", {
          category: "interaction",
          label: text,
          button_type: type,
          element_type: "button",
        });
        return;
      }

      // Проверяем элементы с data-track атрибутом
      const trackableElement = target.closest("[data-track]");
      if (trackableElement) {
        const trackData = trackableElement.getAttribute("data-track");
        const text = trackableElement.textContent?.trim();

        console.log("📊 Trackable element click detected:", {
          trackData,
          text,
        });

        trackEvent("element_click", {
          category: "interaction",
          label: text,
          track_data: trackData,
          element_type: "trackable",
        });
        return;
      }

      // Проверяем div с cursor-pointer (возможно, кастомные кнопки)
      const clickableDiv = target.closest(
        'div[class*="cursor-pointer"], div[class*="hover:"]'
      );
      if (clickableDiv) {
        const text = clickableDiv.textContent?.trim();
        const classes = clickableDiv.className;

        console.log("📦 Clickable div detected:", { text, classes });

        trackEvent("div_click", {
          category: "interaction",
          label: text,
          element_type: "clickable_div",
        });
        return;
      }

      console.log("❓ Click on untracked element:", {
        tagName: target.tagName,
        className: target.className,
        id: target.id,
      });
    };

    // Добавляем обработчик
    document.addEventListener("click", handleClick, true); // true для capture фазы

    console.log("✅ Click tracking initialized with detailed logging");
  };

  // Автоматическое отслеживание изменений роута
  const setupRouteTracking = () => {
    if (!process.client || !isAnalyticsAllowed()) return;

    const router = useRouter();

    router.afterEach((to, from) => {
      // Небольшая задержка для обновления title
      setTimeout(() => {
        trackPageView(to.path, document.title);
      }, 100);
    });

    console.log("✅ Route tracking initialized");
  };

  // Основная функция инициализации
  const init = () => {
    const allowed = isAnalyticsAllowed();

    if (!allowed) {
      console.log("[Analytics] Initialization skipped - no consent");
      return;
    }

    if (isAnalyticsInitialized) {
      console.log("[Analytics] Already initialized, skipping...");
      return;
    }

    console.log("[Analytics] 🚀 Initializing tracking systems...");
    isAnalyticsInitialized = true;

    // Небольшая задержка для загрузки скриптов
    setTimeout(() => {
      setupClickTracking();
      setupRouteTracking();

      // Отправляем первый pageview
      trackPageView(window.location.pathname, document.title);

      console.log(
        "[Analytics] ✅ All tracking systems initialized successfully"
      );
    }, 1000);
  };

  // Ручное отслеживание клика (для тестирования)
  const testClick = () => {
    console.log("🧪 Testing manual click tracking...");
    trackEvent("manual_test_click", {
      category: "test",
      label: "Manual Test Button",
      element_type: "test",
    });
  };

  // Сброс флага инициализации (для отладки)
  const resetInitialization = () => {
    isAnalyticsInitialized = false;
    console.log("[Analytics] Initialization flag reset");
  };

  // Отслеживание целей/конверсий
  const trackGoal = (goalName: string, parameters?: Record<string, any>) => {
    if (!isAnalyticsAllowed()) {
      console.log(`[Analytics Skipped] Goal: ${goalName}`);
      return;
    }

    console.log(`🎯 [Analytics Goal] ${goalName}`, parameters);
    trackEvent(`goal_${goalName}`, {
      ...parameters,
      goal_name: goalName,
      category: "conversion",
    });
  };

  return {
    // Основная функция инициализации
    init,

    // Остальные методы
    trackEvent,
    trackPageView,
    trackGoal,
    testClick, // для тестирования

    // Утилиты
    isAnalyticsAllowed,
    resetInitialization,
  };
};

// Типы для TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    ym: (id: number | string, method: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}
