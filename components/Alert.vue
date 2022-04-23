

<template>
  <div :class="[
    'p-3 mb-6 rounded',
    (type=='error') ? 'bg-alert text-alert-900' : '',
    (type=='success') ? 'bg-green-200 text-green-700' : '',
  ]">
    <img
      src="~/assets/images/alert-info.svg"
      class="inline-block align-middle"
      alt="alert"
      v-if="type=='error'"
    />
    <span class="inline-block align-middle">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'error'
    },
  },
  methods: {}
};
</script>