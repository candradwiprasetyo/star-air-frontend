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
    <div class="container mx-auto py-6 md:py-14 px-6 md:px-0">
      <div class="text-grayscale-900 text-3xl font-semibold font-noto-sans">
        Account Activation
      </div>
      <div class="text-grayscale-500 mt-3">
        Thank your for confirming your account. I more step before you can use
        your account, please enter password that you are going to use to login
        next time to your account. Nam pretium venenatis bibendum. Nam eget ante
        eu metus consequat semper non ac nunc. Duis semper massa nec tellus
        lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed lacinia
        vestibulum lorem, vel imperdiet ipsum.
      </div>
      <div class="mt-10 block md:hidden p-6 bg-light-blue rounded-xl">
        <div class="text-lg text-grayscale-900 font-semibold">
          Password Must
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="list-disc pl-5 leading-loose">
            <li>Minimum 8 characters</li>
            <li>Have at least one number</li>
            <li>Have at least one uppercase letter</li>
            <li>Have at least one symbol</li>
          </ul>
        </div>
      </div>
      <div class="mt-6 md:mt-16 md:flex gap-x-8 items-start">
        <div class="md:w-2/3">
          <InputPassword label="Password" />
          <InputPassword label="Re-type Password" customClass="mt-6" />
          <div class="mt-10 md:w-64 mb-6 md:mb-0">
            <Button value="Create Password" />
          </div>
        </div>
        <div class="hidden md:block w-1/3 p-6 bg-light-blue rounded-xl">
          <div class="text-lg text-grayscale-900 font-semibold">
            Password Must
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="list-disc pl-5 leading-loose">
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
