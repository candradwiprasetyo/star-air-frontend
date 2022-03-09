<template>
  <div>
    <div class="pb-6 text-2xl font-semibold border-b font-noto-sans text-grayscale-900">Book a Flight</div>
    <div class="w-full mt-6 md:flex">
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
          class="absolute inline w-10 h-10 -mt-5 cursor-pointer md:hidden right-4"
        >
          <img
            src="~/assets/images/flip-button-mobile.svg"
            class="inline-block"
            alt="Flip Button"
          />
        </div>
        <div class="p-3 border md:pl-8 rounded-b-xl md:rounded-none md:rounded-r-xl">
          <div class="text-grayscale-400 text-2xs">To</div>
          <input
            type="text"
            class="w-full border-none outline-none"
            value="Dubai International Airport (DOH)"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <Select
        label="Trip"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-6 md:flex">
      <div class="flex-1">
        <Select
          label="Depart"
          border="border rounded-lg md:rounded-none md:rounded-l-lg"
        />
      </div>
      <div class="flex-1 mt-6 md:mt-0">
        <Select
          label="Return"
          border="border rounded-lg md:rounded-none md:rounded-r-lg"
        />
      </div>
    </div>
    <div class="mt-6">
      <Select
        label="Passanger/Class"
        border="border rounded-lg md:rounded-l-lg"
      />
    </div>
    <div class="mt-10 md:inline-block">
      <Button value="Show Flights" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RedemPointBookFlight",
};
</script>
