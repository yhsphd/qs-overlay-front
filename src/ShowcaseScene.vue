<script setup>
import MapInfo from "@/components/MapInfo.vue";
import LogoAndFullTitle from "@/components/LogoAndFullTitle.vue";
import DisplayBox from "@/components/Showcase/DisplayBox.vue";

const map = {
  code: "NM3",
  order: [6, 8],
  mapId: 4065519,
  mapsetId: 1961630,
  artist: "Ryokuoushoku Shakai",
  title: "Michi o Yuke",
  mapper: "mnyui",
  difficulty: "Forever",
  cs: 4,
  ar: 9.6,
  od: 9,
  hp: 6,
  sr: 6.0,
  len: 210,
  bpm: [150, 150, 150],
};

const streamTitle = "Quarterfinals Showcase";
</script>

<template>
  <logo-and-full-title class="logo"></logo-and-full-title>
  <div class="stream-title">{{ streamTitle.toUpperCase() }}</div>

  <map-info class="map-info" v-bind="map"></map-info>

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
