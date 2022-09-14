<template>
  <div class="relative px-3 py-2" :class="[border, customClass]">
    <div class="mb-1 text-xs text-grayscale-400">{{ label }}</div>
    <textarea
      :placeholder="placeholder"
      class="w-full bg-transparent border-none outline-none text-grayscale-900"
      v-on:input="updateValue($event.target.value)"
      :readonly="readonly"
      rows="6"
    >{{value}}</textarea>
    <div class="absolute w-6 h-6 right-3 top-4" v-if="icon">
      <img :src="require('@/assets/images/' + icon)" alt="Search" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Textarea",
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