<template>
  <div>
    <q-drawer
      v-model="record"
      show-if-above
      :width="250"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 250px); margin-top: 250px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            v-for="(option, key) in options"
            :key="key"
            @click="option.click"
          >
            <q-item-section avatar>
              <q-icon :name="option.icon" />
            </q-item-section>

            <q-item-section>
              {{ option.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 250px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="$store.getters['app/getUser'].avatar">
          </q-avatar>
          <div class="text-weight-bold">{{ $store.getters['app/getUser'].name }}</div>
          <div>{{ $store.getters['app/getUser'].email }}</div>
        </div>
      </q-img>
    </q-drawer>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    record: false
  }),
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options () {
      return [
        {
          label: this.$t('layouts.dashboard.components.menu.options.editar'),
          icon: 'edit',
          click: () => {
            this.$emit('editar', this.$store.getters['app/getUser'])
          }
        },
        {
          label: this.$t('layouts.dashboard.components.menu.options.sair'),
          icon: 'sensor_door',
          click: () => {
            this.$store.dispatch('app/actionUser', undefined)
            this.$router.push({ path: '/login' })
          }
        }
      ]
    }
  },
  created () {
    this.record = this.value
  },
  watch: {
    value () {
      this.record = this.value
    }
  }
}
</script>

<style scoped>

</style>
