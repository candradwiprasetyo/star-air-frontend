<template>
  <div class="relative p-3" :class="[border, customClass]">
    <div class="mb-1 text-xs text-grayscale-400">{{ label }}</div>
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full border-none outline-none"
      :value="value"
      v-on:input="updateValue($event.target.value)"
      @keyup.enter="$emit('on-enter')"
    />
    <div class="absolute top-0 right-0 w-6 h-6 mt-5 mr-2 cursor-pointer" @click="changeType">
      <img src="~/assets/images/eye.svg" class="inline-block" :class="(type=='text') ? 'opacity-50' : 'opacity-100'" alt="eye" />
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
    type: {
      type: String,
      required: false,
      default: "password",
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
    changeType() {
      this.type = (this.type=='password') ? this.type = 'text' : this.type = 'password';
    }
  }
};
</script>