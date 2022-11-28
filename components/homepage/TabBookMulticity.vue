<template>
  <div>
    <div>
      <div class="mt-6 md:flex" v-for="(countData, countIndex) in countData" :key="countIndex">
        <HomepageMulticity 
          :countIndex="countIndex"
          @addCountData="addCountData"
          @deleteCountData="deleteCountData"
          @pickOrigin="pickOrigin"
          @pickDestination="pickDestination"
          @addPassanger="addPassanger"
          @subtractPassanger="subtractPassanger"
          @onDepartChange="onDepartChange"
          :isAddButton="(selectedAction)==countData && countData <= 3"
          :isDeleteButton="countData > 1"
        />
      </div>
      <div class="flex flex-row-reverse -mt-[68px]">
        <input type="hidden" name="loyalty_id" :value="(userData) ? userData.member_id : ''">
        <input type="hidden" name="multi_route" :value="multiRoute">
        <input type="hidden" name="multi_date" :value="multiDate">
        <button v-if="isButtonEnabled" type="submit" class="px-6 py-5 font-medium text-center text-white border-2 rounded-lg cursor-pointer border-primary-600 bg-primary-600">Search Flights</button>
        <div v-if="!isButtonEnabled" class="px-6 py-5 font-medium text-center text-white bg-gray-200 border-2 border-transparent rounded-lg cursor-pointer">Search Flights</div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "HomepageTabBookMulticity",
  mixins: [ clickaway ],
  data() {
    return {
      value: 1,
      originOptions: [],
      destinationOptions: [],
      allDestinationOptions: [],
      selectedData: [
        { 
          org: null,
          des: null,
          depart: null,
        },
        { 
          org: null,
          des: null,
          depart: null,
        },
        { 
          org: null,
          des: null,
          depart: null,
        },
        { 
          org: null,
          des: null,
          depart: null,
        }
      ],
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
      countData: 2,
      selectedAction: 2,
      multiRoute: null,
      multiDate: null,
    };
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
      this.isOriginOpen = true;
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
      this.$axios.$get('https://api-portal.sqiva.com/v1/awan/relay-path/?airline_code=TROG&app=data_airline&action=get_org')
        .then( (response) => {
          this.originOptions = response.origin;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadDestination() {
      this.$axios.$get('https://api-portal.sqiva.com/v1/awan/relay-path/?airline_code=TROG&app=data_airline&action=get_org_des')
        .then( (response) => {
          // this.destinationOptions = response.destination;
          this.destinationOptions = []
          response.origin_destination.forEach(element => {
            if(element[0] == this.selectedOrigin[0]) {
              this.destinationOptions = element[1];
              
              let newDestination = [];
              this.destinationOptions.forEach((destination, index) => {
                this.allDestinationOptions.forEach(allDestination => {
                  if (allDestination[0] == destination) {
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
      this.$axios.$get('https://api-portal.sqiva.com/v1/awan/relay-path/?airline_code=TROG&app=data_airline&action=get_des')
        .then( (response) => {
          this.allDestinationOptions = response.destination;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    pickOrigin(data, index) {
      this.selectedData[index].org = data;
      this.formChanged();
    },
    pickDestination(data, index) {
      this.selectedData[index].des = data;
      this.formChanged();
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
    addPassanger(type, data, index) {
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
      this.formChanged();
    },
    subtractPassanger(type, data, index) {
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
      this.formChanged();
    },
    formChanged() {
      let isCountError = 0;
      for(let i=0; i<this.countData; i++) {
        if (this.selectedData[i].org == null || this.selectedData[i].des == null || this.selectedData[i].depart == null) {
          isCountError++;
        }
      }
      // console.log(isCountError);
      if (isCountError == 0) {
        this.generateMultiRoute();
        this.generateMultiDate();
        this.isButtonEnabled = true;
      } else {
        this.isButtonEnabled = false;
      }
    },
    generateMultiRoute() {
      let multiRoute = '';
      for(let i=0; i<this.countData; i++) {
        multiRoute += this.selectedData[i].org[0];
        multiRoute += '-';
        multiRoute += this.selectedData[i].des[0];
        if(i != (this.countData-1)) {
          multiRoute += ',';
        }
      }
      this.multiRoute = multiRoute;
    },
    generateMultiDate() {
      let multiDate = '';
      for(let i=0; i<this.countData; i++) {
        multiDate += this.selectedData[i].depart;
        if(i != (this.countData-1)) {
          multiDate += ',';
        }
      }
      this.multiDate = multiDate;
    },
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
    },
    addCountData() {
      this.countData++;
      this.selectedAction++;
      this.formChanged()
    },
    deleteCountData(countIndex) {
      this.countData--;
      this.selectedAction--;
      this.formChanged()
    },
    formatDate(data) {
      let value = new Date(data);
      if (data) {
        value = value.toISOString().split('T')[0];
        let today = value;
        today = today.split('-');
        today = today[2] + '/' + today[1] + '/' + today[0];
        return today;
      }
    },
    onDepartChange(value, index) {
      this.selectedData[index].depart = this.formatDate(value);
      this.formChanged();
    },
  },
  mounted() {
    this.loadUser()
    this.loadOrigin();
    this.loadAllDestination();
  },
  watch: {
    // selectedData: function(val) { this.formChanged() },
  }
};
</script>