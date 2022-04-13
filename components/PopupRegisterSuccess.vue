<template>
  <div>
    <div class="fixed inset-0 z-30 bg-black opacity-75"></div>
    <div class="fixed inset-0 z-30 flex items-center">
      <div class="mx-auto bg-white w-[600px] rounded-lg">
        <div class="p-6 mx-auto text-center md:w-600">
          <img
            src="~/assets/images/email-sent-success.svg"
            class="inline-block"
            alt="Email sent success"
          />
          <div class="mt-8 text-lg font-semibold font-noto-sans">
            Verify Your Email Address
          </div>
          <div class="mt-2 text-grayscale-500">
            In order to complete your registration, please verifiy your email
            address. We have sent an email with a link to {{ email }}.
          </div>
          <div class="inline-block mt-6 w-[200px]">
            <Button
              value="Close"
              background="bg-white"
              border="border-2 border-secondary-900"
              color="text-secondary-900"
              @action="closePopup()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupRegisterSuccess",
  props: {
    email: {
      type: String,
      required: false,
    },
  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
    }
  }
};
</script>