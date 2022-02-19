<template>
  <div>
    <div
      class="md:mt-8 text-2xl text-grayscale-900 font-semibold font-noto-sans"
    >
      Where do you want to travel?
    </div>
    <div class="mt-2 text-grayscale-500">
      Redeem your Star Points with a flight ticket to your desired destination
    </div>
    <div class="mt-6 md:flex">
      <div class="w-full md:w-3/6 md:flex">
        <div class="flex-1">
          <div
            class="rounded-t-lg md:rounded-l-lg md:rounded-tr-none border p-3"
          >
            <div class="text-grayscale-400 text-2xs">From</div>
            <input
              type="text"
              class="w-full border-none outline-none"
              value="Mumbai International Airport (MBR)"
            />
          </div>
        </div>
        <div class="flex-1 relative">
          <div class="h-10 w-10 absolute cursor-pointer hidden md:inline">
            <img
              src="~/assets/images/flip-button.svg"
              class="inline-block -ml-5 mt-4"
              alt="Flip Button"
            />
          </div>
          <div
            class="
              h-10
              w-10
              absolute
              cursor-pointer
              inline
              md:hidden
              right-4
              -mt-5
            "
          >
            <img
              src="~/assets/images/flip-button-mobile.svg"
              class="inline-block"
              alt="Flip Button"
            />
          </div>
          <div class="border p-3 md:pl-8 rounded-b-xl md:rounded-none">
            <div class="text-grayscale-400 text-2xs">To</div>
            <input
              type="text"
              class="w-full border-none outline-none"
              value="Dubai International Airport (DOH)"
            />
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/6 mt-6 md:mt-0 flex">
        <div class="w-1/3 md:w-1/2">
          <div class="border p-3 rounded-l-lg md:rounded-l-none">
            <div class="text-grayscale-400 text-2xs">Trip</div>
            <input
              type="text"
              class="w-full border-none outline-none"
              value="Return"
            />
          </div>
        </div>
        <div class="w-2/3 md:w-1/2">
          <div class="border p-3 rounded-r-lg md:rounded-r-none">
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
      </div>
      <div class="w-full md:w-1/6 mt-6 md:mt-0 flex">
        <div class="w-full">
          <div class="border md:rounded-r-lg p-3 rounded-lg md:rounded-none">
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
    <div class="mt-8 md:inline-block md:float-right">
      <Button value="Search Flights" customClass="px-6" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageTabMyTrip",
};
</script>