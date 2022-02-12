<script lang="ts">
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <Header />
    <div class="w-full py-20 md:py-0 h-auto md:h-screen flex">
      <div class="flex-1 bg-cover hidden md:inline bg-login"></div>
      <div class="flex-1 bg-white flex flex-wrap content-center justify-center">
        <div class="w-full md:w-1/2 mx-6 md:mx-auto">
          <div class="font-semibold text-3xl">Login to Your Account</div>
          <div class="mt-2 text-lg text-grayscale-500 font-noto-sans">
            Your amazing trips start here
          </div>
          <div class="mt-10 rounded-lg border p-3">
            <div class="text-xs text-grayscale-400">Email</div>
            <input
              type="text"
              placeholder="Fill your email here"
              class="outline-none border-none w-full"
            />
          </div>
          <div class="mt-6 rounded-lg border p-3 relative">
            <div class="text-xs text-grayscale-400">Password</div>
            <input
              type="password"
              placeholder="*****"
              class="outline-none border-none w-full"
            />
            <div
              class="h-6 w-6 absolute right-0 mt-5 mr-2 top-0 cursor-pointer"
            >
              <img
                src="~/assets/images/eye.svg"
                class="inline-block"
                alt="eye"
              />
            </div>
          </div>
          <a href="/forgot-password">
            <div
              class="
                mt-6
                relative
                font-medium
                text-secondary-900 text-right
                cursor-pointer
              "
            >
              Forgot Password?
            </div>
          </a>
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
            Login
          </div>
          <div class="mt-10 text-grayscale-500 text-center">
            <div>Or sign in with:</div>
            <div class="flex justify-center gap-x-3 mt-3">
              <div class="flex-none">
                <div class="h-12 w-12">
                  <img
                    src="~/assets/images/facebook.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
              <div class="flex-none">
                <div class="h-12 w-12">
                  <img
                    src="~/assets/images/twitter.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
              <div class="flex-none">
                <div class="h-12 w-12">
                  <img
                    src="~/assets/images/google.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 text-grayscale-500 text-center">
            Don’t have an account yet?
            <span class="font-medium cursor-pointer">Create New Account</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
