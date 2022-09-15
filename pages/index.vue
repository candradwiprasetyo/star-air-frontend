<script lang="ts">
import cookie from 'js-cookie'
export default {
  name: "Homepage",
  data() {
    return {
      activeMember: 1,
      username: null,
      dataContent: [],
      isLoaded: false,
    };
  },
  methods: {
    changeActiveMember(id) {
      this.activeMember = id;
    },
    loadData() {
      let param = 
        '?token=' + this.$config.myToken +
        '&airline_code=' + this.$config.myAirlineCode +
        '&airline=sqiva';
    
      this.$axios.$get('/api/cms/get-cms-list' + param)
        .then( (response) => {
          if (response.err_num == 0) {
            this.dataContent = response.result.data;
            this.isLoaded = true
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getDataContent(content_id) {
      let result = null;
      this.dataContent.forEach(element => {
        if (element.CONTENT_ID == content_id) {
          result = element.CONTENT
        }
      });
      return result;
    },
  },
  mounted() {
    this.loadData()
  },
};
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="hidden md:inline">
      <NuxtLink to="registration">
        <img src="~/assets/images/banner.jpg" class="relative w-full -z-10" alt="Banner" />
      </NuxtLink>
    </div>
    <div class="inline md:hidden">
      <NuxtLink to="registration">
        <img
          src="~/assets/images/banner-mobile.jpg"
          class="relative w-full"
          alt="Banner"
        />
      </NuxtLink>
    </div>
    <HomepageAdvancedSearch />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0" v-if="isLoaded">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">  
        {{(getDataContent('title_about_star_club')) ? getDataContent('title_about_star_club') : 'About Star Club'}}
      </div>
      <div
        class="mt-3 text-sm leading-relaxed text-grayscale-500 md:text-base md:leading-relaxed"
      >
        {{(getDataContent('desc_about_star_club')) ? getDataContent('desc_about_star_club') : ''}}
      </div>
      <div class="mt-16 text-center">
        <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
          Member Tiers & Benefits
        </div>
        <div class="mt-3 text-sm text-grayscale-500 md:text-base">
          Star Club offers three membership tiers Silver, Gold, and Platinum –
          each with their own exclusive benefits.
        </div>
        <div class="flex justify-center mt-6 cursor-pointer">
          <div
            class="w-64 py-2 border rounded-l-full md:py-4 border-secondary-900" :class="(activeMember==1) ? 'bg-secondary-900 text-white' : 'text-secondary-900'"
            @click="changeActiveMember(1)"
          >
            Silver
          </div>
          <div
            class="w-64 py-2 border md:py-4 border-secondary-900" :class="(activeMember==2) ? 'bg-secondary-900 text-white' : 'text-secondary-900'"
            @click="changeActiveMember(2)"
          >
            Gold
          </div>
          <div
            class="w-64 py-2 border rounded-r-full md:py-4 border-secondary-900" :class="(activeMember==3) ? 'bg-secondary-900 text-white' : 'text-secondary-900'" 
            @click="changeActiveMember(3)"
          >
            Platinum
          </div>
        </div>
        <div class="mt-6 md:flex">
          <div class="flex-none w-full md:w-7/12">
            <img
              src="~/assets/images/membership-card.png"
              class="inline-block"
              alt="Membership card"
              width="700"
            />
          </div>
          <div
            class="flex flex-wrap content-center flex-none w-full text-left md:w-5/12"
          >
            <div class="mt-12 md:mt-0">
              <div
                class="text-2xl font-semibold text-grayscale-600 font-noto-sans"
              >
                As a 
                <span v-if="activeMember==1">Silver</span> 
                <span v-else-if="activeMember==2">Gold</span> 
                <span v-else>Platinum</span> 
                member, enjoy the following benefits:
              </div>
              <div class="mt-4 text-grayscale-500">
                <ul class="pl-5 leading-loose list-disc">
                  <li>100% mileage on all flights for earning StarPoints</li>
                  <li>100% mileage on non-air partner transactions</li>
                  <li>Priority stand-by</li>
                  <li>Flexi awards</li>
                  <li>Upgrade class and extra baggage</li>
                  <li>Stay at hotel with points</li>
                  <li>Shop & pay with StarPoints at Star Air Duty Free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 md:flex md:px-20">
          <div class="inline w-full md:hidden">
            <img
              src="~/assets/images/earn-point.png"
              class="inline-block"
              alt="Earn Point"
            />
          </div>
          <div
            class="flex flex-wrap content-center flex-1 w-full text-left md:w-5/12"
          >
            <div class="mt-6 md:pr-16 md:0">
              <div
                class="text-3xl font-semibold text-grayscale-900 font-noto-sans"
              >
                {{(getDataContent('title_how_to_earn')) ? getDataContent('title_how_to_earn') : 'How to Earn Points'}}
              </div>
              <div
                class="mt-3 text-sm leading-relaxed text-grayscale-500 md:text-base md:leading-relaxed"
              >
                {{(getDataContent('desc_how_to_earn')) ? getDataContent('desc_how_to_earn') : ''}}
              </div>
              <div class="mt-8 md:inline-block">
                <NuxtLink to="/earn-points">
                  <Button
                    value="Find Out More to Earn Points"
                    border="border-2 border-secondary-900"
                    color="text-secondary-900"
                    background="bg-white"
                    customClass="px-6"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="flex-1 hidden w-7/12 md:inline">
            <img
              src="~/assets/images/earn-point.png"
              class="inline-block"
              alt="Earn Point"
            />
          </div>
        </div>

        <div class="mt-10 md:mt-16 md:flex">
          <div class="text-left container-mobile gap-x-6 md:hidden">
            <div class="item-frame">
              <div class="flex flex-nowrap gap-x-6">
                <div class="w-40">
                  <img
                    src="~/assets/images/book-a-flight.png"
                    class="inline-block"
                    alt="Book a flight"
                    width="200"
                  />
                  <div
                    class="mt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
                  >
                    Book a Flight
                  </div>
                  <div class="mt-1 text-grayscale-500">
                    Pamper yourself by spending your Star Points for booking a
                    flight with Star Air.
                  </div>
                </div>
                <div class="w-40">
                  <img
                    src="~/assets/images/stay-at-hotel.png"
                    class="inline-block"
                    alt="Book a flight"
                    width="200"
                  />
                  <div
                    class="mt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
                  >
                    Stay at Hotel
                  </div>
                  <div class="mt-1 text-grayscale-500">
                    Get special price for staying at your favorite hotels during
                    your vacation with family.
                  </div>
                </div>
                <div class="w-40">
                  <img
                    src="~/assets/images/pay-with-star-points.png"
                    class="inline-block"
                    alt="Book a flight"
                    width="200"
                  />
                  <div
                    class="mt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
                  >
                    Pay with star points
                  </div>
                  <div class="mt-1 text-grayscale-500">
                    You can get 20% off shopping when paying with Star Points at
                    Star Air Duty Free.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-wrap content-center flex-none w-full text-left md:w-1/3"
          >
            <div class="md:pr-16">
              <div
                class="text-3xl font-semibold text-grayscale-900 font-noto-sans"
              >
                {{(getDataContent('title_redeem')) ? getDataContent('title_redeem') : 'Redeem Your Star Points in Many Ways'}}
              </div>
              <div
                class="mt-3 text-sm text-grayscale-500 md:text-base md:leading-relaxed"
              >
                {{(getDataContent('desc_redeem')) ? getDataContent('desc_redeem') : ''}}
              </div>
              <div class="w-full mt-8 md:w-60">
                <NuxtLink to="/redem-points">
                  <Button
                    value="View All Partners"
                    border="border-2 border-secondary-900"
                    color="text-secondary-900"
                    background="bg-white"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="flex-none hidden w-2/3 text-left md:flex gap-x-6">
            <div class="flex-1">
              <img
                src="~/assets/images/book-a-flight.png"
                class="inline-block"
                alt="Book a flight"
              />
              <div
                class="mt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
              >
                Book a Flight
              </div>
              <div class="mt-1 text-grayscale-500">
                Pamper yourself by spending your Star Points for booking a
                flight with Star Air.
              </div>
            </div>
            <div class="flex-1">
              <img
                src="~/assets/images/stay-at-hotel.png"
                class="inline-block"
                alt="Book a flight"
              />
              <div
                class="mt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
              >
                Stay at Hotel
              </div>
              <div class="mt-1 text-grayscale-500">
                Get special price for staying at your favorite hotels during
                your vacation with family.
              </div>
            </div>
            <div class="flex-1">
              <img
                src="~/assets/images/pay-with-star-points.png"
                class="inline-block"
                alt="Book a flight"
              />
              <div
                class="mt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
              >
                Pay with star points
              </div>
              <div class="mt-1 text-grayscale-500">
                You can get 20% off shopping when paying with Star Points at
                Star Air Duty Free.
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 overflow-hidden text-left md:flex rounded-xl">
          <div class="flex-1">
            <img
              src="~/assets/images/newsletter.png"
              class="hidden md:inline"
              alt="Newsletter"
            />
            <img
              src="~/assets/images/newsletter-mobile.png"
              class="inline md:hidden"
              alt="Newsletter"
            />
          </div>
          <div
            class="flex flex-wrap content-center flex-1 -mt-1 bg-secondary-900 md:mt-0"
          >
            <div class="w-full px-6 md:px-16">
              <div
                class="text-2xl font-semibold md:text-3xl text-grayscale-50 font-noto-sans"
              >
                Never Miss an Offer
              </div>
              <div class="mt-2 text-grayscale-100">
                Subscribe and be the first to receive our exclusive offers.
              </div>
              <div class="mt-6">
                <input
                  type="text"
                  placeholder="Email Address"
                  class="w-full p-4 bg-white border-none rounded-lg outline-none "
                />
              </div>
              <div class="mt-6 md:inline-block">
                <Button
                  value="Subscribe"
                  border="border-2 border-white"
                  color="text-white"
                  background="bg-transparent"
                  customClass="px-6 mb-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.container-mobile {
  @apply overflow-x-auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.container-mobile::-webkit-scrollbar {
  @apply hidden;
}

.item-frame {
  @apply flex items-start justify-between;
}
</style>
