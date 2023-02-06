<script lang="ts">
export default {
  name: "ClaimMissingPoints",
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
        Claim Missing Points
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Buy more Alliance Points to get the flight reward you really want. If you do not have enough Alliance Points for an award ticket, award upgrade on Alliance Air or extra baggage, you can buy additional Alliance Points to top up your existing balance online.
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          Claim Missing Points Info
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li>You may claim points that have not yet been credited to your account.</li>
            <li>Claims must only be submitted for flights taken within the past 6 months.</li>
            <li>Please allow time for the missing mileage to be reflected on your account.</li>
            <li>You should receive your updated mileage balance on your next AlliancePoints Statement.</li>
          </ul>
        </div>
      </div>
      <div class="flex items-start mt-6 md:mt-16 gap-x-8">
        <div class="md:w-2/3">
          <Select label="Membership Name" />
          <Select label="Passanger Ticket Number" customClass="mt-6" />
          <div class="mt-10 md:w-64">
            <NuxtLink to=""> 
              <Button value="Retrieve Flight" />
            </NuxtLink>
          </div>
          <div class="my-10 border-b"></div>
          <div class="text-lg font-semibold text-grayscale-900">
            Search Data Claim 
          </div>
          <Input label="PNR or Payment Number" customClass="mt-6" icon="search.svg" />
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
                  <th>PNR</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="index in 5" :key="index">
                  <td>{{ index }}</td>
                  <td>ASD1234</td>
                  <td>New Delhi (DEL)</td>
                  <td>Indore (IDR)</td>
                  <td>Pending</td>
                  <td>Claim</td>
                  <td>
                    <img
                      src="~/assets/images/info.svg"
                      class="inline-block"
                      alt="Info"
                    />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="3">Show 1 to 5 of 56 entries:</th>
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
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            Claim Missing Points Info
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 leading-loose list-disc">
              <li>You may claim points that have not yet been credited to your account.</li>
              <li>Claims must only be submitted for flights taken within the past 6 months.</li>
              <li>Please allow time for the missing mileage to be reflected on your account.</li>
              <li>You should receive your updated mileage balance on your next AlliancePoints Statement.</li>
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
