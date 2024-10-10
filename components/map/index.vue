<template>
  <MglMap
    :map-style="style"
    :center="[longitude, latitude]"
    :zoom="zoom"
  >
    <MglNavigationControl />
  </MglMap>
</template>

<script setup>
const style = 'https://tiles.openfreemap.org/styles/positron';
const longitude = useState(() => -104.99);
const latitude = useState(() => 39.74);
const zoom = 10;
</script>