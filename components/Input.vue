<template>
  <div class="p-2" :class="[border, customClass]">
    <div class="text-xs text-grayscale-400 mb-1">{{ label }}</div>
    <input
      type="text"
      :placeholder="placeholder"
      class="outline-none border-none w-full"
      :value="value"
    />
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
    value: {
      type: String,
      required: false,
      default: "",
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