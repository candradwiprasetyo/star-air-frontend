<template>
  <div>
    <div class="w-full pb-0 mb-6 border rounded-xl text-grayscale-500">
      <div class="p-6 border-b">
        <div class="flex">
          <div class="text-lg font-semibold font-noto-sans text-grayscale-900">Overview</div>
        </div>
      </div>
      <div class="p-6 overflow-hidden">
        <div class="flex mb-4">
          <div class="flex-1 text-lg font-semibold font-noto-sans text-grayscale-900">Points Latest Activities</div>
          <div class="flex-1 font-semibold text-right font-noto-sans text-secondary-900" v-if="false">Read More ></div>
        </div>
        <div
          class="
            mt-6
            md:px-0 md:-mx-0
            px-6
            -mx-6
            md:w-full
            w-[100vw]
            overflow-auto
          "
        >
          <table class="table-auto md:w-full custom-table w-[1200px]">
            <thead>
              <tr>
                <th>Entry Date</th>
                <th>Validity</th>
                <th>Type</th>
                <th>Alliance Points</th>
              </tr>
            </thead>
            <tbody v-if="overviewData.length>0">
              <tr v-for="(data, index) in overviewData" :key="index" v-if="index<10">
                <td>{{ data.entry_date }}</td>
                <td>{{ data.validity }}</td>
                <td>{{ data.action }}</td>
                <td>{{ data.points }}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="4" align="center">Data kosong</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="4">&nbsp;</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: "AccountOverview",
  data() {
    return {
      userData: [],
      overviewData: [],
    }
  },
  methods: {
    loadUser() {
      let userData = (cookie.get('star_air_login')) ? JSON.parse(cookie.get('star_air_login')) : '';
      this.userData = userData;
      this.loadData();
    },
    loadData() {
      let formDataDetail = new FormData();
      formDataDetail.append('member_email', this.userData.email);
      formDataDetail.append('token', this.$config.myToken);
      formDataDetail.append('airline_code', this.$config.myAirlineCode);

      this.$axios.$post('/api/member/get-member-points', formDataDetail)
        .then( (response) => {
          this.overviewData = response.result;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>
