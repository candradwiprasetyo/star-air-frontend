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
              <Input label="Keyword" v-model="keyword" />
            </div>
            <div class="flex-1">
              <div class="h-full px-3 py-2 border rounded-lg">
                <div class="mb-1 text-xs text-grayscale-400">Start Date</div>
                <client-only>
                  <v-date-picker 
                    v-model="startDate"
                    :popover="{ visibility: 'click' }"
                  >
                    <template v-slot="{ inputValue, inputEvents }">
                      <input
                        class="w-full outline-none"
                        :value="inputValue"
                        v-on="inputEvents"
                        placeholder="mm/dd/yyyy"
                        readonly
                      />
                    </template>
                  </v-date-picker>
                </client-only>
              </div>
            </div>
            <div class="flex-1">
              <div class="h-full px-3 py-2 border rounded-lg">
                <div class="mb-1 text-xs text-grayscale-400">End Date</div>
                <client-only>
                  <v-date-picker 
                    v-model="endDate"
                    :popover="{ visibility: 'click' }"
                  >
                    <template v-slot="{ inputValue, inputEvents }">
                      <input
                        class="w-full outline-none"
                        :value="inputValue"
                        v-on="inputEvents"
                        placeholder="mm/dd/yyyy"
                        readonly
                      />
                    </template>
                  </v-date-picker>
                </client-only>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-none">
          <Button
            value="Filter"
            border="border-2 border-secondary-900"
            color="text-secondary-900"
            background="bg-white"
            @action="searchData" 
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
      keyword: null,
      startDate: null,
      endDate: null,
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
      // formData.append('member_id', 'SQV119');
      formData.append('token', this.$config.myToken);
      formData.append('airline_code', this.$config.myAirlineCode);
      formData.append('start_date', this.formatDate(this.startDate));
      formData.append('end_date', this.formatDate(this.endDate));
      if (this.keyword){ formData.append('search', this.keyword); }

      this.$axios.$post('/api/information/get-booking-history', formData)
        .then( (response) => {
          this.data = response.result;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    searchData() {
      this.loadData();
    },
    formatDate(value) {
      value = new Date(value);
      // value.setDate(value.getDate() + 1);
      if (value) {
        value = value.toISOString().split('T')[0];
        value = value.split("-");
        let today = value[2] + '/' + value[1] + '/' + value[0];
        return today;
      }
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>

