<template>
  <div class="p-3 relative" :class="[border, customClass]">
    <div class="text-xs text-grayscale-400 mb-1">{{ label }}</div>
    <input
      type="password"
      :placeholder="placeholder"
      class="outline-none border-none w-full"
    />
    <div class="h-6 w-6 absolute right-0 mt-5 mr-2 top-0 cursor-pointer">
      <img src="~/assets/images/eye.svg" class="inline-block" alt="eye" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    border: {
      type: String,
      required: false,
      default: "rounded-lg border",
    },
    customClass: {
      type: String,
      required: false,
    },
  },
};
</script>