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
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        My Trip
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">Flight Info</div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 mt-4 leading-loose list-disc">
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
      <div class="flex items-start mt-6 md:mt-16 gap-x-8">
        <div class="w-full overflow-hidden md:w-2/3">
          <div class="border rounded-lg">
            <div
              class="p-6 text-lg font-semibold border-b  text-grayscale-900 font-noto-sans"
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
                  <div class="mt-6 text-xs text-grayscale-400">Flight Date</div>
                  <div class="text-sm text-grayscale-900">Sat, 20 Nov 2021</div>
                </div>
                <div class="flex-1">
                  <div class="mt-6 text-xs text-grayscale-400">
                    Booking Reference (PNR)
                  </div>
                  <div class="text-sm text-grayscale-900">QWRT1W</div>
                </div>
              </div>
              <div class="py-6 my-6 border-t border-b md:flex">
                <div class="md:w-1/4">
                  <img
                    src="~/assets/images/logo-star-air.png"
                    class="inline-block"
                    alt="Logo star air"
                    width="132"
                  />
                  <div class="flex md:block">
                    <div class="flex-1">
                      <div class="mt-4 text-xs text-grayscale-400">
                        Airlines
                      </div>
                      <div class="text-sm text-grayscale-900">Star Air</div>
                    </div>
                    <div class="flex-1">
                      <div class="mt-4 text-xs text-grayscale-400">
                        Flight Number
                      </div>
                      <div class="text-sm text-grayscale-900">QZ-1234</div>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6 md:w-3/4 gap-x-8">
                  <div class="relative flex-none">
                    <div
                      class="absolute w-4 h-32 border-r border-dashed  -right-2 top-3"
                    ></div>
                    <div class="pt-1 mb-10">
                      <span class="pr-2 text-xs text-grayscale-500"
                        >08:00 AM</span
                      >
                      <div class="absolute bullet-green top-3"></div>
                    </div>
                    <div class="absolute bottom-5">
                      <span class="pr-2 text-xs text-grayscale-500"
                        >09:30 AM</span
                      >
                      <div class="absolute bullet-green bottom-1"></div>
                    </div>
                  </div>
                  <div class="flex-grow">
                    <div class="text-sm text-grayscale-900">Qatar (DOH)</div>
                    <div class="mt-1 text-xs text-grayscale-500">
                      Doha International Airport (DOH) Terminal 2E
                    </div>
                    <div class="mt-8 text-xs text-grayscale-500">
                      1 hour and 30 minutes
                    </div>
                    <div class="mt-8 text-sm text-grayscale-900">
                      Mumbai (MBR)
                    </div>
                    <div class="mt-1 text-xs text-grayscale-500">
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
                  class="mb-4 text-lg font-semibold  text-grayscale-900 font-noto-sans"
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
                    <tr>
                      <td>1</td>
                      <td>Mr. Chanda Gauri</td>
                      <td>W12ERT</td>
                      <td>DOH - MBR</td>
                      <td>15kg</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mr. Javas Raju</td>
                      <td>Q31FGH</td>
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
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            Flight Info
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 mt-4 leading-loose list-disc">
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
