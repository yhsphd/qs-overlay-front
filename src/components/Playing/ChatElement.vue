<script setup>
import { computed } from "vue";

const props = defineProps({
  data: Array, // timestamp, nick, text
  players: Array,
});

const role = computed(() => {
  for (let i = 0; i < props.players.length; i++) {
    if (props.data[1] === props.players[i].nick) {
      return `[P${i + 1}]`;
    }
  }
  return false;
});
</script>

<template>
  <div class="master">
    <div class="title horizontal-box">
      <div class="role" v-if="role">{{ role }}</div>
      <div class="nick">{{ data[1].toUpperCase() }}</div>
      <div class="divider"></div>
      <div class="time-stamp">{{ new Date(data[0]).toString().substring(16, 21) }}</div>
    </div>
    <div class="horizontal-box">
      <div class="line"></div>
      <div class="body">
        {{ data[2] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.master {
  color: black;
  margin: 16px 16px 24px 16px;
  font-size: 20px;
}

.title {
  margin-bottom: 8px;
  align-items: center;
  font-style: italic;
}

.title > * {
  margin-right: 8px;
}

.nick {
  font-weight: 600;
}

.divider {
  opacity: 0.5;
  height: 2px;
  background: black;
  flex-grow: 1;
}

.time-stamp {
  opacity: 0.5;
}

.line {
  width: 2px;
  margin: 0 8px 0 8px;
  background: black;
}
</style>
