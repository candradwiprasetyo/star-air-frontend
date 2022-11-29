<script lang="ts">
export default {
  name: "RedemPoints",
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
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        Redeem Points
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        You can redeem your Star Points for a wide range of rewards, such as
        complimentary flights, cabin upgrades and excess baggage allowances with
        Alliance Air. In addition, you can use Star Points to redeem hotel stays,
        award flights with our partner airlines, or make purchases at Alliance Air
        Free. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        mauris vitae sem posuere blandit. Nam pretium venenatis bibendum. Nam
        eget ante eu metus consequat semper non ac nunc. Duis semper massa nec
        tellus lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed
        lacinia vestibulum lorem, vel imperdiet ipsum.
      </div>
      <div class="p-6 mt-16 border rounded-xl">
        <NuxtLink to="/redem-points-detail?data=1">
          <div class="md:flex gap-x-6">
            <div class="flex-none">
              <img
                src="~/assets/images/redem-1.png"
                class="inline-block"
                alt="Redeem Book a flight"
                width="300"
              />
            </div>
            <div class="flex-grow mt-6 md:mt-0">
              <div
                class="text-2xl font-semibold font-noto-sans text-secondary-900"
              >
                Book a Flight
              </div>
              <div class="mt-2 text-sm leading-loose text-grayscale-500">
                <div class="inline md:hidden">
                  Redeem your points for booking a flight with Alliance Air. Flight
                  whenever and wherever you are with your friend and family. Use
                  your points for flight now.
                </div>
                <div class="hidden md:inline">
                  Redeem your points for booking a flight with Alliance Air. Flight
                  whenever and wherever you are with your friend and family. To
                  make your member experience even more rewarding, we have
                  implemented a number of new changes to your redemption
                  activities. You can also redeem points for upgrading class to
                  business class and shopping at our Alliance Air duty free. Use your
                  points for flight now.
                </div>
              </div>
              <div class="mt-6 md:inline-block">
                <Button
                  value="Redeem"
                  border="border-2 border-secondary-900"
                  color="text-secondary-900"
                  background="bg-white"
                  customClass="px-6"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="p-6 mt-8 border rounded-xl">
        <NuxtLink to="/redem-points-detail?data=2">
          <div class="md:flex gap-x-6">
            <div class="flex-none">
              <img
                src="~/assets/images/redeem-2.png"
                class="inline-block"
                alt="Redeem Extra Baggage Award"
                width="300"
              />
            </div>
            <div class="flex-grow mt-6 md:mt-0">
              <div
                class="text-2xl font-semibold font-noto-sans text-secondary-900"
              >
                Extra Baggage Award
              </div>
              <div class="mt-2 text-sm leading-loose text-grayscale-500">
                <div class="inline md:hidden">
                  Convert your Star Points for extra baggage on Alliance Air flights
                  for yourselft or anyone else. Get extra space to store your
                  merchandise you purchase for your friend and family.
                </div>
                <div class="hidden md:inline">
                  Convert your Star Points for extra baggage award on Alliance Air
                  flights for yourselft or anyone else. Get extra space to store
                  your merchandise you purchase for your friend and family. Extra
                  baggage award can be redeem at airport or via online. Curabitur
                  non varius odio, quis vestibulum sem. Vestibulum laoreet nulla
                  id ligula porta, eu molestie justo dapibus. Donec a iaculis
                  erat, varius congue sem. Ut et augue bibendum
                </div>
              </div>
              <div class="mt-6 md:inline-block">
                <Button
                  value="Redeem"
                  border="border-2 border-secondary-900"
                  color="text-secondary-900"
                  background="bg-white"
                  customClass="px-6"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="p-6 mt-8 border rounded-xl">
        <NuxtLink to="/redem-points-detail?data=3">
          <div class="md:flex gap-x-6">
            <div class="flex-none">
              <img
                src="~/assets/images/redeem-3.png"
                class="inline-block"
                alt="Redeem Extra Baggage Award"
                width="300"
              />
            </div>
            <div class="flex-grow mt-6 md:mt-0">
              <div
                class="text-2xl font-semibold font-noto-sans text-secondary-900"
              >
                Convert Points to Partner Points
              </div>
              <div class="mt-2 text-sm leading-loose text-grayscale-500">
                <div class="inline md:hidden">
                  Redeem your Star Points for staying at our hotel partners or car
                  rental partners. from 4 to 5 stars hotel around the world.
                </div>
                <div class="hidden md:inline">
                  Redeem your Star Points for staying at our hotel partners or car
                  rental partners. From 4 to 5 stars hotel around the world.
                  Curabitur non varius odio, quis vestibulum sem. Vestibulum
                  laoreet nulla id ligula porta, eu molestie justo dapibus. Donec
                  a iaculis erat, varius congue sem. Ut et augue bibendum,
                  lobortis nisi et, placerat nunc. Suspendisse elementum fermentum
                  ullamcorper.
                </div>
              </div>
              <div class="mt-6 md:inline-block">
                <Button
                  value="Redeem"
                  border="border-2 border-secondary-900"
                  color="text-secondary-900"
                  background="bg-white"
                  customClass="px-6"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="p-6 mt-8 border rounded-xl">
        <div class="md:flex gap-x-6">
          <div class="flex-none">
            <img
              src="~/assets/images/redeem-4.png"
              class="inline-block"
              alt="Redeem Extra Baggage Award"
              width="300"
            />
          </div>
          <div class="flex-grow mt-6 md:mt-0">
            <div
              class="text-2xl font-semibold font-noto-sans text-secondary-900"
            >
              Shop & Pay with Points
            </div>
            <div class="mt-2 text-sm leading-loose text-grayscale-500">
              <div class="inline md:hidden">
                Convert your Star Points for extra baggage on Alliance Air flights
                for yourselft or anyone else. Get extra space to store your
                merchandise you purchase for your friend and family.
              </div>
              <div class="hidden md:inline">
                Redeem your Points for purchases made at Alliance Air Duty Free and
                our partners at some international airport. Vestibulum laoreet
                nulla id ligula porta, eu molestie justo dapibus. Donec a
                iaculis erat, varius congue sem. Ut et augue bibendum, lobortis
                nisi et, placerat nunc. Suspendisse elementum fermentum
                ullamcorper. Maecenas ultrices quam vitae hendrerit malesuada.
                Suspendisse at orci vitae velit tincidunt pretium. Mauris diam
                leo, sodales.
              </div>
            </div>
            <div class="mt-6 md:inline-block">
              <Button
                value="Redeem"
                border="border-2 border-secondary-900"
                color="text-secondary-900"
                background="bg-white"
                customClass="px-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss">
</style>
