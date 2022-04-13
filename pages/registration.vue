<script lang="ts">
  export default {
    name: "Registration",
    data() {
      return {
        isButtonEnabled: false,
        firstName: null,
        lastName: null,
        emailAddress: null,
        phoneNumber: null,
        flagNumber: null,
        isAgreeOffer: false,
        isAgreeTnc: false,
        errorMessage: {
          email: null,
          mobile: null,
        },
        isPopupSuccess: false,
        popupSuccessEmail: null,
      };
    },
    methods: {
      formChanged() {
        if (
          this.firstName &&
          this.lastName &&
          this.emailAddress &&
          this.phoneNumber &&
          this.isAgreeOffer &&
          this.isAgreeTnc
        ) {
          this.isButtonEnabled = true
        } else {
          this.isButtonEnabled = false
        }
      },
      clear() {
        this.firstName = null;
        this.lastName = null;
        this.phoneNumber = null;
        this.emailAddress = null;
        this.errorMessage.email = null;
        this.errorMessage.mobile = null;
      },
      createAccount() {
        if (this.isButtonEnabled) {
          let formData = new FormData();
          formData.append('first_name', this.firstName);
          formData.append('token', this.$config.myToken);
          formData.append('last_name', this.lastName);
          formData.append('mobile', this.phoneNumber);
          formData.append('email', this.emailAddress);

          this.$axios.$post('/member/add-member ', formData)
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
                if (response.err_str.mobile) {
                  this.errorMessage.mobile = response.err_str.mobile[0];
                } else {
                  this.errorMessage.mobile = null;
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      closePopupSuccess() {
        this.isPopupSuccess = false;
      }
    },
    mounted() {},
    watch: {
      firstName: function(val) { this.formChanged() },
      lastName: function(val) { this.formChanged() },
      emailAddress: function(val) { this.formChanged() },
      phoneNumber: function(val) { this.formChanged() },
      isAgreeOffer: function(val) { this.formChanged() },
      isAgreeTnc: function(val) { this.formChanged() },
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
            <li>5000 Star Points</li>
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
          <Input label="Email Address" customClass="mt-6" v-model="emailAddress" />
          <span v-if="errorMessage.email" class="text-xs text-alert-900">{{ errorMessage.email }}</span>
          <div class="flex mt-6">
            <div class="flex-none w-16">
              <Select label="" border="border rounded-l-lg" v-model="flagNumber" />
            </div>
            <div class="flex-grow">
              <Input label="Phone" border="border rounded-r-lg" v-model="phoneNumber" />
            </div>
          </div>
          <span v-if="errorMessage.mobile" class="text-xs text-alert-900">{{ errorMessage.mobile }}</span>
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
              <li>5000 Star Points</li>
              <li>Free extra baggage 15kg</li>
              <li>Special gift</li>
              <li>Flight discount voucher</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <PopupRegisterSuccess 
      :email="popupSuccessEmail"
      @close-popup="closePopupSuccess"
      v-if="isPopupSuccess"
    />
    <Footer />
  </div>
</template>

<style>
</style>
