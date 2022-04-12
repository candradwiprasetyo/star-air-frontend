export const Button = () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Input = () => import('../../components/Input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c))
export const InputPassword = () => import('../../components/InputPassword.vue' /* webpackChunkName: "components/input-password" */).then(c => wrapFunctional(c.default || c))
export const MainMenu = () => import('../../components/MainMenu.vue' /* webpackChunkName: "components/main-menu" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const Select = () => import('../../components/Select.vue' /* webpackChunkName: "components/select" */).then(c => wrapFunctional(c.default || c))
export const AccountBookingHistory = () => import('../../components/account/BookingHistory.vue' /* webpackChunkName: "components/account-booking-history" */).then(c => wrapFunctional(c.default || c))
export const AccountBookingHistoryDetail = () => import('../../components/account/BookingHistoryDetail.vue' /* webpackChunkName: "components/account-booking-history-detail" */).then(c => wrapFunctional(c.default || c))
export const AccountChangePassword = () => import('../../components/account/ChangePassword.vue' /* webpackChunkName: "components/account-change-password" */).then(c => wrapFunctional(c.default || c))
export const AccountEditEmail = () => import('../../components/account/EditEmail.vue' /* webpackChunkName: "components/account-edit-email" */).then(c => wrapFunctional(c.default || c))
export const AccountEditProfile = () => import('../../components/account/EditProfile.vue' /* webpackChunkName: "components/account-edit-profile" */).then(c => wrapFunctional(c.default || c))
export const AccountEditTravelDocument = () => import('../../components/account/EditTravelDocument.vue' /* webpackChunkName: "components/account-edit-travel-document" */).then(c => wrapFunctional(c.default || c))
export const AccountExtendMembership = () => import('../../components/account/ExtendMembership.vue' /* webpackChunkName: "components/account-extend-membership" */).then(c => wrapFunctional(c.default || c))
export const AccountOverview = () => import('../../components/account/Overview.vue' /* webpackChunkName: "components/account-overview" */).then(c => wrapFunctional(c.default || c))
export const AccountStarPoints = () => import('../../components/account/StarPoints.vue' /* webpackChunkName: "components/account-star-points" */).then(c => wrapFunctional(c.default || c))
export const AccountUpgradeMembership = () => import('../../components/account/UpgradeMembership.vue' /* webpackChunkName: "components/account-upgrade-membership" */).then(c => wrapFunctional(c.default || c))
export const AccountUserProfile = () => import('../../components/account/UserProfile.vue' /* webpackChunkName: "components/account-user-profile" */).then(c => wrapFunctional(c.default || c))
export const HomepageAdvancedSearch = () => import('../../components/homepage/AdvancedSearch.vue' /* webpackChunkName: "components/homepage-advanced-search" */).then(c => wrapFunctional(c.default || c))
export const HomepageTabBook = () => import('../../components/homepage/TabBook.vue' /* webpackChunkName: "components/homepage-tab-book" */).then(c => wrapFunctional(c.default || c))
export const HomepageTabFlightInfo = () => import('../../components/homepage/TabFlightInfo.vue' /* webpackChunkName: "components/homepage-tab-flight-info" */).then(c => wrapFunctional(c.default || c))
export const HomepageTabMyTrip = () => import('../../components/homepage/TabMyTrip.vue' /* webpackChunkName: "components/homepage-tab-my-trip" */).then(c => wrapFunctional(c.default || c))
export const RedemPointsBookFlight = () => import('../../components/redemPoints/BookFlight.vue' /* webpackChunkName: "components/redem-points-book-flight" */).then(c => wrapFunctional(c.default || c))
export const RedemPointsExtraBaggage = () => import('../../components/redemPoints/ExtraBaggage.vue' /* webpackChunkName: "components/redem-points-extra-baggage" */).then(c => wrapFunctional(c.default || c))
export const RedemPointsPartnerPoints = () => import('../../components/redemPoints/PartnerPoints.vue' /* webpackChunkName: "components/redem-points-partner-points" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
