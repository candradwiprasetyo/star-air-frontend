<script lang="ts">
export default {
  name: "Account",
  data() {
    return {
      activeMenu: 1,
      dataMenu: [
        { id: 1, name: 'Overview' },
        { id: 2, name: 'User Profile' },
        { id: 3, name: 'Booking History' },
        { id: 4, name: 'Star Points' },
        { id: 5, name: 'Extend Membership' },
        { id: 6, name: 'Change Password' },
        { id: 7, name: 'Logout' },
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
        Welcome, Chanda Gauri 
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Thank you for joining our loyalty program, Star Club. In this page you can manage your Star Club account such as viewing booking history, redeem, claim & transfer Star Points and edit your account.
      </div>
      <div class="mt-16 md:flex gap-x-8">
        <div class="pb-0 mb-6 border md:w-1/3 rounded-xl text-grayscale-500">
          <div class="p-6 border-b">
            <div class="flex">
              <div class="text-lg font-semibold font-noto-sans text-secondary-900">Chanda Gauri</div>
              <div class="px-3 py-1 ml-2 text-xs bg-gray-100 border rounded-full border-grays-300">Silver</div>
            </div>
            <div class="mt-1">
              <span class="text-sm text-grayscale-400">Points:</span>
              <span class="pl-1 text-sm text-grayscale-900">5000 Points</span>
              <span class="text-sm text-grayscale-400">ID:</span>
              <span class="pl-1 text-sm text-grayscale-900">FLY0098213</span>
            </div>
          </div>
          <div class="p-6">
            <div class="px-4 py-3 mb-4 rounded-full cursor-pointer" :class="menu.id == activeMenu ? 'bg-light-blue text-secondary-900 font-bold' : ''" v-for="menu in dataMenu" :key="menu.id" @click="changeMenu(menu.id)">
              {{ menu.name }}
            </div>
          </div>
        </div>
        <div class="md:w-2/3">
          <div v-if="activeMenu==1">
            <AccountOverview />
          </div>
          <div v-if="activeMenu==2">
            <AccountUserProfile />
          </div>
          <div v-if="activeMenu==3">
            <AccountBookingHistoryDetail />
          </div>
          <div v-if="activeMenu==4">
            <AccountStarPoints />
          </div>
          <div v-if="activeMenu==5">
            <AccountExtendMembership />
          </div>
          <div v-if="activeMenu==6">
            <AccountChangePassword />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
</style>
