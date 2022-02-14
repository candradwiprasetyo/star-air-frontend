import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dd90aef8 = () => interopDefault(import('../pages/activation.vue' /* webpackChunkName: "pages/activation" */))
const _3ae0e007 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _2e42702a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3081e927 = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _34c0fb46 = () => interopDefault(import('../pages/registration-success.vue' /* webpackChunkName: "pages/registration-success" */))
const _1f3724d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activation",
    component: _dd90aef8,
    name: "activation"
  }, {
    path: "/forgot-password",
    component: _3ae0e007,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _2e42702a,
    name: "login"
  }, {
    path: "/registration",
    component: _3081e927,
    name: "registration"
  }, {
    path: "/registration-success",
    component: _34c0fb46,
    name: "registration-success"
  }, {
    path: "/",
    component: _1f3724d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}