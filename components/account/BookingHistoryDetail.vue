<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Booking History / Detail</div>
        </div>
      </div>
      <div class="mx-6 mt-6">
        <div
          class="text-lg font-semibold text-grayscale-900 font-noto-sans"
        >
          Flight Info
        </div>
        <div class="py-6 my-6 border-b md:flex">
          <div class="md:w-1/2">
            <img
              src="~/assets/images/logo-star-air.png"
              class="inline-block"
              alt="Logo star air"
              width="132"
            />
            <div class="flex">
              <div class="flex-1">
                <div class="mt-4 text-xs text-grayscale-400">
                  Airlines
                </div>
                <div class="text-sm text-grayscale-900">Star Air</div>
                <div class="mt-4 text-xs text-grayscale-400">
                  Flight Number
                </div>
                <div class="text-sm text-grayscale-900">QZ-1234</div>
              </div>
              <div class="flex-1">
                <div class="mt-4 text-xs text-grayscale-400">
                  Flight Date
                </div>
                <div class="text-sm text-grayscale-900">Sat, 20 Nov 2021</div>
                <div class="mt-4 text-xs text-grayscale-400">
                  Booking Reference (PNR)
                </div>
                <div class="text-sm text-grayscale-900">QWRT1W</div>
              </div>
            </div>
          </div>
          <div class="flex mt-6 md:w-1/2 gap-x-8">
            <div class="relative flex-none">
              <div
                class="absolute w-4 h-32 border-r border-dashed -right-2 top-3"
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
            -mx-6
            md:w-full
            w-[100vw]
            overflow-auto
          "
        >
          <div
            class="pt-4 text-lg font-semibold text-grayscale-900 font-noto-sans"
          >
            Passanger Details
          </div>
        </div>
      
      </div>
      <div class="p-6 overflow-hidden">
        <div
          class="
            md:px-0 md:-mx-0
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
        <div class="mt-6 text-right" v-if="false">
          <div class="mb-4 md:mr-4 md:inline-block">
            <Button
              value="Reschedule"
              border="border-2 border-secondary-900"
              color="text-secondary-900"
              background="bg-white"
            />
          </div>
          <div class="md:inline-block">
            <Button
              value="Refund"
              border="border-2 border-secondary-900"
              color="text-secondary-900"
              background="bg-white"
            />
          </div>
        </div>
        <div class="mt-6 text-right" >
          <div class="mb-4 md:mr-4 md:inline-block" @click="$emit('back-to-history', 3)">
            <Button
              value="Back"
              border="border-2 border-secondary-900"
              color="text-secondary-900"
              background="bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountBookingHistoryDetail",
};
</script>
