<script lang="ts">
export default {
  name: "TransferPointsForPlus",
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
        Transfer Points for Plus
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base">
        Share your Star Points with another Star Club member such as friend and family. So that they can also enjoy travelling with you. Transfer Points for Plus to other Star Club member can be done with minimum 1000 points.
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          Transfer Points for Plus Information
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li>Star Points can be transferred in blocks of 1,000 Points</li>
            <li>You can transfer up to 250,000 Star Points per calendar year.</li>
            <li>The transfer of Star Points is non-refundable.</li>
          </ul>
        </div>
      </div>
      <div class="flex items-start mt-6 md:mt-16 gap-x-8">
        <div class="md:w-2/3">
          <div class="flex">
            <div class="flex-grow">
              <Input
                label="How many Points you want to transfer?"
                border="border rounded-l-lg"
              />
            </div>
            <div class="flex-none p-3 rounded-r-lg w-28 bg-light-blue">
              <div class="text-xs text-grayscale-400">Points Balance</div>
              <div class="text-sm text-grayscale-900">10500</div>
            </div>
          </div>
          <Input label="Recepient Name" customClass="mt-6" />
          <Input label="Star Club Number" customClass="mt-6" />
          <div class="mt-10 md:w-64">
            <NuxtLink to=""> 
              <Button value="Continue" />
            </NuxtLink>
          </div>
        </div>
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            Transfer Points for Plus Information
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 leading-loose list-disc">
              <li>Star Points can be transferred in blocks of 1,000 Points</li>
              <li>You can transfer up to 250,000 Star Points per calendar year.</li>
              <li>The transfer of Star Points is non-refundable.</li>
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
