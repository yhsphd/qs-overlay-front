<script setup>
import { computed } from "vue";
import LogoAndFullTitle from "@/components/LogoAndFullTitle.vue";
import NowPlaying from "@/components/Intro/NowPlaying.vue";
import { state } from "@/socket";
import { secondsToMMSS } from "@/quartet";

const intro = computed(() => {
  return _intro;
});

const nowPlayingInfo = computed(() => {
  return state.overlayData.now_playing[state.overlayData.now_playing.mode];
});

let startingSoon = false;

const timeLeftText = computed(() => {
  const sec = new Date(state.overlayData.schedule);

  if (sec >= new Date()) {
    startingSoon = false;
    return secondsToMMSS((sec - new Date()) / 1000);
  } else {
    startingSoon = true;
    return "Starting Soon!";
  }
});
</script>

<template>
  <logo-and-full-title class="logo"></logo-and-full-title>

  <div class="title">{{ state.overlayData.stream_title }}</div>

  <div class="timer" v-if="intro" :class="{ startingSoon: startingSoon }">{{ timeLeftText }}</div>
  <div class="ending" v-if="!intro">STREAM<br />HAS ENDED</div>

  <now-playing
    class="np"
    :title="nowPlayingInfo.title"
    :artist="nowPlayingInfo.artist"
  ></now-playing>

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
  max-width: 1000px;
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

.startingSoon {
  font-size: 84px;
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
