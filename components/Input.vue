<template>
  <div class="px-3 py-2" :class="[border, customClass]">
    <div class="mb-1 text-xs text-grayscale-400">{{ label }}</div>
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full border-none outline-none"
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