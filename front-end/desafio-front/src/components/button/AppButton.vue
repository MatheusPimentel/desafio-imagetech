<template>
  <div>
    <q-btn
      class="size-component"
      :label="label"
      :color="color"
      :rounded="rounded"
      :size="size"
      @click="click"
    />
  </div>
</template>

<script>
import labelMixin from 'components/mixins/labelMixin.js'

export default {
  name: 'AppButton',
  mixins: [labelMixin],
  props: {
    color: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
