<script setup>
import "@/../node_modules/vue3-marquee-slider/dist/style.css";
import { secondsToMMSS } from "@/quartet";
import { computed } from "vue";
import OptionalMarquee from "@/components/OptionalMarquee.vue";

const props = defineProps({
  type: String,
  map: Object,
  order: Array,
});

const backgroundUrl = computed(() => {
  if (props.map.background) {
    return `url("${props.map.background}")`;
  } else {
    return "unset";
  }
});
</script>

<template>
  <div class="master">
    <div class="title" :style="{ backgroundImage: backgroundUrl }">
      <div class="background-lighten">
        <div class="code" v-if="map.code">{{ map.code }}</div>
        <div class="order" v-if="order.length !== 0">
          {{ type === "showcase" ? "MAP" : "PICK" }} {{ order[0] }} / {{ order[1] }}
        </div>
        <div style="flex-grow: 1"></div>
        <div class="key">{{ map.artist.toUpperCase() }}</div>
        <div class="value">
          <optional-marquee
            :enabled="map.title.length > 11"
            :speed="20000"
            :text="map.title.toUpperCase()"
            :marquee_id="'_om_mapinfo_maptitle'"
          ></optional-marquee>
        </div>
      </div>
    </div>
    <div class="mapper">
      <div class="key">MAPPER</div>
      <div class="value">
        <optional-marquee
          :enabled="map.mapper.length > 11"
          :speed="20000"
          :text="map.mapper.toUpperCase()"
          :marquee_id="'_om_mapinfo_mapper'"
        >
        </optional-marquee>
      </div>
    </div>
    <div class="diff">
      <div class="key">DIFFICULTY</div>
      <div class="value">
        <optional-marquee
          :enabled="map.difficulty.length > 11"
          :speed="20000"
          :text="map.difficulty.toUpperCase()"
          :marquee_id="'_om_mapinfo_diff'"
        >
        </optional-marquee>
      </div>
    </div>
    <div class="metadata">
      <div class="key">CS</div>
      <div class="value">{{ map.stats.modified.cs.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">AR</div>
      <div class="value">{{ map.stats.modified.ar.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">OD</div>
      <div class="value">{{ map.stats.modified.od.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">SR</div>
      <div class="value">{{ map.stats.modified.sr.toFixed(1) }}</div>
    </div>
    <div class="metadata">
      <div class="key">LENGTH</div>
      <div class="value">{{ secondsToMMSS(map.stats.modified.length / 1000) }}</div>
    </div>
    <div class="metadata">
      <div class="key">BPM</div>
      <div class="value">{{ Math.round(map.stats.modified.bpm) }}</div>
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
  width: calc(100% - 20px);
  max-width: calc(100% - 20px);
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
  white-space: nowrap;
  overflow: hidden;
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
