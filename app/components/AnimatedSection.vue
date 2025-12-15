<template>
  <div
    ref="sectionRef"
    :class="[
      'scroll-animate',
      animationType,
      delay && `delay-${delay}`,
      additionalClasses,
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  animationType: {
    type: String,
    default: "fade-up",
  },
  delay: {
    type: String,
    default: null,
  },
  additionalClasses: {
    type: String,
    default: "",
  },
});

const { addElement } = useScrollAnimation();
const sectionRef = ref(null);

onMounted(() => {
  addElement(sectionRef.value);
});
</script>

<style scoped>
div {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  outline: 0 !important;
  vertical-align: baseline !important;
  background: transparent !important;
  box-sizing: border-box !important;
}

/* Убираем отступы у всех дочерних элементов тоже */
div > * {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
