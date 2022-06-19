<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500" v-if="!isLoading">
      <div class="p-6" v-if="errorMessage">
        {{ errorMessage }}
        <div class="mt-10">
          <div class="inline-block" @click="$emit('back-to-history', 3)">
            <Button
              value="Back"
              border="border-2 border-secondary-900"
              color="text-secondary-900"
              background="bg-white"
            />
          </div>
        </div>
      </div>
      <div v-else>
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
                  <div class="text-sm text-grayscale-900">{{ (data.route_info[0]) ? data.route_info[0][7] : ''  }}</div>
                </div>
                <div class="flex-1">
                  <div class="mt-4 text-xs text-grayscale-400">
                    Flight Date
                  </div>
                  <div class="text-sm text-grayscale-900">{{ (data.route_info[0]) ? data.route_info[0][2] : '' }}</div>
                  <div class="mt-4 text-xs text-grayscale-400">
                    Booking Reference (PNR)
                  </div>
                  <div class="text-sm text-grayscale-900">{{ data.book_code }}</div>
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
                    >{{ (data.route_info[0]) ? formatHour(data.route_info[0][4]) : ''  }}</span
                  >
                  <div class="absolute bullet-green top-3"></div>
                </div>
                <div class="absolute bottom-5">
                  <span class="pr-2 text-xs text-grayscale-500"
                    >{{ (data.route_info[0]) ? formatHour(data.route_info[0][5]) : ''  }}</span
                  >
                  <div class="absolute bullet-green bottom-1"></div>
                </div>
              </div>
              <div class="flex-grow">
                <div class="text-sm text-grayscale-900">{{ (data.route_info[0]) ? data.route_info[0][0] : ''  }}</div>
                <div class="mt-1 text-xs text-grayscale-500"></div>
                <div class="mt-8 text-xs text-grayscale-500">
                  1 hour 
                </div>
                <div class="mt-8 text-sm text-grayscale-900">
                  {{ (data.route_info[0]) ? data.route_info[0][1] : '' }}
                </div>
                <div class="mt-1 text-xs text-grayscale-500"></div>
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
                <tr v-for="(detail, index) in data.pax_list" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.pax_list[0][10] + ' ' + data.pax_list[0][0] + ' ' + data.pax_list[0][1] }}</td>
                  <td>{{ data.book_code }}</td>
                  <td>{{ data.route_info[0][0] }} - {{ data.route_info[0][1] }}</td>
                  <td>{{ data.route_detail[0][22] }}kg</td>
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
  </div>
</template>

<script>
export default {
  name: "AccountBookingHistoryDetail",
  data() {
    return {
      data: {
        route_info: [],
      },
      isLoading: true,
      errorMessage: null,
    }
  },
  props: {
    dataId: {
      type: String,
      required: false,
    },
  },
  methods: {
    loadHistoryDetail() {
      this.$axios.$get(this.$config.myTempApi + '&app=information_airline_temp&action=get_all_book_info_2&book_code=' + this.dataId)
        .then( (response) => {
          if (response.err_code==0) {
            this.data = JSON.parse(JSON.stringify(response));
          } else {
            this.errorMessage = response.err_msg;
          }
          this.isLoading = false;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    formatHour(value) {
      let hour = value.substring(0,2);
      let minute = value.substring(value.length - 2);
      let result = hour + ':' + minute;
      return result;
    }
  },
  mounted() {
    this.loadHistoryDetail();
  },
};
</script>
