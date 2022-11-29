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
        {{(getDataContent('title_create_new_account')) ? getDataContent('title_create_new_account') : ''}}
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        {{(getDataContent('desc_create_new_account')) ? getDataContent('desc_create_new_account') : ''}}
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          New Member Benefits
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li>100 Star Points</li>
            <li>Free extra baggage 15kg</li>
            <li>Special gift</li>
            <li>Flight discount voucher</li>
          </ul>
        </div>
      </div>
      <div class="flex items-start mt-6 md:mt-16 gap-x-8">
        <div class="md:w-2/3">
          <div class="md:flex">
            <div class="md:w-1/6">
              <Select
                label="Title"
                border="border rounded-lg md:rounded-l-lg"
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
                  border="border rounded-lg md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 md:flex gap-x-6">
            <div class="flex-1">
              <Select label="Birth of Date" />
            </div>
            <div class="flex-1 mt-6 md:mt-0">
              <Select label="Gender" />
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
          <Input label="Address" customClass="mt-6" />
          <div class="mt-6">
            <Select label="Country/Region of Residence" />
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
                I agree to the Conditions of Carriage of Alliance Air, the Terms, and Conditions of the Star Rewards program.</label
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
                I agree to accept all rules and updates regarding loyalty.</label
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
                I agree to receive offers, news, marketing communications, and market research from time to time by electronic media and SMS from Star Rewards. Electronic media refers to email and Social Media.</label
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
              <li>100 Star Points</li>
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
