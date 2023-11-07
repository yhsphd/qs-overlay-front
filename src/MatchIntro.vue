<script setup>
import { computed } from "vue";
import NowPlaying from "@/components/Intro/NowPlaying.vue";
import { state } from "@/socket";
import { secondsToMMSS } from "@/quartet";
import LogoAndAcronym from "@/components/LogoAndAcronym.vue";
import MatchInfo from "@/components/MatchInfo.vue";
import PlayersVisual from "@/components/Intro/PlayersVisual.vue";

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
  <logo-and-acronym class="logo"></logo-and-acronym>
  <match-info
    class="match-info"
    :match-code="state.overlayData.match_code"
    :round="state.overlayData.bracket"
  ></match-info>

  <players-visual
    class="players"
    :intro="intro"
    :players="state.overlayData.sheets.players"
    :result="state.overlayData.sheets.points"
  ></players-visual>

  <div class="timer" v-if="intro" :class="{ startingSoon: startingSoon }">{{ timeLeftText }}</div>
  <div class="ending" v-if="!intro">STREAM<br />HAS ENDED</div>

  <now-playing
    class="np"
    :title="nowPlayingInfo.title"
    :artist="nowPlayingInfo.artist"
  ></now-playing>

  <!--Reference Image; Will remove-->
  <!--<img
    src="@/assets/_ref_intro-match.png"
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
  top: 32px;
}

.match-info {
  position: absolute;
  right: 25px;
  top: 32px;
}

.players {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
