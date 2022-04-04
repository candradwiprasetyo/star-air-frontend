<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">User Profile</span> / Edit Travel Document</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <Input label="National ID Number" />
        <Input label="Address" custom-class="mt-6" />
        <Select label="Country/Region of Residence" custom-class="mt-6" />
        <Input label="Passport Number" custom-class="mt-6" />
        <Select label="Expiry Date" custom-class="mt-6" />
        <Input label="Redress Number" custom-class="mt-6" />
        <Input label="Known Traveler Number" custom-class="mt-6" />
        <div class="mt-10 md:inline-block">
          <Button value="Submit Change" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountEditTravelDocument",
  methods: {}
};
</script>
