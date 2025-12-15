export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    once = true,
  } = options;

  const elements = ref([]);
  let observer = null;

  const addElement = (el) => {
    if (el && !elements.value.includes(el)) {
      elements.value.push(el);
      if (observer) {
        observer.observe(el);
      }
    }
  };

  const initObserver = () => {
    if (process.client) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              entry.target.classList.remove("animate-out");

              if (once) {
                observer.unobserve(entry.target);
              }
            } else if (!once) {
              entry.target.classList.remove("animate-in");
              entry.target.classList.add("animate-out");
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      // Наблюдаем за всеми добавленными элементами
      elements.value.forEach((el) => {
        if (el) observer.observe(el);
      });
    }
  };

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  onMounted(() => {
    initObserver();
  });

  onUnmounted(() => {
    cleanup();
  });

  return {
    addElement,
  };
};
