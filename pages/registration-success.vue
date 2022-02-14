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
      <div class="md:w-600 mx-auto p-6 text-center">
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
          address. We have sent an email with a link to chanda.gauri@gmail.com.
        </div>
        <div class="mt-8 flex gap-x-6">
          <Button
            value="Close"
            background="bg-white"
            border="border-2 border-secondary-900"
            color="text-secondary-900"
          />
          <Button value="Verify" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
