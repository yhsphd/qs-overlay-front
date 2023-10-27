<script setup>
import { computed } from "vue";

const props = defineProps({
  status: {
    type: Object,
    default() {
      return {
        rank: 0,
        uid: 6665667,
        nick: "yhsphd",
        score: 0,
        points: 0,
      };
    },
  },
});

const pfp_link = computed(() => {
  return `https://a.ppy.sh/${props.status.uid}`;
});
</script>

<template>
  <div class="player">
    <div class="rank">{{ status.rank }}</div>
    <img class="pfp" :src="pfp_link" />
    <div class="nick">{{ status.nick.toUpperCase() }}<br />{{ status.points }} POINTS</div>
  </div>
</template>

<style scoped>
.player {
  position: relative;
  height: 70px;
  width: 50px;
}

.rank {
  position: absolute;
  left: 4px;
  top: 4px;
}

.pfp {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 65px;
  -webkit-mask-image: url("@/assets/pfp-mask.svg");
}

.nick {
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translateY(-50%);
  font-size: 32px;
  line-height: 32px;
}
</style>
