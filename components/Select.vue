<template>
  <div class="h-full p-2" :class="[border, customClass]">
    <div class="text-xs text-grayscale-400 mb-1">{{ label }}</div>
    <select class="outline-none border-none w-full"></select>
  </div>
</template>

<script>
export default {
  name: "Select",
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