<script lang="ts">
export default {
  name: "Registration",
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
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        Account Activation
      </div>
      <div class="mt-3 text-grayscale-500">
        Thank your for confirming your account. I more step before you can use
        your account, please enter password that you are going to use to login
        next time to your account. Nam pretium venenatis bibendum. Nam eget ante
        eu metus consequat semper non ac nunc. Duis semper massa nec tellus
        lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed lacinia
        vestibulum lorem, vel imperdiet ipsum.
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          Password Must
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li>Minimum 8 characters</li>
            <li>Have at least one number</li>
            <li>Have at least one uppercase letter</li>
            <li>Have at least one symbol</li>
          </ul>
        </div>
      </div>
      <div class="items-start mt-6 md:mt-16 md:flex gap-x-8">
        <div class="md:w-2/3">
          <InputPassword label="Password" />
          <InputPassword label="Re-type Password" customClass="mt-6" />
          <div class="mt-10 mb-6 md:w-64 md:mb-0">
            <NuxtLink to="/?logged=1">
              <Button value="Create Password" />
            </NuxtLink>
          </div>
        </div>
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            Password Must
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 leading-loose list-disc">
              <li>Minimum 8 characters</li>
              <li>Have at least one number</li>
              <li>Have at least one uppercase letter</li>
              <li>Have at least one symbol</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
