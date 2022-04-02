<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">User Profile</div>
        </div>
      </div>
      <div v-for="user in dataUser" :index="user.id">
        <div class="flex items-center p-6 overflow-hidden border-b cursor-pointer bg-grayscale-50" @click="chooseUser(user.id)">
          <div class="flex-none">
            <img
              src="~/assets/images/user.png"
              class="inline-block mr-4"
              alt="User"
              width="30"
            />
          </div>
          <div class="flex-grow">
            <div class="mb-1 font-medium text-grayscale-900">{{ user.name }}</div>
            <div class="text-xs text-grayscale-500">{{ user.title }}</div>
          </div>
          <div class="flex-none">
            <img
              src="~/assets/images/arrow-bottom-gray.svg"
              class="inline-block mr-4 cursor-pointer"
              alt="Arrow up"
              width="24"
              v-if="user.id==activeUser"
            />
            <img
              src="~/assets/images/arrow-up-gray.svg"
              class="inline-block mr-4 cursor-pointer"
              alt="Arrow up"
              width="24"
              v-else
            />
            <img
              src="~/assets/images/three-dots.svg"
              class="inline-block cursor-pointer"
              alt="Config"
              width="24"
            />
          </div>
        </div>
        <div class="p-6" v-if="user.id==activeUser">
          <div class="pb-6 border-b">
            <div class="font-semibold text-black font-noto-sans">Contact Details</div>
            <div class="flex mt-6">
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Address</div>
                <div class="text-grayscale-900">
                  Shop No 1/ee, Chhotani Bldg, <br>
                  Proctor Road, Grant Road(e) <br>
                  Mumbai 400004 <br>
                  Maharashtra India
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Email</div>
                <div class="text-grayscale-900">
                  chanda.gauri@website.com
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Phone</div>
                <div class="text-grayscale-900">
                  02223887986
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
                  FLY0098213
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Type of Member</div>
                <div class="text-grayscale-900">
                  Silver Member
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Star Points</div>
                <div class="text-grayscale-900">
                  5000 Points
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Credit Account</div>
                <div class="text-grayscale-900">
                  2300 INR
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
                  India
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">National ID Number</div>
                <div class="text-grayscale-900">
                  1234134353534
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Passport Number</div>
                <div class="text-grayscale-900">
                  R1029389
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-1 text-xs text-grayscale-400">Address Number</div>
                <div class="text-grayscale-900">
                  56323
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Expiry Date</div>
                <div class="text-grayscale-900">
                  20 November 2025
                </div>
                <div class="mt-8 mb-1 text-xs text-grayscale-400">Known Traveler Number</div>
                <div class="text-grayscale-900">
                  02223887123123
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
export default {
  name: "AccountUserProfile",
  data() {
    return {
      dataUser: [
        { id: 1, name: 'Chanda Gauri', title: 'You' },
        { id: 2, name: 'Mr. Javas  Raju', title: 'Family' },
        { id: 3, name: 'Mrs. Avasa  Ganguly', title: 'Friend' },
        { id: 4, name: 'Mr. Vishal  Memon', title: 'Family' },
      ],
      activeUser: 1,
    }
  },
  methods: {
    chooseUser(id) {
      this.activeUser = id;
    }
  }
};
</script>
