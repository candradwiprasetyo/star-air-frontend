<template>
  <div>
    <div
      class="
        container
        mx-auto
        shadow-custom
        rounded-xl
        p-6
        bg-white
        block
        absolute
        left-0
        right-0
        -mt-20
      "
    >
      <div
        class="
          flex
          border-b border-gray-300
          font-semibold
          text-grayscale-400
          pt-2
        "
      >
        <div
          class="flex-none px-6 cursor-pointer"
          :class="activeTab == 1 ? 'border-secondary-900 border-b-6 pb-6' : ''"
          @click="changeTab(1)"
        >
          <img src="~/assets/images/book.svg" class="inline-block" alt="Book" />
          <span class="pl-2" :class="activeTab == 1 ? 'text-secondary-900' : ''"
            >Book</span
          >
        </div>
        <div
          class="flex-none px-6 cursor-pointer"
          :class="activeTab == 2 ? 'border-secondary-900 border-b-6 pb-6' : ''"
          @click="changeTab(2)"
        >
          <img
            src="~/assets/images/my-trip.svg"
            class="inline-block"
            alt="My Trip"
          />
          <span class="pl-2" :class="activeTab == 2 ? 'text-secondary-900' : ''"
            >My Trip</span
          >
        </div>
        <div
          class="flex-none px-6 cursor-pointer"
          :class="activeTab == 3 ? 'border-secondary-900 border-b-6 pb-6' : ''"
          @click="changeTab(3)"
        >
          <img
            src="~/assets/images/flight-info.svg"
            class="inline-block"
            alt="Flight Info"
          />
          <span class="pl-2" :class="activeTab == 3 ? 'text-secondary-900' : ''"
            >Flight Info</span
          >
        </div>
      </div>
      <div v-if="activeTab == 1">
        <div
          class="mt-8 text-2xl text-grayscale-900 font-semibold font-noto-sans"
        >
          Where do you want to travel?
        </div>
        <div class="mt-2 text-grayscale-500">
          Redeem your Star Points with a flight ticket to your desired
          destination
        </div>
        <div class="mt-6 flex">
          <div class="flex-1 flex">
            <div class="flex-1">
              <div class="rounded-l-lg border p-3">
                <div class="text-grayscale-400 text-2xs">From</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="Mumbai International Airport (MBR)"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="h-10 w-10 absolute cursor-pointer">
                <img
                  src="~/assets/images/flip-button.svg"
                  class="inline-block -ml-5 mt-4"
                  alt="Flip Button"
                />
              </div>
              <div class="border p-3 pl-8">
                <div class="text-grayscale-400 text-2xs">To</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="Dubai International Airport (DOH)"
                />
              </div>
            </div>
          </div>
          <div class="flex-1 flex">
            <div class="w-1/5">
              <div class="border p-3">
                <div class="text-grayscale-400 text-2xs">Trip</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="Return"
                />
              </div>
            </div>
            <div class="w-2/5">
              <div class="border p-3">
                <div class="flex">
                  <div class="flex-1">
                    <div class="text-grayscale-400 text-2xs">Depart</div>
                    <input
                      type="text"
                      class="w-full border-none outline-none"
                      value="20 Nov 21"
                    />
                  </div>
                  <div class="flex-1">
                    <div class="text-grayscale-400 text-2xs">Return</div>
                    <input
                      type="text"
                      class="w-full border-none outline-none"
                      value="27 Nov 21"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-2/5">
              <div class="border rounded-r-lg p-3">
                <div class="text-grayscale-400 text-2xs">Passanger/Class</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="1 Passanger, Economy"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 inline-block float-right">
          <Button value="Search Flights" customClass="px-6" />
        </div>
      </div>
      <div v-else-if="activeTab == 2">
        <div
          class="mt-8 text-2xl text-grayscale-900 font-semibold font-noto-sans"
        >
          Manage your upcoming trip
        </div>
        <div class="mt-2 text-grayscale-500">
          Please review this terms & conditions of My Trip sections
        </div>
        <div class="mt-6 flex gap-x-4">
          <div class="flex-1">
            <Input label="Book Reference" value="1233444554" />
          </div>
          <div class="flex-1">
            <Input label="Last Name" value="Gauri" />
          </div>
        </div>
        <div class="mt-8 inline-block float-right">
          <Button value="Search Flights" customClass="px-6" />
        </div>
      </div>
      <div v-else-if="activeTab == 3">
        <div
          class="mt-8 text-2xl text-grayscale-900 font-semibold font-noto-sans"
        >
          Check flight schedule
        </div>
        <div class="mt-2 text-grayscale-500">
          Search for Star Air flight status
        </div>
        <div class="mt-6 flex">
          <div class="w-2/3 flex">
            <div class="flex-1">
              <div class="rounded-l-lg border p-3">
                <div class="text-grayscale-400 text-2xs">From</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="Mumbai International Airport (MBR)"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="h-10 w-10 absolute cursor-pointer">
                <img
                  src="~/assets/images/flip-button.svg"
                  class="inline-block -ml-5 mt-4"
                  alt="Flip Button"
                />
              </div>
              <div class="border p-3 pl-8">
                <div class="text-grayscale-400 text-2xs">To</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="Dubai International Airport (DOH)"
                />
              </div>
            </div>
          </div>
          <div class="w-1/3 flex">
            <div class="flex-1">
              <div class="border p-3">
                <div class="flex">
                  <div class="flex-1">
                    <div class="text-grayscale-400 text-2xs">Depart</div>
                    <input
                      type="text"
                      class="w-full border-none outline-none"
                      value="20 Nov 21"
                    />
                  </div>
                  <div class="flex-1">
                    <div class="text-grayscale-400 text-2xs">Return</div>
                    <input
                      type="text"
                      class="w-full border-none outline-none"
                      value="27 Nov 21"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="border rounded-r-lg p-3">
                <div class="text-grayscale-400 text-2xs">Trip</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="Return"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 inline-block float-right">
          <Button value="Check Schedule" customClass="px-6" />
        </div>
      </div>
    </div>
    <div class="h-80"></div>
  </div>
</template>

<script>
export default {
  name: "AdvancedSearch",
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>