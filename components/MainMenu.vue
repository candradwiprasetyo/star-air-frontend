<template>
  <div>
    <div class="fixed z-10 w-full bg-white border-b top-10">
      <div
        class="container items-center hidden mx-auto min-h-[90px] text-grayscale-500 md:flex"
      >
        <div class="flex-none">
          <img
            src="~/assets/images/logo.png"
            class="inline-block cursor-pointer"
            alt="Logo"
            width="130"
            @click="goToHome()"
          />
        </div>
        <div class="flex-grow">
          <div class="flex items-center justify-end gap-x-12">
            <div class="flex-none cursor-pointer" @click="goToHome()">Home</div>
            <div 
              class="relative flex-none cursor-pointer"
              @click="openEarnMenu"
              v-on-clickaway="closeEarnMenu"
            >
              <!-- Earn
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block"
                alt="arrow bottom"
              />
              <div class="absolute text-sm font-medium bg-white rounded-b-lg shadow-xl w-52 top-14" v-if="isEarnMenuOpen">
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/earn-points')">How to Earn Points</div>
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/earn-points')">Claim Missing Points</div>
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/earn-points')">Buy Points</div>
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/earn-points')">Transfer Points</div>
              </div>
            </div>
            <div 
              class="relative flex-none cursor-pointer"
              @click="openRedeemMenu"
              v-on-clickaway="closeRedeemMenu"
            > -->
              Redeem
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block"
                alt="arrow bottom"
              />
              <div class="absolute text-sm font-medium bg-white rounded-b-lg shadow-xl w-52 top-14" v-if="isRedemMenuOpen">
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/redem-points-detail?data=1')">Book a flight</div>
                <!-- <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/redem-points-detail?data=2')">Extra baggage</div>
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/redem-points-detail?data=3')">Convert to Partner Points</div>
                <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/redem-points-detail?data=4')">Shop & Pay</div> -->
              </div>
            </div>
            <div class="flex-none">Shop</div>
            <div class="flex-none">
              Help
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block"
                alt="arrow bottom"
              />
            </div>
            <div class="flex-none">
              <img
                src="~/assets/images/shopping-bag.svg"
                class="inline-block align-middle"
                alt="shopping bag"
              />
              <span class="align-middle">0 item (s)</span>
            </div>
            <div v-if="!isLoading">
              <div v-if="userData.length == 0" class="flex items-center py-3 gap-x-2">
                <div class="w-32">
                  <NuxtLink to="/login">
                    <Button
                      value="Login"
                      border="border-2 border-secondary-900"
                      color="text-secondary-900"
                      background="bg-white"
                    />
                  </NuxtLink>
                </div>
                <div class="w-32">
                  <NuxtLink to="/registration">
                    <Button value="Sign Up" />
                  </NuxtLink>
                </div>
              </div>
              <div v-else class="relative">
                <div @click="toggleMenu()" class="flex items-center py-6 cursor-pointer gap-x-5">
                  <div class="flex-none">
                    <img
                      src="~/assets/images/user.png"
                      class="w-6 h-6"
                      alt="User"
                    />
                  </div>
                  <div class="flex-grow">
                    <div class="font-medium text-grayscale-900">{{ userData.name }}</div>
                    <div class="text-xs text-primary-600">{{ userData.avb_point }} Star Points</div>
                  </div>
                  <div class="flex-none">
                    <img
                      src="~/assets/images/arrow-bottom-gray.svg"
                      class="inline-block"
                      alt="arrow bottom"
                    />
                  </div>
                </div>
                <div class="absolute w-48 text-sm font-medium bg-white rounded-lg shadow-xl top-20" v-if="isMenuOpen">
                  <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/account?page=overview')">Overview</div>
                  <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/account?page=user-profile')">User Profile</div>
                  <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/account?page=booking-history')">Booking History</div>
                  <div class="px-5 py-3 cursor-pointer" @click="goToUrl('/account?page=star-points')">Star Points</div>
                  <div @click="goLogout()" class="px-5 pt-3 pb-5 cursor-pointer">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-6 py-4 text-grayscale-500 md:hidden">
        <NuxtLink to="/">
          <div class="flex-1">
            <img
              src="~/assets/images/logo.png"
              class="inline-block"
              alt="Logo"
              width="130"
            />
          </div>
        </NuxtLink>
        <div class="flex items-center justify-end flex-1">
          <div class="flex justify-end flex-1">
            <img
              src="~/assets/images/english.svg"
              class="inline-block"
              alt="English"
            />
            <span class="pl-2 text-xs">EN</span>
          </div>
          <div class="flex justify-end flex-1">
            <img
              src="~/assets/images/shopping-bag.svg"
              class="inline-block"
              alt="Shopping bag"
            />
          </div>
          <div class="flex justify-end flex-1" @click="openMenu()">
            <img
              src="~/assets/images/mobile-menu.svg"
              class="inline-block"
              alt="English"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-16 mb-1 md:h-20"></div>
    <div class="fixed inset-0 z-20 bg-white" v-if="isMenuMobileOpen">
      <div class="flex p-6 text-grayscale-900">
        <div class="flex-1">Menu</div>
        <div class="flex-1">
          <img
            src="~/assets/images/close.svg"
            class="float-right"
            alt="Close"
            @click="closeMenu()"
          />
        </div>
      </div>
      <div class="px-6 py-4 text-white bg-secondary-900">
        <div v-if="userData.length == 0" class="flex">
          <NuxtLink to="/account">
            <div class="flex items-center flex-1 pt-2">
              <div class="flex-none">
                <img
                  src="~/assets/images/profile-white.svg"
                  alt="Profile"
                  class="pr-4"
                />
              </div>
              <div class="flex-grow">
                <div class="font-semibold font-noto-sans">Account</div>
                <div class="text-xs text-grayscale-200">0 Star Points</div>
              </div>
            </div>
          </NuxtLink>
          <div class="flex justify-end flex-1 gap-x-4">
            <div class="inline-block">
              <NuxtLink to="/login">
                <Button
                  value="Login"
                  border="border-2 border-white"
                  color="text-white"
                  background="bg-secondary-900"
                  padding="py-4 px-3"
                />
              </NuxtLink>
            </div>
            <div class="inline-block">
              <NuxtLink to="/registration">
                <Button value="Sign Up" padding="py-4 px-3" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="flex">
          <div class="flex items-center flex-1 pt-2">
            <div class="flex-none">
              <img
                src="~/assets/images/profile-white.svg"
                alt="Profile"
                class="pr-4"
              />
            </div>
            <div class="flex-grow">
              <div class="font-semibold font-noto-sans">{{ userData.name }}</div>
              <div class="text-xs text-grayscale-200">{{ userData.avb_point }} Star Points</div>
            </div>
          </div>
          <div class="flex justify-end flex-1 gap-x-4">
            <div class="">
              <Button
                value="Logout"
                border="border-2 border-white"
                color="text-white"
                background="bg-secondary-900"
                padding="py-4 px-6"
                @action="goLogout"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 text-grayscale-500">
        <div class="pb-4 font-medium border-b text-secondary-900">
          <NuxtLink to="/">Home</NuxtLink>
        </div>
        <div class="py-4 font-medium border-b">
          <div class="flex">
            <div class="flex-1">Earn</div>
            <div class="flex-1">
              <img
                src="~/assets/images/arrow-up-gray.svg"
                alt="Arrow up"
                class="float-right"
              />
            </div>
          </div>
        </div>
        <div class="py-4 text-sm">
          <NuxtLink to="/earn-points">How to Earn Points</NuxtLink>
        </div>
        <div class="py-4 text-sm">
          <NuxtLink to="/claim-missing-points">Claim Missing Points</NuxtLink>
        </div>
        <div class="py-4 text-sm">
          <NuxtLink to="/buy-points">Buy Points</NuxtLink>
        </div>
        <div class="py-4 text-sm">
          <NuxtLink to="/transfer-points-for-plus">Transfer Points for Plus</NuxtLink>
        </div>
        <div class="py-4 font-medium border-b">
          <NuxtLink to="/redem-points">Redeem</NuxtLink>
        </div>
        <div class="py-4 font-medium border-b">Shop</div>
        <div class="py-4 font-medium border-b">
          <div class="flex">
            <div class="flex-1">Help</div>
            <div class="flex-1">
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                alt="Arrow up"
                class="float-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "MainMenu",
  mixins: [ clickaway ],
  data() {
    return {
      dataLogged: null,
      isMenuMobileOpen: false,
      isMenuOpen: false,
      userData: [],
      isLoading: true,
      isRedemMenuOpen: false,
      isEarnMenuOpen: false,
    }
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    goToHome() {
      window.location.href = '/';
    },
    openMenu() {
      this.isMenuMobileOpen = true;
    },
    closeMenu() {
      this.isMenuMobileOpen = false;
    },
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      let newData = null;

      if (userData) {
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
            } else {
              cookie.remove('star_air_login');
              this.$store.commit('SET_LOGIN', false);
            }
            this.isLoading = false;
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        this.isLoading = false;
      }
    },
    goLogout() {
      cookie.remove('star_air_login')
      this.$store.commit('SET_LOGIN', false)
      window.location.href = '/';
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goToUrl(url) {
      window.location.href = url;
    },
    openRedeemMenu() {
      this.isRedemMenuOpen = true;
    },
    closeRedeemMenu() {
      this.isRedemMenuOpen = false;
    },
    openEarnMenu() {
      this.isEarnMenuOpen = true;
    },
    closeEarnMenu() {
      this.isEarnMenuOpen = false;
    },
  },
  
};
</script>