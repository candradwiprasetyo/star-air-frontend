<script lang="ts">
export default {
  name: "Admin",
  middleware: "auth-user-admin",
  data() {
    return {
      columns: [
        {
          label: 'Nama Item',
          field: 'name',
        },
        {
          label: 'Tipe',
          field: 'type',
        },
        {
          label: 'Jumlah',
          field: 'price',
        },
        {
          label: '',
          field: 'action',
        }
      ],
      rows: [
        { id:1, name: "PLATINUM BOOST", type: 'Booster', price: 'Rp100.000', action: 'Update layanan' },
        { id:2, name: "PREMIUM BOOST", type: 'Booster', price: 'Rp100.000', action: 'Update layanan' },
        { id:3, name: "POWER BOOST", type: 'Booster', price: 'Rp100.000', action: 'Update layanan' },
        { id:4, name: "ANTIGEN NASOFARING", type: 'Antigen', price: 'Rp100.000', action: 'Update layanan' },
        { id:5, name: "ANTIGEN NASAL", type: 'Antigen', price: 'Rp100.000', action: 'Update layanan' },
      ],
    };
  },
  methods: {},
  mounted() {
  },
};
</script> 

<template>
  <div>
    <AdminLayout>
      <div class="flex-grow min-h-screen p-20 bg-gray-100">
        <div class="w-full bg-white rounded-lg">
          <div class="flex items-center gap-20 px-10 py-6 text-xl font-bold border-b">
            <div class="flex grow">
              <span>Content</span>
            </div>
          </div>
          <div class="">
            <!-- <vue-good-table
              :columns="columns"
              :rows="rows"
              :pagination-options="{
                enabled: true
              }"
            /> -->
          </div>
        </div>
      </div>
    </AdminLayout>
  </div>
</template>
