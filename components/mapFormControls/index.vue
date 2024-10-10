<template>
  <form
    class="flex w-full component-preview pb-2 items-center justify-between gap-2"
  >
    <MapFormControlsSearch/>
    <div class="flex gap-2">
      <MapFormControlsSelectValues :selectOptions="['Any', 'Restaurant', 'Grocery']" :selectLabel="'Location Type:'"/>
      <MapFormControlsSelectValues :selectOptions="['Any', 'coming soon', 'for real', 'soon']" :selectLabel="'Cuisine Type:'" />
      <MapFormControlsSelectValues :selectOptions="['Any', 'Fully Plant Based', 'Partially Plant Based']" :selectLabel="'Plant-Based Level:'" />
      <div>map list vue radio here</div>
    </div>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped></style>
