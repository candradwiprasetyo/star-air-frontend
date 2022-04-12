<template>
  <div
    class="font-medium text-center rounded-lg "
    :class="[
      color, 
      enabled ? border : 'border-2 border-transparent', 
      padding, 
      customClass, 
      enabled ? background : 'bg-gray-300',
      enabled ? 'cursor-pointer' : 'cursor-not-allowed'
    ]"
    v-on:click="$emit('action')"
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
    padding: {
      type: String,
      required: false,
      default: "px-6 py-4",
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>