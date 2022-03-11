<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Overview</div>
        </div>
      </div>
      <div class="p-6">
        <div class="flex mb-4">
          <div class="flex-1 text-lg font-semibold font-noto-sans text-grayscale-900">Overview</div>
          <div class="flex-1 font-semibold text-right font-noto-sans text-secondary-900">Read More ></div>
        </div>
        <table class="table-auto md:w-full custom-table w-[1200px]">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Star Points</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in 5" :key="index">
              <td>19 November 2021</td>
              <td>Transfer Points for Plus (+)</td>
              <td>+1000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">&nbsp;</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountOverview",
};
</script>
