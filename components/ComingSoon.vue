<template>
  <div>
    <div class="fixed inset-0 z-30 bg-black opacity-75"></div>
    <div class="fixed inset-0 z-30 flex items-center">
      <div class="mx-auto bg-white w-[600px] rounded-lg">
        <div class="p-6 mx-auto text-center md:w-600">
          <img
            src="~/assets/images/coming-soon.jpg"
            class="mx-auto"
            alt="success"
            width="200"
          />
          <div class="inline-block mt-6 w-[200px]">
            <Button
              value="Close"
              background="bg-white"
              border="border-2 border-secondary-900"
              color="text-secondary-900"
              @action="$emit('close-popup')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {}
};
</script>