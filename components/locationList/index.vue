<template>
  <table class="table">
    <thead>
      <tr>
        <th>Location</th>
        <th>Cuisine</th>
        <th>Ratings</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="location in locations"
        :class="{
          'bg-accent':
            currentLocation && currentLocation.name === location.name,
        }"
      >
        <td>
          <div class="flex items-center space-x-3 truncate">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  :alt="`user added image of ${location.name}`"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-xl">{{ location.name }}</div>
              <div className="text-sm text-gray-500">
                {{ location.address }}
              </div>
            </div>
          </div>
        </td>
        <td>
          <BadgeList :items="location.cuisine" />
        </td>
        <td>
          <LocationStats :location="location" />
        </td>
        <td>
          <button
            class="btn rounded join-item bg-primary"
            @click="setCurrentLocation(location)"
          >
            See More Information
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Location } from "~/types/globals.ts";
defineProps<{
  locations: Location[];
  setCurrentLocation: (location: Location) => void;
  currentLocation: Location | null;
}>();
</script>

<style scoped></style>
