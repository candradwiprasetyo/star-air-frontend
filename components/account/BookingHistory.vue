<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Booking History</div>
        </div>
      </div>
      <div class="mx-6 mt-6 space-y-4 md:space-y-0 md:space-x-4 md:flex">
        <div class="flex-grow">
          <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex">
            <div class="flex-1">
              <Input label="Keyword" />
            </div>
            <div class="flex-1">
              <Select label="Start Date" />
            </div>
            <div class="flex-1">
              <Select label="End Date" />
            </div>
          </div>
        </div>
        <div class="flex-none">
          <Button
            value="Filter"
            border="border-2 border-secondary-900"
            color="text-secondary-900"
            background="bg-white"
          />
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div
          class="
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
                <th>Booking Date</th>
                <th>Origin - Destination</th>
                <th>Flight Date</th>
                <th>Flight</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="index in 5" :key="index">
                <td>19 Nov 2021, 08:50 AM</td>
                <td>Mumbai (BOM - Delhi (DEL)</td>
                <td>19 Nov 2021, 08:50 AM</td>
                <td>SA-1234</td>
                <td class="text-secondary-900">Detail</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="2">Show 1 to 5 of 56 entries:</th>
                <th colspan="3" class="text-right">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountBookingHistory",
};
</script>
