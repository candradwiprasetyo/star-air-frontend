<template>
  <div class="w-full">
    <div class="flex w-full">
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
              {{ (selectedOrigin[0]) ? selectedOrigin[1] : 'Choose origin here' }}
              <div v-if="isOriginOpen" class="z-20 absolute w-full bg-white border left-0 top-[67px] overflow-y-auto h-[360px] shadow-custom">
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
              {{ (selectedDestination[0]) ? selectedDestination[1] : (selectedOrigin[0]) ? 'Choose destination here' : 'Please choose origin first' }}
              <div v-if="isDestinationOpen" class="z-20 absolute w-full bg-white border left-0 top-[67px] overflow-y-auto max-h-[360px] shadow-custom">
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
      <div class="flex w-full mt-6 md:w-2/6 md:mt-0">
        <div class="w-grow md:w-full">
          <div class="p-3 border rounded-r-lg md:rounded-r-none">
            <div class="flex">
              <div class="flex-1">
                <div class="text-grayscale-400 text-2xs">Depart</div>
                <client-only>
                  <v-date-picker 
                    v-model="departDate"
                    class="cursor-pointer"
                    :min-date='new Date()'
                    @input="onDateChange"
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
          </div>
        </div>
        <div class="flex flex-none gap-4 pl-4 text-secondary-900">
          <div class="flex-none">
            <div 
              class="flex items-center w-full gap-3 p-6 font-medium text-center border-2 rounded-lg cursor-pointer border-secondary-900"
              @click="deleteCountData()"
              v-if="isDeleteButton"
            >
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.38635 0.59375C3.83407 0.59375 3.38635 1.04147 3.38635 1.59375V2.37266H11.2116V1.59375C11.2116 1.04147 10.7638 0.59375 10.2116 0.59375H4.38635Z" fill="#224CA1"/>
                <path d="M5.17434 6.19552C5.72166 6.15759 6.20898 6.56944 6.26279 7.11543L6.62973 10.8382C6.68355 11.3842 6.28348 11.8575 5.73617 11.8955C5.18885 11.9334 4.70154 11.5215 4.64772 10.9755L4.28078 7.25279C4.22696 6.70681 4.62703 6.23345 5.17434 6.19552Z" fill="#224CA1"/>
                <path d="M8.34515 7.11543C8.39897 6.56944 8.88628 6.15759 9.4336 6.19552C9.98092 6.23345 10.381 6.70681 10.3272 7.25279L9.96022 10.9755C9.90641 11.5215 9.41909 11.9334 8.87177 11.8955C8.32446 11.8575 7.9244 11.3842 7.97821 10.8382L8.34515 7.11543Z" fill="#224CA1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.728251 4.55535C0.62078 3.38357 1.54319 2.37268 2.71989 2.37268H11.878C13.0547 2.37268 13.9771 3.38357 13.8697 4.55535L12.9484 14.6004C12.8539 15.6299 11.9905 16.4178 10.9567 16.4178H3.64119C2.6074 16.4178 1.74397 15.6299 1.64955 14.6004L0.728251 4.55535ZM2.39505 5.23614C2.34196 4.65061 2.80303 4.14585 3.39096 4.14585H11.2069C11.7949 4.14585 12.2559 4.65061 12.2028 5.23614L11.4324 13.7349C11.3857 14.2501 10.9538 14.6446 10.4365 14.6446H4.16142C3.64412 14.6446 3.21221 14.2501 3.16551 13.7349L2.39505 5.23614Z" fill="#224CA1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-5 pr-44" v-if="isAddButton">
      <div class="flex-none">
        <div 
          class="flex items-center justify-center gap-3 p-5 font-medium text-center border-2 rounded-lg cursor-pointer text-secondary-900 border-secondary-900"
          @click="addCountData()"
        >
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.92579 6.46582C1.3735 6.46582 0.925788 6.91354 0.925787 7.46582C0.925787 8.01811 1.3735 8.46582 1.92579 8.46582L1.92579 6.46582ZM14.7191 8.46583C15.2714 8.46583 15.7191 8.01811 15.7191 7.46583C15.7191 6.91354 15.2714 6.46583 14.7191 6.46583L14.7191 8.46583ZM9.32244 1.06916C9.32244 0.516877 8.87472 0.0691623 8.32244 0.0691622C7.77015 0.0691627 7.32244 0.516878 7.32244 1.06916L9.32244 1.06916ZM7.32244 13.8625C7.32245 14.4148 7.77016 14.8625 8.32245 14.8625C8.87473 14.8625 9.32244 14.4148 9.32244 13.8625L7.32244 13.8625ZM1.92579 8.46582L8.32244 8.46583L8.32244 6.46583L1.92579 6.46582L1.92579 8.46582ZM8.32244 8.46583L14.7191 8.46583L14.7191 6.46583L8.32244 6.46583L8.32244 8.46583ZM7.32244 1.06916L7.32244 7.46583L9.32244 7.46583L9.32244 1.06916L7.32244 1.06916ZM7.32244 7.46583L7.32244 13.8625L9.32244 13.8625L9.32244 7.46583L7.32244 7.46583Z" fill="#224CA1"/>
          </svg>
          <span>ADD CITY</span>
        </div>
      </div>
      <div class="flex flex-row-reverse flex-grow">
        <div class="relative flex mt-6 md:w-52 md:mt-0">
          <div class="w-full">
            <div 
              class="relative p-3 border rounded-lg cursor-pointer md:rounded-r-lg md:rounded-none"
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
        <div 
          class="relative p-3 border cursor-pointer md:rounded-none w-52"
          @click="openPassanger"
          v-on-clickaway="closePassanger"
        >
          <div class="text-grayscale-400 text-2xs">Passanger/Class</div>
          {{ (passangerTotal) + ' Pax' }}
          <div class="absolute w-80 bg-white border right-0 top-[67px] max-h-[360px] shadow-custom" :class="(isPassangerOpen) ? 'block' : 'hidden'">
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
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "HomepageMulticity",
  mixins: [ clickaway ],
  data() {
    return {
      value: 1,
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
      isButtonEnabled: false,
      userData: null,
      tooltip: false,
    };
  },
  props: {
    countIndex: {
      type: Number,
      required: true,
    },
    isAddButton: {
      type: Boolean,
      required: true,
    },
    isDeleteButton: {
      type: Boolean,
      required: true,
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
      this.$emit('pickOrigin', data, this.countIndex);
      this.loadDestination()
    },
    pickDestination(data) {
      this.selectedDestination = data;
      this.$emit('pickDestination', data, this.countIndex);
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
    addPassanger(type) {
      if (type==1) {
        if (this.passangerAdult < 6) {
          this.passangerAdult++;
        }
        this.$emit('addPassanger', type, this.passangerAdult, this.countIndex);
      } else if (type==2) {
        if (this.passangerChild < 6) {
          this.passangerChild++;
        }
        this.$emit('addPassanger', type, this.passangerChild, this.countIndex);
      } else if (type==3) {
        if (this.passangerInfant < 4) {
          this.passangerInfant++;
        }
        this.$emit('addPassanger', type, this.passangerInfant, this.countIndex);
      } 
      this.passangerTotal = this.passangerAdult + this.passangerChild + this.passangerInfant;
    },
    subtractPassanger(type) {
      if (type==1) {
        if (this.passangerAdult > 1) {
          this.passangerAdult--;
        }
        this.$emit('subtractPassanger', type, this.passangerAdult, this.countIndex);
      } else if (type==2) {
        if (this.passangerChild > 0) {
          this.passangerChild--;
        }
        this.$emit('subtractPassanger', type, this.passangerChild, this.countIndex);
      } else if (type==3) {
        if (this.passangerInfant > 0) {
          this.passangerInfant--;
        }
        this.$emit('subtractPassanger', type, this.passangerInfant, this.countIndex);
      } 
      this.passangerTotal = this.passangerAdult + this.passangerChild + this.passangerInfant;
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
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
    },
    addCountData() {
      this.$emit('addCountData');
    },
    deleteCountData() {
      this.$emit('deleteCountData', this.countIndex);
    },
    onDateChange() {
      this.$emit('onDepartChange', this.departDate, this.countIndex);
    },
    toggleTooltip() {
      this.tooltip = !this.tooltip;
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