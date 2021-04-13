import labelMixin from './labelMixin.js'
export default {
  mixins: [labelMixin],
  props: {
    dense: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    record: undefined
  }),
  methods: {
    validate () {
      return this.$refs.component.validate()
    }
  },
  created () {
    this.record = this.value
  },
  watch: {
    value () {
      this.record = this.value
    },
    record () {
      this.$emit('input', this.record)
    }
  }
}
