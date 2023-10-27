<script setup>
import MatchInfo from "@/components/MatchInfo.vue";
import LogoAndAcronym from "@/components/LogoAndAcronym.vue";
import PlayerBox from "@/components/Mappool/PlayerBox.vue";
import StatusBox from "@/components/Mappool/StatusBox.vue";

const players = [{}, {}, {}, {}];
</script>

<template>
  <logo-and-acronym class="logo"></logo-and-acronym>
  <match-info class="match-info" match-code="W12" round="Quarterfinals"></match-info>

  <div class="pools"></div>

  <div class="players horizontal-box">
    <player-box v-for="player in players" :key="player" v-bind="player"></player-box>
  </div>

  <status-box class="status"></status-box>

  <!--Reference Image; Will remove-->
  <!--<img
    src="@/assets/_ref_mappool.png"
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

.pools {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 1020px;
  height: 770px;
  border: var(--border);
  border-radius: 16px;
}

.players {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}

.status {
  position: absolute;
  top: 250px;
  right: 20px;
}
</style>
