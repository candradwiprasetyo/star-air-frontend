<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <div
          class="text-2xl font-semibold md:mt-8 text-grayscale-900 font-noto-sans"
        >
          Where do you want to travel?
        </div>
        <div class="mt-2 text-grayscale-500">
          Redeem your Star Points with a flight ticket to your desired destination
        </div>
      </div>
      <div class="flex-1 flex-none">
        <div class="flex justify-center mt-6 text-center cursor-pointer">
          <div
            class="flex items-center justify-center w-40 gap-3 border rounded-l-lg md:p-2 border-secondary-900" :class="(routeType==1) ? 'bg-secondary-900 text-white' : 'text-secondary-900'"
            @click="changeRouteType(1)"
          >
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.80457 4.18435C1.25228 4.18435 0.804565 4.63206 0.804565 5.18435C0.804565 5.73663 1.25228 6.18435 1.80457 6.18435V4.18435ZM14.7932 5.18435V6.18435C15.2326 6.18435 15.6206 5.89741 15.7493 5.47718C15.878 5.05696 15.7173 4.60197 15.3532 4.35586L14.7932 5.18435ZM9.30675 0.26892C8.84918 -0.0403599 8.22753 0.0798477 7.91825 0.537411C7.60897 0.994975 7.72918 1.61662 8.18674 1.9259L9.30675 0.26892ZM14.7932 10.4875C15.3454 10.4875 15.7932 10.0398 15.7932 9.4875C15.7932 8.93521 15.3454 8.4875 14.7932 8.4875V10.4875ZM1.80457 9.4875V8.4875C1.36508 8.4875 0.977102 8.77444 0.848403 9.19466C0.719705 9.61488 0.880453 10.0699 1.24456 10.316L1.80457 9.4875ZM7.29097 14.4029C7.74853 14.7122 8.37018 14.592 8.67946 14.1344C8.98874 13.6769 8.86854 13.0552 8.41097 12.7459L7.29097 14.4029ZM1.80457 6.18435H14.7932V4.18435H1.80457V6.18435ZM15.3532 4.35586L9.30675 0.26892L8.18674 1.9259L14.2332 6.01284L15.3532 4.35586ZM14.7932 8.4875H1.80457V10.4875H14.7932V8.4875ZM1.24456 10.316L7.29097 14.4029L8.41097 12.7459L2.36457 8.65901L1.24456 10.316Z" :fill="(routeType==1) ? 'white' : '#224CA1'"/>
            </svg>
            Round Trip
          </div>
          <div
            class="flex items-center justify-center w-40 gap-3 border md:p-2 border-secondary-900" :class="(routeType==2) ? 'bg-secondary-900 text-white' : 'text-secondary-900'"
            @click="changeRouteType(2)"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8317 0.984354C11.4776 0.560526 10.8469 0.504002 10.4231 0.858104C9.99927 1.21221 9.94275 1.84284 10.2968 2.26667L12.8964 5.37809L1.69006 5.37809C1.13778 5.37809 0.690063 5.82581 0.690063 6.37809C0.690063 6.93038 1.13778 7.37809 1.69006 7.37809L12.7961 7.37809L10.2997 10.3392C9.94373 10.7614 9.99744 11.3923 10.4197 11.7483C10.8419 12.1043 11.4728 12.0505 11.8288 11.6283L15.7558 6.97034C16.0687 6.59925 16.0699 6.05709 15.7587 5.68461L11.8317 0.984354Z" :fill="(routeType==2) ? 'white' : '#224CA1'"/>
            </svg>
            One-way
          </div>
          <div
            class="flex items-center justify-center w-40 gap-3 border rounded-r-lg md:p-2 border-secondary-900" :class="(routeType==3) ? 'bg-secondary-900 text-white' : 'text-secondary-900'" 
            @click="changeRouteType(3)"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.91415 0.600398C8.53974 0.279685 7.98746 0.279685 7.61305 0.600398L5.2782 2.6004C4.85876 2.95969 4.81 3.59097 5.16928 4.01041C5.52857 4.42985 6.15986 4.47862 6.5793 4.11933L7.25982 3.5364V7.34259L3.45363 7.34259L4.03656 6.66206C4.39585 6.24261 4.34709 5.61133 3.92765 5.25204C3.50821 4.89275 2.87692 4.94152 2.51763 5.36096L0.517634 7.69581C0.196921 8.07022 0.196921 8.6225 0.517634 8.9969L2.51763 11.3318C2.87692 11.7512 3.50821 11.8 3.92765 11.4407C4.34709 11.0814 4.39585 10.4501 4.03656 10.0307L3.44718 9.34259H7.25982V13.1563L6.57929 12.5734C6.15984 12.2141 5.52856 12.2629 5.16927 12.6823C4.80998 13.1018 4.85875 13.733 5.27819 14.0923L7.61304 16.0923C7.98745 16.413 8.53973 16.413 8.91413 16.0923L11.249 14.0923C11.6684 13.733 11.7172 13.1018 11.3579 12.6823C10.9986 12.2629 10.3673 12.2141 9.94789 12.5734L9.25982 13.1628V9.34259H13.08L12.4906 10.0307C12.1313 10.4501 12.1801 11.0814 12.5996 11.4407C13.019 11.8 13.6503 11.7512 14.0096 11.3318L16.0096 8.99692C16.3303 8.62251 16.3303 8.07023 16.0096 7.69582L14.0096 5.36097C13.6503 4.94153 13.019 4.89277 12.5996 5.25205C12.1801 5.61134 12.1313 6.24263 12.4906 6.66207L13.0736 7.34259L9.25982 7.34259V3.52993L9.9479 4.11933C10.3673 4.47862 10.9986 4.42985 11.3579 4.01041C11.7172 3.59097 11.6684 2.95969 11.249 2.6004L8.91415 0.600398Z" :fill="(routeType==3) ? 'white' : '#224CA1'" />
            </svg>
            Multicity
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 md:flex">
      <div class="w-full md:w-4/6 md:flex">
        <div class="relative flex-1">
          <div
            class="p-3 border rounded-t-lg cursor-pointer md:rounded-l-lg md:rounded-tr-none"
            @click="openOrigin"
            v-on-clickaway="closeOrigin"
          >
            <div class="text-grayscale-400 text-2xs">From</div>
            <div
              class="w-full border-none outline-none"
            >
              {{ (selectedOrigin) ? selectedOrigin[1] : 'Choose origin here' }}
              <div v-if="isOriginOpen" class="absolute w-full bg-white border left-0 top-[67px] overflow-y-auto h-[360px] shadow-custom">
                <div class="flex items-center px-6 py-4 border-b" v-for="(data, index) in originOptions" :key="index" @click="pickOrigin(data)">
                  <div class="flex-grow">
                    <div class="font-medium text-grayscale-900">{{ data[0] }}</div>
                    <div class="text-xs text-grayscale-500">{{ data[1] }}</div>
                  </div>
                  <!-- <div class="flex-none text-sm font-medium text-grayscale-500">India</div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex-1">
          <div class="absolute hidden w-10 h-10 cursor-pointer md:inline" @click="switchRoute()">
            <img
              src="~/assets/images/flip-button.svg"
              class="inline-block mt-4 -ml-5"
              alt="Flip Button"
            />
          </div>
          <div
            class="absolute inline w-10 h-10 -mt-5 cursor-pointer md:hidden right-4"
            @click="switchRoute()"
          >
            <img
              src="~/assets/images/flip-button-mobile.svg"
              class="inline-block"
              alt="Flip Button"
            />
          </div>
          <div
            class="p-3 pl-6 border rounded-t-lg cursor-pointer md:rounded-l-lg md:rounded-tr-none"
            @click="openDestination"
            v-on-clickaway="closeDestination"
          >
            <div class="text-grayscale-400 text-2xs">To</div>
            <div
              class="w-full border-none outline-none"
            >
              {{ (selectedDestination) ? selectedDestination[1] : 'Choose destination here' }}
              <div v-if="isDestinationOpen" class="absolute w-full bg-white border left-0 top-[67px] overflow-y-auto h-[360px] shadow-custom">
                <div class="flex items-center px-6 py-4 border-b" v-for="(data, index) in destinationOptions" :key="index" @click="pickDestination(data)">
                  <div class="flex-grow">
                    <div class="font-medium text-grayscale-900">{{ data[0] }}</div>
                    <div class="text-xs text-grayscale-500">{{ data[1] }}</div>
                  </div>
                  <!-- <div class="flex-none text-sm font-medium text-grayscale-500">India</div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full mt-6 md:w-1/6 md:mt-0">
        <div class="w-2/3 md:w-full">
          <div class="p-3 border rounded-r-lg md:rounded-r-none">
            <div class="flex">
              <div class="flex-1">
                <div class="text-grayscale-400 text-2xs">Depart</div>
                <client-only>
                  <v-date-picker 
                    v-model="departDate"
                    :popover="{ visibility: 'click' }"
                    class="cursor-pointer"
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
              <div class="flex-1" v-if="routeType==1">
                <div class="text-grayscale-400 text-2xs">Return</div>
                <client-only>
                  <v-date-picker 
                    v-model="returnDate"
                    :popover="{ visibility: 'click' }"
                    class="cursor-pointer"
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
      </div>
      <div class="flex w-full mt-6 md:w-1/6 md:mt-0">
        <div class="w-full">
          <div 
            class="relative p-3 border rounded-lg cursor-pointer md:rounded-r-lg md:rounded-none"
            @click="openPassanger"
            v-on-clickaway="closePassanger"
          >
            <div class="text-grayscale-400 text-2xs">Passanger/Class</div>
            {{ (selectedPassanger.title) ? selectedPassanger.title : 'Choose passanger here' }}
            <div v-if="isPassangerOpen" class="absolute w-full bg-white border left-0 top-[67px] overflow-y-auto max-h-[360px] shadow-custom">
              <div class="flex items-center px-6 py-4 border-b" v-for="(data, index) in passangerOptions" :key="index" @click="pickPassanger(data)">
                <div class="flex-grow">
                  <div class="font-medium text-grayscale-900">{{ data.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 md:inline-block md:float-right">
      <Button value="Search Flights" customClass="px-6" @click="searchFlight()" />
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "HomepageTabBook",
  mixins: [ clickaway ],
  data() {
    return {
      value: 1,
      originOptions: [],
      destinationOptions: [],
      passangerOptions: [
        { id: 1, title: '1 Adult'},
        { id: 2, title: '2 Adults'},
        { id: 3, title: '3 Adults '},
      ],
      selectedOrigin: null,
      selectedDestination: null,
      selectedPassanger: { id: 1, title: '1 Adult' },
      isOriginOpen: false,
      isDestinationOpen: false,
      isPassangerOpen: false,
      routeType: 1,
      departDate: null,
      returnDate: null,
    };
  },
  methods: {
    openOrigin() {
      this.isOriginOpen = !this.isOriginOpen;
    },
    closeOrigin() {
      this.isOriginOpen = false
    },
    openDestination() {
      this.isDestinationOpen = !this.isDestinationOpen;
    },
    closeDestination() {
      this.isDestinationOpen = false
    },
    openPassanger() {
      this.isPassangerOpen = !this.isPassangerOpen;
    },
    closePassanger() {
      this.isPassangerOpen = false
    },
    loadOrigin() {
      this.$axios.$get('http://ws.demo.awan.sqiva.com/?rqid=L7O3W5U0-0323-FP30-BQUK-UFNMS30DELIU&airline_code=Q1&app=data&action=get_org')
        .then( (response) => {
          this.originOptions = response.origin;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadDestination() {
      this.$axios.$get('http://ws.demo.awan.sqiva.com/?rqid=5EB9FE68-8915-11E0-BEA0-C9892766ECF2&airline_code=Q1&app=data&action=get_des')
        .then( (response) => {
          this.destinationOptions = response.destination;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    pickOrigin(data) {
      this.selectedOrigin = data;
    },
    pickDestination(data) {
      this.selectedDestination = data;
    },
    pickPassanger(data) {
      this.selectedPassanger = data;
    },
    switchRoute() {
      if (this.selectedOrigin && this.selectedDestination) {
        let oldOrigin = this.selectedOrigin;
        this.selectedOrigin = this.selectedDestination;
        this.selectedDestination = oldOrigin;
      }
    },
    changeRouteType(type) {
      this.routeType = type;
    },
    searchFlight() {
      if (
        this.selectedOrigin &&
        this.selectedDestination && 
        this.departDate &&
        this.returnDate
      ) {
        // do search here
      }
    },
  },
  mounted() {
    this.loadOrigin();
    this.loadDestination();
  },
};
</script>