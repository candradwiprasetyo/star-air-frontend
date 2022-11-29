<template>
  <div>
    <div class="flex">
      <div class="relative flex-none min-h-screen p-16 w-80">
        <div class="gap-6 mb-20 text-center">
          <img
            src="~/assets/images/logo.png"
            class="inline-block"
            alt="Logo"
            width="150"
          />
          <div class="mt-4 text-base font-bold uppercase">Admin Alliance Air</div>
        </div>
        <div class="relative grid gap-10 text-lg font-bold text-gray-500 cursor-pointer">
          <NuxtLink to="/admin">
            <div>Content</div>
          </NuxtLink>
        </div>
        <div class="absolute text-lg font-bold text-gray-500 cursor-pointer bottom-20" @click="logout">Logout</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: "AdminLayout",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    logout() {
      cookie.remove('star_air_login_admin')
      this.$store.commit('SET_LOGIN_ADMIN', false)
      this.$router.push('/admin/login')
    },
  },
};
</script>