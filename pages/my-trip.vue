<script lang="ts">
export default {
  name: "MyTrip",
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
    <div class="container mx-auto py-6 md:py-14 px-6 md:px-0">
      <div class="text-grayscale-900 text-3xl font-semibold font-noto-sans">
        My Trip
      </div>
      <div class="text-grayscale-500 mt-3 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div class="mt-10 block md:hidden p-6 bg-light-blue rounded-xl">
        <div class="text-lg text-grayscale-900 font-semibold">Flight Info</div>
        <div class="mt-4 text-grayscale-500">
          <ul class="list-disc pl-5 leading-loose mt-4">
            <li>
              You can reschedule or refund your flight 24 hours before flight
              time.
            </li>
            <li>
              You can reschedule or refund your flight 24 hours before flight
              time. Refund will be processed within 14 office days
            </li>
            <li>
              Refund for purchases that have been paid will be refunded via bank
              transfer. For this case, please prepare your bank account details.
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6 md:mt-16 flex gap-x-8 items-start">
        <div class="w-full md:w-2/3 overflow-hidden">
          <div class="border rounded-lg">
            <div
              class="
                p-6
                border-b
                text-lg
                font-semibold
                text-grayscale-900
                font-noto-sans
              "
            >
              Trip Details
            </div>
            <div class="p-6">
              <div
                class="text-lg font-semibold text-grayscale-900 font-noto-sans"
              >
                Flight Info
              </div>
              <div class="flex">
                <div class="flex-1">
                  <div class="mt-6 text-grayscale-400 text-xs">Flight Date</div>
                  <div class="text-grayscale-900 text-sm">Sat, 20 Nov 2021</div>
                </div>
                <div class="flex-1">
                  <div class="mt-6 text-grayscale-400 text-xs">
                    Booking Reference (PNR)
                  </div>
                  <div class="text-grayscale-900 text-sm">QWRT1W</div>
                </div>
              </div>
              <div class="md:flex border-t border-b py-6 my-6">
                <div class="md:w-1/4">
                  <img
                    src="~/assets/images/logo-star-air.png"
                    class="inline-block"
                    alt="Logo star air"
                    width="132"
                  />
                  <div class="flex md:block">
                    <div class="flex-1">
                      <div class="text-xs text-grayscale-400 mt-4">
                        Airlines
                      </div>
                      <div class="text-sm text-grayscale-900">Star Air</div>
                    </div>
                    <div class="flex-1">
                      <div class="text-xs text-grayscale-400 mt-4">
                        Flight Number
                      </div>
                      <div class="text-sm text-grayscale-900">QZ-1234</div>
                    </div>
                  </div>
                </div>
                <div class="md:w-3/4 flex gap-x-8 mt-6">
                  <div class="flex-none relative">
                    <div
                      class="
                        absolute
                        -right-2
                        top-3
                        w-4
                        h-32
                        border-dashed border-r
                      "
                    ></div>
                    <div class="mb-10 pt-1">
                      <span class="text-grayscale-500 text-xs pr-2"
                        >08:00 AM</span
                      >
                      <div class="bullet-green absolute top-3"></div>
                    </div>
                    <div class="absolute bottom-5">
                      <span class="text-grayscale-500 text-xs pr-2"
                        >09:30 AM</span
                      >
                      <div class="bullet-green absolute bottom-1"></div>
                    </div>
                  </div>
                  <div class="flex-grow">
                    <div class="text-sm text-grayscale-900">Qatar (DOH)</div>
                    <div class="text-xs text-grayscale-500 mt-1">
                      Doha International Airport (DOH) Terminal 2E
                    </div>
                    <div class="text-xs text-grayscale-500 mt-8">
                      1 hour and 30 minutes
                    </div>
                    <div class="text-sm text-grayscale-900 mt-8">
                      Mumbai (MBR)
                    </div>
                    <div class="text-xs text-grayscale-500 mt-1">
                      Mumbai International Airport (DOH) Terminal 2A
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  mt-6
                  md:px-0 md:-mx-0
                  px-6
                  -mx-6
                  md:w-full
                  w-[100vw]
                  overflow-auto
                "
              >
                <div
                  class="
                    text-lg
                    font-semibold
                    text-grayscale-900
                    font-noto-sans
                    mb-4
                  "
                >
                  Passanger Details
                </div>
                <table class="table-auto md:w-full custom-table w-[1200px]">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Passanger’s Name</th>
                      <th>Ticket No.</th>
                      <th>Route</th>
                      <th>Baggage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 3" :key="index">
                      <td>{{ index }}</td>
                      <td>Mr. Chanda Gauri</td>
                      <td>W12ERT</td>
                      <td>DOH - MBR</td>
                      <td>15kg</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="5">&nbsp;</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:block w-1/3 p-6 bg-light-blue rounded-xl">
          <div class="text-lg text-grayscale-900 font-semibold">
            Flight Info
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="list-disc pl-5 leading-loose mt-4">
              <li>
                You can reschedule or refund your flight 24 hours before flight
                time.
              </li>
              <li>
                You can reschedule or refund your flight 24 hours before flight
                time. Refund will be processed within 14 office days
              </li>
              <li>
                Refund for purchases that have been paid will be refunded via
                bank transfer. For this case, please prepare your bank account
                details.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
