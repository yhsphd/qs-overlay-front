<script setup>
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { makeid } from "@/quartet";

defineProps({
  enabled: Boolean,
  id: String,
  speed: Number,
  text: String,
});
</script>

<template>
  <vue-marquee-slider v-if="enabled" :autoWidth="true" :id="makeid(10)" :speed="speed">
    <span>{{ text }}</span>
    <span style="width: 50px"></span>
    <span>{{ text }}</span>
    <span style="width: 50px"></span>
  </vue-marquee-slider>
  <span v-if="!enabled">{{ text }}</span>
</template>

<style scoped></style>