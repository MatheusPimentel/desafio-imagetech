export default {
  methods: {
    validate () {
      let validate = true
      Object.keys(this.$refs).forEach((ref) => {
        if(!this.$refs[ref].validate()) {
          validate = false
        }
      })
      return validate
    }
  }
}
