<template>
  <form
    class="flex w-full component-preview pb-2 items-center justify-between gap-2"
  >
    <MapFormControlsSearch />
    <div class="flex gap-2">
      <MapFormControlsSelectValues
        :selectOptions="['Any', 'Restaurant', 'Grocery']"
        :selectLabel="'Location Type:'"
      />
      <MapFormControlsSelectValues
        :selectOptions="['Any', 'coming soon', 'for real', 'soon']"
        :selectLabel="'Cuisine Type:'"
      />
      <MapFormControlsSelectValues
        :selectOptions="['Any', 'Fully Plant Based', 'Partially Plant Based']"
        :selectLabel="'Plant-Based Level:'"
      />
      <fieldset class="form control">
        <legend class="label">
          <span class="label-text"> View as... </span>
        </legend>
        <div class="join">
          <button class="btn join-item rounded">Map</button>
          <button class="btn join-item rounded">List</button>
        </div>
      </fieldset>
    </div>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped></style>
