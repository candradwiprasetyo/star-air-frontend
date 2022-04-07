export { default as Button } from '../../components/Button.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Input } from '../../components/Input.vue'
export { default as InputPassword } from '../../components/InputPassword.vue'
export { default as MainMenu } from '../../components/MainMenu.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as Select } from '../../components/Select.vue'
export { default as HomepageAdvancedSearch } from '../../components/homepage/AdvancedSearch.vue'
export { default as HomepageTabBook } from '../../components/homepage/TabBook.vue'
export { default as HomepageTabFlightInfo } from '../../components/homepage/TabFlightInfo.vue'
export { default as HomepageTabMyTrip } from '../../components/homepage/TabMyTrip.vue'
export { default as AccountBookingHistory } from '../../components/account/BookingHistory.vue'
export { default as AccountBookingHistoryDetail } from '../../components/account/BookingHistoryDetail.vue'
export { default as AccountChangePassword } from '../../components/account/ChangePassword.vue'
export { default as AccountEditEmail } from '../../components/account/EditEmail.vue'
export { default as AccountEditProfile } from '../../components/account/EditProfile.vue'
export { default as AccountEditTravelDocument } from '../../components/account/EditTravelDocument.vue'
export { default as AccountExtendMembership } from '../../components/account/ExtendMembership.vue'
export { default as AccountOverview } from '../../components/account/Overview.vue'
export { default as AccountStarPoints } from '../../components/account/StarPoints.vue'
export { default as AccountUpgradeMembership } from '../../components/account/UpgradeMembership.vue'
export { default as AccountUserProfile } from '../../components/account/UserProfile.vue'
export { default as RedemPointsBookFlight } from '../../components/redemPoints/BookFlight.vue'
export { default as RedemPointsExtraBaggage } from '../../components/redemPoints/ExtraBaggage.vue'
export { default as RedemPointsPartnerPoints } from '../../components/redemPoints/PartnerPoints.vue'

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
