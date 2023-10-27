<script setup>
import { computed, ref } from "vue";

const targetElement = ref(null);
const positionInfo = computed(() => {
  if (!targetElement.value) {
    return { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 };
  }
  return targetElement.value.getBoundingClientRect();
});
</script>

<template>
  <div class="display-box" ref="targetElement">
    <div style="height: 50px"></div>
    <div class="source-name">
      <b>Display Capture / osu!</b>
    </div>
    <div class="horizontal-box transform">
      <div class="attributes">
        <div>Position</div>
        <div>Rotation</div>
        <div>Size</div>
        <div>Positional<br />Alignment</div>
      </div>
      <div class="values">
        <div>{{ positionInfo.x }}px {{ positionInfo.y }}px</div>
        <div>0.00º</div>
        <div>{{ positionInfo.width }}px {{ positionInfo.height }}px</div>
        <div>Top Left</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.display-box {
  aspect-ratio: 16/9;
  background: black;
  color: white;
  font-size: 36px;
}

.source-name > * {
  font-size: 40px;
  margin: 0 30px 30px 30px;
}

.transform > * {
  padding: 10px;
}

.attributes {
  text-align: end;
  width: 30%;
  font-weight: 500;
}

.values {
  font-weight: 300;
}

.attributes *,
.values * {
  margin: 10px;
}
</style>
