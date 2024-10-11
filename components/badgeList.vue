<template>
  <div class="text-sm text-gray-500 space-x-1 space-y-2">
    <div v-for="item in items" class="badge badge-accent">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: string[] }>();
</script>

<style scoped></style>
