<script lang="ts">
import cookie from 'js-cookie'
export default {
  name: "FlightInfo",
  data() {
    return {
      userData: null,
      dataSchedule: [],
      dataReturnSchedule: [],
      origin: null,
      originName: null,
      destination: null,
      destinationName: null,
      departDate: null,
      returnDate: null,
      returnFlight: null,
      dataAirport: [],
      isLoading: true,
    };
  },
  methods: {
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
    },
    loadParam() {
      this.origin = (this.$route.query.org) ? this.$route.query.org : null;
      this.destination = (this.$route.query.des) ? this.$route.query.des : null;
      this.departDate = (this.$route.query.flight_date) ? this.$route.query.flight_date : null;
      this.returnDate = (this.$route.query.ret_flight_date) ? this.$route.query.ret_flight_date : null;
      this.returnFlight = (this.$route.query.return_flight) ? this.$route.query.return_flight : null;
      this.getSchedule();
    },
    loadOrigin() {
      this.$axios.$get(this.$config.myTempApi + '&app=data&action=get_org')
        .then( (response) => {
          // response.origin.forEach(element => {
          //   if (this.origin == element[0]) {
          //     this.originName = element[1];
          //   }
          //   if (this.destination == element[0]) {
          //     this.destinationName = element[1];
          //   }
          // });
          this.dataAirport = response.origin;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getAirportName(value) {
      if (value){ 
        let result = '';
        this.dataAirport.forEach(element => {
          if (value == element[0]) {
            // return element[1];
            result = element[1];
          }
        });
        return result;
      }
    },
    formatDate(value) {
      let monthName = [
        '',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      if (value) {
        value = value.toString();
        let year = value.substring(0,4);
        let month = value.substring(4,6);
        let date = value.slice(-2);

        let result = date + ' ' + monthName[parseInt(month)] + ' ' + year;
        return result;
      }
    },
    getSchedule() {
      let returnFlight = '';
      if (this.returnFlight) { 
        returnFlight = '&ret_flight_date='+this.returnDate+'&return_flight=1';
      }
      this.$axios.$get(this.$config.myTempApi + '&app=information_airline_temp&action=get_schedule_v2&org='+this.origin+'&des='+this.destination+'&flight_date='+this.departDate+returnFlight)
        .then( (response) => {
          response.schedule.forEach(element => {
            if (element[0]) {
              this.dataSchedule.push(element[0])
            }
          });
          response.ret_schedule.forEach(element => {
            if (element[0]) {
              this.dataSchedule.push(element[0])
            }
          });
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
    },
  },
  mounted() {
    this.loadUser()
    this.loadParam()
    this.loadOrigin()
  },
};
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0 min-h-[500px]" >
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        Flight Info
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
      <div v-if="!isLoading">
        <div class="block p-6 mt-10 bg-light-blue rounded-xl">
          <div class="md:flex gap-x-6">
            <div class="flex-1">
              <div class="text-2xs text-grayscale-500">Flight From:</div>
              <div class="font-medium text-grayscale-900">
                {{ getAirportName(origin) }}
              </div>
            </div>
            <div class="flex-1 mt-4 md:mt-0">
              <div class="text-2xs text-grayscale-500">Flight To:</div>
              <div class="font-medium text-grayscale-900">
                {{ getAirportName(destination) }}
              </div>
            </div>
            <div class="flex-1 mt-4 md:mt-0">
              <div class="text-2xs text-grayscale-500">Departure Date::</div>
              <div class="font-medium text-grayscale-900">{{ formatDate(departDate) }}</div>
            </div>
            <div class="flex-1 mt-4 md:mt-0">
              <div class="text-2xs text-grayscale-500">Return Date::</div>
              <div class="font-medium text-grayscale-900">{{ (returnDate) ? formatDate(returnDate) : '-' }}</div>
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
              <tr v-for="(data, index) in dataSchedule" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ getAirportName(data[1]) }}</td>
                <td>{{ formatDate(data[3]) }} {{ formatHour(data[5]) }}</td>
                <td>{{ getAirportName(data[2]) }}</td>
                <td>{{ formatDate(data[4]) }} {{ formatHour(data[6]) }}</td>
                <td>{{ data[0] }}</td>
                <td>{{ data[8] }}</td>
                <td>{{ data[9] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form target="_top" id="formSearchSchedule" class="" method=POST action="https://test-starair.paxlinks.com/search-schedule">
          <div class="flex flex-row-reverse mt-8">
            <input type="hidden" name="org" :value="(origin) ? origin : ''">
            <input type="hidden" name="des" :value="(destination) ? destination : ''">
            <input type="hidden" name="dep_date" :value="(departDate) ? departDate : ''">
            <input type="hidden" name="ret_date" :value="(returnDate) ? returnDate : ''">
            <input type="hidden" name="adult" value="1">
            <input type="hidden" name="child" value="0">
            <input type="hidden" name="infant" value="0">
            <input type="hidden" name="loyalty_id" :value="(userData) ? userData.member_id : ''">
            <span>
              <button type="submit" class="px-6 py-4 font-medium text-center text-white border-2 rounded-lg cursor-pointer border-primary-600 bg-primary-600">Book Now</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
