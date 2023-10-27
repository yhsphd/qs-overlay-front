<script setup>
import LogoAndAcronym from "@/components/LogoAndAcronym.vue";
import MatchInfo from "@/components/MatchInfo.vue";
import RankBox from "@/components/Playing/RankBox.vue";
import ClientBox from "@/components/Playing/ClientBox.vue";
import MapInfo from "@/components/MapInfo.vue";

const players = [
  {
    rank: 1,
    uid: 6665667,
    nick: "yhsphd",
    score: 1727727,
  },
  {
    rank: 2,
    uid: 6537257,
    nick: "KitaShia",
    score: 727726,
  },
  {
    rank: 3,
    uid: 11129034,
    nick: "_sPekTrE",
    score: 727725,
  },
  {
    rank: 4,
    uid: 9052194,
    nick: "Allegrissimo",
    score: 727724,
  },
];
const clients = [
  { rank: 1, points: 7 },
  { rank: 2, points: 4 },
  { rank: 3, points: 3 },
  { rank: 4, points: 1 },
];
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
</script>

<template>
  <logo-and-acronym class="logo"></logo-and-acronym>
  <match-info class="match-info" match-code="W12" round="Quarterfinals"></match-info>

  <div class="leaderboard">
    <rank-box v-for="(player, i) in players" :key="i" :status="player"></rank-box>
  </div>

  <div class="clients">
    <client-box v-for="(client, i) in clients" :key="i" :index="i" :status="client"></client-box>
  </div>

  <map-info class="map-info" v-bind="map"></map-info>

  <!--Reference Image; Will remove-->
  <!--<img
    src="@/assets/_ref_playing.png"
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

.leaderboard {
  position: absolute;
  top: 250px;
}

.clients {
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 1100px;
  top: 78px;
  left: 50%;
  transform: translate(-50%, 0);
}

.map-info {
  position: absolute;
  top: 250px;
  right: 20px;
  width: 400px;
}
</style>
