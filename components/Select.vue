<template>
  <div class="h-full px-3 py-2" :class="[border, customClass]">
    <div class="mb-1 text-xs text-grayscale-400">{{ label }}</div>
    <select class="w-full border-none outline-none">
      <option 
        v-for="(option, index) in data" 
        :key="index" 
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    data: {
      type: Array,
      required: false,
      default: [],
    },
    selectedData: {
      type: String,
      required: false,
    },
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