<template>
  <MglPopup
    v-if="true"
    :coordinates="[location.long, location.lat]"
    :close-button="true"
    focusAfterOpen
    closeOnClick
    maxWidth="700px"
    @close="setCurrentLocation(null)"
  >
    <div class="card rounded w-96">
      <div class="card-body">
        <p class="card-title">{{ location.name }}</p>
        <div class="pb-4">
          <BadgeList :items="location.tags" />
        </div>
        <LocationStats :location="location" />
        <div class="card-actions flex justify-center items-center mt-6">
          <button
            @click="setCurrentLocation(location)"
            class="button rounded bg-primary font-bold p-4"
          >
            See More Information
          </button>
        </div>
      </div>
    </div>
  </MglPopup>
</template>

<script setup lang="ts">
  import type { Location } from "~/types/globals.ts";
  import { MglPopup } from "@indoorequal/vue-maplibre-gl";

  defineProps<{
    location: Location;
    setCurrentLocation: (location: Location | null) => void;
  }>();
</script>
