<template>
  <div>
    <div class="w-full bg-white top-10 border-b fixed">
      <div class="container mx-auto py-3 text-grayscale-500 flex items-center">
        <div class="flex-none">
          <img
            src="~/assets/images/logo.png"
            class="inline-block"
            alt="Logo"
            width="130"
          />
        </div>
        <div class="flex-grow">
          <div class="flex justify-end gap-x-12 items-center">
            <div class="flex-none">Home</div>
            <div class="flex-none">
              Earn
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block"
                alt="arrow bottom"
              />
            </div>
            <div class="flex-none">
              Redeem
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block"
                alt="arrow bottom"
              />
            </div>
            <div class="flex-none">Shop</div>
            <div class="flex-none">
              Help
              <img
                src="~/assets/images/arrow-bottom-gray.svg"
                class="inline-block"
                alt="arrow bottom"
              />
            </div>
            <div class="flex-none">
              <img
                src="~/assets/images/shopping-bag.svg"
                class="inline-block align-middle"
                alt="shopping bag"
              />
              <span class="align-middle">0 item (s)</span>
            </div>
            <div class="flex-none flex">
              <div class="w-32 mr-4">
                <a href="/login">
                  <Button
                    value="Login"
                    border="border-2 border-secondary-900"
                    color="text-secondary-900"
                    background="bg-white"
                  />
                </a>
              </div>
              <div class="w-32">
                <a href="/registration">
                  <Button value="Sign Up" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-24"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>