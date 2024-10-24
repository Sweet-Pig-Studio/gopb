<template>
  <MglMap
    :map-style="style"
    :center="[longitude, latitude]"
    :zoom="zoom"
    height="55vh"
  >
    <MglNavigationControl />
    <template v-for="location in locations">
      <MapMarker :location="location" :setCurrentLocation="setCurrentLocation" />
    </template>
  </MglMap>
</template>

<script setup lang="ts">
import type { Location } from "~/types/globals.ts";
import { MglMap, MglNavigationControl } from "@indoorequal/vue-maplibre-gl";
const style = "https://tiles.openfreemap.org/styles/positron";
const longitude = useState(() => -104.99);
const latitude = useState(() => 39.74);
const zoom = 10;

defineProps<{
  locations: Location[];
  setCurrentLocation: (location: Location | null) => void;
  currentLocation: Location | null;
}>();
</script>
