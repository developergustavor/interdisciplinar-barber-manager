const UserMixin = {
  data () {
    return {
      userId: null,
      userToken: null,
      userName: null,
      userEmail: null,
      userPassword: null,
      userLevelID: null,
    }
  },
  created () {
    this.userId = this.getUserId()
    this.userToken = this.getUserToken()
    this.userName = this.getUserName()
    this.userEmail = this.getUserEmail()
    this.userPassword = this.getUserPassword()
    this.userLevelID = this.getUserLevelID()
  },
  methods: {
    getUserId () {
      return this.$store.getters['AuthStore/id']
    },
    getUserToken () {
      return this.$store.getters['AuthStore/token']
    },
    getUserEmail () {
      return this.$store.getters['AuthStore/email']
    },
    getUserName () {
      return this.$store.getters['AuthStore/name']
    },
    getUserPassword () {
      return this.$store.getters['AuthStore/password']
    },
    getUserLevelID () {
      return this.$store.getters['AuthStore/levelID']
    },
    hasPermissions (permissions) {
      let userLevel = this.getUserLevelID()
      return permissions.includes(userLevel)
    },
    isUserAdmin () {
      return (this.userLevelID == 1 || this.userLevelID == 2) ? true : false
    }
  }
}

export default UserMixin