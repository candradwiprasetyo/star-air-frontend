<template>
  <div>
    <div
      class="container left-0 right-0 block mx-auto bg-white shadow-custom rounded-xl md:p-6 md:absolute md:-mt-20"
    >
      <div
        class="flex pt-4 font-semibold border-b border-gray-300 text-grayscale-400 md:pt-2"
      >
        <div
          class="menu"
          :class="
            activeTab == 1 ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''
          "
          @click="changeTab(1)"
        >
          <img src="~/assets/images/book.svg" class="inline-block" alt="Book" />
          <span class="pl-1" :class="activeTab == 1 ? 'text-secondary-900' : ''"
            >Book</span
          >
        </div>
        <!-- <div
          class="menu"
          :class="
            activeTab == 2 ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''
          "
          @click="changeTab(2)"
        >
          <img
            src="~/assets/images/my-trip.svg"
            class="inline-block"
            alt="My Trip"
          />
          <span class="pl-1" :class="activeTab == 2 ? 'text-secondary-900' : ''"
            >My Trip</span
          >
        </div> -->
        <div
          class="menu"
          :class="
            activeTab == 3 ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''
          "
          @click="changeTab(3)"
        >
          <img
            src="~/assets/images/flight-info.svg"
            class="inline-block"
            alt="Flight Info"
          />
          <span class="pl-1" :class="activeTab == 3 ? 'text-secondary-900' : ''"
            >Flight Info</span
          >
        </div>
      </div>
      <div v-if="activeTab == 1" class="p-6 md:p-0">
        <HomepageTabBook />
      </div>
      <div v-else-if="activeTab == 2">
        <HomepageTabMyTrip />
      </div>
      <div v-else-if="activeTab == 3">
        <HomepageTabFlightInfo />
      </div>
    </div>
    <div class="hidden md:block h-80"></div>
  </div>
</template>

<script>

export default {
  name: "AdvancedSearch",
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss">
.menu {
  @apply flex-1 md:flex-none text-center md:px-6 cursor-pointer;
}
// .menu-active {
//   @apply border-secondary-900 border-b-6 pb-3 md:pb-6;
// }
</style>