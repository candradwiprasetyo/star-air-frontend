<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">User Profile</div>
        </div>
      </div>
      <div v-for="(user, index) in profileData" :index="index">
        <div class="flex items-center p-6 border-b cursor-pointer bg-grayscale-50" >
          <div class="flex-none" @click="chooseUser(index)">
            <img
              src="~/assets/images/user.png"
              class="inline-block mr-4"
              alt="User"
              width="30"
            />
          </div>
          <div class="flex-grow" @click="chooseUser(index)">
            <div class="mb-1 font-medium text-grayscale-900">{{ user.name }}</div>
            <div class="text-xs text-grayscale-500">{{ (index==0) ? 'You' : 'Family' }}</div>
          </div>
          <div class="relative flex-none">
            <span @click="chooseUser(index)">
              <img
                src="~/assets/images/arrow-up-gray.svg"
                class="inline-block mr-4 cursor-pointer"
                alt="Arrow up"
                width="24"
                v-if="index==activeUser"
              />
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block mr-4 cursor-pointer"
                alt="Arrow bottom"
                width="24"
                v-else
              />
            </span>
            <img
              src="~/assets/images/three-dots.svg"
              class="inline-block cursor-pointer"
              alt="Config"
              width="24"
              @click="goConfig(index)"
            />
            <div class="absolute right-0 z-10 text-sm font-medium bg-white rounded-lg shadow-xl w-60 top-10" v-if="selectedConfig==index">
              <div class="p-5" @click="$emit('edit-profile', 7, user.member_id)" >Edit Profile</div>
              <div class="p-5" @click="$emit('change-email', 8, user.member_id)" v-if="false">Change Email & Phone</div>
            </div>
          </div>
        </div>
        <div class="p-6" v-if="index==activeUser">
          <div class="pb-6 border-b">
            <div class="font-semibold text-black font-noto-sans">Contact Details</div>
            <div class="flex mt-6">
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Address</div>
                <div class="text-grayscale-900">
                  {{ user.address }}
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Email</div>
                <div class="text-grayscale-900">
                  {{ user.email }}
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Phone</div>
                <div class="text-grayscale-900">
                  {{ user.mobile }}
                </div>
              </div>
            </div>
          </div>
          <div class="py-6 border-b">
            <div class="font-semibold text-black font-noto-sans">Member Info</div>
            <div class="flex mt-6">
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Member ID</div>
                <div class="text-grayscale-900">
                  {{ user.member_id }}
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Type of Member</div>
                <div class="text-grayscale-900">
                  {{ user.member_level }} Member
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Star Points</div>
                <div class="text-grayscale-900">
                  {{ user.avb_point }} Points
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Credit Account</div>
                <div class="text-grayscale-900">
                  {{ user.credit_account }} INR
                </div>
              </div>
            </div>
          </div>
          <div class="pt-6">
            <div class="font-semibold text-black font-noto-sans">Travel Documents</div>
            <div class="flex mt-6">
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Nationality</div>
                <div class="text-grayscale-900">
                  {{ user.nationality }}
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Passport Number</div>
                <div class="text-grayscale-900">
                  {{ user.passport_no }}
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Passport Expire Date</div>
                <div class="text-grayscale-900">
                  {{ user.passport_expire_date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: "AccountUserProfile",
  data() {
    return {
      activeUser: null,
      userData: [],
      profileData: [],
      selectedConfig: null,
    }
  },
  methods: {
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
      this.createUser();
    },
    goConfig(index) {
      if (this.selectedConfig == index) {
        this.selectedConfig = null;
      } else {
        this.selectedConfig = index;
      }
    },
    createUser() {
      // get user detail
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;

      let newUser = {
        "member_id": this.userData.member_id,
        "fnf_id": "",
        "name": this.userData.name,
        "birthdate": "",
        "email": this.userData.email
      }
  
      this.profileData.push(newUser);
      this.createUserDetail(0, userData);
      this.loadData();

      // let formDataDetail = new FormData();
      // formDataDetail.append('member_id', this.userData.member_id);
      // formDataDetail.append('token', this.$config.myToken);
      // formDataDetail.append('airline_code', this.$config.myAirlineCode);

      // this.$axios.$post('/api/member/get-member-detail', formDataDetail)
      //   .then( (responseDetail) => {
      //     let newUser = {
      //       "member_id": this.userData.member_id,
      //       "fnf_id": "",
      //       "name": responseDetail.result.name,
      //       "birthdate": "",
      //       "email": this.userData.email
      //     }
      //     this.profileData.push(newUser);
      //     this.createUserDetail(0, responseDetail.result);
      //     this.loadData();
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      
    },
    createUserDetail(index, data) {
      this.profileData[index].member_level = data.member_level;
      this.profileData[index].mobile = data.mobile;
      this.profileData[index].address = data.address;
      this.profileData[index].birthdate = data.birthdate;
      this.profileData[index].gender = data.gender;
      this.profileData[index].salutation = data.salutation;
      this.profileData[index].title = data.title;
      this.profileData[index].nationality = data.nationality;
      this.profileData[index].passport_no = data.passport_no;
      this.profileData[index].passport_expire_date = data.passport_expire_date;
      this.profileData[index].join_date = data.join_date;
      this.profileData[index].expire_date = data.expire_date;
      this.profileData[index].avb_point = data.avb_point;
      this.profileData[index].credit_account = data.credit_account;
      this.profileData[index].renewal_fee = data.renewal_fee;
      this.profileData[index].status = data.status;
    },
    loadData() {
      let formDataDetail = new FormData();
      formDataDetail.append('member_email', this.userData.email);
      // formDataDetail.append('member_id', 'SQV091');
      // formDataDetail.append('member_email', 'test666@gmail.com');
      
      formDataDetail.append('token', this.$config.myToken);
      formDataDetail.append('airline_code', this.$config.myAirlineCode);

      // get data family and friend
      this.$axios.$post('/api/member/get-family-friend', formDataDetail)
        .then( (response) => {
          if (response.result.length > 0) {
            let newUser = '';
            response.result.forEach((element, index) => {
              
              newUser = {
                "member_id": element.member_id,
                "fnf_id": element.fnf_id,
                "name": element.name,
                "birthdate": element.birthdate,
                "email": element.email
              }
              this.profileData.push(newUser);
              
              // get user detail
              let formDataDetail = new FormData();
              formDataDetail.append('member_email', element.email);
              formDataDetail.append('token', this.$config.myToken);
              formDataDetail.append('airline_code', this.$config.myAirlineCode);
              index++;
              
              this.$axios.$post('/api/member/get-member-detail', formDataDetail)
                .then( (responseDetail) => {
                  this.createUserDetail(index, responseDetail.result);
                })
                .catch(function (error) {
                  console.log(error)
                })

            });
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    chooseUser(id) {
      if (this.activeUser != id) {
        this.activeUser = id;
      } else {
        this.activeUser = null;
      }
      
    }
  },
  mounted() {
    this.loadUser();
  },
};
</script>
