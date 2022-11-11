<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">
            <span class="cursor-pointer text-secondary-900" @click="$emit('back-button', 2)">User Profile</span> / Edit Profile
          </div>
        </div>
      </div>
      <div class="p-6 overflow-hidden" v-if="isLoaded==false">
        Loading...
      </div>
      <div class="p-6 overflow-hidden" v-if="isLoaded==true">
        <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Contact Details</div>
        <div class="mt-6 md:flex gap-x-6">
          <div class="flex-1">
            <Input label="Address" v-model="address" />
          </div>
          <div class="flex-1 mt-6 md:mt-0">
            <Input 
              label="Email" 
              v-model="email" 
              :readonly="true" 
              customClass="bg-gray-100"
            />
          </div>
        </div>
        <div class="mt-6 md:flex gap-x-6">
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
                      class="w-full text-black outline-none"
                      :value="inputValue"
                      v-on="inputEvents"
                      placeholder="dd/mm/yyyy"
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
        <div class="mt-6 md:flex gap-x-6">
          <div class="flex-1">
            <Input label="Phone" v-model="phone" />
          </div>
          <div class="flex-1 mt-6 md:mt-0">
          </div>
        </div>
        <div class="mt-10 text-lg font-semibold font-noto-sans text-grayscale-900">Travel Documents</div>
        <div class="mt-6 md:flex gap-x-6">
          <div class="flex-1">
            <Select 
              label="Country/Region of Residence" 
              v-model="country"
              :data="countryData"
              :selected-data="country"
            />
          </div>
          <div class="flex-1 mt-6 md:mt-0">
            <Input 
              label="Passport Number" 
              v-model="passportNumber"
              @change-action="changePassportNumber()"
            />
          </div>
        </div>
        <div class="mt-6 md:flex gap-x-6">
          <div class="flex-1">
            <div class="h-full px-3 py-2 border rounded-lg">
              <div class="mb-1 text-xs text-grayscale-400">Passport Expiry Date</div>
              <client-only>
                <v-date-picker 
                  v-model="passportExpiryDate"
                  :popover="{ visibility: 'click' }"
                  @input="changePassportExpiryDate()"
                >
                  <template v-slot="{ inputValue, inputEvents }">
                    <input
                      class="w-full text-black outline-none"
                      :value="inputValue"
                      v-on="inputEvents"
                      placeholder="dd/mm/yyyy"
                      readonly
                    />
                  </template>
                </v-date-picker>
              </client-only>
            </div>
            
          </div>
          <div class="flex-1 mt-6 md:mt-0">
           
          </div>
        </div>
        <div class="mt-10">
          <div class="md:inline-block">
            <Button 
              value="Submit Change" 
              @action="sentOtp" 
              :enabled="isButtonEnabled"  
            />
          </div>
          <div class="md:inline-block">
            <div class="ml-5" @click="$emit('back-button', 2)">
              <Button
                value="Cancel"
                border="border-2 border-secondary-900"
                color="text-secondary-900"
                background="bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <PopupSuccess 
      :title="'Update Profile Success'"
      :message="'You have been successfully update your profile'"
      :img="'update-profile-success.png'"
      @close-popup="closePopupSuccess"
      v-if="isPopupSuccess"
    />
    <Modal 
      v-if="modalOtp"
      @close="toggleModalOtp"
    >
      <div class="p-5">
        <div class="pb-3 mb-6 font-bold border-b">Verify Changes</div>
        <div class="mb-4 text-center text-primary-600">{{ errorMessage }}</div>
        <div class="flex items-center justify-center gap-x-4">
          <div class="h-12 mx-auto overflow-hidden w-[340px]">
            <input class="absolute w-full h-12 font-bold tracking-[50px] pl-5 outline-none caret-transparent mx-auto" maxlength="6" v-model="otp">
            <div class="absolute flex h-12 pointer-events-none w-[340px] gap-x-3">
              <div class="w-12 h-12 border rounded"></div>
              <div class="w-12 h-12 border rounded"></div>
              <div class="w-12 h-12 border rounded"></div>
              <div class="w-12 h-12 border rounded"></div>
              <div class="w-12 h-12 border rounded"></div>
              <div class="w-12 h-12 border rounded"></div>
            </div>
          </div>
        </div>
        <div class="mt-6 text-base text-center text-grayscale-500">We have sent a 6 digit code to your email for profile changes verification. Didn’t receive code? <span class="font-bold cursor-pointer text-secondary-900" @click="sentOtp(true)">Resend Again</span></div>
        <div class="flex items-center justify-center mt-6">
          <div class="inline-block">
            <Button 
              value="Verify" 
              @action="editProfile"
              customClass="px-10"
            />
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "AccountEditProfile",
    data() {
      return {
        userData: [],
        address: null,
        phone: null,
        email: null,
        country: "india",
        passportNumber: null,
        errorMessage: null,
        passportExpiryDate: null,
        countryData: [ 
          'India',
        ],
        isButtonEnabled: false,
        isPopupSuccess: false,
        genderData: [
          'Male',
          'Female'
        ],
        birthDate: null,
        gender: 'Male',
        modalOtp: false,
        otp: null,
        isLoaded: false,
      };
    },
    props: {
      memberId: {
        type: String,
        required: true,
      },
    },
    methods: {
      changePassportExpiryDate() {
        if (this.passportNumber) {
          this.isButtonEnabled = true;
        } else {
          this.isButtonEnabled = false;
        }
      },
      editProfile() {
        if (this.otp) {
          let formData = new FormData();
          formData.append('token', this.$config.myToken);
          formData.append('airline_code', this.$config.myAirlineCode);
          formData.append('member_email', this.userData.email);
          formData.append('mobile', this.phone);
          formData.append('nationality', this.country);
          formData.append('address', this.address);
          formData.append('passport_no', this.passportNumber);
          formData.append('passport_expire_date', this.formatDate(this.passportExpiryDate));
          formData.append('birthdate', this.formatDate(this.birthDate));
          formData.append('gender', this.gender);
          formData.append('otp', this.otp);
  
          this.$axios.$post('/api/member/update-member', formData)
            .then( (response) => {
              if (response.err_num == '0') {
                this.errorMessage = null;
                this.isPopupSuccess = true;
                this.modalOtp = false;
              } else {
                this.errorMessage = response.err_str;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          this.errorMessage = 'Otp cannot be blank.'; 
        }
      },
      formatDate(dateValue) {
        let result = ''
        if (dateValue) {
          let value = new Date(dateValue);
          // value.setDate(value.getDate() + 1);
          value = value.toISOString().split('T')[0];
          let today = value;
          today = value.replaceAll('-', '');
          result = today;
        } 
        return result;
      },
      formatDateLoad(value) {
        let result = '';
        if (value) {
          let newDate = value.split('/');
          result = newDate[1] + '/' + newDate[0] + '/' + newDate[2];
        } 
        return result;
      },
      loadUser() {
        let formData = new FormData();
        formData.append('token', this.$config.myToken);
        formData.append('airline_code', this.$config.myAirlineCode);
        formData.append('member_id', this.memberId);
        // formData.append('member_email', 'test666@gmail.com');

        this.$axios.$post('/api/member/get-member-detail', formData)
          .then( (response) => {
            if (response.err_num == '0') {
              this.userData = response.result;
              this.phone = this.userData.mobile;
              this.email = this.userData.email;
              this.address = this.userData.address;
              this.passportNumber = this.userData.passport_no;
              this.passportExpiryDate = this.formatDateLoad(this.userData.passport_expire_date);
              this.birthDate = this.formatDateLoad(this.userData.birthdate);
              // this.gender = this.userData.gender;
              this.gender = "Female";

              // this.country = this.userData.nationality;
              this.isLoaded = true;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      formChanged() {
        if (
          this.address &&
          this.email &&
          this.phone &&
          this.country &&
          this.gender &&
          this.birthDate 
        ) {
          // this.isButtonEnabled = true
          if (this.passportNumber && !this.passportExpiryDate) {
            this.isButtonEnabled = false;
          } else {
            this.isButtonEnabled = true;
          }
        } else {
          this.isButtonEnabled = false
        }
        // this.isButtonEnabled = true
        // console.log(this.address, this.email, this.phone, this.country, this.gender)
      },
      closePopupSuccess() {
        this.isPopupSuccess = false;
        // this.$emit('back-button', 2);
        window.location.href = '/account?page=user-profile&did=1';
      },
      changePassportNumber() {
        if (this.passportNumber=='') {
          this.passportExpiryDate = null;
        }
      },
      toggleModalOtp() {
        this.modalOtp = !this.modalOtp;
      },
      sentOtp(resent = false) {
        let formData = new FormData();
        formData.append('token', this.$config.myToken);
        formData.append('airline_code', this.$config.myAirlineCode);
        formData.append('member_id', this.memberId);

        this.$axios.$post('/api/member/request-otp', formData)
          .then( (response) => {
            if (response.err_num == '0' || response.err_num == '001001') {
              this.modalOtp = true;
              if (resent) {
                if (response.err_num == '0') {
                  this.errorMessage = 'OTP has been sent to your email.';
                } else {
                  this.errorMessage = response.err_str;
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
    computed: {
      formatBirthDate() {
        let value = new Date(this.birthDate);
        // value.setDate(value.getDate() + 1);
        if (this.birthDate) {
          value = value.toISOString().split('T')[0];
          let today = value;
          today = today.split('-');
          today = today[2] + '/' + today[1] + '/' + today[0];
          return today;
        }
      },
      formatPassportExpireDate() {
        let value = new Date(this.passportExpiryDate);
        // value.setDate(value.getDate() + 1);
        if (this.passportExpiryDate) {
          value = value.toISOString().split('T')[0];
          let today = value;
          today = today.split('-');
          today = today[2] + '/' + today[1] + '/' + today[0];
          return today;
        }
      },
    },
    mounted() {
      this.loadUser();
    },
    watch: {
      address: function(val) { this.formChanged() },
      email: function(val) { this.formChanged() },
      phone: function(val) { this.formChanged() },
      country: function(val) { this.formChanged() },
      gender: function(val) { this.formChanged() },
      birthDate: function(val) { this.formChanged() },
      passportNumber: function(val) { this.formChanged() },
    }
  };
</script>
