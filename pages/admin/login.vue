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
        isPopupComingSoon: false,
      };
    },
    methods: {
      goLogin() {
        if (this.isButtonEnabled) {
          let formData = new FormData();
          formData.append('username', this.emailAddress);
          formData.append('token', this.$config.myToken);
          formData.append('airline_code', this.$config.myAirlineCode);
          formData.append('password', this.password);

          this.$store.commit('SET_LOGIN_ADMIN', this.emailAddress);
          cookie.set('star_air_login_admin', this.emailAddress);
          this.$router.push('/admin');

          // this.$axios.$post('/api/cms/login ', formData)
          //   .then( (response) => {
          //     console.log(response)
          //     if (response.err_num == '0') {
                
          //       this.$store.commit('SET_LOGIN_ADMIN', this.emailAddress);
          //       cookie.set('star_air_login_admin', this.emailAddress);
          //       this.$router.push('/admin');

          //     } else {
          //       if (response.err_str.username) {
          //         this.errorMessage = response.err_str.username[0]
          //       } else {
          //         this.errorMessage = response.err_str;
          //       }
          //     }
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })
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
      openComingSoon() {
        this.isPopupComingSoon = true;
      },
      closeComingSoon() {
        this.isPopupComingSoon = false;
      }
    },
    mounted() {
      if (cookie.get('star_air_login_admin')) {
        this.$router.push('/')
      }
    },
    watch: {
      emailAddress: function(val) { this.formChanged() },
      password: function(val) { this.formChanged() },
    }
  };
</script>

<template>
  <div>
    <div class="flex w-full h-screen">
      <div class="flex-1 hidden bg-cover md:inline bg-login"></div>
      <div class="flex flex-wrap content-center justify-center flex-1 bg-white">
        <div class="w-full mx-6 md:w-1/2 md:mx-auto">
          <a href="/">
            <div class="flex items-center mb-6 cursor-pointer text-grayscale-900">
              <img
                src="~/assets/images/arrow-left.svg"
                class="inline-block mr-2"
                alt="arrow left"
              />
              Back to Home
            </div>
          </a>
          <div class="text-3xl font-semibold">Login to Admin Page</div>
          <Input
            placeholder="Fill your username here"
            label="Username"
            customClass="mt-6 bg-white"
            v-model="emailAddress"
          />
          <InputPassword
            placeholder="****"
            label="Password"
            customClass="mt-6 bg-white"
            v-model="password"
            @on-enter="goLogin"
          />
          <div class="p-3 my-4 rounded bg-alert text-alert-900" v-if="errorMessage">
            <img
              src="~/assets/images/alert-info.svg"
              class="inline-block align-middle"
              alt="alert"
            />
            <span class="inline-block align-middle">{{ errorMessage }}</span>
          </div>
          <Button 
            value="Login" 
            customClass="mt-6"
            :enabled="isButtonEnabled" 
            @action="goLogin"
          />
        </div>
      </div>
    </div>
    <ComingSoon
      :title="'Coming Soon'"
      @close-popup="closeComingSoon"
      v-if="isPopupComingSoon"
    />
  </div>
</template>

<style>
</style>
