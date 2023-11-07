<script setup>
import LogoAndAcronym from "@/components/LogoAndAcronym.vue";
import MatchInfo from "@/components/MatchInfo.vue";
import RankBox from "@/components/Playing/RankBox.vue";
import ClientBox from "@/components/Playing/ClientBox.vue";
import MapInfo from "@/components/MapInfo.vue";
import { state } from "@/socket";
import { computed, ref, watch } from "vue";
import ChatElement from "@/components/Playing/ChatElement.vue";

const scoreRank = computed(() => {
  const clients = state.overlayData.lobby.players;
  const scores = Array.from(
    new Set(
      Object.keys(clients).map(function (key) {
        return clients[key].score;
      })
    )
  );
  let order = [0, 1, 2, 3];

  for (let i = 1; i < scores.length; i++) {
    let key = order[i];
    let j;
    for (j = i - 1; j >= 0 && scores[order[j]] > scores[key]; j--) {
      order[j + 1] = order[j];
    }
    order[j + 1] = key;
  }

  let rank = [];

  for (let i = 0; i < order.length; i++) {
    rank.push(order.length - 1 - order.indexOf(i));
  }

  return rank;
});

const tourneyState = computed(() => {
  try {
    return state.overlayData.progress.state;
  } catch (e) {
    return -1;
  }
});
const showChat = ref();

watch(tourneyState, (newState, oldState) => {
  if (newState === 1) {
    // idle
    showChat.value = true;
  } else if (newState === 3) {
    // playing
    showChat.value = false;
  } else if (oldState === 3 && newState === 4) {
    // playing -> result
    setTimeout(() => {
      showChat.value = true;
    }, 10000);
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

  <div class="leaderboard" v-if="!showChat">
    <rank-box
      v-for="(player, i) in state.overlayData.lobby.players"
      :key="i"
      v-bind="player"
      :index="i"
      :rank="scoreRank[i] + 1"
    ></rank-box>
  </div>

  <div class="chat" v-if="showChat">
    <chat-element
      v-for="(chat, i) in state.overlayData.chat.slice(-10).reverse()"
      :key="i"
      :data="chat"
      :players="state.overlayData.sheets.players"
    ></chat-element>
  </div>

  <div class="clients">
    <client-box
      v-for="(_, i) in state.overlayData.sheets.points.sum"
      :key="i"
      :index="i"
      :rank="state.overlayData.sheets.points.rank[i]"
      :points="state.overlayData.sheets.points.sum[i]"
    ></client-box>
  </div>

  <map-info
    class="map-info"
    :map="state.overlayData.now_playing.osu"
    :type="state.overlayData.type"
  ></map-info>

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

.chat {
  position: absolute;
  top: 250px;
  left: 20px;
  width: 410px;
  height: 635px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
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
