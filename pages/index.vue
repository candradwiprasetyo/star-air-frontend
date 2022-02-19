<script lang="ts">
export default {
  name: "Registration",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="hidden md:inline">
      <img src="~/assets/images/banner.png" class="inline-block" alt="Banner" />
    </div>
    <div class="inline md:hidden">
      <img
        src="~/assets/images/banner-mobile.png"
        class="inline-block"
        alt="Banner"
      />
    </div>
    <HomepageAdvancedSearch />
    <div class="container mx-auto py-6 md:py-14 px-6 md:px-0">
      <div class="text-grayscale-900 text-3xl font-semibold font-noto-sans">
        About Star Club
      </div>
      <div
        class="
          text-grayscale-500
          mt-3
          text-sm
          md:text-base md:leading-relaxed
          leading-relaxed
        "
      >
        Star Club is a Loyalty Program from Star Air which is presented as a
        tribute to you, our loyal customer. It is our way of saying "Thank You"
        for choosing to fly with Star Airways. Earn points every time you fly
        with Star Air. Your accumulated points can be redeemed for Award Tickets
        to your favourites, or Upgrade Awards from economy to business class on
        the flight of your choice. Both of these Awards can be presented to your
        family, friends or colleagues who are closest to your heart. With Star
        Club, your every trip becomes a rewarding experience. As a Star Points
        Member, you may also enjoy a wide variety of special benefits and
        exclusive privileges suc as upgrade class, extra baggage, shopping and
        stay at hotels with points.
      </div>
      <div class="mt-16 text-center">
        <div class="text-grayscale-900 text-3xl font-semibold font-noto-sans">
          Member Tiers & Benefits
        </div>
        <div class="text-grayscale-500 mt-3 text-sm md:text-base">
          Star Club offers three membership tiers Silver, Gold, and Platinum –
          each with their own exclusive benefits.
        </div>
        <div class="mt-6 flex justify-center">
          <div
            class="
              w-64
              bg-secondary-900
              text-white
              py-2
              md:py-4
              border border-secondary-900
              rounded-l-full
            "
          >
            Silver
          </div>
          <div
            class="
              w-64
              py-2
              md:py-4
              border border-secondary-900
              text-secondary-900
            "
          >
            Gold
          </div>
          <div
            class="
              w-64
              py-2
              md:py-4
              border border-secondary-900
              rounded-r-full
              text-secondary-900
            "
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
            class="
              flex-none
              w-full
              md:w-5/12
              text-left
              flex flex-wrap
              content-center
            "
          >
            <div class="mt-12 md:mt-0">
              <div
                class="text-grayscale-600 font-semibold text-2xl font-noto-sans"
              >
                As a Silver member, enjoy the following benefits:
              </div>
              <div class="mt-4 text-grayscale-500">
                <ul class="list-disc pl-5 leading-loose">
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
          <div class="w-full inline md:hidden">
            <img
              src="~/assets/images/earn-point.png"
              class="inline-block"
              alt="Earn Point"
            />
          </div>
          <div
            class="
              flex-1
              w-full
              md:w-5/12
              text-left
              flex flex-wrap
              content-center
            "
          >
            <div class="md:pr-16 mt-6 md:0">
              <div
                class="text-grayscale-900 text-3xl font-semibold font-noto-sans"
              >
                How to Earn Points
              </div>
              <div
                class="
                  text-grayscale-500
                  mt-3
                  text-sm
                  leading-relaxed
                  md:text-base md:leading-relaxed
                "
              >
                <p>
                  StarPoints are the reward points you earn when you or your
                  nominated family members travel with Star Air, or our airline
                  partners. You can also earn StarPoints by using any of our
                  more than 1.200 global partners. StarPoints are taking you
                  further than ever before. Every time you spend or earn your
                  StarPoints balance will be valid for a further 36 months. When
                  you find missing points of your previous flight, you can
                  always claim them
                </p>
                <br />
                <p>
                  You can earn points from converting partner points, booking
                  hotels, or buy points. Find out the details of how to earn
                  points by clicking the button belows.
                </p>
              </div>
              <div class="mt-8 md:inline-block">
                <Button
                  value="Find Out More to Earn Points"
                  border="border-2 border-secondary-900"
                  color="text-secondary-900"
                  background="bg-white"
                  customClass="px-6"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 w-7/12 hidden md:inline">
            <img
              src="~/assets/images/earn-point.png"
              class="inline-block"
              alt="Earn Point"
            />
          </div>
        </div>

        <div class="mt-10 md:mt-16 md:flex">
          <div class="container-mobile gap-x-6 text-left md:hidden">
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
                    class="
                      mt-4
                      text-grayscale-900
                      font-noto-sans font-semibold
                      text-lg
                    "
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
                    class="
                      mt-4
                      text-grayscale-900
                      font-noto-sans font-semibold
                      text-lg
                    "
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
                    class="
                      mt-4
                      text-grayscale-900
                      font-noto-sans font-semibold
                      text-lg
                    "
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
            class="
              flex-none
              w-full
              md:w-1/3
              text-left
              flex flex-wrap
              content-center
            "
          >
            <div class="md:pr-16">
              <div
                class="text-grayscale-900 text-3xl font-semibold font-noto-sans"
              >
                Redeem Your Star Points in Many Ways
              </div>
              <div
                class="
                  text-grayscale-500
                  mt-3
                  text-sm
                  md:text-base md:leading-relaxed
                "
              >
                <p>Browse over 1.200 global partners around the world.</p>
              </div>
              <div class="mt-8 w-full md:w-40">
                <Button
                  value="View All Partners"
                  border="border-2 border-secondary-900"
                  color="text-secondary-900"
                  background="bg-white"
                />
              </div>
            </div>
          </div>
          <div class="flex-none w-2/3 md:flex gap-x-6 text-left hidden">
            <div class="flex-1">
              <img
                src="~/assets/images/book-a-flight.png"
                class="inline-block"
                alt="Book a flight"
              />
              <div
                class="
                  mt-4
                  text-grayscale-900
                  font-noto-sans font-semibold
                  text-lg
                "
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
                class="
                  mt-4
                  text-grayscale-900
                  font-noto-sans font-semibold
                  text-lg
                "
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
                class="
                  mt-4
                  text-grayscale-900
                  font-noto-sans font-semibold
                  text-lg
                "
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
        <div class="mt-16 md:flex text-left rounded-xl overflow-hidden">
          <div class="flex-1">
            <img
              src="~/assets/images/newsletter.png"
              class="hidden md:inline"
              alt="Newsletter"
            />
            <img
              src="~/assets/images/newsletter-mobile.png"
              class="md:hidden inline"
              alt="Newsletter"
            />
          </div>
          <div
            class="
              flex-1
              bg-secondary-900
              flex flex-wrap
              content-center
              -mt-1
              md:mt-0
            "
          >
            <div class="px-6 md:px-16 w-full">
              <div
                class="
                  text-2xl
                  md:text-3xl
                  text-grayscale-50
                  font-semibold font-noto-sans
                "
              >
                Never Miss an Offer
              </div>
              <div class="text-grayscale-100 mt-2">
                Subscribe and be the first to receive our exclusive offers.
              </div>
              <div class="mt-6">
                <input
                  type="text"
                  placeholder="Email Address"
                  class="
                    bg-white
                    rounded-lg
                    border-none
                    outline-none
                    p-4
                    w-full
                  "
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
