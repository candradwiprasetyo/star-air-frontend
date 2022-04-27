<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Change Password</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="mb-6">
          <InputPassword 
            label="Old Password" 
            v-model="oldPassword"
          />
        </div>
        <div class="mb-6">
          <InputPassword 
            label="New Password"
            v-model="password"
          />
        </div>
        <div class="mb-6">
          <InputPassword 
            label="Re-type New Password" 
            customClass="mt-6"
            v-model="retypePassword"
          />
        </div>
        <div class="p-6 mb-6 bg-light-blue rounded-xl">
          <div class="text-lg font-semibold text-grayscale-900">
            Password Must
          </div>
          <div class="mt-4 text-grayscale-500">
            <div class="md:flex">
              <div class="flex-1">
                <ul class="pl-5 leading-loose list-disc">
                  <li>Minimum 8 characters</li>
                  <li>Have at least one number</li>
                </ul>
              </div>
              <div class="flex-1">
                <ul class="pl-5 leading-loose list-disc">
                  <li>Have at least one uppercase letter</li>
                  <li>Have at least one symbol</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        <div class="md:inline-block">
          <Button 
            value="Change Password" 
            :enabled="isButtonEnabled" 
            @action="createPassword"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import cookie from 'js-cookie'
  export default {
    name: "AccountChangePassword",
    data() {
      return {
        userData: [],
        oldPassword: null,
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
      formChanged() {
        if (
          this.oldPassword &&
          this.password &&
          this.retypePassword
        ) {
          if (this.password == this.retypePassword) {
            this.errorMessageNotSame = null;
            // this.isPasswordMatch = true;
            this.isButtonEnabled = true;
          } else {
            this.errorMessageNotSame = 'Password missmatch';
            // this.isPasswordMatch = false; 
            this.isButtonEnabled = false;
          }

          // let countError = 0;
          // if (this.password.length > 7) {
          //   this.clue1 = 1;
          // } else {
          //   this.clue1 = 2;
          //   countError++;
          // }

          // if (countError == 0 && this.isPasswordMatch) {
          //   this.isButtonEnabled = false;
          // } else {
          //   this.isButtonEnabled = true;
          // }

        } else {
          this.isButtonEnabled = false
        }
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
      },
      loadUser() {
        let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
        this.userData = userData;
      },
    },
    mounted() {
      this.loadUser();
    },
    watch: {
      oldPassword: function(val) { this.formChanged() },
      password: function(val) { this.formChanged() },
      retypePassword: function(val) { this.formChanged() },
    }
  };
</script>