<script setup lang="ts">
  const menuItems = useState('menuItems', () => {
    return [{ name: 'logo', link: '/'}, { name: 'About', link: '/about'}]
  })
</script>

<template>
  <Menubar :model="menuItems"></Menubar>
</template>