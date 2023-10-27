<script setup>
import { computed } from "vue";

const props = defineProps({
  code: String,
  order: Array,
  mapId: Number,
  mapSetId: Number,
  artist: String,
  title: String,
  mapper: String,
  difficulty: String,
  cs: Number,
  ar: Number,
  od: Number,
  hp: Number,
  sr: Number,
  len: Number,
  bpm: Array,
});

const bgUrl = computed(() => {
  return `url(https://assets.ppy.sh/beatmaps/${props.mapSetId}/covers/raw.jpg)`;
});

const len_str = computed(() => {
  return new Date(props.len * 1000).toISOString().slice(14, 19);
});
</script>

<template>
  <div class="master">
    <div class="title" :style="{ backgroundImage: bgUrl }">
      <div class="background-lighten">
        <div class="code">{{ code }}</div>
        <div class="order">PICK {{ order[0] }} / {{ order[1] }}</div>
        <div style="flex-grow: 1"></div>
        <div class="key">{{ artist.toUpperCase() }}</div>
        <div class="value">{{ title.toUpperCase() }}</div>
      </div>
    </div>
    <div class="mapper">
      <div class="key">MAPPER</div>
      <div class="value">{{ mapper.toUpperCase() }}</div>
    </div>
    <div class="diff">
      <div class="key">DIFFICULTY</div>
      <div class="value">{{ difficulty.toUpperCase() }}</div>
    </div>
    <div class="metadata">
      <div class="key">CS</div>
      <div class="value">{{ cs.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">AR</div>
      <div class="value">{{ ar.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">OD</div>
      <div class="value">{{ od.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">SR</div>
      <div class="value">{{ sr.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">LENGTH</div>
      <div class="value">{{ len_str }}</div>
    </div>
    <div class="metadata">
      <div class="key">BPM</div>
      <div class="value">{{ bpm[2] }}</div>
    </div>
    <div style="opacity: 0"></div>
  </div>
</template>

<style scoped>
.master {
  min-width: 400px;
  height: 630px;
  border: var(--border);
  border-radius: 24px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.master > * {
  margin: 5px 5px 0 5px;
  border: var(--border);
  border-radius: 16px;
  flex-basis: 100%;
  text-align: center;
}

.title {
  position: relative;
  height: 190px;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.background-lighten {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.code {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: var(--border);
  border-radius: 8px;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.1em;
  background: rgba(255, 255, 255, 0.5);
}

.order {
  position: absolute;
  top: 8px;
  right: 15px;
  font-size: 28px;
  font-weight: 600;
}

.key {
  margin-top: 5px;
  font-size: 20px;
  font-weight: 500;
}

.value {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.1em;
}

.metadata > .value {
  font-size: 40px;
}

.mapper,
.diff {
  height: 95px;
}

.metadata {
  margin-right: 0;
  flex-basis: calc(33% - 15.5px);
  height: 85px;
}
</style>
