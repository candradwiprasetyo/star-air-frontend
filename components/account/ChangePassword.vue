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
          <InputPassword label="Old Password" />
        </div>
        <div class="mb-6">
          <InputPassword label="New Password" />
        </div>
        <div class="mb-6">
          <InputPassword label="Re-type New Password" />
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
          <Button value="Change Password" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountChangePassword",
};
</script>
