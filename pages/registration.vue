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
        Create New Account
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Enjoy hundreds of benefits when you joining Star Air loyalty program.
        earn points when you flight, stay at hotel, and buy goods at Star Air
        duty free and redeem it for your next travel. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed ac mauris vitae sem posuere
        blandit. Nam pretium venenatis bibendum. Nam eget ante eu metus
        consequat semper non ac nunc. Duis semper massa nec tellus lacinia, id
        semper neque lobortis. Donec sit amet eros leo. Sed lacinia vestibulum
        lorem, vel imperdiet ipsum.
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          New Member Benefits
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li>5000 Star Points</li>
            <li>Free extra baggage 15kg</li>
            <li>Special gift</li>
            <li>Flight discount voucher</li>
          </ul>
        </div>
      </div>
      <div class="flex items-start mt-6 md:mt-16 gap-x-8">
        <div class="md:w-2/3">
          <div class="flex">
            <div class="flex-1 mt-6 md:mt-0">
              <Input
                label="First Name"
                border="border md:rounded-l-lg"
              />
            </div>
            <div class="flex-1 mt-6 md:mt-0">
              <Input
                label="Last Name"
                border="border md:rounded-r-lg"
              />
            </div>
          </div>
          <Input label="Email Address" customClass="mt-6" />
          <div class="flex mt-6">
            <div class="flex-none w-16">
              <Select label=" " border="border rounded-l-lg" />
            </div>
            <div class="flex-grow">
              <Input label="Phone" border="border rounded-r-lg" />
            </div>
          </div>
          <div class="flex mt-10 gap-x-4">
            <div class="flex-none">
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="checkbox1"
              />
            </div>
            <div class="flex-grow">
              <label for="checkbox1">
                I agree to receiving offers, news, marketing communications and
                market research from time to time by electronic media and SMS
                from Star Club. Electronic media refers to email and Social
                Media.</label
              >
            </div>
          </div>
          <div class="flex mt-6 gap-x-4">
            <div class="flex-none">
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="checkbox1"
              />
            </div>
            <div class="flex-grow">
              <label for="checkbox1">
                I agree to the Terms and Conditions of the Star Club programme
                and accept the Star Air Privacy Policy.</label
              >
            </div>
          </div>
          <div class="mt-10 md:w-64">
            <NuxtLink to="/registration-success"> 
              <Button value="Create an Account" />
            </NuxtLink>
          </div>
        </div>
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            New Member Benefits
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 leading-loose list-disc">
              <li>5000 Star Points</li>
              <li>Free extra baggage 15kg</li>
              <li>Special gift</li>
              <li>Flight discount voucher</li>
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
