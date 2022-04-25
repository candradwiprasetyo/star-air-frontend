<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">User Profile</span> / Edit Profile</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/6">
            <Select
              label="Title"
              border="border rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg"
            />
          </div>
          <div class="md:w-5/6 md:flex">
            <div class="flex-1 mt-6 md:mt-0">
              <Input
                label="First Name"
                border="border rounded-lg md:rounded-none"
              />
            </div>
            <div class="flex-1 mt-6 md:mt-0">
              <Input
                label="Last Name"
                border="border rounded-l-lg rounded-r-lg md:rounded-l-none md:rounded-r-lg"
              />
            </div>
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
                      placeholder="dd/mm/yyyy"
                      readonly
                    />
                  </template>
                </v-date-picker>
              </client-only>
            </div>
            
          </div>
          <div class="flex-1 mt-6 md:mt-0">
            <Select label="Gender" />
          </div>
        </div>
        <div class="mt-10">
          <div class="md:inline-block">
            <Button value="Submit Change" />
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
      country: null,
      passportNumber: null,
      errorMessage: null,
      passportExpiryDate: null,
      countryData: [],
    };
  },
  props: {
    memberId: {
      type: String,
      required: true,
    },
  },
  methods: {
    editEmail() {
      let formData = new FormData();
      formData.append('token', this.$config.myToken);
      formData.append('member_email', this.userData.email);
      formData.append('mobile', this.phone);
      formData.append('nationality', this.userData.nationality);
      formData.append('address', this.userData.address);

      this.$axios.$post('/member/update-member', formData)
        .then( (response) => {
          if (response.err_num == '0') {
            this.$emit('back-button', 2);
          } else {
            this.errorMessage = 'Simpan error';
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadUser() {
      let formData = new FormData();
      formData.append('token', this.$config.myToken);
      formData.append('member_id', this.memberId);

      this.$axios.$post('/member/get-member-detail', formData)
        .then( (response) => {
          if (response.err_num == '0') {
            this.userData = response.result;
            this.phone = this.userData.mobile;
            this.email = this.userData.email;
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>
