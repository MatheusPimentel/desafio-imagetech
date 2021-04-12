<template>
  <div>
    <q-layout
      view="lHh Lpr lff"
      container
      class="shadow-2 rounded-borders main"
    >
      <q-header elevated class="bg-cyan-8">
        <q-toolbar class="bg-accent text-white">
          <q-btn
            flat
            round
            dense
            icon="menu"
            class="q-mr-sm"
            @click="updaterDrawer"
          />

          <q-toolbar-title>{{ this.$t('layouts.dashboard.title') }}</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <app-menu
        :value="drawer"
        @editar="editar"
      />
      <usuario
        :value="openDialog"
        :usuario="usuario"
        v-model="openDialog"
      />
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Usuario from 'pages/usuario/view/Usuario.vue'
export default {
  name: 'Dashboard',
  components: {
    Usuario,
    'app-menu': Menu
  },
  data: () => ({
    drawer: false,
    usuario: {
      email: undefined,
      name: undefined,
      password: undefined
    },
    openDialog: false
  }),
  methods: {
    updaterDrawer () {
      this.drawer = !this.drawer
    },
    editar (user) {
      this.openDialog = true
      this.usuario = JSON.parse(JSON.stringify(user))
    }
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
}
</style>
