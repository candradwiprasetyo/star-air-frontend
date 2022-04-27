<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Booking History</div>
        </div>
      </div>
      <div class="mx-6 mt-6 space-y-4 md:space-y-0 md:space-x-4 md:flex" v-if="false">
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
                <th>PNR</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in data" :key="index">
                <td>{{ data.booking_date }}</td>
                <td>{{ data.route }}</td>
                <td>{{ data.flight_date }}</td>
                <td>{{ data.pnr }}</td>
                <td class="cursor-pointer text-secondary-900" @click="$emit('view-detail-history', 11)">Detail</td>
              </tr>
            </tbody>
            <!-- <tfoot>
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
            </tfoot> -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: "BookingHistory",
  data() {
    return {
      userData: [],
      data: [],
    }
  },
  methods: {
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
      this.loadData();
    },
    loadData() {
      let formData = new FormData();
      formData.append('member_id', this.userData.member_id);
      // formData.append('member_id', 'SQV091');
      formData.append('token', this.$config.myToken);
      formData.append('start_date', '01/04/2022');
      formData.append('end_date', '30/04/2022');

      this.$axios.$post('/information/get-booking-history', formData)
        .then( (response) => {
          this.data = response.result;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>

