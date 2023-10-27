<script setup>
import PlayerPoints from "@/components/Mappool/PlayerPoints.vue";

defineProps({
  phase: Number,
});

const players = [{}, {}, {}, {}];
</script>

<template>
  <div class="master">
    <div class="title">
      <div style="height: 10px"></div>
      BAN&PICK<br />PHASE {{ phase }}
    </div>
    <div class="sub">CURRENT<br />STANDING</div>
    <player-points v-for="(player, i) in players" :key="i"></player-points>
  </div>
</template>

<style scoped>
.master {
  width: 400px;
  height: 630px;
  border: var(--border);
  border-radius: 24px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  font-weight: 600;
}

.master > * {
  margin: 5px 5px 0 5px;
  border: var(--border);
  border-radius: 16px;
  flex-basis: 100%;
}

.title {
  height: 140px;
  text-align: center;
  font-size: 48px;
}

.sub {
  height: 90px;
  text-align: center;
  font-size: 36px;
}
</style>
