<template>
  <div>
    <div class="fixed inset-0 z-10 bg-black opacity-50"></div>
    <div class="fixed inset-0 z-10 flex items-center justify-center h-screen">
      <div class="bg-white rounded-lg w-[600px] relative min-h-[100px] overflow-hidden"> 
        <div class="absolute flex items-center justify-center p-2 bg-gray-100 rounded-full cursor-pointer top-2 right-2" v-on:click="$emit('close')">
          <img
            src="~/assets/images/close.png"
            class="inline-block"
            width="16"
          />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {
      type: String,
      required: false,
    },
  },
};
</script>