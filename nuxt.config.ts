import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        { name: "format-detection", content: "telephone=yes" },
        { name: "theme-color", content: "#22d3ee" },
        { name: "msapplication-TileColor", content: "#22d3ee" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { property: "og:type", content: "website" },
      ],

      link: [
        // Favicon и иконки приложения
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },

        { rel: "manifest", href: "/site.webmanifest" },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      yandexMetrikaId: process.env.NUXT_PUBLIC_YANDEX_METRIKA_ID,
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://arkum.ru",
    },
    serverIP: process.env.SERVER_IP,
    serverPort: process.env.SERVER_PORT,
  },

  css: ["./app/assets/css/main.css"],

  modules: ["@nuxt/icon", "@nuxt/image"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  image: {
    quality: 80,
    format: ["webp", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    experimental: {
      wasm: true,
    },
    prerender: {
      routes: [
        "/",
        "/clean",
        "/clean-region",
        "/furniture",
        "/furniture-region",
        "/b2b",
        "/facade",
        "/policy",
      ],
    },
    compressPublicAssets: true,
  },

  ssr: true,
});
