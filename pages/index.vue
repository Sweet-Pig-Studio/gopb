<template>
    <MapFormControls :viewMap="viewMap" :toggleView="toggleView"/>
    <!-- waiting on next release from nuxt for bug fix -->
    <!-- <Map></Map> -->
    <div v-if="viewMap">map</div>
    <LocationList v-else :locations="data"/>
</template>
<script setup lang="ts">
import type { Location } from '~/types/globals.ts';

const runtimeConfig = useRuntimeConfig()
const { data } = await useFetch<Location[] | null>(`${runtimeConfig.public.apiURL}/locations`);

const viewMap = useState(() => true);

function toggleView() {
  viewMap.value = !viewMap.value
}
</script>