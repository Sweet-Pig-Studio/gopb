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
      <tr>
        <td>
          <div class="flex items-center space-x-3 truncate">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                  alt="todo"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-xl">Fellow Traveler</div>
              <div className="text-sm text-gray-500">123 Broadway, Denver, CO 80222</div>
            </div>
          </div>
        </td>
        <td>
          <div class="text-sm text-gray-500 space-x-1 space-y-2">
            <div class="badge badge-secondary">cuisine</div>
          </div>
        </td>
        <td>
          <div class="stats stats-horizontal">
            <div class="stat">
              <div class="stat-title">Rating</div>
              <div class="stat-value">4/5</div>
              <div class="stat-desc">collected from GOPB users</div>
            </div>
            <div class="stat">
              <div class="stat-title">Rating</div>
              <div class="stat-value">5/5</div>
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

<script setup lang="ts"></script>

<style scoped></style>
