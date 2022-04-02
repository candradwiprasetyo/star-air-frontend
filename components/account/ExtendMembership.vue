<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Extend Membership</div>
        </div>
      </div>
      <div class="border-t" v-for="data in 3" index="data">
        <div class="p-6 md:flex">
          <div class="flex flex-wrap content-center flex-none">
            <img
              src="~/assets/images/membership-card.png"
              class="inline-block mb-6"
              alt="Membership card"
              width="200"
            />
          </div>
          <div class="relative flex-grow md:pl-16">
            <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Star Club Silver</div>
            <div class="text-xs text-primary-600">5000 Star Points required</div>
            <div class="mt-4 text-grayscale-500">
              <ul class="pl-5 leading-loose list-disc">
                <li>100% mileage on all flights for Star Points</li>
                <li>100% mileage on non-air partner</li>
                <li>Priority stand-by </li>
                <li>Flexi awards</li>
                <li>Shop & pay with Star Points at Duty Free</li>
              </ul>
            </div>
            <div class="inline-block mt-4" v-if="data != 1">
              <Button
                value="Upgrade"
                border="border-2 border-secondary-900"
                color="text-secondary-900"
                background="bg-white"
              />
            </div>
            <div class="absolute right-0 top-2" v-if="data==1">
              <img
                src="~/assets/images/current-tier.png"
                class="inline-block"
                alt="Current tier"
                width="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountExtendMembership",
};
</script>
