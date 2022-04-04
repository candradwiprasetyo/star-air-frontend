<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">User Profile</span> / Change Email & Phone Number</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <Input label="Email Address" />
        <div class="flex mt-6">
          <div class="flex-none w-16">
            <Select label=" " border="border rounded-l-lg" />
          </div>
          <div class="flex-grow">
            <Input label="Phone" border="border rounded-r-lg" />
          </div>
        </div>
        <div class="mt-10 md:inline-block">
          <Button value="Submit Change" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountEditEmail",
  methods: {}
};
</script>
