<template>
  <div class="form control">
    <label class="label" :for="selectLabel">
      <span class="label-text">{{ selectLabel }}</span>
    </label>
    <select v-model="title" :id="selectLabel" class="select select-bordered rounded" defaultValue="Any">
      <option v-for="(selectOption, i) in selectOptions">{{  selectOption }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  defineProps<{selectOptions: string[], selectLabel: string }>();
  const title = defineModel('filter');
</script>