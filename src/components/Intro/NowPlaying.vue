<script setup>
defineProps({
  title: String,
  artist: String,
});
</script>

<template>
  <div class="master">
    <div class="outline"></div>
    <div class="label">NOW<br />PLAYING</div>
    <div class="title">{{ title.toUpperCase() }}</div>
    <div class="artist">{{ artist.toUpperCase() }}</div>
  </div>
</template>

<style scoped>
.master {
  width: 310px;
  height: 310px;
}

.master > * {
  text-align: center;
  width: 100%;
}

.outline {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 240px;
  height: 240px;
  border: var(--border);
  border-radius: 48px;
  transform: rotate(45deg);
}

.label {
  margin-top: 50px;
  font-size: 28px;
}

.title {
  margin-top: 5px;
  font-size: 32px;
  font-weight: 600;
  word-wrap: anywhere;
}

.artist {
  margin-top: 8px;
  font-size: 16px;
}
</style>