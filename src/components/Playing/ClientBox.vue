<script setup>
import { computed, ref } from "vue";

defineProps({
  index: Number,
  status: {
    type: Object,
    default() {
      return { rank: 0, points: 0 };
    },
  },
});

const targetElement = ref(null);
const positionInfo = computed(() => {
  if (!targetElement.value) {
    return { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 };
  }
  return targetElement.value.getBoundingClientRect();
});
</script>

<template>
  <div class="master">
    <div ref="targetElement" class="client">
      <div style="height: 5px"></div>
      <div class="client-index">
        osu!tourney<br />client <b>{{ index }}</b>
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
    <div class="horizontal-box status">
      <div class="rank">#{{ status.rank }}</div>
      <div style="flex-grow: 1"></div>
      <div class="points">{{ status.points }} POINTS</div>
    </div>
  </div>
</template>

<style scoped>
.master {
  width: 490px;
  height: 435px;
  margin: 0 10px 15px 10px;
  flex-basis: 490px;
  border-radius: 15px;
  border: var(--border);
}

.client {
  width: 480px;
  height: 360px;
  background: black;
  margin: 5px;
  color: white;
}

.client > * {
  margin: 0 30px 30px 30px;
}

.client-index {
  font-size: 32px;
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

.status {
  font-weight: 600;
  font-size: 48px;
  margin: 0 10px 0 10px;
  letter-spacing: -4px;
}
</style>
