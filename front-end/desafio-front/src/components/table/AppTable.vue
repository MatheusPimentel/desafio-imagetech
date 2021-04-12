<template>
  <div>
    <q-table
      :title="title"
      :data="record"
      :columns="columns"
      :row-key="rowKey"
      :selected.sync="selected"
      :pagination.sync="pagination"
      :style="styleTable"
      selection="single"
      hide-pagination
    />

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="dataPagination"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
import labelMixin from 'components/mixins/labelMixin.js'

export default {
  name: 'AppTable',
  mixins: [labelMixin],
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    styleTable: {
      type: Object,
      default: undefined
    },
    page: {
      type: Number,
      default: 1
    },
    pagesNumber: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    record: [],
    selected: [],
    dataPagination: 1,
    pagination: {
      rowsPerPage: 15
    }
  }),
  created () {
    this.record = this.value
    this.dataPagination = this.page
  },
  watch: {
    value () {
      this.record = this.value
    },
    page () {
      this.dataPagination = this.page
    },
    dataPagination () {
      this.$emit('update-pagination', this.dataPagination)
    }
  }

}
</script>

<style scoped>

</style>
