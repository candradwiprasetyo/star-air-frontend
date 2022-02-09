<script lang="ts">
export default {
  name: "ForgotPassword",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <div class="w-full bg-primary-600 absolute top-0 hidden md:inline">
      <div
        class="
          container
          mx-auto
          h-10
          text-grayscale-50 text-xs
          flex
          items-center
        "
      >
        <div class="w-full hidden md:flex">
          <div class="flex-1 flex items-center">
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
          <div class="flex-1 text-right hidden md:inline">
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
    <div class="w-full py-5 md:py-0 h-auto md:h-screen flex">
      <div class="flex-1 bg-cover hidden md:inline bg-forgot-password"></div>
      <div class="flex-1 bg-white flex flex-wrap content-center justify-center">
        <div class="w-full md:w-1/2 mx-6 md:mx-auto">
          <div class="absolute inline md:hidden top-0 right-0 mt-5 mr-5">
            <img
              src="~/assets/images/close.svg"
              class="inline-block cursor-pointer"
              alt="close"
            />
          </div>
          <a href="/login">
            <div class="text-grayscale-900 flex items-center cursor-pointer">
              <img
                src="~/assets/images/arrow-left.svg"
                class="inline-block mr-2"
                alt="arrow left"
              />
              Back to Login
            </div>
          </a>
          <div class="font-semibold text-3xl mt-16">Forgot Your Password?</div>
          <div class="mt-2 text-lg text-grayscale-500 font-noto-sans">
            Don’t worry, enter your registered email address to reset your
            password.
          </div>
          <div class="mt-10 rounded-lg border p-3">
            <div class="text-xs text-grayscale-400">Email</div>
            <input
              type="text"
              placeholder="Fill your email here"
              class="outline-none border-none w-full"
            />
          </div>
          <div class="mt-1 relative text-grayscale-400 text-2xs">
            We will send an email containing a link to reset your password.
          </div>
          <div
            class="
              mt-10
              bg-primary-600
              text-white text-center
              py-4
              rounded-lg
              font-medium
              cursor-pointer
            "
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
