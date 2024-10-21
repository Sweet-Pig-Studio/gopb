<template>
  <div v-if="locations">
    <MapFormControls
      :viewMap="viewMap"
      :toggleView="toggleView"
      :filters="filters"
      :cuisineOptions="cuisineOptions"
    />
    <!-- waiting on next release from nuxt for bug fix -->
    <!-- <Map></Map> -->
    <div v-if="viewMap">map</div>
    <LocationList
      v-else
      :locations="filteredData"
      :setCurrentLocation="setCurrentLocation"
      :currentLocation="currentLocation"
    />
    <LocationDetails v-if="currentLocation" :location="currentLocation" />
  </div>
</template>
<script setup lang="ts">
import type { Location } from "~/types/globals.ts";

const runtimeConfig = useRuntimeConfig();
const viewMap = useState(() => true);
const currentLocation = useState<Location | null>(() => null);

const { data: locations } = await useAsyncData("locations", () =>
  $fetch<Location[]>(`${runtimeConfig.public.apiURL}/locations`)
);

const filteredData = computed(() => {
  if (!locations.value) return [];
  const locationType = filters.locationType;
  const cuisine = filters.cuisine;
  const plantBasedLevel = filters.plantBasedLevel;
  return locations.value.filter((location: Location) => {
    const locationOptions =
      locationType === "Any" || location.category.includes(locationType);
    const cuisineOptions =
      cuisine === "Any" || location.cuisine.includes(cuisine);
    const plantBasedOptions =
      plantBasedLevel === "Any" ||
      (plantBasedLevel === "Fully Plant Based"
        ? location.plantBasedLevel === "full"
        : location.plantBasedLevel === "partial");
    return locationOptions && cuisineOptions && plantBasedOptions;
  });
});

const filters = reactive({
  cuisine: "Any",
  locationType: "Any",
  plantBasedLevel: "Any",
});

const cuisineOptions = computed(() => {
  const list = Array.from(
    new Set(
      locations.value?.map((location: Location) => location.cuisine).flat()
    )
  );
  list.unshift("Any");
  return list;
});

function setCurrentLocation(location: Location) {
  currentLocation.value = location;
}

function toggleView() {
  viewMap.value = !viewMap.value;
}
</script>
