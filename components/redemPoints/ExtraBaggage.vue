<template>
  <div>
    <div class="pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900">Extra Baggage</div>
    <div class="mt-6">
      <Input
        label="Booking reference (PNR) / E-ticket number"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-6">
      <Input
        label="Last Name"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-10 md:inline-block">
      <Button value="Find Booking" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RedemPointExtraBaggage",
};
</script>
