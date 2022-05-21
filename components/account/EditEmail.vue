<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">User Profile</span> / Change Email & Phone Number</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="p-3 my-6 rounded bg-alert text-alert-900" v-if="errorMessage">
          <img
            src="~/assets/images/alert-info.svg"
            class="inline-block align-middle"
            alt="alert"
          />
          <span class="inline-block align-middle">{{ errorMessage }}</span>
        </div>
        <Input 
          label="Email Address"  
          v-model="email"
          :readonly="true"
        />
        <div class="flex mt-6">
          <div class="flex-none w-16" v-if="false">
            <Select label=" " border="border rounded-l-lg" />
          </div>
          <div class="flex-grow">
            <Input label="Phone" border="border rounded-r-lg" v-model="phone" />
          </div>
        </div>
        <div class="mt-10">
          <div class="md:inline-block" @click="editEmail">
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
import cookie from 'js-cookie'
export default {
  name: "AccountEditEmail",
  data() {
    return {
      userData: [],
      phone: null,
      email: null,
      errorMessage: null,
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
      formData.append('airline_code', this.$config.myAirlineCode);
      formData.append('member_email', this.userData.email);
      formData.append('mobile', this.phone);
      formData.append('nationality', this.userData.nationality);
      formData.append('address', this.userData.address);

      this.$axios.$post('/api/member/update-member', formData)
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
      formData.append('airline_code', this.$config.myAirlineCode);
      formData.append('member_id', this.memberId);

      this.$axios.$post('/api/member/get-member-detail', formData)
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
