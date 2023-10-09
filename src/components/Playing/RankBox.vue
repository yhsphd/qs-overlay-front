<script setup>
import { computed } from "vue";

const props = defineProps({
  status: {
    type: Object,
    default() {
      return {
        rank: 0,
        uid: 1,
        nick: "peppy",
        score: 0,
      };
    },
  },
});

const pfp_link = computed(() => {
  return `https://a.ppy.sh/${props.status.uid}`;
});
</script>

<template>
  <div class="master">
    <div class="rank">{{ status.rank }}</div>
    <img class="pfp" :src="pfp_link" />
    <div class="nick">{{ status.nick.toUpperCase() }}</div>
    <div class="score">{{ status.score.toLocaleString() }}</div>
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
