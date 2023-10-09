<script setup>
defineProps({
  matchCode: String,
  round: String,
});
</script>

<template>
  <div class="master">
    <div class="match-code">{{ matchCode }}</div>
    <div class="round">{{ round.toUpperCase() }}</div>
  </div>
</template>

<style scoped>
* {
  text-align: end;
}

.master {
  align-content: end;
}

.match-code {
  font-size: 128px;
  line-height: 141px;
  font-weight: 600;
}

.round {
  margin-top: -20px;
  font-size: 28px;
  font-weight: 500;
}
</style>
