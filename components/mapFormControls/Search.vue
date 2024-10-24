<template>
  <div class="form-control flex flex-row items-end jsutify-center gap-2">
    <div class="flex flex-col">
      <label class="label">
        <span class="label-text">Search by keyword, food, etc:</span>
      </label>
      <input
        type="search"
        class="input input-bordered rounded"
        placeholder="Search..."
        v-model="searchKeyword"
      />
    </div>
    <button class="btn rounded" @click.prevent="setCompleteKeyword(searchKeyword)">Search</button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ setCompleteKeyword: (completeKeyword: string) => void }>();

  const searchKeyword = ref('');
</script>