<script lang="ts">
export default {
  name: "EarnPoints",
  data() {
    return {
      activeTab: 1,
      tabData: [
        { id: 1, name: 'All' },
        { id: 2, name: 'Airlines' },
        { id: 3, name: 'Hotel' },
        { id: 4, name: 'Financial Services' },
        { id: 5, name: 'Shopping' },
        { id: 6, name: 'Others' },
      ],
      dataPoint: [
        { id: 1, cover: 'earn-point-1.jpg', title: 'Flight with Star Air', description: 'Earn Star Points when you fly with Star Air to your desired destinations.' },
        { id: 2, cover: 'earn-point-2.jpg',title: 'Stay at Aston Hotel', description: 'Staycation at Aston hotel available ini 54 countries and you can also earn Star Points.' },
        { id: 3, cover: 'earn-point-3.jpg',title: 'Convert UOB Points', description: 'If you have UOB bank account, you can convert your UOB Points to Star Points.' },
        { id: 4, cover: 'earn-point-4.jpg',title: 'Shop at Walmart', description: 'Shop at Walmart and get Star Points for every $100 of purchases.' },
        { id: 5, cover: 'earn-point-5.jpg',title: 'OCBC NISP Rewards', description: 'If you are OCBC NISP card holder, your point rewards can be converted to Star Points.' },
        { id: 6, cover: 'earn-point-6.jpg',title: 'Book a Hotel at Agoda', description: 'Book a hotel at Agoda with special price and get Star Points as an additional rewards.' },
        { id: 7, cover: 'earn-point-7.jpg',title: 'Book a Ticket at Trip.com', description: 'Book your flight at trip.com and get Star Points as your rewards.' },
        { id: 8, cover: 'earn-point-8.jpg',title: 'Grab Rewards Points', description: 'Get Star Points rewards when ever you take a trip with GrabCar or GrabBike.' },
        { id: 9, cover: 'earn-point-9.jpg',title: 'Convert Taxi Points', description: 'Get Star Points rewards everytime you drive with Taxi in New Delhi.' },
      ]
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    getPic(img) {
      return '~/assets/images/' + img;
    }
  },
  mounted() {},
};
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        How to Earn Points
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Star Points are the reward points you earn when you travel with Star Air or our airline partners. You can also earn Star Points by using any of our more than 1.200 global partners. Star Points are taking you further than ever before. Every time you spend or earn your Star Points balance will be valid for a further 36 months. Keeping your balance active has never been easier, with all the ways you can earn and redeem Qpoints in the air, and on the ground. Check out your Star Points balance now and see how long you have to keep them active.
      </div>
      <div class="hidden mt-10 md:block">
        <div
          class="flex hidden pt-4 font-medium border-b border-gray-300 text-grayscale-400 md:pt-2"
        >
          <div
            class="menu"
            :class="
              activeTab == tab.id ? 'border-secondary-900 border-b-6 pb-3 md:pb-6' : ''
            "
            @click="changeTab(tab.id)"
            v-for="tab in tabData"
            :key="tab.id"
          >
            <span class="pl-1" :class="activeTab == tab.id ? 'text-secondary-900' : ''"
              >{{ tab.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
        <div class="p-6 border rounded-xl" v-for="data in dataPoint" :key="data.id">
          <img :src="require('@/assets/images/' + data.cover)" class="w-full" alt="Earn Point" />
          <div class="mt-6 text-2xl font-semibold font-noto-sans text-grayscale-900">{{ data.title }}</div>
          <div class="mt-2 text-sm text-grayscale-500">{{ data.description }}</div>
        </div>
      </div>
      <div class="my-8">
        <Pagination />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
  .menu {
    @apply flex-1 md:flex-none text-center md:px-6 cursor-pointer;
  }
</style>
