<template>
  <div class="flex flex-row justify-center items-center">
    <div class="stats stats-horizontal rounded">
      <div class="stat">
        <div class="stat-title">Rating</div>
        <div class="stat-value">{{ location.userRating }}/5</div>
        <div class="stat-desc whitespace-normal">collected from GOPB users</div>
      </div>
      <div class="stat">
        <div class="stat-title">Rating</div>
        <div class="stat-value">{{ location.editorRating }}/5</div>
        <div class="stat-desc whitespace-normal">based on editor's personal experience</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/types/globals.ts';
defineProps<{location: Location}>();
</script>

<style scoped></style>
