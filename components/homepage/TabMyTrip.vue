<template>
  <div class="px-6 pb-6 md:px-0 md:pb-0">
    <div class="mt-8 text-2xl font-semibold text-grayscale-900 font-noto-sans">
      Manage your upcoming trip
    </div>
    <div class="mt-2 text-grayscale-500">
      Please review this terms & conditions of My Trip sections
    </div>
    <div class="mt-6 md:flex gap-x-4">
      <div class="flex-1">
        <Input label="Book Reference" value="1233444554" />
      </div>
      <div class="flex-1 mt-6 md:mt-0">
        <Input label="Last Name" value="Gauri" />
      </div>
    </div>
    <div class="mt-8 md:inline-block md:float-right md:mb-0">
      <NuxtLink to="/my-trip">
        <Button value="Search Flights" customClass="px-6" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageTabMyTrip",
};
</script>