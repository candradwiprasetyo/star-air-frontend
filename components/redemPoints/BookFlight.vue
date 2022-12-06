<template>
  <div>
    <div class="pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900">Book a Flight</div>
    <div class="flex mt-6 text-center cursor-pointer">
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
        class="flex items-center justify-center w-40 gap-3 border rounded-r-lg md:p-2 border-secondary-900" :class="(routeType==2) ? 'bg-secondary-900 text-white' : 'text-secondary-900'" 
        @click="changeRouteType(2)"
      >
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8317 0.984354C11.4776 0.560526 10.8469 0.504002 10.4231 0.858104C9.99927 1.21221 9.94275 1.84284 10.2968 2.26667L12.8964 5.37809L1.69006 5.37809C1.13778 5.37809 0.690063 5.82581 0.690063 6.37809C0.690063 6.93038 1.13778 7.37809 1.69006 7.37809L12.7961 7.37809L10.2997 10.3392C9.94373 10.7614 9.99744 11.3923 10.4197 11.7483C10.8419 12.1043 11.4728 12.0505 11.8288 11.6283L15.7558 6.97034C16.0687 6.59925 16.0699 6.05709 15.7587 5.68461L11.8317 0.984354Z" :fill="(routeType==2) ? 'white' : '#224CA1'"/>
        </svg>
        One-way
      </div>
    </div>
    <form target="_blank" id="formSearchSchedule" class="" method=POST action="https://test-allianceair.paxlinks.com/search-schedule">
      <div class="w-full mt-6 md:flex">
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
              <input type="hidden" name="org" :value="(selectedOrigin) ? selectedOrigin[0] : ''">
              <div class="truncate max-w-[360px]">{{ (selectedOrigin[0]) ? selectedOrigin[1] : 'Choose origin here' }}</div>
              <div v-if="isOriginOpen" class="absolute z-10 w-full bg-white border left-0 top-[67px] overflow-y-auto h-[360px] shadow-custom">
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
          <div class="absolute hidden w-10 h-10 cursor-pointer md:inline">
            <img
              src="~/assets/images/flip-button.svg"
              class="inline-block mt-4 -ml-5"
              alt="Flip Button"
            />
          </div>
          <div
            class="absolute inline w-10 h-10 -mt-5 cursor-pointer md:hidden right-4"
          >
            <img
              src="~/assets/images/flip-button-mobile.svg"
              class="inline-block"
              alt="Flip Button"
            />
          </div>
          <div
            class="p-3 border cursor-pointer md:pl-8 rounded-b-xl md:rounded-none md:rounded-r-xl"
            @click="openDestination"
            v-on-clickaway="closeDestination"
          >
            <div class="text-grayscale-400 text-2xs">To</div>
            <div
              class="w-full border-none outline-none"
            >
              <input type="hidden" name="des" :value="(selectedDestination) ? selectedDestination[0] : ''">
              {{ (selectedDestination[0]) ? selectedDestination[1] : (selectedOrigin[0]) ? 'Choose destination here' : 'Please choose origin first' }}
              <div v-if="isDestinationOpen" class="absolute z-10 w-full bg-white border left-0 top-[67px] overflow-y-auto max-h-[360px] shadow-custom">
                <div class="flex items-center px-6 py-4 border-b" v-for="(data, index) in destinationOptions" :key="index" @click="pickDestination(data)" v-if="destinationOptions.length>0">
                  <div class="flex-grow">
                    <div class="font-medium text-grayscale-900">{{ data[0] }}</div>
                    <div class="text-xs text-grayscale-500">{{ data[1] }}</div>
                  </div>
                  <!-- <div class="flex-none text-sm font-medium text-grayscale-500">India</div> -->
                </div>
                <div v-if="destinationOptions.length==0" class="px-6 py-4">
                  Data not found
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 md:flex">
        <div class="flex-1">
          <div class="p-3 border rounded-lg md:rounded-none md:rounded-l-lg">
            <div class="text-grayscale-400 text-2xs">Depart</div>
            <client-only>
              <v-date-picker 
                v-model="departDate"
                :popover="{ visibility: 'click' }"
                class="cursor-pointer"
                :min-date='new Date()'
              >
                <template v-slot="{ inputValue, inputEvents }">
                  <input
                    class="w-full outline-none"
                    :value="formatDepartDate"
                    v-on="inputEvents"
                    placeholder="dd/mm/yyyy"
                    readonly
                    name="dep_date"
                  />
                </template>
              </v-date-picker>
            </client-only>
          </div>
        </div>
        <div class="flex-1 mt-6 md:mt-0" v-if="routeType==1">
          <div class="p-3 border rounded-lg md:rounded-none md:rounded-r-lg">
            <div class="text-grayscale-400 text-2xs">Return</div>
            <client-only>
              <v-date-picker 
                v-model="returnDate"
                :popover="{ visibility: 'click' }"
                class="cursor-pointer"
                :min-date='new Date()'
              >
                <template v-slot="{ inputValue, inputEvents }">
                  <input
                    class="w-full outline-none"
                    :value="formatReturnDate"
                    v-on="inputEvents"
                    placeholder="dd/mm/yyyy"
                    readonly
                    name="ret_date"
                  />
                </template>
              </v-date-picker>
            </client-only>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div 
          class="relative p-3 border cursor-pointer md:rounded-lg"
          @click="openPassanger"
          v-on-clickaway="closePassanger"
        >
          <div class="text-grayscale-400 text-2xs">Passanger</div>
          {{ (passangerTotal) + ' Pax' }}
          <div class="absolute w-80 bg-white z-10 border right-0 top-[67px] max-h-[360px] shadow-custom" :class="(isPassangerOpen) ? 'block' : 'hidden'">
            <div class="flex items-center p-4 border-b">
              <div class="flex-1 text-grayscale-900">Adult (12+)</div>
              <div class="flex items-center flex-1 gap-2">
                <div class="flex-none">
                  <img
                    src="~/assets/images/subtract.png"
                    class="inline-block"
                    alt="Subtract Button"
                    width="32"
                    @click="subtractPassanger(1)"
                  />
                </div>
                <div class="flex-none">
                  <input name="adult" type="text" class="p-3 text-center border rounded-lg" size="2" :value="passangerAdult" />
                </div>
                <div class="flex-none">
                  <img
                    src="~/assets/images/add.png"
                    class="inline-block"
                    alt="Add Button"
                    width="32"
                    @click="addPassanger(1)"
                  />
                </div>
              </div>
            </div>
            <div class="flex items-center p-4 border-b">
              <div class="flex-1 text-grayscale-900">Child (2-12)</div>
              <div class="flex items-center flex-1 gap-2">
                <div class="flex-none">
                  <img
                    src="~/assets/images/subtract.png"
                    class="inline-block"
                    alt="Subtract Button"
                    width="32"
                    @click="subtractPassanger(2)"
                  />
                </div>
                <div class="flex-none">
                  <input name="child" type="text" class="p-3 text-center border rounded-lg" size="2" :value="passangerChild" />
                </div>
                <div class="flex-none">
                  <img
                    src="~/assets/images/add.png"
                    class="inline-block"
                    alt="Add Button"
                    width="32"
                    @click="addPassanger(2)"
                  />
                </div>
              </div>
            </div>
            <div class="flex items-center p-4 border-b">
              <div class="flex-1 text-grayscale-900">Infant (0-2)</div>
              <div class="flex items-center flex-1 gap-2">
                <div class="flex-none">
                  <img
                    src="~/assets/images/subtract.png"
                    class="inline-block"
                    alt="Subtract Button"
                    width="32"
                    @click="subtractPassanger(3)"
                  />
                </div>
                <div class="flex-none">
                  <input name="infant" type="text" class="p-3 text-center border rounded-lg" size="2" :value="passangerInfant" />
                </div>
                <div class="flex-none">
                  <img
                    src="~/assets/images/add.png"
                    class="inline-block"
                    alt="Add Button"
                    width="32"
                    @click="addPassanger(3)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative mt-6">
        <div class="w-full">
          <div 
            class="relative p-3 border rounded-lg cursor-pointer md:rounded-lg"
          >
            <div class="text-grayscale-400 text-2xs">Promo</div>
            <input type="text" name="promo_code" class="w-full outline-none" />
            <div class="absolute flex items-center justify-center w-5 h-5 top-6 right-3" @mouseover="toggleTooltip" @mouseleave="toggleTooltip" >
              <img
                src="~/assets/images/info.png"
                class="inline-block"
                alt="promo"
              />
            </div>  
          </div>
        </div>
        <div class="absolute right-0 border rounded-lg bg-light-blue-2 w-60 top-16 border-grayscale-300" v-if="tooltip">
          <div class="p-4 text-lg font-bold border-b border-grayscale-300 text-secondary-900">Promo Code</div>
          <div class="p-4 text-grayscale-500">A Promotion code is alpha-numeric code, which relates to a special offer. This code is provided as part of a special promotion and will be valid for that particular offer and period only..</div>
        </div>
      </div>
      <div class="mt-10 md:inline-block">
        <input type="hidden" name="loyalty_id" :value="(userData) ? userData.member_id : ''">
        <span>
          <button v-if="isButtonEnabled" type="submit" class="px-6 py-4 font-medium text-center text-white border-2 rounded-lg cursor-pointer border-primary-600 bg-primary-600">Show Flights</button>
        </span>
        <div v-if="!isButtonEnabled" class="px-6 py-4 font-medium text-center text-white bg-gray-200 border-2 border-transparent rounded-lg cursor-pointer">Show Flights</div>
      </div>
    </form>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: "RedemPointBookFlight",
  mixins: [ clickaway ],
  data() {
    return {
      originOptions: [],
      destinationOptions: [],
      allDestinationOptions: [],
      selectedOrigin: [],
      selectedDestination: [],
      isOriginOpen: false,
      isDestinationOpen: false,
      isPassangerOpen: false,
      passangerAdult: 1,
      passangerChild: 0,
      passangerInfant: 0,
      passangerTotal: 1,
      routeType: 1,
      departDate: null,
      returnDate: null,
      tooltip: false,
      userData: null,
      isButtonEnabled: false,
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
      if (this.selectedOrigin) {
        this.isDestinationOpen = !this.isDestinationOpen;
      }
    },
    closeDestination() {
      this.isDestinationOpen = false
    },
    openPassanger() {
      this.isPassangerOpen = true;
    },
    closePassanger() {
      this.isPassangerOpen = false
    },
    loadOrigin() {
      this.$axios.$get(this.$config.myTempApi + '&app=data_airline&action=get_org')
        .then( (response) => {
          this.originOptions = response.origin;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadDestination() {
      this.$axios.$get(this.$config.myTempApi + '&app=data_airline&action=get_org_des')
        .then( (response) => {
          // this.destinationOptions = response.destination;
          this.destinationOptions = []
          response.origin_destination.forEach(element => {
            if(element[0] == this.selectedOrigin[0]) {
              this.destinationOptions = element[1];
              
              let newDestination = [];
              this.destinationOptions.forEach((destination, index) => {
                this.allDestinationOptions.forEach(allDestination => {
                  if (allDestination[0] == destination[0]) {
                    newDestination.push([allDestination[0], allDestination[1]])
                  }
                });
              });
              this.destinationOptions = newDestination;
            }
          });
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadAllDestination() {
      this.$axios.$get(this.$config.myTempApi + '&app=data_airline&action=get_des')
        .then( (response) => {
          this.allDestinationOptions = response.destination;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    pickOrigin(data) {
      this.selectedOrigin = data;
      this.loadDestination()
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
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
    },
    addPassanger(type) {
      if (type==1) {
        if (this.passangerAdult < 6) {
          this.passangerAdult++;
        }
      } else if (type==2) {
        if (this.passangerChild < 6) {
          this.passangerChild++;
        }
      } else if (type==3) {
        if (this.passangerInfant < 4) {
          this.passangerInfant++;
        }
      } 
      this.passangerTotal = this.passangerAdult + this.passangerChild + this.passangerInfant;
    },
    subtractPassanger(type) {
      if (type==1) {
        if (this.passangerAdult > 1) {
          this.passangerAdult--;
        }
      } else if (type==2) {
        if (this.passangerChild > 0) {
          this.passangerChild--;
        }
      } else if (type==3) {
        if (this.passangerInfant > 0) {
          this.passangerInfant--;
        }
      } 
      this.passangerTotal = this.passangerAdult + this.passangerChild + this.passangerInfant;
    },
    toggleTooltip() {
      this.tooltip = !this.tooltip;
    },
    formChanged() {
      if (this.routeType == 1) {
        if (
          this.selectedOrigin[0] &&
          this.selectedDestination[0] &&
          this.departDate && 
          this.returnDate
        ) {
          this.isButtonEnabled = true
        } else {
          this.isButtonEnabled = false
        }
      } else if (this.routeType == 2) {
        if (
          this.selectedOrigin[0] &&
          this.selectedDestination[0] &&
          this.departDate 
        ) {
          this.isButtonEnabled = true
        } else {
          this.isButtonEnabled = false
        }
      }
    },
  },
  computed: {
    formatDepartDate() {
      let value = new Date(this.departDate);
      // value.setDate(value.getDate() + 1);
      if (this.departDate) {
        value = value.toISOString().split('T')[0];
        let today = value;
        today = today.split('-');
        today = today[2] + '/' + today[1] + '/' + today[0];
        return today;
      }
    },
    formatReturnDate() {
      let value = new Date(this.returnDate);
      // value.setDate(value.getDate() + 1);
      if (this.returnDate) {
        value = value.toISOString().split('T')[0];
        let today = value;
        today = today.split('-');
        today = today[2] + '/' + today[1] + '/' + today[0];
        return today;
      }
    }
  },
  mounted() {
    this.loadUser()
    this.loadOrigin();
    this.loadAllDestination();
  },
  watch: {
    selectedOrigin: function(val) { this.formChanged() },
    selectedDestination: function(val) { this.formChanged() },
    departDate: function(val) { this.formChanged() },
    returnDate: function(val) { this.formChanged() },
    routeType: function(val) { this.formChanged() },
  }
};
</script>
