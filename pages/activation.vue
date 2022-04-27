<script lang="ts">
  import cookie from 'js-cookie'
  export default {
    name: "Registration",
    data() {
      return {
        email: null,
        password: null,
        retypePassword: null,
        isButtonEnabled: false,
        errorMessageNotSame: null,
        errorMessage: null,
        isPasswordMatch: false,
        clue1: null,
        clue2: null,
        clue3: null,
        clue4: null,
      };
    },
    methods: {
      getEmail() {
        this.email = this.$route.query.email;
      },
      formChanged() {
        if (
          this.password &&
          this.retypePassword
        ) {
          if (this.password == this.retypePassword) {
            this.errorMessageNotSame = null;
            this.isPasswordMatch = true;
          } else {
            this.errorMessageNotSame = 'Password missmatch';
            this.isPasswordMatch = false; 
          }

          let countError = 0;

          // Minimum 8 characters 
          if (this.password.length > 7) {
            this.clue1 = 1;
          } else {
            this.clue1 = 2;
            countError++;
          }

          // Have at least one number
          if((/\d/).test(this.password)) {
            this.clue2 = 1;
          } else {
            this.clue2 = 2;
            countError++;
          }

          // Have at least one uppercase letter
          if((/^(?=.*[A-Z])/).test(this.password)) {
            this.clue3 = 1;
          } else {
            this.clue3 = 2;
            countError++;
          }

          // Have at least one symbol
          if((/^(?=.*\W)/).test(this.password)) {
            this.clue4 = 1;
          } else {
            this.clue4 = 2;
            countError++;
          }

          if (countError == 0 && this.isPasswordMatch) {
            this.isButtonEnabled =  true;
          } else {
            this.isButtonEnabled = false;
          }

        } else {
          this.isButtonEnabled = false
        }
      },
      autoLogin() {
        let formData = new FormData();
        formData.append('username', this.email);
        formData.append('token', this.$config.myToken);
        formData.append('password', this.password);
        
        this.$axios.$post('/member/login ', formData)
          .then( (response) => {
            if (response.err_num == '0') {
              
              let formDataDetail = new FormData();
              formDataDetail.append('member_email', this.email);
              formDataDetail.append('token', this.$config.myToken);

              this.$axios.$post('/member/get-member-detail', formDataDetail)
                .then( (responseDetail) => {
                  if (response.err_num == '0') {
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
      },
      createPassword() {
        if (this.isButtonEnabled) {
          
          let formData = new FormData();
          formData.append('member_email', this.email);
          formData.append('password', this.password);
          formData.append('token', this.$config.myToken);

          this.$axios.$post('/member/activation-member', formData)
            .then( (response) => {
              if (response.err_num == '0') {
                this.errorMessage = null;
                this.autoLogin();
              } else {
                this.errorMessage = response.err_str;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    },
    mounted() {
      this.getEmail();
    },
    watch: {
      password: function(val) { this.formChanged() },
      retypePassword: function(val) { this.formChanged() },
    }
  };
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans">
        Account Activation
      </div>
      <div class="mt-3 text-grayscale-500">
        Thank your for confirming your account. I more step before you can use
        your account, please enter password that you are going to use to login
        next time to your account. Nam pretium venenatis bibendum. Nam eget ante
        eu metus consequat semper non ac nunc. Duis semper massa nec tellus
        lacinia, id semper neque lobortis. Donec sit amet eros leo. Sed lacinia
        vestibulum lorem, vel imperdiet ipsum.
      </div>
      <div class="block p-6 mt-10 md:hidden bg-light-blue rounded-xl">
        <div class="text-lg font-semibold text-grayscale-900">
          Password Must
        </div>
        <div class="mt-4 text-grayscale-500">
          <ul class="pl-5 leading-loose list-disc">
            <li :class="[
              (clue1==1) ? 'text-green-500' : '',
              (clue1==2) ? 'text-red-500' : '',
            ]">
              Minimum 8 characters
            </li>
            <li :class="[
              (clue2==1) ? 'text-green-500' : '',
              (clue2==2) ? 'text-red-500' : '',
            ]">Have at least one number</li>
            <li :class="[
              (clue3==1) ? 'text-green-500' : '',
              (clue3==2) ? 'text-red-500' : '',
            ]">Have at least one uppercase letter</li>
            <li :class="[
              (clue4==1) ? 'text-green-500' : '',
              (clue4==2) ? 'text-red-500' : '',
            ]">Have at least one symbol</li>
          </ul>
        </div>
      </div>
      <div class="items-start mt-6 md:mt-16 md:flex gap-x-8">
        <div class="md:w-2/3">
          <div class="p-3 mb-6 rounded bg-alert text-alert-900" v-if="errorMessage">{{ errorMessage }}</div>
          <InputPassword 
            label="Password"
            v-model="password"
          />
          <InputPassword 
            label="Re-type Password" 
            customClass="mt-6"
            v-model="retypePassword"
          />
          <span v-if="errorMessageNotSame && retypePassword" class="text-xs text-alert-900">{{ errorMessageNotSame }}</span>
          <div class="mt-10 mb-6 md:w-64 md:mb-0">
            <Button 
              value="Create Password" 
              :enabled="isButtonEnabled" 
              @action="createPassword"
            />
          </div>
        </div>
        <div class="hidden w-1/3 p-6 md:block bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            Password Must
          </div>
          <div class="mt-4 text-grayscale-500">
            <ul class="pl-5 leading-loose list-disc">
              <li :class="[
                (clue1==1) ? 'text-green-500' : '',
                (clue1==2) ? 'text-red-500' : '',
              ]">
                Minimum 8 characters
              </li>
              <li :class="[
                (clue2==1) ? 'text-green-500' : '',
                (clue2==2) ? 'text-red-500' : '',
              ]">Have at least one number</li>
              <li :class="[
                (clue3==1) ? 'text-green-500' : '',
                (clue3==2) ? 'text-red-500' : '',
              ]">Have at least one uppercase letter</li>
              <li :class="[
                (clue4==1) ? 'text-green-500' : '',
                (clue4==2) ? 'text-red-500' : '',
              ]">Have at least one symbol</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
