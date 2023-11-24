<script setup>
import MapInfo from "@/components/MapInfo.vue";
import LogoAndFullTitle from "@/components/LogoAndFullTitle.vue";
import DisplayBox from "@/components/Showcase/DisplayBox.vue";
import { state } from "@/socket";
import { computed } from "vue";

const order = computed(() => {
  if (state.overlayData.type !== "showcase") {
    return [];
  }

  const mappool = state.overlayData.mappool;
  const currentCode = state.overlayData.now_playing.osu.code;
  const modsOrder = ["NM", "HD", "HR", "FM", "SM", "DT", "TB"];

  let count = 0;

  for (let i = 0; i < modsOrder.length; i++) {
    if (mappool.hasOwnProperty(modsOrder[i])) {
      count++;

      if (currentCode === modsOrder[i]) {
        return [count, mappool.length];
      }
    }

    let j = 1;
    while (mappool.hasOwnProperty(modsOrder[i] + j)) {
      count++;
      i++;

      if (currentCode === modsOrder[i] + j) {
        return [count, mappool.length];
      }
    }
  }

  return [];
});
</script>

<template>
  <logo-and-full-title class="logo"></logo-and-full-title>
  <div class="stream-title">{{ state.overlayData.stream_title }}</div>

  <map-info
    class="map-info"
    :map="state.overlayData.now_playing.osu"
    :type="state.overlayData.type"
    :order="order"
  ></map-info>

  <display-box class="display-box"></display-box>

  <!--Reference Image; Will remove-->
  <!--<img
    src="@/assets/_ref_showcase.png"
    style="
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.2;
      width: 100%;
      height: 100%;
      z-index: -100;
    "
  />-->
</template>

<style scoped>
.logo {
  position: absolute;
  left: 25px;
  top: 24px;
  height: 200px;
}

.stream-title {
  position: absolute;
  right: 25px;
  top: 24px;
  text-align: right;
  max-width: 1000px;
  font-size: 80px;
}

.map-info {
  position: absolute;
  top: 250px;
  right: 20px;
  width: 410px;
}

.display-box {
  position: absolute;
  left: 24px;
  top: 250px;
  height: 810px;
}
</style>
