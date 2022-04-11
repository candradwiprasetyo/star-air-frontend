<template>
  <div>
    <div class="pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900">Partner Points</div>
    <div class="mt-6">
      <Select
        label="Select Partner"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-6">
      <Input
        label="Partner Membership Number"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-6">
      <div class="flex">
        <div class="flex-grow">
          <Input
            label="How many points you want to convert?"
            border="border rounded-l-lg"
          />
        </div>
        <div class="flex-none p-3 rounded-r-lg w-28 bg-light-blue">
          <div class="text-xs text-grayscale-400">Points Balance</div>
          <div class="text-sm text-grayscale-900">10500</div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <Input
        label="Total Partner Point Received"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-10 md:inline-block">
      <Button value="Continue" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RedemPointPartnerPoints",
};
</script>
