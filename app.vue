<template>
  <div>
    <nav class="navbar bg-base-100 shadow-inner shadow-sm px-8">
      <NuxtLink to="/" class="flex-1 text-4xl text-primary font-bold">GOPB!</NuxtLInk>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 uppercase">
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.preference = 'light';
</script>
