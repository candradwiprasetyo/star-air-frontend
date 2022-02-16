<template>
  <div
    class="w-full rounded-lg text-center py-4 cursor-pointer font-medium"
    :class="[color, background, border, customClass]"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "text-white",
    },
    background: {
      type: String,
      required: false,
      default: "bg-primary-600",
    },
    border: {
      type: String,
      required: false,
      default: "border-2 border-primary-600",
    },
    customClass: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>