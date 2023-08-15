<template>
    <div>
      <div
        class="left-0 right-0 block mx-auto bg-white shadow-custom rounded-xl md:p-6"
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
          <HomepageTabBook 
            isLive="true"
          />
        </div>
        <div v-else-if="activeTab == 2" class="p-6 md:p-0">
          <HomepageTabMyTrip />
        </div>
        <div v-else-if="activeTab == 3" class="p-6 md:p-0">
          <HomepageTabFlightInfo />
        </div>
      </div>
      <!-- <div class="hidden md:block h-80"></div> -->
    </div>
  </template>
  
  <script>
  import HomepageTabBook from '../components/homepage/TabBook.vue'
  import HomepageTabMyTrip from '../components/homepage/TabMyTrip.vue'
  import HomepageTabFlightInfo from '../components/homepage/TabFlightInfo.vue'
  export default {
    name: "Embed",
    components: { 
        HomepageTabBook,
        HomepageTabMyTrip,
        HomepageTabFlightInfo,
    },
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