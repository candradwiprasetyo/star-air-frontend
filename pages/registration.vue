<script lang="ts">
  import cookie from 'js-cookie'
  export default {
    name: "Registration",
    data() {
      return {
        isButtonEnabled: false,
        firstName: null,
        lastName: null,
        emailAddress: null,
        address: null,
        mobile: null,
        flagNumber: null,
        isAgreeOffer: false,
        isAgreeTnc: false,
        errorMessage: {
          email: null,
          address: null,
          mobile: null,
        },
        isPopupSuccess: false,
        popupSuccessEmail: null,
        genderData: [
          'Male',
          'Female'
        ],
        birthDate: null,
        gender: 'Male',
      };
    },
    methods: {
      formChanged() {
        if (
          this.firstName &&
          this.lastName &&
          this.emailAddress &&
          this.mobile &&
          this.isAgreeOffer &&
          this.isAgreeTnc &&
          this.gender && 
          this.birthDate
        ) {
          this.isButtonEnabled = true
        } else {
          this.isButtonEnabled = false
        }
      },
      clear() {
        this.firstName = null;
        this.lastName = null;
        this.address = null;
        this.emailAddress = null;
        this.errorMessage.email = null;
        this.errorMessage.address = null;
        this.isAgreeOffer = false;
        this.isAgreeTnc = false;
      },
      createAccount() {
        if (this.isButtonEnabled) {
          let formData = new FormData();
          formData.append('first_name', this.firstName);
          formData.append('token', this.$config.myToken);
          formData.append('airline_code', this.$config.myAirlineCode);
          formData.append('last_name', this.lastName);
          formData.append('address', this.address);
          formData.append('email', this.emailAddress);
          formData.append('gender', this.gender);
          formData.append('birthdate', this.formatDate(this.birthDate));
          formData.append('mobile', this.mobile);

          this.$axios.$post('/api/member/add-member ', formData)
            .then( (response) => {
              if (response.err_num == '0') {
                this.popupSuccessEmail = this.emailAddress;
                this.clear();
                this.isPopupSuccess = true;
              } else {
                if (response.err_str) {
                  if (response.err_str.email) {
                    this.errorMessage.email = response.err_str.email[0];
                  } else {
                    this.errorMessage.email = response.err_str;
                  }
                } else {
                  this.errorMessage.email = null;
                }
                if (response.err_str.address) {
                  this.errorMessage.address = response.err_str.address[0];
                } else {
                  this.errorMessage.address = null;
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      formatDate(dateValue) {
        let result = ''
        if (dateValue) {
          let value = new Date(dateValue);
          value.setDate(value.getDate() + 1);
          value = value.toISOString().split('T')[0];
          let today = value;
          today = value.replaceAll('-', '');
          result = today;
        } 
        return result;
      },
      closePopupSuccess() {
        this.isPopupSuccess = false;
      }
    },
    mounted() {
      if (cookie.get('star_air_login')) {
        this.$router.push('/')
      }
    },
    watch: {
      firstName: function(val) { this.formChanged() },
      lastName: function(val) { this.formChanged() },
      emailAddress: function(val) { this.formChanged() },
      address: function(val) { this.formChanged() },
      mobile: function(val) { this.formChanged() },
      isAgreeOffer: function(val) { this.formChanged() },
      isAgreeTnc: function(val) { this.formChanged() },
      birthDate: function(val) { this.formChanged() },
      gender: function(val) { this.formChanged() },
    }
  };
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        Create New Account
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Enjoy hundreds of benefits when you joining Star Air loyalty program.
        earn points when you flight, stay at hotel, and buy goods at Star Air
        duty free and redeem it for your next travel. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed ac mauris vitae sem posuere
        blandit. Nam pretium venenatis bibendum. Nam eget ante eu metus
        consequat semper non ac nunc. Duis semper massa nec tellus lacinia, id
        semper neque lobortis. Donec sit amet eros leo. Sed lacinia vestibulum
        lorem, vel imperdiet ipsum.
      </div>
      <div class="block p-6 my-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          New Member Benefits
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li>100 Star Points</li>
            <li>Free extra baggage 15kg</li>
            <li>Special gift</li>
            <li>Flight discount voucher</li>
          </ul>
        </div>
      </div>
      <div class="flex items-start mt-6 md:mt-16 gap-x-8">   
        <div class="md:w-2/3">
          <div class="flex">
            <div class="flex-1 mt-6 md:mt-0">
              <Input
                label="First Name"
                border="border md:rounded-l-lg"
                v-model="firstName"
              />
            </div>
            <div class="flex-1 mt-6 md:mt-0">
              <Input
                label="Last Name"
                border="border md:rounded-r-lg"
                v-model="lastName"
              />
            </div>
          </div>
          <div class="flex gap-5 mt-6">
            <div class="flex-1 mt-6 md:mt-0">
              <div class="h-full px-3 py-2 border rounded-lg">
                <div class="mb-1 text-xs text-grayscale-400">Birth Date</div>
                <client-only>
                  <v-date-picker 
                    v-model="birthDate"
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
            <div class="flex-1 mt-6 md:mt-0">
              <Select 
                label="Gender" 
                v-model="gender"
                :data="genderData"
                :selected-data="gender"
              />
            </div>
          </div>
          <Input label="Email Address" customClass="mt-6" v-model="emailAddress" />
          <span v-if="errorMessage.email" class="text-xs text-alert-900">{{ errorMessage.email }}</span>
          <Input label="Phone" customClass="mt-6" v-model="mobile" />
          <span v-if="errorMessage.mobile" class="text-xs text-alert-900">{{ errorMessage.mobile }}</span>
          <div class="flex mt-6">
            <div class="flex-grow">
              <Input label="Address" border="border rounded-lg" v-model="address" />
            </div>
          </div>
          <span v-if="errorMessage.address" class="text-xs text-alert-900">{{ errorMessage.address }}</span>
          <div class="flex mt-10 gap-x-4">
            <div class="flex-none">
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                v-model="isAgreeOffer"
              />
            </div>
            <div class="flex-grow">
              <label for="checkbox1">
                I agree to receiving offers, news, marketing communications and
                market research from time to time by electronic media and SMS
                from Star Club. Electronic media refers to email and Social
                Media.</label
              >
            </div>
          </div>
          <div class="flex mt-6 gap-x-4">
            <div class="flex-none">
              <input
                type="checkbox"
                id="checkbox2"
                name="checkbox2"
                v-model="isAgreeTnc"
              />
            </div>
            <div class="flex-grow">
              <label for="checkbox2">
                I agree to the Terms and Conditions of the Star Club programme
                and accept the Star Air Privacy Policy.</label
              >
            </div>
          </div>
          <div class="mt-10 md:w-64">
            <Button 
              value="Create an Account" 
              :enabled="isButtonEnabled" 
              @action="createAccount"
            />
          </div>
        </div>
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            New Member Benefits
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 leading-loose list-disc">
              <li>100 Star Points</li>
              <li>Free extra baggage 15kg</li>
              <li>Special gift</li>
              <li>Flight discount voucher</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <PopupRegisterSuccess 
      :title="'Verify Your Email Address'"
      :message="'In order to complete your registration, please verifiy your email address. We have sent an email with a link to '"
      :email="popupSuccessEmail"
      @close-popup="closePopupSuccess"
      v-if="isPopupSuccess"
    />
    <Footer />
  </div>
</template>

<style>
</style>
