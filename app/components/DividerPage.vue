<template>
  <div class="divider-wrapper">
    <div class="divider-container">
      <svg
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
        class="divider-svg"
        preserveAspectRatio="none"
      >
        <path
          :d="path"
          :stroke="color"
          stroke-width="10"
          fill="transparent"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const color = "#0A1A2F";
const path = "M0 20 H450 V40 H750 V20 H1200";
</script>

<style scoped>
.divider-wrapper {
  /* Изолируем от внешних стилей */
  contain: layout style paint;
  isolation: isolate;
}

.divider-container {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  /* Полный сброс всех возможных CSS свойств */
  all: unset;
  /* Возвращаем нужные свойства */
  display: block;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
}

.divider-svg {
  /* Полный сброс и установка нужных свойств */
  all: unset;
  display: block;
  width: 100%;
  height: 60px;
}
</style>
