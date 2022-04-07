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
    <div class="flex w-full h-auto py-20 md:py-0 md:h-screen">
      <div class="flex-1 hidden bg-cover md:inline bg-login"></div>
      <div class="flex flex-wrap content-center justify-center flex-1 bg-white">
        <div class="w-full mx-6 md:w-1/2 md:mx-auto">
          <div class="text-3xl font-semibold">Login to Your Account</div>
          <div class="mt-2 text-lg text-grayscale-500 font-noto-sans">
            Your amazing trips start here
          </div>
          <div class="p-3 mt-10 border rounded-lg">
            <div class="text-xs text-grayscale-400">Email</div>
            <input
              type="text"
              placeholder="Fill your email here"
              class="w-full border-none outline-none"
            />
          </div>
          <div class="relative p-3 mt-6 border rounded-lg">
            <div class="text-xs text-grayscale-400">Password</div>
            <input
              type="password"
              placeholder="*****"
              class="w-full border-none outline-none"
            />
            <div
              class="absolute top-0 right-0 w-6 h-6 mt-5 mr-2 cursor-pointer"
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
              class="relative mt-6 font-medium text-right cursor-pointer text-secondary-900"
            >
              Forgot Password?
            </div>
          </a>
          <NuxtLink to="/?logged=true">
            <div
              class="py-4 mt-10 font-medium text-center text-white rounded-lg cursor-pointer bg-primary-600"
            >
              Login
            </div>
          </NuxtLink>
          <div class="mt-10 text-center text-grayscale-500">
            <div>Or sign in with:</div>
            <div class="flex justify-center mt-3 gap-x-3">
              <div class="flex-none">
                <div class="w-12 h-12">
                  <img
                    src="~/assets/images/facebook.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
              <div class="flex-none">
                <div class="w-12 h-12">
                  <img
                    src="~/assets/images/twitter.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
              <div class="flex-none">
                <div class="w-12 h-12">
                  <img
                    src="~/assets/images/google.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 text-center text-grayscale-500">
            Don’t have an account yet?
            <NuxtLink to="/registration"><span class="font-medium cursor-pointer">Create New Account</span></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
