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
    <div class="container mx-auto py-14">
      <div class="text-grayscale-900 text-3xl font-semibold font-noto-sans">
        Create New Account
      </div>
      <div class="text-grayscale-500 mt-3">
        Enjoy hundreds of benefits when you joining Star Air loyalty program.
        earn points when you flight, stay at hotel, and buy goods at Star Air
        duty free and redeem it for your next travel. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed ac mauris vitae sem posuere
        blandit. Nam pretium venenatis bibendum. Nam eget ante eu metus
        consequat semper non ac nunc. Duis semper massa nec tellus lacinia, id
        semper neque lobortis. Donec sit amet eros leo. Sed lacinia vestibulum
        lorem, vel imperdiet ipsum.
      </div>
      <div class="mt-16 flex gap-x-8 items-start">
        <div class="w-2/3">
          <div class="flex">
            <div class="w-1/6">
              <Select label="Title" border="border rounded-l-lg" />
            </div>
            <div class="w-5/6 flex">
              <div class="flex-1">
                <Input label="First Name" border="border" />
              </div>
              <div class="flex-1">
                <Input label="Last Name" border="border rounded-r-lg" />
              </div>
            </div>
          </div>
          <div class="mt-6 flex gap-x-6">
            <div class="flex-1">
              <Select label="Birth Date" />
            </div>
            <div class="flex-1">
              <Select label="Gender" />
            </div>
          </div>
          <Input label="Email Address" customClass="mt-6" />
          <div class="flex mt-6">
            <div class="flex-none w-1/12">
              <Select label=" " border="border rounded-l-lg" />
            </div>
            <div class="flex-grow w-1/6">
              <Input label="Phone" border="border rounded-r-lg" />
            </div>
          </div>
          <Input label="Address" customClass="mt-6" />
          <div class="mt-6">
            <Select label="Country/Region of Residence" />
          </div>
          <div class="mt-10 flex gap-x-4">
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
          <div class="mt-6 flex gap-x-4">
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
          <div class="mt-10 w-64">
            <Button value="Create an Account" />
          </div>
        </div>
        <div class="w-1/3 p-6 bg-light-blue rounded-xl">
          <div class="text-lg text-grayscale-900 font-semibold">
            New Member Benefits
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="list-disc pl-5 leading-loose">
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
