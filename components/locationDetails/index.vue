<template>
  <div class="card bg-neutral rounded">
    <div class="card-body">
      <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-2 w-2/3 pr-20">
            <h2 class="card-title">{{ location.name }}</h2>
            <p>{{ location.address }}</p>
            <p>{{ location.category }}</p>
            <BadgeList :items="location.cuisine"/>
          </div>
          <div className="w-1/4">
            <LocationStats :location="location" />
          </div>
        </div>
        <div class="card bg-accent rounded border-accent my-8">
          <div class="card-body">
            <h3 class="card-title">Menu:{{ location.plantBasedLevel === 'full' ? 'Fully Plant-Based Menu' : 'Includes Plant-Based Options' }}</h3>
            <p>Menu Aquired on: {{ location.dateUpdated }}</p>
            <p>{{ location.menu }}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8 mt-4">
          <div className="h-auto w-44">
            <img src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg" alt="placeholder" />
          </div>
          <div className="h-auto w-44">
            <img src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg" alt="placeholder" />
          </div>
          <div className="h-auto w-44">
            <img src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg" alt="placeholder" />
          </div>
          <div className="h-auto w-44">
            <img src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg" alt="placeholder" />
          </div>
          <div className="h-auto w-44">
            <img src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg" alt="placeholder" />
          </div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/types/globals';

defineProps<{location: Location}>();
</script>

<style scoped>

</style>