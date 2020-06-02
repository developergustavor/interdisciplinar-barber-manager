const NavigatonMixin = {
  methods: {
    goTo (routeName, params = {}) {
      if(routeName === 'login') {
        window.location.replace('http://localhost:8081/login');
      }

      else this.$router.push({ name: routeName, params: params })
    }
  }
}

export default NavigatonMixin