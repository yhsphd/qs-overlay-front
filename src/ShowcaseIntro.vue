<script setup>
import LogoAndFullTitle from "@/components/LogoAndFullTitle.vue";
import { computed } from "vue";
import NowPlaying from "@/components/Intro/NowPlaying.vue";

const streamTitle = "Quarterfinals Showcase";
const intro = computed(() => {
  return _intro;
});
</script>

<template>
  <logo-and-full-title class="logo"></logo-and-full-title>

  <div class="title">{{ streamTitle.toUpperCase() }}</div>

  <div class="timer" v-if="intro">10:00</div>
  <div class="ending" v-if="!intro">STREAM<br />HAS ENDED</div>

  <now-playing class="np"></now-playing>

  <!--Reference Image; Will remove-->
  <!--<img
    src="@/assets/_ref_intro-showcase.png"
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
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 120px;
  font-weight: 600;
  text-align: center;
}

.timer {
  position: absolute;
  left: 24px;
  bottom: 24px;
  font-size: 128px;
  font-weight: 600;
}

.ending {
  position: absolute;
  left: 24px;
  bottom: 24px;
  font-size: 84px;
  line-height: 96px;
  font-weight: 600;
}

.np {
  position: absolute;
  right: 24px;
  bottom: 24px;
}
</style>
