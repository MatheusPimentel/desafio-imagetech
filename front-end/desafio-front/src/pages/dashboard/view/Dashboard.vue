<template>
  <div>
    <app-table
      class="table"
      :title="$t('pages.dashboard.title')"
      :columns="columns"
      :value="users"
      :pagesNumber="pagesNumber"
      :style-table="styleTable"
      @update-pagination="updatePagination"
    />
  </div>
</template>

<script>
import UsuarioService from 'pages/usuario/service/UsuarioService.js'

export default {
  name: 'Dashboard',
  data: () => ({
    users: [],
    pagesNumber: 0
  }),
  computed: {
    columns () {
      return [
        {
          name: 'name',
          label: this.$t('pages.dashboard.table.nome'),
          field: 'name',
          sortable: true
        },
        {
          name: 'email',
          label: this.$t('pages.dashboard.table.email'),
          field: 'email',
          sortable: true
        },
        {
          name: 'active',
          label: this.$t('pages.dashboard.table.ativo'),
          field: (row) => {
            if (row.active) {
              return 'sim'
            }
            return 'não'
          },
          sortable: false
        }
      ]
    },
    styleTable () {
      return {
        height: 'calc(100vh - 120px)'
      }
    }
  },
  methods: {
    getUsers (page) {
      const limit = 3
      const offset = (page - 1) * limit
      UsuarioService.build().search({
        limit: limit,
        offset: offset
      })
        .then((users) => {
          this.pagesNumber = users.count % limit !== 0 ? (users.count / limit) + 1 : (users.count / limit)
          this.users = users.rows
        })
    },
    updatePagination(page) {
      this.getUsers(page)
    }
  },
  created () {
    this.getUsers(1)
  }
}
</script>

<style scoped>
.table {
  margin: 15px;
}
</style>
