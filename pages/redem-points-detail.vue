<script lang="ts">
export default {
  name: "RedemPointsDetail",
  data() {
    return {
      activeMenu: 1,
      dataMenu: [
        { id: 1, name: 'Book a flight' },
        { id: 2, name: 'Extra Baggage' },
        { id: 3, name: 'Convert Points to Partner Points' },
        { id: 4, name: 'Shop & Pay' },
      ],
      dataContent: [],
      isLoaded: false,
    };
  },
  methods: {
    changeMenu(id) {
      this.activeMenu = id;
    },
    loadData() {
      let param = 
        '?token=' + this.$config.myToken +
        '&airline_code=' + this.$config.myAirlineCode +
        '&airline=sqiva';
    
      this.$axios.$get('/api/cms/get-cms-list' + param)
        .then( (response) => {
          this.dataContent = response.result.data;
          this.isLoaded = true
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getDataContent(content_id) {
      let result = null;
      this.dataContent.forEach(element => {
        if (element.CONTENT_ID == content_id) {
          result = element.CONTENT
        }
      });
      return result;
    },
  },
  mounted() {
    this.activeMenu = (this.$route.query.data) ? this.$route.query.data : this.activeMenu;
    this.loadData()
  },
};
</script>

<template>
  <div>
    <Header />
    <MainMenu />
    <div class="container px-6 py-6 mx-auto md:py-14 md:px-0">
      <div class="text-3xl font-semibold text-grayscale-900 font-noto-sans" v-html="(getDataContent('title_reedem_point')) ? getDataContent('title_reedem_point') : 'How to Earn Points'">
      </div>
      <div class="mt-3 text-sm text-grayscale-500 md:text-base" v-html="(getDataContent('desc_reedem_point')) ? getDataContent('desc_reedem_point') : ''">
      </div>
      <div class="mt-16 md:flex gap-x-8">
        <div class="p-6 pb-0 mb-6 border md:w-1/3 rounded-xl text-grayscale-500">
          <div class="p-3 mb-6 rounded-lg cursor-pointer" :class="menu.id == activeMenu ? 'bg-secondary-900 text-white' : ''" v-for="menu in dataMenu" :key="menu.id" @click="changeMenu(menu.id)">
            {{ menu.name }}
          </div>
        </div>
        <div class="md:w-2/3">
          <div v-if="activeMenu==1">
            <RedemPointsBookFlight />
          </div>
          <div v-if="activeMenu==2">
            <RedemPointsExtraBaggage />
          </div>
          <div v-if="activeMenu==3">
            <RedemPointsPartnerPoints />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
</style>
