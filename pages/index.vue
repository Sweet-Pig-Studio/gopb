<template>
    <MapFormControls :viewMap="viewMap" :toggleView="toggleView"/>
    <!-- waiting on next release from nuxt for bug fix -->
    <!-- <Map></Map> -->
    <div v-if="viewMap">map</div>
    <div v-else>list view</div>
</template>
<script setup lang="ts">

const viewMap = useState(() => true);

function toggleView() {
  viewMap.value = !viewMap.value
}
</script>