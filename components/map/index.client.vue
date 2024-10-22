<template>
  <MglMap
    :map-style="style"
    :center="[longitude, latitude]"
    :zoom="zoom"
    height="55vh"
  >
    <MglNavigationControl />
    <MglMarker
      v-for="location in locations"
      :key="location.name"
      :color="location.category === 'Restaurant' ? '#90E0C5' : '#F292A0'"
      :coordinates="[location.long, location.lat]"
      anchor="bottom"
    />
  </MglMap>
</template>

<script setup lang="ts">
import type { Location } from "~/types/globals.ts";
import {
  MglMap,
  MglNavigationControl,
  MglMarker,
} from "@indoorequal/vue-maplibre-gl";
const style = "https://tiles.openfreemap.org/styles/positron";
const longitude = useState(() => -104.99);
const latitude = useState(() => 39.74);
const zoom = 10;

defineProps<{ locations: Location[] }>();
</script>
