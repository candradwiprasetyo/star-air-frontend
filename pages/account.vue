<script lang="ts">
import cookie from 'js-cookie'
export default {
  name: "Account",
  data() {
    return {
      activeMenu: 1,
      dataId: null,
      dataMenu: [
        { id: 1, name: 'Overview' },
        { id: 2, name: 'User Profile' },
        { id: 3, name: 'Booking History' },
        { id: 4, name: 'Star Points' },
        { id: 5, name: 'Extend Membership' },
        { id: 6, name: 'Change Password' },
      ],
      userData: [],
      isLoading: true,
      selectedMemberId: null,
    };
  },
  methods: {
    changeMenu(id) {
      this.activeMenu = id;
      this.loadUser()
    },
    goLogout() {
      cookie.remove('star_air_login')
      this.$store.commit('SET_LOGIN', false)
      this.$router.push('/')
    },
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
      
      let newData = null;

      let formDataDetail = new FormData();
      formDataDetail.append('member_email', userData.email);
      formDataDetail.append('token', this.$config.myToken);
      formDataDetail.append('airline_code', this.$config.myAirlineCode);

      this.$axios.$post('/api/member/get-member-detail', formDataDetail)
        .then( (responseDetail) => {
          if (responseDetail.err_num == '0') {
            this.userData = responseDetail.result;
            newData = responseDetail.result;
            this.$store.commit('SET_LOGIN', JSON.stringify(newData));
            cookie.set('star_air_login', JSON.stringify(newData));
          }
          this.isLoading = false;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeForm(tab, memberId) {
      this.activeMenu = tab;
      this.selectedMemberId = memberId;
    },
    getPage() {
      let page = (this.$route.query.page) ? this.$route.query.page : '';
      switch(page) {
        case 'overview': this.activeMenu = 1; break;
        case 'user-profile': this.activeMenu = 2; break;
        case 'booking-history': this.activeMenu = 3; break;
        case 'star-points': this.activeMenu = 4; break;
        case 'extend-membership': this.activeMenu = 5; break;
        case 'change-password': this.activeMenu = 6; break;
      }
    },
    goToBookingHistoryDetail(dataId) {
      this.activeMenu = 11;
      this.dataId = dataId;
      this.loadUser();
    }
  },
  mounted() {
    this.loadUser();
    this.getPage();
    // window.setInterval(() => {
    //   this.loadUser()
    // }, 60000)
  },
};
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        Welcome, {{ userData.name }}
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Thank you for joining our loyalty program, Star Club. In this page you can manage your Star Club account such as viewing booking history, redeem, claim & transfer Star Points and edit your account.
      </div>
      <div class="mt-16 md:flex gap-x-8">
        <div class="pb-0 mb-6 border md:w-1/3 rounded-xl text-grayscale-500">
          <div class="p-6 border-b">
            <div class="flex">
              <div class="text-lg font-semibold font-noto-sans text-secondary-900">{{ userData.name }}</div>
              <div class="px-3 py-1 ml-2 text-xs bg-gray-100 border rounded-full border-grays-300">{{ userData.member_level }}</div>
            </div>
            <div class="mt-1">
              <span class="text-sm text-grayscale-400">Points:</span>
              <span class="pl-1 text-sm text-grayscale-900">{{ userData.avb_point }} Points</span>
              <span class="text-sm text-grayscale-400">ID:</span>
              <span class="pl-1 text-sm text-grayscale-900">{{ userData.member_id }}</span>
            </div>
          </div>
          <div class="p-6">
            <div class="px-4 py-3 mb-4 rounded-full cursor-pointer" :class="menu.id == activeMenu ? 'bg-light-blue text-secondary-900 font-bold' : ''" v-for="menu in dataMenu" :key="menu.id" @click="changeMenu(menu.id)">
              {{ menu.name }}
            </div>
            <div class="px-4 py-3 mb-4 font-bold text-red-500 rounded-full cursor-pointer" @click="goLogout()">
              Logout
            </div>
          </div>
        </div>
        <div class="md:w-2/3">
          <div v-if="activeMenu==1">
            <AccountOverview />
          </div>
          <div v-if="activeMenu==2">
            <AccountUserProfile 
              @edit-profile="changeForm"
              @change-email="changeForm"
            />
          </div>
          <div v-if="activeMenu==3">
            <AccountBookingHistory 
              @view-detail-history="goToBookingHistoryDetail"
            />
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
          <div v-if="activeMenu==7">
            <AccountEditProfile 
              :member-id="selectedMemberId"
              @back-button="changeMenu('2')"
            />
          </div>
          <div v-if="activeMenu==8">
            <AccountEditEmail 
              :member-id="selectedMemberId"
              :email="userData.email"
              @back-button="changeMenu('2')"
            />
          </div>
          <div v-if="activeMenu==9">
            <AccountEditTravelDocument />
          </div>
          <div v-if="activeMenu==10">
            <AccountUpgradeMembership />
          </div>
          <div v-if="activeMenu==11">
            <AccountBookingHistoryDetail 
              @back-to-history="changeMenu('3')"
              :dataId="dataId"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
</style>
