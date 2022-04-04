<template>
  <div
    class="px-6 py-4 font-medium text-center rounded-lg cursor-pointer"
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
      default: "w-full",
    },
  },
};
</script>