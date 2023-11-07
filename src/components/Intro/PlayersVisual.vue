<script setup>
defineProps({
  intro: Boolean,
  players: Object,
  result: Object,
});

const toPfpUrl = (id) => {
  return `https://a.ppy.sh/${id}`;
};
</script>

<template>
  <div class="master">
    <div class="rotated">
      <div class="divider"></div>
      <div class="divider" style="transform: translate(-50%, -50%) rotate(90deg)"></div>
      <div class="player" style="left: 20px; top: 20px">
        <div class="pfp" :style="{ backgroundImage: `url('${toPfpUrl(players[0].id)}')` }"></div>
        <div class="nick" style="left: 50px; bottom: 310px">
          <div v-if="!intro">#{{ result.rank[0] }} {{ result.sum[0] }}pts</div>
          <div>{{ players[0].nick.toUpperCase() }}</div>
        </div>
      </div>
      <div class="player" style="left: 20px; bottom: 20px">
        <div
          class="pfp"
          :style="{
            backgroundImage: `url('${toPfpUrl(players[1].id)}')`,
            transform: 'rotate(-90deg)',
          }"
        ></div>
        <div
          class="nick"
          style="
            right: 310px;
            bottom: 50px;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            transform: rotate(180deg);
          "
        >
          <div v-if="!intro">#{{ result.rank[1] }} {{ result.sum[1] }}pts</div>
          <div>{{ players[1].nick.toUpperCase() }}</div>
        </div>
      </div>
      <div class="player" style="right: 20px; top: 20px">
        <div
          class="pfp"
          :style="{
            backgroundImage: `url('${toPfpUrl(players[2].id)}')`,
            transform: 'rotate(-90deg)',
          }"
        ></div>
        <div
          class="nick"
          style="
            left: 310px;
            bottom: 50px;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            transform: rotate(180deg);
          "
        >
          <div v-if="!intro">#{{ result.rank[2] }} {{ result.sum[2] }}pts</div>
          <div>{{ players[2].nick.toUpperCase() }}</div>
        </div>
      </div>
      <div class="player" style="right: 20px; bottom: 20px">
        <div
          class="pfp"
          :style="{
            backgroundImage: `url('${toPfpUrl(players[3].id)}')`,
          }"
        ></div>
        <div class="nick" style="left: 50px; top: 310px">
          <div v-if="!intro">#{{ result.rank[3] }} {{ result.sum[3] }}pts</div>
          <div>{{ players[3].nick.toUpperCase() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.master {
  position: relative;
}

.rotated {
  transform: rotate(45deg);
  width: 700px;
  height: 700px;
}

.divider {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  width: 8px;
  height: 100%;
  background: black;
}

.player {
  position: absolute;
  width: 300px;
  height: 300px;
}

.pfp {
  width: 100%;
  height: 100%;
  background-image: url("https://a.ppy.sh/6665667");
  background-position: center;
  background-size: cover;
  border-radius: 48px;
  overflow: hidden;
}

.nick {
  position: absolute;
  font-size: 28px;
  font-weight: 600;
}
</style>
