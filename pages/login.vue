<script lang="ts">
  import cookie from 'js-cookie'
  export default {
    name: "Login",
    data() {
      return {
        emailAddress: null,
        password: null,
        isButtonEnabled: false,
      };
    },
    methods: {
      goLogin() {
        if (this.isButtonEnabled) {
          let data = {
            "member_id": "SQV001",
            "member_level": "PLATINUM",
            "name": "Michael Budi",
            "email": "michael.budi@sqiva.com",
            "mobile": "081701288229",
            "address": "Jalan kelapa puan timur blok BI/2",
            "birthdate": "03/02/1990",
            "gender": "Male",
            "salutation": "MR",
            "title": "Head",
            "nationality": "Indonesia",
            "passport_no": "B0X1234567",
            "passport_expire_date": "01/11/2024",
            "join_date": "01/01/2021",
            "expire_date": "23/01/2023",
            "avb_point": "300",
            "credit_account": "0",
            "renewal_fee": "600",
            "status": "ACTIVE"
          }
          this.$store.commit('SET_LOGIN', JSON.stringify(data));
          cookie.set('star_air_login', JSON.stringify(data));
          this.$router.push('/');
        }
      },
      formChanged() {
        if (
          this.emailAddress &&
          this.password
        ) {
          this.isButtonEnabled = true
        } else {
          this.isButtonEnabled = false
        }
      },
    },
    mounted() {},
    watch: {
      emailAddress: function(val) { this.formChanged() },
      password: function(val) { this.formChanged() },
    }
  };
</script>

<template>
  <div>
    <Header />
    <div class="flex w-full h-auto py-20 md:py-0 md:h-screen">
      <div class="flex-1 hidden bg-cover md:inline bg-login"></div>
      <div class="flex flex-wrap content-center justify-center flex-1 bg-white">
        <div class="w-full mx-6 md:w-1/2 md:mx-auto">
          <div class="text-3xl font-semibold">Login to Your Account</div>
          <div class="mt-2 text-lg text-grayscale-500 font-noto-sans">
            Your amazing trips start here
          </div>
          <Input
            placeholder="Fill your email here"
            label="Email"
            customClass="mt-6"
            v-model="emailAddress"
          />
          <InputPassword
            placeholder="****"
            label="Password"
            customClass="mt-6"
            v-model="password"
          />
          <a href="/forgot-password">
            <div
              class="relative mt-6 font-medium text-right cursor-pointer text-secondary-900"
            >
              Forgot Password?
            </div>
          </a>
          <Button 
            value="Login" 
            customClass="mt-10"
            :enabled="isButtonEnabled" 
            @action="goLogin"
          />
          <div class="mt-10 text-center text-grayscale-500">
            <div>Or sign in with:</div>
            <div class="flex justify-center mt-3 gap-x-3">
              <div class="flex-none">
                <div class="w-12 h-12">
                  <img
                    src="~/assets/images/facebook.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
              <div class="flex-none">
                <div class="w-12 h-12">
                  <img
                    src="~/assets/images/twitter.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
              <div class="flex-none">
                <div class="w-12 h-12">
                  <img
                    src="~/assets/images/google.svg"
                    class="inline-block cursor-pointer"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 text-center text-grayscale-500">
            Don’t have an account yet?
            <NuxtLink to="/registration"><span class="font-medium cursor-pointer">Create New Account</span></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
