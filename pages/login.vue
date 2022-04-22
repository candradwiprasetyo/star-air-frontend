<script lang="ts">
  import cookie from 'js-cookie'
  export default {
    name: "Login",
    data() {
      return {
        emailAddress: null,
        password: null,
        isButtonEnabled: false,
        errorMessage: null,
      };
    },
    methods: {
      goLogin() {
        if (this.isButtonEnabled) {
          let formData = new FormData();
          formData.append('username', this.emailAddress);
          formData.append('token', this.$config.myToken);
          formData.append('password', this.password);

          this.$axios.$post('/member/login ', formData)
            .then( (response) => {
              if (response.err_num == '0') {
                
                let formDataDetail = new FormData();
                formDataDetail.append('member_email', this.emailAddress);
                formDataDetail.append('token', this.$config.myToken);

                this.$axios.$post('/member/get-member-detail', formDataDetail)
                  .then( (responseDetail) => {
                    if (responseDetail.err_num == '0') {
                      this.$store.commit('SET_LOGIN', JSON.stringify(responseDetail.result));
                      cookie.set('star_air_login', JSON.stringify(responseDetail.result));
                      this.$router.push('/');
                    }
                  })
                  .catch(function (error) {
                    console.log(error)
                  })

              } else {
                if (response.err_str.username) {
                  this.errorMessage = response.err_str.username[0]
                } else {
                  this.errorMessage = response.err_str;
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
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
          <div class="p-3 my-6 rounded bg-alert text-alert-900" v-if="errorMessage">
            <img
              src="~/assets/images/alert-info.svg"
              class="inline-block align-middle"
              alt="alert"
            />
            <span class="inline-block align-middle">{{ errorMessage }}</span>
          </div>
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
