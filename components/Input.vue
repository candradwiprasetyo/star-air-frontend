<template>
  <div class="relative px-3 py-2" :class="[border, customClass]">
    <div class="mb-1 text-xs text-grayscale-400">{{ label }}</div>
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full border-none outline-none text-grayscale-900"
      :value="value"
      v-on:input="updateValue($event.target.value)"
      :readonly="readonly"
    />
    <div class="absolute w-6 h-6 right-3 top-4" v-if="icon">
      <img :src="require('@/assets/images/' + icon)" alt="Search" />
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
    icon: {
      type: String,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
};
</script>