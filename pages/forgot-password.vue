<script lang="ts">
export default {
  name: "ForgotPassword",
  data() {
      return {
        emailAddress: null,
        isButtonEnabled: false,
        errorMessage: null,
      };
    },
  methods: {
    goForgotPassword() {
      if (this.isButtonEnabled) {
        let formData = new FormData();
        formData.append('username', this.emailAddress);
        formData.append('token', this.$config.myToken);
        formData.append('password', this.password);

        this.$axios.$post('/member/reset-password ', formData)
          .then( (response) => {
            if (response.err_num == '0') {
              
            } else {
              
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    formChanged() {
      if (
        this.emailAddress
      ) {
        this.isButtonEnabled = true
      } else {
        this.isButtonEnabled = false
      }
    },
  },
  mounted() {},
  watch: {
    emailAddress: function(val) { this.formChanged() }
  }
};
</script>

<template>
  <div>
    <div class="absolute top-0 hidden w-full bg-primary-600 md:inline">
      <div
        class="container flex items-center h-10 mx-auto text-xs text-grayscale-50"
      >
        <div class="hidden w-full md:flex">
          <div class="flex items-center flex-1">
            <span class="pr-3 font-medium">News</span>
            <span
              ><img
                src="~/assets/images/arrow-right.svg"
                class="inline-block"
                alt="arrow right"
            /></span>
            <span class="pl-3"
              >Information about travel policy due to the impact of COVID-19
              outbreak</span
            >
          </div>
          <div class="flex-1 hidden text-right md:inline">
            <span class="pr-3"
              ><img
                src="~/assets/images/globe.svg"
                class="inline-block"
                alt="globe"
            /></span>
            <span>English</span>
            <span class="pl-3"
              ><img
                src="~/assets/images/arrow-bottom.svg"
                class="inline-block"
                alt="arrow bottom"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full h-auto py-5 md:py-0 md:h-screen">
      <div class="flex-1 hidden bg-cover md:inline bg-forgot-password"></div>
      <div class="flex flex-wrap content-center justify-center flex-1 bg-white">
        <div class="w-full mx-6 md:w-1/2 md:mx-auto">
          <div class="absolute top-0 right-0 inline mt-5 mr-5 md:hidden">
            <img
              src="~/assets/images/close.svg"
              class="inline-block cursor-pointer"
              alt="close"
            />
          </div>
          <a href="/login">
            <div class="flex items-center cursor-pointer text-grayscale-900">
              <img
                src="~/assets/images/arrow-left.svg"
                class="inline-block mr-2"
                alt="arrow left"
              />
              Back to Login
            </div>
          </a>
          <div class="mt-16 text-3xl font-semibold">Forgot Your Password?</div>
          <div class="mt-2 text-lg text-grayscale-500 font-noto-sans">
            Don’t worry, enter your registered email address to reset your
            password.
          </div>
          <Input
            placeholder="Fill your email here"
            label="Email"
            customClass="mt-10"
            v-model="emailAddress"
          />
          <div class="relative mt-1 text-grayscale-400 text-2xs">
            We will send an email containing a link to reset your password.
          </div>
          <Button 
            value="Submit" 
            customClass="mt-10"
            :enabled="isButtonEnabled" 
            @action="goForgotpassword"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
