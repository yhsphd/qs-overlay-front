<script setup>
defineProps({
  bannedMap: {
    type: Object,
    default() {
      return {
        code: undefined,
        mapsetId: undefined,
      };
    },
  },
});
</script>

<template>
  <div class="master">
    <div class="horizontal-box">
      <div class="col">
        <div>BAN</div>
        <div class="map">
          <div></div>
        </div>
      </div>
      <div class="col">
        <div>PICK</div>
        <div class="map"></div>
      </div>
    </div>
    <div>YHSPHD</div>
  </div>
</template>

<style scoped>
.master {
  width: 240px;
  height: 170px;
  margin: 5px;
  border: var(--border);
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 32px;
}

.col {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.col > * {
  margin-bottom: -4px;
  width: 100%;
}

.map {
  height: 100px;
  background-image: url("@/assets/pfp-mask.svg");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
