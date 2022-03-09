<script lang="ts">
export default {
  name: "RedemPointsDetail",
  data() {
    return {
      activeMenu: 1,
      dataMenu: [
        { id: 1, name: 'Book a flight' },
        { id: 2, name: 'Extra Baggage' },
        { id: 3, name: 'Convert Points to Partner Points' },
        { id: 4, name: 'Shop & Pay' },
      ]
    };
  },
  methods: {
    changeMenu(id) {
      this.activeMenu = id;
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
        Redeem Points
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        You can redeem your Star Points for a wide range of rewards, such as
        complimentary flights, cabin upgrades and excess baggage allowances with
        Star Air. In addition, you can use Star Points to redeem hotel stays,
        award flights with our partner airlines, or make purchases at Star Air
        Free. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        mauris vitae sem posuere blandit. Nam pretium venenatis bibendum. Nam
        eget ante eu metus consequat semper non ac nunc. Duis semper massa nec
        tellus lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed
        lacinia vestibulum lorem, vel imperdiet ipsum.
      </div>
      <div class="mt-16 md:flex gap-x-8">
        <div class="p-6 pb-0 mb-6 border md:w-1/3 rounded-xl text-grayscale-500">
          <div class="p-3 mb-6 rounded-lg cursor-pointer" :class="menu.id == activeMenu ? 'bg-secondary-900 text-white' : ''" v-for="menu in dataMenu" :key="menu.id" @click="changeMenu(menu.id)">
            {{ menu.name }}
          </div>
        </div>
        <div class="md:w-2/3">
          <div v-if="activeMenu==1">
            <RedemPointsBookFlight />
          </div>
          <div v-if="activeMenu==2">
            <RedemPointsExtraBaggage />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
</style>
