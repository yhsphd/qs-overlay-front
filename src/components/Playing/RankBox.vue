<script setup>
import { computed } from "vue";

const props = defineProps({
  id: Number,
  nick: String,
  score: Number,
  combo: Number,
  acc: Number,
  index: Number,
  rank: Number,
});

const pfp_link = computed(() => {
  return `https://a.ppy.sh/${props.id ? props.id : -1}`;
});
</script>

<template>
  <div class="master" :style="{ top: (rank - 1 - index) * 165 + 'px' }">
    <div class="rank">{{ index + 1 }}</div>
    <img class="pfp" :src="pfp_link" />
    <div class="nick">{{ nick.toUpperCase() }}</div>
    <div class="score">{{ score.toLocaleString() }}</div>
  </div>
</template>

<style scoped>
.master {
  position: relative;
  margin: 0 0 25px 20px;
  width: 400px;
  height: 130px;
  border-radius: 24px;
  border: var(--border);
  transition: top 500ms cubic-bezier(0, 1.4, 0.6, 1);
}

.master > * {
  position: absolute;
  font-weight: 600;
}

.rank {
  left: 10px;
  top: 0;
  font-size: 28px;
}

.pfp {
  left: 10px;
  top: 5px;
  max-width: 120px;
  max-height: 120px;
  -webkit-mask-image: url("@/assets/pfp-mask.svg");
}

.nick {
  left: 140px;
  top: 15px;
  font-size: 30px;
}

.score {
  left: 140px;
  top: 50px;
  font-size: 48px;
}
</style>
