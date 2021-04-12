<template>
  <div>
    <q-input
      class="size-component"
      ref="component"
      v-model="record"
      :label="label"
      :rounded="rounded"
      :dense="dense"
      :type="typeInput"
      :rules="rules"
      outlined
    >
      <template
        v-if="prepend"
        v-slot:prepend
      >
        <q-icon :name="prepend" />
      </template>
    </q-input>
  </div>
</template>

<script>
import defaultComponentMixin from 'components/mixins/defaultComponentMixin.js'

export default {
name: 'AppInput',
  mixins: [defaultComponentMixin],
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    prepend: {
      type: String,
      default: undefined
    },
    typeInput: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
</style>
