<script lang="ts">
  export default {
    name: "Admin",
  };
</script>

<template>
  <div>
    <div class="flex w-full h-auto h-screen">
      <div class="flex flex-wrap content-center justify-center flex-1 bg-cover">
        Ini adalah halaman Admin. &nbsp;
        <NuxtLink to="/">
          <div class="flex items-center mb-6 cursor-pointer text-grayscale-900">
            Back to Home
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
</style>
