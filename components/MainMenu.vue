<template>
  <div>
    <div class="fixed z-10 w-full bg-white border-b top-10">
      <div
        class="container items-center hidden py-3 mx-auto text-grayscale-500 md:flex"
      >
        <div class="flex-none">
          <NuxtLink to="/">
            <img
              src="~/assets/images/logo.png"
              class="inline-block"
              alt="Logo"
              width="130"
            />
          </NuxtLink>
        </div>
        <div class="flex-grow">
          <div class="flex items-center justify-end gap-x-12">
            <NuxtLink to="/"><div class="flex-none">Home</div></NuxtLink>
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
            <div class="flex flex-none">
              <div class="w-32 mr-4">
                <NuxtLink to="/login">
                  <Button
                    value="Login"
                    border="border-2 border-secondary-900"
                    color="text-secondary-900"
                    background="bg-white"
                  />
                </NuxtLink>
              </div>
              <div class="w-32">
                <NuxtLink to="/registration">
                  <Button value="Sign Up" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-6 py-4 text-grayscale-500 md:hidden">
        <NuxtLink to="/">
          <div class="flex-1">
            <img
              src="~/assets/images/logo.png"
              class="inline-block"
              alt="Logo"
              width="130"
            />
          </div>
        </NuxtLink>
        <div class="flex items-center justify-end flex-1">
          <div class="flex justify-end flex-1">
            <img
              src="~/assets/images/english.svg"
              class="inline-block"
              alt="English"
            />
            <span class="text-xs">EN</span>
          </div>
          <div class="flex justify-end flex-1">
            <img
              src="~/assets/images/shopping-bag.svg"
              class="inline-block"
              alt="Shopping bag"
            />
          </div>
          <div class="flex justify-end flex-1">
            <img
              src="~/assets/images/mobile-menu.svg"
              class="inline-block"
              alt="English"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-16 mb-1 md:h-20"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>