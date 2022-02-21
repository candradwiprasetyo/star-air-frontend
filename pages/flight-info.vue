<script lang="ts">
export default {
  name: "FlightInfo",
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
        Flight Info
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
      <div class="mt-10 block p-6 bg-light-blue rounded-xl">
        <div class="md:flex gap-x-6">
          <div class="flex-1">
            <div class="text-2xs text-grayscale-500">Flight From:</div>
            <div class="text-grayscale-900 font-medium">
              Indira Gandhi International Airport
            </div>
          </div>
          <div class="flex-1 mt-4 md:mt-0">
            <div class="text-2xs text-grayscale-500">Flight To:</div>
            <div class="text-grayscale-900 font-medium">
              Chhatrapati Shivaji International Airport
            </div>
          </div>
          <div class="flex-1 mt-4 md:mt-0">
            <div class="text-2xs text-grayscale-500">Departure Date::</div>
            <div class="text-grayscale-900 font-medium">20 Nov 2021</div>
          </div>
          <div class="flex-1 mt-4 md:mt-0">
            <div class="text-2xs text-grayscale-500">Return Date::</div>
            <div class="text-grayscale-900 font-medium">21 Nov 2021</div>
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
        <table class="table-auto md:w-full custom-table w-[1200px]">
          <thead>
            <tr>
              <th>No</th>
              <th>Departure</th>
              <th>Departure Time</th>
              <th>Arrival</th>
              <th>Arrival Time</th>
              <th>Flight Number</th>
              <th>Aircraft Type</th>
              <th>No. of Transit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 5" :key="index">
              <td>1</td>
              <td>Indira Gandhi International Airport</td>
              <td>Tue, Feb 08 03:40</td>
              <td>Chhatrapati Shivaji Maharaj International Airport</td>
              <td>Tue, Feb 08 05:30</td>
              <td>QR579</td>
              <td>Boeing 737-800NG</td>
              <td>0</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4">Show 1 to 5 of 56 entries:</th>
              <th colspan="4" class="text-right">
                <div class="flex justify-end gap-x-10">
                  <div class="flex-none">1</div>
                  <div class="flex-none">2</div>
                  <div class="flex-none">3</div>
                  <div class="flex-none">4</div>
                  <div class="flex-none">Next</div>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
