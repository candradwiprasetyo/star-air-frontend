<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Change Password</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="p-3 my-6 rounded bg-alert text-alert-900" v-if="errorMessage">
          <img
            src="~/assets/images/alert-info.svg"
            class="inline-block align-middle"
            alt="alert"
          />
          <span class="inline-block align-middle">{{ errorMessage }}</span>
        </div>
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
                </ul>
              </div>
              <div class="flex-1">
                <ul class="pl-5 leading-loose list-disc">
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
        <div class="md:inline-block">
          <Button 
            value="Change Password" 
            :enabled="isButtonEnabled" 
            @action="createPassword"
          />
        </div>
      </div>
    </div>
    <PopupSuccess 
      :title="'success'"
      :message="'Members password has been changed'"
      @close-popup="closePopupSuccess"
      v-if="isPopupSuccess"
    />
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
        isPopupSuccess: false,
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
      createPassword() {
        if (this.isButtonEnabled) {
          let formData = new FormData();
          formData.append('token', this.$config.myToken);
          formData.append('member_email', this.userData.email);
          formData.append('old_password', this.oldPassword);
          formData.append('new_password', this.password);

          this.$axios.$post('/member/change-password', formData)
            .then( (response) => {
              if (response.err_num == '0') {
                this.errorMessage = null;
                this.isPopupSuccess = true;
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
      closePopupSuccess() {
        this.isPopupSuccess = false;
        this.password = null;
        this.oldPassword = null;
        this.retypePassword = null;
        this.clue1 = null;
        this.clue2 = null;
        this.clue3 = null;
        this.clue4 = null;
        this.isPasswordMatch = false;
      }
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