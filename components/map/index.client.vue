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
      @click.stop="emit('update:currentLocation', location)"
    >
    <MglPopup
      v-if="true"
      :coordinates="[location.long, location.lat]"
      :close-botton="true"
      focusAfterOpen
      closeOnClick
      maxWidth="700px"
      :close="setCurrentLocation(null)"
    >
    oh hello there
    </MglPopup>
  </MglMarker>

  </MglMap>
</template>

<script setup lang="ts">
import type { Location } from "~/types/globals.ts";
import {
  MglMap,
  MglNavigationControl,
  MglMarker,
  MglPopup,
} from "@indoorequal/vue-maplibre-gl";
const style = "https://tiles.openfreemap.org/styles/positron";
const longitude = useState(() => -104.99);
const latitude = useState(() => 39.74);
const zoom = 10;

const emit = defineEmits<{
  (e: 'update:currentLocation', location: Location | null): void; 
}>();

defineProps<{
  locations: Location[];
  setCurrentLocation: (location: Location | null) => void;
  currentLocation: Location | null;
}>();
</script>
