import { defineStore } from 'pinia';
import type { Location } from "~/types/globals.ts";

export const useLocationsStore = defineStore('locations', () => {
  const locations = ref<Location[]>([]);
  const currentLocation = ref<Location | null>(null);

  async function setLocations() {
    try {
      const { data: newLocations } = await useFetch<Location[]>(`${useRuntimeConfig().public.apiURL}/locations`);
      if (newLocations.value) locations.value = newLocations.value;
    } catch (error) {
      throw new Error('Could not fetch locations.');
    }
  }

  setLocations();

  return { locations, currentLocation, setLocations };
});