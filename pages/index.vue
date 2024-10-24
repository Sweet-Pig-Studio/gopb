<template>
  <div v-if="locations">
    <MapFormControls
      :viewMap="viewMap"
      :toggleView="toggleView"
      :filters="filters"
      :cuisineOptions="cuisineOptions"
      :setCompleteKeyword="setCompleteKeyword"
    />
    <Map
      v-if="viewMap"
      :locations="filteredData"
      :setCurrentLocation="setCurrentLocation"
      :currentLocation="currentLocation"
      @update:current-location="setCurrentLocation"
    ></Map>
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
const completeKeyword = useState<string>(() => "");

const { data: locations } = await useAsyncData("locations", () =>
  $fetch<Location[]>(`${runtimeConfig.public.apiURL}/locations`)
);

const filteredData = computed(() => {
  if (!locations.value) return [];
  const locationType = filters.locationType;
  const cuisine = filters.cuisine;
  const plantBasedLevel = filters.plantBasedLevel;
  return locations.value.filter((location: Location) => {
    const searchOptions =
      completeKeyword.value === ""
        ? true
        : location.menu.some((item: string) => item.toLowerCase().includes(completeKeyword.value.toLowerCase()));
    const locationOptions =
      locationType === "Any" || location.category.includes(locationType);
    const cuisineOptions =
      cuisine === "Any" || location.cuisine.includes(cuisine);
    const plantBasedOptions =
      plantBasedLevel === "Any" ||
      (plantBasedLevel === "Fully Plant Based"
        ? location.plantBasedLevel === "full"
        : location.plantBasedLevel === "partial");
    console.log("search options", searchOptions);
    return (
      locationOptions && cuisineOptions && plantBasedOptions && searchOptions
    );
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

function setCurrentLocation(location: Location | null) {
  currentLocation.value = location;
}

function setCompleteKeyword(keyword: string) {
  console.log("hi", keyword);
  completeKeyword.value = keyword;
}

function toggleView() {
  viewMap.value = !viewMap.value;
}
</script>
