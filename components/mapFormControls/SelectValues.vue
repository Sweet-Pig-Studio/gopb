<template>
  <div class="form control">
    <label class="label">
      <span class="label-text">{{ selectLabel }}</span>
    </label>
    <select class="select select-bordered rounded" defaultValue="Any">
      <option v-for="(selectOption, i) in selectOptions">{{  selectOption }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  defineProps<{selectOptions: string[], selectLabel: string}>();
</script>