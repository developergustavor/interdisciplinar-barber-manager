const SnackbarMixin = {
  data () {
    return {
      snackbarConfig: {
        text: '',
        type: 'success'
      }
    }
  },
  methods: {
    closeSnackbar () {
      this.snackbar = null
    },
    showSuccessSnackbar (text) {
      this.snackbarConfig.type = 'success'
      this.snackbarConfig.text = text
      this.$store.dispatch('SnackbarStore/showSuccessSnackbar', { config: this.snackbarConfig })
      .then(() => {})
    },
    showErrorSnackbar (text) {
      this.snackbarConfig.type = 'error'
      this.snackbarConfig.text = text
      this.$store.dispatch('SnackbarStore/showSuccessSnackbar', { config: this.snackbarConfig })
      .then(() => {})
    }
  }
}

export default SnackbarMixin
