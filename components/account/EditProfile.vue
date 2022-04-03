<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">User Profile</span> / Edit Profile</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/6">
            <Select
              label="Title"
              border="border rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg"
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
                border="border rounded-l-lg rounded-r-lg md:rounded-l-none md:rounded-r-lg"
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
        <div class="mt-10 md:inline-block">
          <Button value="Submit Change" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountEditProfile",
  data() {},
  methods: {}
};
</script>
