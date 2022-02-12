<template>
  <div>
    <div class="w-full bg-primary-600 fixed top-0">
      <div
        class="
          container
          mx-auto
          h-10
          text-grayscale-50 text-xs
          flex
          items-center
        "
      >
        <div class="w-full hidden md:flex">
          <div class="flex-1 flex items-center">
            <span class="pr-3 font-medium">News</span>
            <span
              ><img
                src="~/assets/images/arrow-right.svg"
                class="inline-block"
                alt="arrow right"
            /></span>
            <span class="pl-3"
              >Information about travel policy due to the impact of COVID-19
              outbreak</span
            >
          </div>
          <div class="flex-1 text-right hidden md:inline">
            <span class="pr-3"
              ><img
                src="~/assets/images/globe.svg"
                class="inline-block"
                alt="globe"
            /></span>
            <span>English</span>
            <span class="pl-3"
              ><img
                src="~/assets/images/arrow-bottom.svg"
                class="inline-block"
                alt="arrow bottom"
            /></span>
          </div>
        </div>
        <div class="flex w-full md:hidden px-5 items-center">
          <span
            ><img
              src="~/assets/images/info.svg"
              class="inline-block"
              alt="arrow right"
          /></span>
          <span class="pl-2">Policy due to the impact of COVID-19</span>
        </div>
      </div>
    </div>
    <div class="h-10"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>