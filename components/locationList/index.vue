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
      <tr v-for="location in locations">
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
              <div className="text-sm text-gray-500">{{ location.address }}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="text-sm text-gray-500 space-x-1 space-y-2">
            <div v-for="cuisine in location.cuisine" class="badge badge-secondary">{{ cuisine }}</div>
          </div>
        </td>
        <td>
          <div class="stats stats-horizontal">
            <div class="stat">
              <div class="stat-title">Rating</div>
              <div class="stat-value">{{ location.userRating }}/5</div>
              <div class="stat-desc">collected from GOPB users</div>
            </div>
            <div class="stat">
              <div class="stat-title">Rating</div>
              <div class="stat-value">{{ location.editorRating}}/5</div>
              <div class="stat-desc">based on editor's personal experience</div>
            </div>
          </div>
        </td>
        <td>
          <button class="btn rounded join-item bg-primary">
            See More Information
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Location } from '~/types/globals.ts';
defineProps<{locations: Location[] | null}>();

</script>

<style scoped></style>
