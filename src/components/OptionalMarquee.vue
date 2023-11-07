<script setup>
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { ref, watch } from "vue";
import { makeid } from "@/quartet";

const props = defineProps({
  enabled: Boolean,
  marquee_id: String,
  speed: Number,
  text: String,
});

const masterElement = ref();
let marquee_key = makeid(10);

watch(
  () => props.text,
  () => {
    marquee_key = makeid(10);
  }
);
</script>

<template>
  <vue-marquee-slider
    ref="masterElement"
    v-if="enabled"
    :autoWidth="true"
    :id="marquee_id"
    :speed="speed"
    :key="marquee_key"
  >
    <span>{{ text }}</span>
    <span style="width: 50px"></span>
    <span>{{ text }}</span>
    <span style="width: 50px"></span>
  </vue-marquee-slider>
  <span v-if="!enabled">{{ text }}</span>
</template>

<style scoped></style>
