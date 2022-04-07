<template>
  <div class="p-6 md:p-0">
    <div
      class="text-2xl font-semibold md:mt-8 text-grayscale-900 font-noto-sans"
    >
      Check flight schedule
    </div>
    <div class="mt-2 text-grayscale-500">Search for Star Air flight status</div>
    <div class="mt-6 md:flex">
      <div class="w-full md:w-3/6 md:flex">
        <div class="flex-1">
          <div
            class="p-3 border rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          >
            <div class="text-grayscale-400 text-2xs">From</div>
            <input
              type="text"
              class="w-full border-none outline-none"
              value="Mumbai International Airport (MBR)"
            />
          </div>
        </div>
        <div class="relative flex-1">
          <div class="absolute hidden w-10 h-10 cursor-pointer md:inline">
            <img
              src="~/assets/images/flip-button.svg"
              class="inline-block mt-4 -ml-5"
              alt="Flip Button"
            />
          </div>
          <div
            class="absolute inline w-10 h-10 -mt-5 cursor-pointer  md:hidden right-4"
          >
            <img
              src="~/assets/images/flip-button-mobile.svg"
              class="inline-block"
              alt="Flip Button"
            />
          </div>
          <div class="p-3 border md:pl-8 rounded-b-xl md:rounded-none">
            <div class="text-grayscale-400 text-2xs">To</div>
            <input
              type="text"
              class="w-full border-none outline-none"
              value="Dubai International Airport (DOH)"
            />
          </div>
        </div>
      </div>
      <div class="flex w-full mt-6 md:w-2/6 md:mt-0">
        <div class="w-full md:w-full">
          <div class="border rounded-lg md:rounded-none">
            <div class="flex">
              <div class="flex-1 p-3">
                <div class="text-grayscale-400 text-2xs">Depart</div>
                <input
                  type="text"
                  class="w-full border-none outline-none"
                  value="20 Nov 21"
                />
              </div>
              <div class="flex-1 p-3 pl-2 border-l">
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
      <div class="flex w-full mt-6 md:w-1/6 md:mt-0">
        <div class="w-full">
          <div class="p-3 border rounded-lg md:rounded-r-lg md:rounded-none">
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
    <div class="mt-8 md:inline-block md:float-right">
      <NuxtLink to="/flight-info">
        <Button value="Check Schedule" customClass="px-6" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageFlightInfo",
};
</script>