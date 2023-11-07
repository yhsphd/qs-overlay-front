<script setup>
import { computed, ref } from "vue";

const targetElement = ref(null);
const height = computed(() => {
  if (!targetElement.value) {
    return 0;
  }
  return targetElement.value.getBoundingClientRect().height;
});
const span_styles = computed(() => {
  return {
    marginLeft: height.value * 0.2 + "px",
    fontSize: height.value * 0.41 + "px",
    letterSpacing: -height.value * 0.03 + "px",
    lineHeight: height.value * 0.5 + "px",
  };
});
</script>

<template>
  <div ref="targetElement" class="horizontal-box">
    <img class="logo" src="../assets/logo.svg" />
    <span :style="span_styles">QUARTET<br />SHOWDOWN</span>
  </div>
</template>

<style scoped>
img {
  height: 100%;
}

span {
  font-weight: 600;
}
</style>
