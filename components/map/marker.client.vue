<template>
  <MglMarker
    :key="location.name"
    :color="location.category === 'Restaurant' ? '#90E0C5' : '#F292A0'"
    :coordinates="[location.long, location.lat]"
    anchor="bottom"
  >
    <MapPopup :location="location" :setCurrentLocation="setCurrentLocation" />
  </MglMarker>
</template>

<script setup lang="ts">
  import type { Location } from "~/types/globals.ts";
  import { MglMarker } from "@indoorequal/vue-maplibre-gl";
  defineProps<{
    location: Location;
    setCurrentLocation: (location: Location | null) => void;
  }>();
</script>

<style lang="css">
.maplibregl-popup-close-button {
  padding: 0.8rem;
  margin: 2%;
  font-size: 1.5rem;
  line-height: 0.8rem;
  background-color: hsl(0, 0%, 0%, 5%);
  border-radius: 50px;
  font-family: Calibri;
}
</style>
