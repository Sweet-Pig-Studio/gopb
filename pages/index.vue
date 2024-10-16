<template>
    <MapFormControls :viewMap="viewMap" :toggleView="toggleView"/>
    <!-- waiting on next release from nuxt for bug fix -->
    <!-- <Map></Map> -->
    <div v-if="viewMap">map</div>
    <LocationList v-else :locations="data" :setCurrentLocation="setCurrentLocation" :currentLocation="currentLocation"/>
    <LocationDetails v-if="currentLocation" :location="currentLocation" />
</template>
<script setup lang="ts">
import type { Location } from '~/types/globals.ts';

const runtimeConfig = useRuntimeConfig()
const viewMap = useState(() => true);
const currentLocation = useState<Location | null>(() => null);

const { data } = await useFetch<Location[] | null>(`${runtimeConfig.public.apiURL}/locations`);

function setCurrentLocation(location: Location) {
  currentLocation.value = location;
}

function toggleView() {
  viewMap.value = !viewMap.value
}
</script>