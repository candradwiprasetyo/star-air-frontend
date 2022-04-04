<template>
  <div>
    <div class="w-full pb-0 mb-6 overflow-hidden border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900"><span class="text-secondary-900">Extend Membership</span> / Upgrade</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="items-center justify-center hidden gap-x-16 md:flex">
          <div class="flex-none text-center">
            <img src="~/assets/images/membership-card-silver.png" class="inline-block" alt="Membership Card Silver" width="240" />
            <div class="text-lg font-semibold text-grayscale-900 font-noto-sans">Star Club Silver</div>
            <div class="text-xs text-primary-600">5000 Star Points required</div>
          </div>
          <div class="flex-none">
            <img src="~/assets/images/upgrade-right.svg" class="mx-auto" alt="Upgrade" width="64" />
          </div>
          <div class="flex-none text-center">
            <img src="~/assets/images/membership-card-gold.png" class="inline-block" alt="Membership Card Gold" width="240" />
            <div class="text-lg font-semibold text-grayscale-900 font-noto-sans">Star Club Gold</div>
            <div class="text-xs text-primary-600">10000 Star Points required</div>
          </div>
        </div>
        <div class="block md:hidden">
          <div class="flex-none text-center">
            <img src="~/assets/images/membership-card-gold.png" class="inline-block" alt="Membership Card Gold" width="240" />
            <div class="text-lg font-semibold text-grayscale-900 font-noto-sans">Star Club Gold</div>
            <div class="text-xs text-primary-600">10000 Star Points required</div>
          </div>
          <div class="flex-none mt-6 text-center">
            <img src="~/assets/images/upgrade-up.svg" class="mx-auto" alt="Upgrade" width="64" />
          </div>
          <div class="flex-none text-center">
            <img src="~/assets/images/membership-card-silver.png" class="inline-block" alt="Membership Card Silver" width="240" />
            <div class="text-lg font-semibold text-grayscale-900 font-noto-sans">Star Club Silver</div>
            <div class="text-xs text-primary-600">5000 Star Points required</div>
          </div>
        </div>
        <div class="mt-6 text-center text-grayscale-900">You are eligible to upgrade your membership from Star Club Silver to Star Club Gold. You will be able to enjoy all the benefits in Gold Club. Are you sure you want to upgrade your membership?</div>
        <div class="justify-center mt-10 mb-6 md:flex gap-x-6">
          <Button
            value="Later"
            border="border-2 border-secondary-900"
            color="text-secondary-900"
            background="bg-white"
            custom-class="md:w-40"
          />
          <Button value="Upgrade" custom-class="mt-6 md:w-40 md:mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountUpgradeMembership",
  methods: {}
};
</script>
