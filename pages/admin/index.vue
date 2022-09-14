<script lang="ts">
import cookie from 'js-cookie'
export default {
  name: "Admin",
  middleware: "auth-user-admin",
  data() {
    return {
      columns: [
        {
          label: 'No',
          field: 'NUMBER',
        },
        {
          label: 'Content ID',
          field: 'CONTENT_ID',
        },
        {
          label: 'Content',
          field: 'CONTENT',
        },  
        {
          label: 'Action',
          field: 'action',
        }
      ],
      rows: [],
      modalAddData: false,
      content_id: null,
      content: null,
      username: null,
      successMessage: null,
    };
  },
  methods: {
    loadUsername() {
      let username = (cookie.get('star_air_login_admin')) ? cookie.get('star_air_login_admin') : '';
      this.username = username;
    },
    loadData() {
      let param = 
        '?token=' + this.$config.myToken +
        '&airline_code=' + this.$config.myAirlineCode +
        '&username=' + this.username +
        'airline=sqiva';
    
      this.$axios.$get('/api/cms/get-cms-list' + param)
        .then( (response) => {
          this.rows = response.result.data
          this.rows.forEach((element, index) => {
            element.NUMBER = index + 1;
          });
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    toogleModalAddData() {
      this.modalAddData = !this.modalAddData
    },
    addData() {
      this.content_id = null
      this.content = null
      this.toogleModalAddData()
    },
    saveData() {
      let formData = new FormData();
      formData.append('username', this.username);
      formData.append('token', this.$config.myToken);
      formData.append('airline_code', this.$config.myAirlineCode);
      formData.append('content_id', this.content_id);
      formData.append('content', this.content);
    
      this.$axios.$post('/api/cms/insert-cms', formData)
        .then( (response) => {
          if (response.err_num == 0) {
            this.successMessage = true
            this.modalAddData = false
            this.loadData()
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },  
    editData(title, content) {
      this.content_id = title
      this.content = content
      this.modalAddData = true
    },
  },
  mounted() {
    this.loadUsername()
    this.loadData()
  },
};
</script> 

<template>
  <div>
    <AdminLayout>
      <Modal 
        v-if="modalAddData"
        @close="toogleModalAddData"
      >
        <div class="p-5">
          <div class="mb-3 font-bold">Add Data</div>
          <Input label="Content ID" v-model="content_id" />
          <Textarea label="Content" customClass="mt-4" v-model="content" />
          <div class="flex flex-row-reverse mt-6 gap-x-3">
            <div class="inline-block"><Button value="Save" padding="px-16 py-3" @action="saveData" /></div>
            <div class="inline-block"><Button value="Cancel" background="bg-gray-100" color="text-black" padding="px-16 py-3" @action="toogleModalAddData" /></div>
          </div>
        </div>
      </Modal>
      <div class="flex-grow min-h-screen p-20 bg-gray-100">
        <div class="w-full bg-white rounded-lg">
          <div class="flex items-center gap-20 px-10 py-6 text-xl font-bold border-b">
            <div class="flex grow">
              <span>Content</span>
            </div>
            <div class="flex-none">
              <Button 
                value="Add" 
                @action="addData"
              />
            </div>
          </div>
          <div class="">
            <vue-good-table
              :columns="columns"
              :rows="rows"
              :pagination-options="{
                enabled: true
              }"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'action'">
                  <Button value="Update" @action="editData(props.row.CONTENT_ID, props.row.CONTENT)" />
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </AdminLayout>
  </div>
</template>
