<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">User Profile</span> / Edit Profile</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
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
           
          </div>
        </div>
        <div class="mt-10">
          <div class="md:inline-block">
            <Button 
              value="Submit Change" 
              @action="editProfile" 
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
      :title="'success'"
      :message="'Member`s data has been updated'"
      @close-popup="closePopupSuccess"
      v-if="isPopupSuccess"
    />
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
      };
    },
    props: {
      memberId: {
        type: String,
        required: true,
      },
    },
    methods: {
      editProfile() {
        if (this.isButtonEnabled) {
          let formData = new FormData();
          formData.append('token', this.$config.myToken);
          formData.append('member_email', this.userData.email);
          formData.append('mobile', this.phone);
          formData.append('nationality', this.country);
          formData.append('address', this.address);
          formData.append('passport_no', this.passportNumber);
          formData.append('passport_expire_date', this.formatDate(this.passportExpiryDate));

          this.$axios.$post('/member/update-member', formData)
            .then( (response) => {
              if (response.err_num == '0') {
                this.errorMessage = null;
                this.isPopupSuccess = true;
              } else {
                this.errorMessage = response.err_str;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      formatDate(value) {
        value = new Date(value);
        value.setDate(value.getDate() + 1);
        if (value) {
          value = value.toISOString().split('T')[0];
          let today = value;
          today = value.replaceAll('-', '');
          return today;
        }
      },
      formatDateLoad(value) {
        if (value) {
          let newDate = value.split('/');
          let result = newDate[1] + '/' + newDate[0] + '/' + newDate[2];
          return result;
        }
      },
      loadUser() {
        let formData = new FormData();
        formData.append('token', this.$config.myToken);
        formData.append('member_id', this.memberId);
        // formData.append('member_email', 'test666@gmail.com');

        this.$axios.$post('/member/get-member-detail', formData)
          .then( (response) => {
            if (response.err_num == '0') {
              this.userData = response.result;
              this.phone = this.userData.mobile;
              this.email = this.userData.email;
              this.address = this.userData.address;
              this.passportNumber = this.userData.passport_no;
              this.passportExpiryDate = this.formatDateLoad(this.userData.passport_expire_date);
              // this.country = this.userData.nationality;
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
          this.passportNumber &&
          this.passportExpiryDate
        ) {
          this.isButtonEnabled = true
        } else {
          this.isButtonEnabled = false
        }
      },
      closePopupSuccess() {
        // this.isPopupSuccess = false;
        this.$emit('back-button', 2);
      }
    },
    mounted() {
      this.loadUser();
    },
    watch: {
      address: function(val) { this.formChanged() },
      email: function(val) { this.formChanged() },
      phone: function(val) { this.formChanged() },
      country: function(val) { this.formChanged() },
      passportNumber: function(val) { this.formChanged() },
      passportExpiryDate: function(val) { this.formChanged() },
    }
  };
</script>
