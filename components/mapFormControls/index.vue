<template>
  <form
    class="flex w-full component-preview pb-2 items-center justify-between gap-2"
  >
    <MapFormControlsSearch />
    <div class="flex gap-2">
      <MapFormControlsSelectValues
        :selectOptions="['Any', 'Restaurant', 'Grocery']"
        :selectLabel="'Location Type:'"
        v-model:filter="filters.locationType"
      />
      <MapFormControlsSelectValues
        :selectOptions="cuisineOptions"
        :selectLabel="'Cuisine Type:'"
        v-model:filter="filters.cuisine"
      />
      <MapFormControlsSelectValues
        :selectOptions="['Any', 'Fully Plant Based', 'Partially Plant Based']"
        :selectLabel="'Plant-Based Level:'"
        v-model:filter="filters.plantBasedLevel"
      />
      <fieldset class="form control">
        <legend class="label">
          <span class="label-text"> View as... </span>
        </legend>
        <div class="join">
          <button
            @click.prevent="toggleView"
            :class="['btn', 'join-item', 'rounded', { 'bg-primary': viewMap }]"
          >
            Map
          </button>
          <button
            @click.prevent="toggleView"
            :class="['btn', 'join-item', 'rounded', { 'bg-primary': !viewMap }]"
          >
            List
          </button>
        </div>
      </fieldset>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { Filters } from "~/types/globals.ts";

defineProps<{
  viewMap: boolean;
  toggleView: (payload: MouseEvent) => void;
  filters: Filters;
  cuisineOptions: string[];
}>();
</script>
